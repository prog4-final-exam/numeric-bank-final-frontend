import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav>
        <ul className='py-2 px-4 hover:bg-gray-700'>
        <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/gestion">Gestion des Comptes Bancaires</NavLink>
            </li>
            <li>
                <NavLink to="/retrait-argent">Retrait d'Argent</NavLink>
            </li>
            <li>
                <NavLink to="/consultation-solde">Consultation de Solde</NavLink>
            </li>
            <li>
                <NavLink to="/approvisionnement-solde">Approvisionnement de Solde</NavLink>
            </li>
            <li>
                <NavLink to="/virement">Virement</NavLink>
            </li>
            <li>
                <NavLink to="/releves-compte">Relevés de Compte</NavLink>
            </li>
            <li>
                <NavLink to="/categorisation-operations">Catégorisation des Opérations Bancaires</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Nav

