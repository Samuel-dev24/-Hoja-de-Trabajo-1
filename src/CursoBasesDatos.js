import React from 'react';
import { Container, Table, ListGroup, Accordion } from 'react-bootstrap';

const CursoBasesDatos = () => {
    return (
        <Container className="mt-5">
            <h2>Bases de Datos I</h2>
            <p>Este curso cubre los fundamentos de bases de datos relacionales...</p>

            <h3>Puntos Clave</h3>
            <ListGroup>
                <ListGroup.Item>Entidades y relaciones</ListGroup.Item>
                <ListGroup.Item>Normalización</ListGroup.Item>
                <ListGroup.Item>Lenguaje SQL</ListGroup.Item>
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
                        <td>Introducción a las Bases de Datos</td>
                        <td>PDF, Video</td>
                    </tr>
                </tbody>
            </Table>

            <Accordion defaultActiveKey="0" className="mt-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Evaluaciones</Accordion.Header>
                    <Accordion.Body>
                        Dos exámenes parciales y un proyecto final.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default CursoBasesDatos;
