import React from 'react';

function GestionComptes() {
    return (
        <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-4">Gestion des Comptes Bancaires</h2>
            <form className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium" htmlFor="nom">Nom :</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="nom" name="nom" />
                </div>
                <div>
                    <label className="block mb-1 font-medium" htmlFor="prenom">Prénom(s) :</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="prenom" name="prenom" />
                </div>
                <div>
                    <label className="block mb-1 font-medium" htmlFor="dateNaissance">Date de Naissance :</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="date" id="dateNaissance" name="dateNaissance" />
                </div>
                <div>
                    <label className="block mb-1 font-medium" htmlFor="salaireMensuel">Salaire Mensuel Net :</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="number" id="salaireMensuel" name="salaireMensuel" />
                </div>
                <div>
                    <label className="block mb-1 font-medium" htmlFor="numeroCompte">Numéro de Compte Unique :</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="numeroCompte" name="numeroCompte" />
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out" type="submit">Ajouter Compte</button>
            </form>

            <h3 className="text-xl font-semibold mt-8 mb-4">Liste des Comptes Existants</h3>
            <ul>
                <li className="text-gray-800">Affiche liste des compte</li>
            </ul>
        </div>
    );
}

export default GestionComptes;
