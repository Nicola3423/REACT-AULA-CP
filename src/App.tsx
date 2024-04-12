import React from "react";
import './App.css'
import Home from "./componentes/Home";
import Posts from "./componentes/servicos/Posts";
import Users from "./componentes/servicos/Users";
import Photos from "./componentes/servicos/Photos"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import NotFound from "./componentes/servicos/NotFound";
function App(){
  return(
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4" >
          <h1 className="text-3xl">Medicina no trabalho</h1>
          </header>
      
      <nav>
        <ul className="flex justify-center space-x-4 p-3">
          <li><Link to='/' className="hover:text-blue-500">HOME</Link></li>
          <li><Link to='/Posts'className="hover:text-blue-500">Posts</Link></li>
          <li><Link to='/Users'className="hover:text-blue-500">Users</Link></li>
          <li><Link to='/Photos' className="hover:text-blue-500">Fotos</Link></li>
          
        </ul>
      </nav>
      <main className="flex-grow bg-gray-500">
        {/*Routes: Routes é um componente que encapsula múltiplas rotas. 
        Ele serve como um "switch" que renderiza apenas o primeiro componente Route que 
        corresponde ao caminho (path) atual.  */}
         <Routes>
          {/* Route: O componente Route é usado para definir uma rota individual. Ele associa um caminho (path) da URL a um componente React.
          */}
              <Route path="/" element={<Home/>}/>
              <Route path="/Posts" element={<Posts/>}/>
              <Route path="/Photos"  element={<Photos/>}/>
              <Route path="/Users" element={<Users></Users>}/>

              <Route path="*" element={<NotFound></NotFound>}/>
              

         </Routes>
      </main>
      <footer className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4">
        <p>Nicola Monte Cravo Garofalo, RM 553991, 1TDSZ</p>
      </footer>

      </div>

    </Router>
  )
}
export default App;