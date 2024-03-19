import React from 'react';
import Nav from '../nav/Nav';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
            <div className="p-4 text-2xl font-bold">Ma Banque</div>
            <nav className="flex-grow">
                <ul className="space-y-2 block ">
                    <li>
                        <Nav />
                    </li>
                    {/* Ajoutez d'autres liens NavLink ici */}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
