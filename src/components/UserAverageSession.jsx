import React, { useState, useEffect } from "react";
import "../styles.css";
import { getData } from '../datas/getData';
import { useParams } from "react-router";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";

// Tooltip personnalisé pour afficher la durée des sessions
function SessionsToolType({ active, payload }) {
  if (active) {
    return (
      <div className="tooltip-container">
        <div className="tooltip-text">{payload[0].value}min</div>
      </div>
    );
  }
  return null;
}

SessionsToolType.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default function UserAverageSessions() {
     
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
        const request = await getData("USER_AVERAGE_SESSIONS",id);
        if (!request) return alert("data error");

      // Formatage des données pour le graphique en ligne
      const formatData = request.data.sessions.map((data) => {
      
      // Remplace les numéros de jour par les initiales
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <div className="session-container">
            {/* Titre du graphique en ligne */}
      <div className="session-title">Durée moyenne des sessions</div>
       {/* Utilisation de ResponsiveContainer pour un graphique réactif */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} strokeWidth={1} 
             onMouseMove={(e) => {
                if (e.isTooltipActive === true) {
                  let div = document.querySelector('.session-container')
                  let windowWidth = div.clientWidth
                  let mouseXpercentage = Math.round(
                    (e.activeCoordinate.x / windowWidth) * 100
                  )
                  // @ts-ignore
                  // Change le fond en dégradé linéaire en fonction de la position de la souris
                  div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                }
              }}
        >
  {/* Axe X avec des initiales des jours */}
          <XAxis
    type="category"
    dataKey="day"
    tickLine={false} // enlever repères de l'axe horizontal
    axisLine={false} // enlever ligne axe horizontal
    stroke="red"
    padding={{right:5, left:5}}
    tick={{ fontSize: 12, stroke: "white", opacity: 0.8}}

/>
  {/* Axe Y pour la durée des sessions (caché ici) */}
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
  {/* Tooltip personnalisé pour afficher la durée des sessions */}
          <Tooltip content={<SessionsToolType />} />
  {/* Ligne du graphique en ligne */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
    // Point actif pour la ligne du graphique
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
