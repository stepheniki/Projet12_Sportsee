import React from 'react';
import PropTypes from 'prop-types'; 
import  "../styles.css";

/**Render the userName
* @param {string} name
* @return {JSX}
*/

export default function UserInfos({name}) {

    return (  
          <div className='user-header'>
            <h1>Bonjour <span className='user-name'>{name}</span></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </div>
    );
}

UserInfos.propTypes = {
	name: PropTypes.string,
};
