import React from 'react';
import PropTypes from 'prop-types'; 
import "../styles.css";


 export default function KeyData({icon,info,text}) {
     
    return (  
    <div className='keydata-wrapper'>
        <img src={icon} alt="calories icon"/>
        <div className='keydata-infos'>
            <div className='InfosData'>{info}</div>
            <div className='InfosText'>{text}</div>
        </div>
    </div> );
}

KeyData.propTypes = {
  icon: PropTypes.any,
  info: PropTypes.string,
  text: PropTypes.string,
}

 