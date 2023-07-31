import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import RegistroDespesas from "../carteiraview/saida/registroDespesas";
import RecebidoForm from "../carteiraview/recebidos/recebidoView";
import RecebidoForms from "../carteiraview/recebidos/recebidoForm";
import RecebidoViews from "../carteiraview/recebidos/recebidoView";

const MyModal = () => {
  const [show, setShow] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowSecondModal(false);
    setShowThirdModal(false);
  };
  const handleShow = () => setShow(true);
  const handleSecondModalShow = () => {
    setShow(false);
    setShowSecondModal(true);
  };
  const handleThirdModalShow = () => {
    setShowSecondModal(false);
    setShowThirdModal(true);
  };
  const handleBackToFirst = () => {
    setShow(true);
    setShowSecondModal(false);
    setShowThirdModal(false);
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Inserir novo registro
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserir Novo Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Nessa seção inserimos novos recebimentos ou novas despesas</Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" onClick={handleSecondModalShow}>
            Inserir nova entrada
          </Button>
          <Button className="btn-secondary" onClick={handleThirdModalShow}>
            Inserir nova saída
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSecondModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body><RecebidoForms /></Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" onClick={handleBackToFirst}>
            Voltar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showThirdModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body><RegistroDespesas /></Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" onClick={handleBackToFirst}>
            Voltar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
