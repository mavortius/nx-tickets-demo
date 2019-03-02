import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '@nx-tickets-demo/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-tickets-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tickets: Observable<Ticket[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.tickets = this.http.get<Ticket[]>('/api/tickets');
  }
}
