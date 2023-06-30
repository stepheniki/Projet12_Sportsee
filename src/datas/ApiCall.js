// Importation de la bibliothèque axios pour effectuer des requêtes HTTP
import axios from "axios";

import { getUserActivity as getMockedUserActivity } from './dataMocked.js';
import { getUserAverageSessions as getMockedUserAverageSessions } from './dataMocked.js';
import { getUserInfos as getMockedUserInfos } from './dataMocked.js';
import { getUserPerformance as getMockedUserPerformance } from './dataMocked.js';

// utiliser les données provenant d’un appel API (avec dataSource = 'api')
// utiliser les données provenant d’un appel de données mockées (avec dataSource = 'mocked')

let dataSource = 'mocked';
console.log(dataSource);


// Création d'une instance d'axios avec une URL de base
const api = axios.create({
  baseURL: `http://localhost:3000/`
});



// Modification des fonctions pour récupérer les données de l’utilisateur 
// elles vérifient la valeur de la variable dataSource 
// utilisent les données mockées ou les données provenant de l’API en fonction de sa valeur.
export const getUserActivity = async (id) => {
  if (dataSource === 'mocked') {

    return getMockedUserActivity(id);
  } else {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/activity`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
};


// Modification des fonctions pour récupérer les données de l’utilisateur 
// elles vérifient la valeur de la variable dataSource 
// utilisent les données mockées ou les données provenant de l’API en fonction de sa valeur.
export const getUserInfos = async (id) => {

  if (dataSource === 'mocked') {
    return getMockedUserInfos(id);
  } else {
    try {
      const res = await api.get(`http://localhost:3000/user/${id}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
};

// Modification des fonctions pour récupérer les données de l’utilisateur 
// elles vérifient la valeur de la variable dataSource 
// utilisent les données mockées ou les données provenant de l’API en fonction de sa valeur.
export const getUserPerformance = async (id) => {
  if (dataSource === 'mocked') {
    return getMockedUserPerformance(id);
  } else {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
};

// Modification des fonctions pour récupérer les données de l’utilisateur 
// elles vérifient la valeur de la variable dataSource 
// utilisent les données mockées ou les données provenant de l’API en fonction de sa valeur.
export const getUserAverageSessions = async (id) => {
  if (dataSource === 'mocked') {
    return getMockedUserAverageSessions(id);
  } else {
  try {
    // Requête GET à l'API pour obtenir les sessions moyennes de l'utilisateur
    const res = await api.get(`http://localhost:3000/user/${id}/average-sessions`);
    // Renvoi des données obtenues
    return res.data;
  } catch (e) {
    // En cas d'erreur, affichage de l'erreur dans la console
    console.log(e);
  }
}
};


