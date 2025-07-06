export type TicketType = {
   
    id: string;
    title: string;
    description: string;
    status: 'open' | 'closed' | 'in progress';
    priority: 'low' | 'medium' | 'high';

}