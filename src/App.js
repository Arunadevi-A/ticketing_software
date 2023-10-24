import React, { useState } from 'react';
import AddTicket from './AddTicket';
import ListTickets from './ListTickets';

function App() {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState('list');
  const [currentTicketIndex, setCurrentTicketIndex] = useState(null);

  const handleAddTicket = (ticket) => {
    if (currentTicketIndex !== null) {
      const updatedTickets = tickets.map((obj, index) => {
        if (index === currentTicketIndex) {
          return ticket;
        }
        return obj;
      });
      setTickets(updatedTickets);
      setCurrentTicketIndex(null);
    } else {
      setTickets([...tickets, ticket]);
    }
    setCurrentPage('list');
  };

  const handleDeleteTicket = (index) => {
    const updatedTickets = [...tickets];
    updatedTickets.splice(index, 1);
    setTickets(updatedTickets);
  };

  const handleEditTicket = (index) => {
    setCurrentTicketIndex(index);
    setCurrentPage('add');
  };

  return (
    <div className="App">
      <h1>Tickets</h1>

      {currentPage === 'list' ? (
        <div>
          <button onClick={() => setCurrentPage('add')}>Add Ticket</button>
          <ListTickets
            tickets={tickets}
            onDeleteTicket={handleDeleteTicket}
            onEditTicket={handleEditTicket}
          />
        </div>
      ) : (
        <AddTicket
          onAddTicket={handleAddTicket}
          currentTicketIndex={currentTicketIndex}
          tickets={tickets}
        />
      )}
    </div>
  );
}

export default App;




