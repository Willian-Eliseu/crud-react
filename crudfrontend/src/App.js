import Sobre from "./components/Sobre";
import Alunos from "./components/Alunos";
import Home from "./components/Home";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import {Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
	return (
		<div className="App">
			<h1>Minha Aplicação React</h1>
			<BrowserRouter>
			
			<Nav variant="tabs">
				<Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
				<Nav.Link as={Link} to="/alunos">Cadastro de Alunos</Nav.Link>
				<Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
			</Nav>
			
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/alunos" element={<Alunos/>}></Route>
				<Route path="/sobre" element={<Sobre/>}></Route>
			</Routes>

			</BrowserRouter>
		</div>		
	);
}