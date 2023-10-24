import React, { useState, useEffect } from 'react';
import './AddTicket.css';

const AddTicket = ({ onAddTicket, currentTicketIndex, tickets }) => {
  const [ticket, setTicket] = useState({
    description: '',
    mail: '',
    subject: '',
    status: 'Open',
    phone: '',
  });

  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (currentTicketIndex !== null) {
      const currentTicket = tickets[currentTicketIndex];
      setTicket({ ...currentTicket });
    } else {
      setTicket({
        description: '',
        mail: '',
        subject: '',
        status: 'Open',
        phone: '',
      });
    }
  }, [currentTicketIndex, tickets]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicket({
      ...ticket,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const handleAddTicket = () => {
    if (!validateEmail(ticket.mail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
      if (currentTicketIndex !== null) {
        const updatedTickets = [...tickets];
        updatedTickets[currentTicketIndex] = ticket;
        onAddTicket(updatedTickets);
      } else {
        onAddTicket(ticket);
      }
      setTicket({
        id: '',
        mail: '',
        subject: '',
        status: 'Open',
        phone: '',
      });
    }
  };

  const statusOptions = ['Open', 'Closed', 'On Hold'];

  return (
    <div className="AddTicketForm">
      <h2>{currentTicketIndex !== null ? 'Edit Ticket' : 'Add Ticket'}</h2>
      <form>
      <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={ticket.subject}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mail"
          placeholder="Mail"
          value={ticket.mail}
          onChange={handleInputChange}
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        <select
          name="status"
          value={ticket.status}
          onChange={handleInputChange}
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={ticket.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={ticket.description}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddTicket}>
          {currentTicketIndex !== null ? 'Save' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default AddTicket;
