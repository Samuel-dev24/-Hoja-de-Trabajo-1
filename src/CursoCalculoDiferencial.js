import React from 'react';
import { Container, Table, ListGroup, Accordion } from 'react-bootstrap';

const CursoCalculoDiferencial = () => {
    return (
        <Container className="mt-5">
            <h2>Cálculo Diferencial</h2>
            <p>Este curso cubre los fundamentos del cálculo diferencial...</p>

            <h3>Puntos Clave</h3>
            <ListGroup>
                <ListGroup.Item>Derivadas</ListGroup.Item>
                <ListGroup.Item>Límites</ListGroup.Item>
                <ListGroup.Item>Aplicaciones de la derivada</ListGroup.Item>
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
                        <td>Introducción al Cálculo Diferencial</td>
                        <td>PDF, Video</td>
                    </tr>
                </tbody>
            </Table>

            <Accordion defaultActiveKey="0" className="mt-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Evaluaciones</Accordion.Header>
                    <Accordion.Body>
                        Tres exámenes y ejercicios semanales.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default CursoCalculoDiferencial;
