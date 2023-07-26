import React from 'react';
import Lottie from 'lottie-react';
import fireAnimation from '../../../static/animation_lkj0m3ev.json'; // Ajuste isso para o caminho do seu arquivo de animação
import { Container, Row, Col } from 'react-bootstrap';

const FireAnimation = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center vh-50">
                <Col xs={15} md={10} lg={15} className="d-flex justify-content-center">
                    <Lottie style={{ width: '1000vw' }} animationData={fireAnimation} />
                </Col>
            </Row>
        </Container>
    );
};

export default FireAnimation;


