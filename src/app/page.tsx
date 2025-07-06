import Link from "next/link";
import React from "react";

import tickets from "@/data/tickets.json";

export default function Homepage() {
  return (
    <>
      <div className="text-5xl">Homepage</div>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="my-4">
          <Link
            href={`/tickets/${ticket.id}`}
            className="text-blue-500 underline"
            title={`View details for ticket ${ticket.title}`}
            aria-label={`View details for ticket ${ticket.title}`}
          >
            {ticket.title}
          </Link>
        </div>
      ))}
      <Link href="/tickets" className="text-orange-500 underline">
        Go to Tickets Page
      </Link>
    </>
  );
}
