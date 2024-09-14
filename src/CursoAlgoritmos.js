import React from 'react';
import { Container, Table, ListGroup, Accordion } from 'react-bootstrap';

const CursoAlgoritmos = () => {
    return (
        <Container className="mt-5">
            <h2>Algoritmos</h2>
            <p>Este curso cubre los conceptos clave de algoritmos y estructuras de datos...</p>

            <h3>Puntos Clave</h3>
            <ListGroup>
                <ListGroup.Item>Estructuras de datos</ListGroup.Item>
                <ListGroup.Item>Complejidad algorítmica</ListGroup.Item>
                <ListGroup.Item>Algoritmos de búsqueda y ordenación</ListGroup.Item>
            </ListGroup>

            <h3>Tabla de Contenidos</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Semana</th>
                        <th>Tema</th>
                        <th>Material</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Introducción a Algoritmos</td>
                        <td>PDF, Video</td>
                    </tr>
                </tbody>
            </Table>

            <Accordion defaultActiveKey="0" className="mt-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Evaluaciones</Accordion.Header>
                    <Accordion.Body>
                        Exámenes parciales y proyectos.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default CursoAlgoritmos;
