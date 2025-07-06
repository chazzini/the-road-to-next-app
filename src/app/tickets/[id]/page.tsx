"use client";

import { useParams } from "next/navigation";
import React from "react";

import tickets from "@/data/tickets.json";

function TicketDetails() {
  const { id } = useParams();
  const ticket = tickets.find((ticket) => ticket.id === id);
  if (!ticket) {
    return <h1 className="text-2xl">Ticket not found</h1>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{ticket.title}</h1>
      <p className="mb-2">
        <strong>Description:</strong> {ticket.description}
      </p>
      <p className="mb-2">
        <strong>Status:</strong> {ticket.status}
      </p>
      <p className="mb-2">
        <strong>Priority:</strong> {ticket.priority}
      </p>
      <p className="mb-2">
        <strong>ID:</strong> {ticket.id}
      </p>
    </div>
  );
}

export default TicketDetails;
