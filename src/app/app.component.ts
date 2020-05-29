import { Component } from '@angular/core';
import { Server } from '@andes/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaFuego';

  constructor(private server: Server) {
    this.server.setBaseURL('http://localhost:3002/api');
  }
}
