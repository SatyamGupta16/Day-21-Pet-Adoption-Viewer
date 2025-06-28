"use client";
import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { Card, Row, Col, Container } from 'react-bootstrap';

const Dashboard = ({ logout }) => {
    const router = useRouter();

    return (
        <div>
            <div className="d-flex justify-content-end gap-2 mb-3">
                <button className="btn btn-outline-primary" onClick={() => router.push('/')}>
                    Go to Homepage
                </button>
                <button className="btn btn-dark" onClick={logout}>
                    Logout
                </button> 
            </div>

            <Container fluid className="p-4">
                <h2 className="mb-4 text-center">Welcome to PetCare Dashboard</h2>

                {/* Metrics Section */}
                <Row className="mb-4">
                    <Col md={4}>
                        <Card className="text-white bg-primary mb-3">
                            <Card.Body>
                                <Card.Title>Total Clients</Card.Title>
                                <Card.Text>354</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-white bg-success mb-3">
                            <Card.Body>
                                <Card.Title>Appointments Today</Card.Title>
                                <Card.Text>12</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-white bg-warning mb-3">
                            <Card.Body>
                                <Card.Title>Pending Vaccinations</Card.Title>
                                <Card.Text>7</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Services Overview */}
                <h4 className="mb-3">Services Overview</h4>
                <Row>
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Pet Boarding</Card.Title>
                                <Card.Text>
                                    Comfortable and safe space for pets with 24/7 care while their owners are away.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Pet Treatment</Card.Title>
                                <Card.Text>
                                    Health checkups, treatments, and diagnostics by expert veterinarians.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Vaccination</Card.Title>
                                <Card.Text>
                                    Scheduled vaccinations and reminders to ensure pet health and compliance.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Grooming</Card.Title>
                                <Card.Text>
                                    Professional grooming services to keep pets clean, healthy, and looking great.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;