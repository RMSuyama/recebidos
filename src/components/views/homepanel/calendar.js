import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import { firestore } from '../../../config/firebase';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Importa o CSS padrão do react-big-calendar

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const entradasRef = firestore.collection('ContasAReceber');
        const entradasSnapshot = await entradasRef.get();
        const entradas = entradasSnapshot.docs.map((doc) => ({
          title: doc.data().descricao,
          start: new Date(doc.data().dataPagamento),
          end: new Date(doc.data().dataPagamento),
          allDay: true,
          valor: doc.data().valor,
          tipo: 'Entrada',
        }));

        const saidasRef = firestore.collection('ContasAPagar');
        const saidasSnapshot = await saidasRef.get();
        const saidas = saidasSnapshot.docs.map((doc) => ({
          title: doc.data().descricao,
          start: new Date(doc.data().dataPagamento),
          end: new Date(doc.data().dataPagamento),
          allDay: true,
          valor: doc.data().valor,
          tipo: 'Saída',
        }));

        setEvents([...entradas, ...saidas]);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchDados();
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleClose = () => setSelectedEvent(null);

  return (
    <div className="container mt-5">
      <div className="card">
        <h5 className="card-header">Calendário</h5>
        <div className="card-body">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleSelectEvent}
          />
        </div>
      </div>

      <Modal show={selectedEvent != null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tipo: {selectedEvent?.tipo}</p>
          <p>Valor: R${selectedEvent?.valor.toFixed(2)}</p>
          <p>Data: {selectedEvent?.start.toLocaleDateString()}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CalendarView;
