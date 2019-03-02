import { Injectable } from '@nestjs/common';
import { Ticket } from '@nx-tickets-demo/data';

@Injectable()
export class AppService {
  getTickets(): Ticket[] {
    return [
      { id: 1, title: 'Fix my computer' },
      { id: 2, title: 'Fix my desk' }
    ];
  }
}
