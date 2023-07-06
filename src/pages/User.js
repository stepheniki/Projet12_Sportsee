import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../datas/getData";
import { useParams } from "react-router";
import SideBar from "../components/SideBar";
import UserInfos from "../components/UserInfos";
import "../styles.css";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";
import BarCharts from "../components/BarChart";
import ScoreChart from "../components/ScoreChart";
import KeyData from "../components/KeyData";
import UserAverageSessions from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";
import ModelisationClass from "../modelisationClass";

/**Render the dashboard
 * @return {JSX}
 */
export default function User() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData("USER_MAIN_DATA", id);
      if (!request) {
        // Mise à jour de l'état error avec un message d'erreur personnalisé
        setError("Error");
      } else {
        setData(request.data);
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    // Affichage d'un message d'erreur personnalisé sur plusieurs lignes
    return (
      <div className="error-network">
        <p>Erreur lors de la récupération des données.</p>
        <p></p>
        <p>Vérifiez que le back-end de l'application soit lancé !</p>
      </div>
    );
  }

  if (data.length === 0) return null;

  let modelisationClass = new ModelisationClass();
  let dataTable = modelisationClass.keyData(caloriesIcon, proteinsIcon, glucidesIcon, lipidesIcon, data.keyData);

  return (
    <div className="user-main">
      <SideBar />
      <div className="user-container">
        <UserInfos name={data.userInfos.firstName} />
        <div className="user-content">
          <section>
            <BarCharts />
            <div className="bottom-chart">
              <UserAverageSessions />
              <UserPerformance />
              <ScoreChart data={data} />
            </div>
          </section>
          <aside>
            {dataTable.map((item, index) => (
              <KeyData key={index} icon={item.icon} info={item.info} text={item.text} />
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}
