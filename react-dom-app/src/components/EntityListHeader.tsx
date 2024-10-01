import React from "react";
import { NavLink} from 'react-router-dom'
import './EntityListHeader.css'


interface EntityListHeaderProps {
    onAuth: () => void;
    auth: boolean;
}

const EntityListHeader: React.FC<EntityListHeaderProps> = ({ onAuth, auth = false }) => {
    return (
        <header>
            <div className="header-block">
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? 'active-link' : 'link'} >
                    Main
                </NavLink>
                <NavLink
                    to='/private'
                    className={({ isActive }) => isActive ? 'active-link' : 'link'} >
                    Private
                </NavLink>
                <button className="login-button" onClick={onAuth}>
                    {auth ? 'Logout' : 'Login'}
                </button>
            </div>
        </header>
    );
}

export default EntityListHeader;
