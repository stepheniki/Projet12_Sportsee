import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";


export default function Error () {
    
    return (
        <div className='main-error'>
            <div className='title-error'>404</div>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
    )
}
 