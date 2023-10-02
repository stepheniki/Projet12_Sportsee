import React from "react";
import  "../styles.css"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";


// Composant de graphique en secteurs (camembert) pour afficher le score
 export default function ScoreChart({ data }) {
     
// Données pour le graphique en secteurs (camembert)
  const score = [
    // Valeur du score d'aujourd'hui ou du score global
    { value: data.todayScore || data.score },
    // Valeur complémentaire pour totaliser à 1
    { value: 1 - data.todayScore || data.score },
  ];

  return (
    <div className="scoreCharts-container">

     {/* Titre du graphique en secteurs */}
      <div className="scoreCharts-title">Score</div>

      {/* Utilisation de ResponsiveContainer pour un graphique réactif */}
      <ResponsiveContainer width="100%" height="100%">

        <PieChart>
          
          {/* Graphique en secteurs (camembert) */}
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
             {/* Définition des couleurs des secteurs */}
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Texte affichant le score en pourcentage par rapport à l'objectif */}
      <div className="scoreCharts-text">
        <div className="scoreCharts-score">
          {score[0].value * 100}%<br />
        </div>
        de votre
        <br /> objectif
      </div>
    </div>
  );
}

// Spécification des types de propriétés attendues par le composant
ScoreChart.propTypes = {
  data: PropTypes.object, // Objet contenant les données du score
};

