// Importation des fonctions depuis le fichier dataMocked
import { getUserActivity, getUserAverageSessions, getUserInfos, getUserPerformance, } from "./ApiCall"; 


export const getData = async (type, id) => {
  let data = [];
  // Utilisation d'une instruction switch pour appeler différentes fonctions en fonction de la valeur de type
    switch (type) {
    case "USER_ACTIVITY":
      // Appel de la fonction getUserActivity avec l'ID fourni
      data = await getUserActivity(id);
      break;
    case "USER_PERFORMANCE":
      // Appel de la fonction getUserPerformance avec l'ID fourni
      data = await getUserPerformance(id);
      break;
    case "USER_AVERAGE_SESSIONS":
      // Appel de la fonction getUserAverageSessions avec l'ID fourni
      data = await getUserAverageSessions(id);
      break;
    case "USER_MAIN_DATA":
      // Appel de la fonction getUserInfos avec l'ID fourni
      data = await getUserInfos(id);
      break;
  }
  // Renvoi des données obtenues sous forme de tableau
  return data;
};


