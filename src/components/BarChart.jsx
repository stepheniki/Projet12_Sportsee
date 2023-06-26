import React from 'react';
import "../styles.css";
import { useState,useEffect } from 'react';
import { getData } from '../datas/getData';
import { useParams } from 'react-router';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";
import PropTypes from 'prop-types';

// custom tooltip
function ActivityToolType({active, payload}) {
    if (active){
    return (
        <div className="container-activity-tooltip">
            <p>{payload[0].value}kg</p>
            <p>{payload[1].value}Kcal</p>
        </div>
    
     );
    }
    return null
}

ActivityToolType.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};
 export default  function BarCharts() {

    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const data = async () => {
            const request = await getData("USER_ACTIVITY",id);
			if (!request) return alert('data error');
			
			setData(request.data.sessions);
		};
		data();
	}, [id]);
	if (data.length === 0) return null;
	//format data.day
	for (let i = 0 ; i < data.length ; i ++)
        {data[i].day = i + 1;}
    
    return (  
        <div className='activity-wrapper'>
            <div className='activity-head'>
                <div className='activity-title'>Activité quotidienne</div>
                <div className='activity-legend'>
					<div className='activity-info'>
						<div className='activity-icon-black' color='#282D30' />
						<p>Poids (kg)</p>
					</div>
					<div className='activity-info'>
						<div className='activity-icon-red' color='#E60000' />
						<p>Calories brûlées (kCal)</p>
					</div>
				</div>
            </div>
            <ResponsiveContainer  height={200} >
                <BarChart data={data} barGap={8} barCategoryGap={1}>
                    <CartesianGrid vertical={false} strokeDasharray="1 1"/>
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
                    <Tooltip content={<ActivityToolType/>}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

