// Importation de la bibliothèque axios pour effectuer des requêtes HTTP
import axios from "axios";

// Création d'une instance d'axios avec une URL de base
const api = axios.create({
  baseURL: `http://localhost:3000/`
});

/**
 * Récupération de l'activité de l'utilisateur
 * @param {string} id - L'ID de l'utilisateur
 * @returns {Array} - Les données d'activité de l'utilisateur
 */
export const getUserActivity = async (id) => {
  try {
    // Requête GET à l'API pour obtenir les données d'activité de l'utilisateur
    const res = await api.get(`http://localhost:3000/user/${id}/activity`);
    // Renvoi des données obtenues
    return res.data;
  } catch (e) {
    // En cas d'erreur, affichage de l'erreur dans la console
    console.log(e);
  }
};

/**
 * Récupération des informations de l'utilisateur
 * @param {string} id - L'ID de l'utilisateur
 * @returns {object} - Les informations de l'utilisateur
 */
export const getUserInfos = async (id) => {
  try {
    // Requête GET à l'API pour obtenir les informations de l'utilisateur
    const res = await api.get(`http://localhost:3000/user/${id}`);
    // Renvoi des données obtenues
    return res.data;
  } catch (e) {
    // En cas d'erreur, affichage de l'erreur dans la console
    console.log(e);
  }
};

/**
 * Récupération des performances de l'utilisateur
 * @param {string} id - L'ID de l'utilisateur
 * @returns {object} - Les performances de l'utilisateur
 */
export const getUserPerformance = async (id) => {
  try {
    // Requête GET à l'API pour obtenir les performances de l'utilisateur
    const res = await api.get(`http://localhost:3000/user/${id}/performance`);
    // Renvoi des données obtenues
    return res.data;
  } catch (e) {
    // En cas d'erreur, affichage de l'erreur dans la console
    console.log(e);
  }
};

/**
 * Récupération des sessions moyennes de l'utilisateur
 * @param {string} id - L'ID de l'utilisateur
 * @returns {object} - Les sessions moyennes de l'utilisateur
 */
export const getUserAverageSessions = async (id) => {
  try {
    // Requête GET à l'API pour obtenir les sessions moyennes de l'utilisateur
    const res = await api.get(`http://localhost:3000/user/${id}/average-sessions`);
    // Renvoi des données obtenues
    return res.data;
  } catch (e) {
    // En cas d'erreur, affichage de l'erreur dans la console
    console.log(e);
  }
};

//const get ... = get export