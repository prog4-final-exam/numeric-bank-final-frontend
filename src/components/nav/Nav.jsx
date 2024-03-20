import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import { HomeIcon, CurrencyDollarIcon, EyeIcon, ClipboardListIcon, CurrencyEuroIcon, CurrencyYenIcon, DocumentTextIcon, TagIcon, CurrencyRupeeIcon } from '@heroicons/react/outline';

function Nav() {
    return (
<Card className="h-screen w-full max-w-[20rem] p-4 shadow-blue-gray-900">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List className='flex flex-col'>
          <ListItem className="flex flex-row items-center text-[1.2rem] font-custom p-4">
            <ListItemPrefix>
              <HomeIcon className="h-7 w-7 mr-7" />
            </ListItemPrefix>
            <NavLink to="/home">Home</NavLink>
          </ListItem>
          <ListItem className="flex flex-row items-center text-[1.2rem] font-custom p-4" >
            <ListItemPrefix>
              <CurrencyDollarIcon className="h-7 w-7 mr-7" />
            </ListItemPrefix>
            <NavLink to="/gestion">Gestion des Comptes Bancaires</NavLink>
          </ListItem>
          <ListItem className="flex flex-row items-center text-[1.2rem] font-custom p-4">
            <ListItemPrefix>
              <CurrencyEuroIcon className="h-7 w-7 mr-7" />
            </ListItemPrefix>
            <NavLink to="/retrait-argent" >Retrait d'Argent</NavLink>
          </ListItem>
          <ListItem className="flex flex-row items-center text-[1.2rem] font-custom p-4">
            <ListItemPrefix>
              <EyeIcon className="h-7 w-7 mr-7" />
            </ListItemPrefix>
            <NavLink to="/consultation-solde">Consultation de Solde</NavLink>
          </ListItem >
          <ListItem className="flex flex-row items-center text-[1.2rem] font-custom p-4">
            <ListItemPrefix>
              <ClipboardListIcon className="h-7 w-7 mr-7" />
            </ListItemPrefix>
            <NavLink to="/approvisionnement-solde">Approvisionnement de Solde</NavLink>
          </ListItem >
          <ListItem className="flex flex-row items-center text-[1.2rem] font-custom p-4">
            <ListItemPrefix>
              <CurrencyRupeeIcon className="h-7 w-7 mr-7" />
            </ListItemPrefix>
            <NavLink to="/virement">Virement</NavLink>
          </ListItem>
          <ListItem className="flex flex-row items-center text-[1.2rem] font-custom p-4" >
            <ListItemPrefix>
              <DocumentTextIcon className="h-7 w-7 mr-7" />
            </ListItemPrefix>
            <NavLink to="/releves-compte">Relevés de Compte</NavLink>
          </ListItem>
          <ListItem className="flex flex-row items-center text-[1.2rem] font-custom p-4">
            <ListItemPrefix>
              <TagIcon className="h-7 w-7 mr-7" />
            </ListItemPrefix>
            <NavLink to="/categorisation-operations">Catégorisation des Opérations Bancaires</NavLink>
          </ListItem>
          <ListItem className="flex flex-row items-center text-[1.2rem] font-custom p-4">
            <ListItemPrefix>
              <HomeIcon className="h-7 w-7 mr-7" />
            </ListItemPrefix>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ListItem>
        </List>
      </Card>
    )
    }
export default Nav;