import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Ticket } from '@nx-tickets-demo/data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tickets')
  getTickets(): Ticket[] {
    return this.appService.getTickets();
  }
}
