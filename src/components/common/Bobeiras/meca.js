import React from 'react';
import Lottie from 'lottie-react';
import MecasAnimation from '../../../static/gifs/meca.json'; // Ajuste isso para o caminho do seu arquivo de animação
import { Container, Row, Col } from 'react-bootstrap';

const MecaAnimation = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center vh-50">
                <Col xs={15} md={10} lg={15} className="d-flex justify-content-center">
                    <Lottie style={{ width: '20vw' }} animationData={MecasAnimation} />
                </Col>
            </Row>
        </Container>
    );
};

export default MecaAnimation;


