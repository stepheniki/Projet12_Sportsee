export default class ModelisationClass {
    
  
  
  keyData (caloriesIcon, proteinsIcon, glucidesIcon, lipidesIcon, keyData) {
       
    
    function formatNumberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
    
    
    
    let dataTable = [
            {
              icon: caloriesIcon,
              info: `${formatNumberWithCommas(keyData.calorieCount)}kCal`,
              text: "Calories",
            },
            {
              icon: proteinsIcon,
              info: `${keyData.proteinCount}g`,
              text: "Proteines",
            },
            {
              icon: glucidesIcon,
              info: `${keyData.carbohydrateCount}g`,
              text: "Glucides",
            },
            {
              icon: lipidesIcon,
              info: `${keyData.lipidCount}g`,
              text: "Lipides",
            },
          ];

return dataTable
    }

}
