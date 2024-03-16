import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import Transaction from './pages/transaction/Transaction'
import Main from './components/main/Main'
import Solde from './pages/solde/Solde'

function App() {

  return (
     <BrowserRouter>
        <Dashboard>
            <Sidebar/>
            <Main>
              <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/transaction' element={<Transaction />} />
                    <Route path='/solde' element={<Solde />} />
                    <Route />
              </Routes>
            </Main>
        </Dashboard>
     </BrowserRouter>
  )
}

export default App
