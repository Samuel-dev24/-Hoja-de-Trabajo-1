import React from 'react';
import { Container, Table, ListGroup, Accordion } from 'react-bootstrap';

const CursoElectronicaAnalogica = () => {
    return (
        <Container className="mt-5">
            <h2>Electrónica Analógica</h2>
            <p>Este curso cubre los conceptos fundamentales de electrónica analógica...</p>

            <h3>Puntos Clave</h3>
            <ListGroup>
                <ListGroup.Item>Componentes pasivos</ListGroup.Item>
                <ListGroup.Item>Amplificadores operacionales</ListGroup.Item>
                <ListGroup.Item>Transistores</ListGroup.Item>
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
                        <td>Introducción a la Electrónica Analógica</td>
                        <td>PDF, Video</td>
                    </tr>
                </tbody>
            </Table>

            <Accordion defaultActiveKey="0" className="mt-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Evaluaciones</Accordion.Header>
                    <Accordion.Body>
                        Exámenes y laboratorio.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default CursoElectronicaAnalogica;
