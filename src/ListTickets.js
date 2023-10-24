import React from 'react';
import './ListTickets.css'; 

const ListTickets = ({ tickets, onDeleteTicket, onEditTicket }) => {
  return (
    <div>
      <h2>List of Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Mail</th>
            <th>Status</th>
            <th>Phone</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
               <td>{ticket.subject}</td>
              <td>{ticket.mail}</td>
              <td>{ticket.status}</td>
              <td>{ticket.phone}</td>
              <td>{ticket.description}</td>
              <td>
                <button onClick={() => onDeleteTicket(index)}>Delete</button>
                <button onClick={() => onEditTicket(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTickets;