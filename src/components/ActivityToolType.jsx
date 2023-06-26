import React from 'react';
import "../styles.css";
import PropTypes from 'prop-types';


/** create a custom tooltype for the user activity barChart
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */

 export default function ActivityToolType({active, payload}) {
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

