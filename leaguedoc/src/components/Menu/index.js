import React from 'react';
import Logo from '../../assets/Images/Logo.png';
import './Menu.css';
import ButtonLink from '../components/buttonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="LeagueDoc logo"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;