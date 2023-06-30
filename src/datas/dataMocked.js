const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl-mocked',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia-mocked',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]

const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    }
]


const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 50
            }
        ]
    }
]


const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]


/**
 * Récupération des informations de l'utilisateur
 * @param {number} id - L'ID de l'utilisateur
 * @returns {object} - Réponse contenant les informations de l'utilisateur
 */
export const getUserInfos = async (id) => {
    try {
      // Recherche des informations de l'utilisateur dans les données USER_MAIN_DATA en utilisant la méthode find
      const res = USER_MAIN_DATA.find((el) => el.id == id);
      // Renvoi des données trouvées sous forme d'objet avec une propriété data
      return { data: res };
    } catch (e) {
      // En cas d'erreur, affichage de l'erreur dans la console
      console.log(e);
    }
  };
  
  /**
   * Récupération de l'activité de l'utilisateur
   * @param {number} id - L'ID de l'utilisateur
   * @returns {object} - Réponse contenant les données d'activité de l'utilisateur
   */
  export const getUserActivity = async (id) => {
    try {
      // Recherche des données d'activité de l'utilisateur dans les données USER_ACTIVITY en utilisant la méthode find
      const res = USER_ACTIVITY.find((el) => el.userId == id);
      // Renvoi des données trouvées sous forme d'objet avec une propriété data
      return { data: res };
    } catch (e) {
      // En cas d'erreur, affichage de l'erreur dans la console
      console.log(e);
    }
  };
  
  /**
   * Récupération des sessions moyennes de l'utilisateur
   * @param {number} id - L'ID de l'utilisateur
   * @returns {object} - Réponse contenant les sessions moyennes de l'utilisateur
   */
  export const getUserAverageSessions = async (id) => {
    try {
      // Recherche des sessions moyennes de l'utilisateur dans les données USER_AVERAGE_SESSIONS en utilisant la méthode find
      const res = USER_AVERAGE_SESSIONS.find((el) => el.userId == id);
      // Renvoi des données trouvées sous forme d'objet avec une propriété data
      return { data: res };
    } catch (e) {
      // En cas d'erreur, affichage de l'erreur dans la console
      console.log(e);
    }
  };
  
  /**
   * Récupération des performances de l'utilisateur
   * @param {number} id - L'ID de l'utilisateur
   * @returns {object} - Réponse contenant les performances de l'utilisateur
   */
  export const getUserPerformance = async (id) => {
    try {
      // Recherche des performances de l'utilisateur dans les données USER_PERFORMANCE en utilisant la méthode find
      const res = USER_PERFORMANCE.find((el) => el.userId == id);
      // Renvoi des données trouvées sous forme d'objet avec une propriété data
      return { data: res };
    } catch (e) {
      // En cas d'erreur, affichage de l'erreur dans la console
      console.log(e);
    }
  };
  
