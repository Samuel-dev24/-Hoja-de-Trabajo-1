import React from 'react';
import { Carousel, Card, Navbar, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#">Cursos Universitarios</Navbar.Brand>
            </Navbar>

            <Container className="mt-5">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/ejemploalgebra.jpeg" alt="Slide 1" />
                        
                        <Carousel.Caption>
                            <h3>Cursos Finalizados</h3>
                            <p>Detalles de los cursos completados durante la carrera.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Row className="mt-4">
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Bases de Datos I</Card.Title>
                                <Card.Text>Fundamentos de bases de datos relacionales.</Card.Text>
                                <a href="/cursos/bases-datos" className="btn btn-primary">Ver Curso</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Cálculo Diferencial</Card.Title>
                                <Card.Text>Conceptos de derivadas y límites.</Card.Text>
                                <a href="/cursos/calculo-diferencial" className="btn btn-primary">Ver Curso</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Algoritmos</Card.Title>
                                <Card.Text>Estructuras de datos y algoritmos esenciales.</Card.Text>
                                <a href="/cursos/algoritmos" className="btn btn-primary">Ver Curso</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Electrónica Analógica</Card.Title>
                                <Card.Text>Conceptos fundamentales de electrónica.</Card.Text>
                                <a href="/cursos/electronica-analogica" className="btn btn-primary">Ver Curso</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Álgebra Lineal</Card.Title>
                                <Card.Text>Vectores, matrices y transformaciones lineales.</Card.Text>
                                <a href="/cursos/algebra-lineal" className="btn btn-primary">Ver Curso</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <footer className="bg-dark text-light text-center py-3 mt-4">
                <p> Ender Samuel Cabrera Carino (9490-20-959)</p>
            </footer>
        </div>
    );
};

export default Home;
