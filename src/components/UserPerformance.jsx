import React, {useState,useEffect} from 'react';
import "../styles.css";
import { getData } from '../datas/getData';
import { useParams } from 'react-router';
import {Radar,RadarChart,PolarGrid,PolarAngleAxis,ResponsiveContainer,Text,PolarRadiusAxis} from "recharts";




export default function UserPerformance() {
// gérer l'espace entre le graphique et le texte
	function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
		return (
			<Text
				{...rest}
				verticalAnchor="middle"
				y={y + (y - cy) / 12}
				x={x + (x - cx) / 12}
				style={{ fontSize: 12 }}
			>
				{payload.value}
			</Text>
		);
	}
     
    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const data = async () => {
			const request = await getData("USER_PERFORMANCE",id);
			if (!request) return alert('data error');
			
			// tri de l'ordre des étiquettes comme souhaité
			const labelOrder = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio'];

			const formatData = request.data.data.map((data) => {
                
				switch (data.kind) {
					case 1:
						return { ...data, kind: 'Cardio' };
					case 2:
						return { ...data, kind: 'Energie' };
					case 3:
						return { ...data, kind: 'Endurance' };
					case 4:
						return { ...data, kind: 'Force' };
					case 5:
						return { ...data, kind: 'Vitesse' };
					case 6:
						return { ...data, kind: ' Intensité ' };
					default:
						return {...data };
				}
			})
			// tri de l'ordre des étiquettes comme souhaité
			.sort((a, b) => labelOrder.indexOf(a.kind) - labelOrder.indexOf(b.kind));

			setData(formatData);
		};
		data();
	}, [id]);
	if (data.length === 0) return null;
	
    return ( 
    <div className='container-performance '>
      <ResponsiveContainer width="100%" height="100%">
		<RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>

	{/* Grille polaire */}
	<PolarGrid gridType="polygon" radialLines={false} />

     {/* Axe des angles polaires avec étiquettes personnalisées */}
	<PolarAngleAxis
    dataKey="kind"
    stroke="white"
    tickLine={false}
    axisLine={false}

	// gérer l'espace entre le grapique et le texte
    tick={props => renderPolarAngleAxis(props)}
/>
   {/* Radar : représentation graphique des données */}
	<Radar dataKey='value' stroke='#FF0101'	fill='#FF0101' fillOpacity={0.7} />

	{/* nombre de polygones dans le graphique  */}
	<PolarRadiusAxis tickCount={5} tick={false} axisLine={false} />
				
		</RadarChart>
            </ResponsiveContainer>
    </div> );
}

 