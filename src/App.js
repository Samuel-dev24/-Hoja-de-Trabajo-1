import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Home';
import CursoBasesDatos from './CursoBasesDatos';
import CursoCalculoDiferencial from './CursoCalculoDiferencial';
import CursoAlgoritmos from './CursoAlgoritmos';
import CursoElectronicaAnalogica from './CursoElectronicaAnalogica';
import CursoAlgebraLineal from './CursoAlgebraLineal';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/cursos/bases-datos" element={<CursoBasesDatos />} />
                <Route path="/cursos/calculo-diferencial" element={<CursoCalculoDiferencial />} />
                <Route path="/cursos/algoritmos" element={<CursoAlgoritmos />} />
                <Route path="/cursos/electronica-analogica" element={<CursoElectronicaAnalogica />} />
                <Route path="/cursos/algebra-lineal" element={<CursoAlgebraLineal />} />
            </Routes>
        </Router>
    );
}

export default App;
