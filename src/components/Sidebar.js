import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ menuItems }) => {
    return (
        <aside>
            <ul>
                {menuItems.map((menuItem) => (
                    <li key={menuItem.id}>
                        <Link to={menuItem.path}>{menuItem.title}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
