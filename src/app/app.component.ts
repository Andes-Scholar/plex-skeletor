import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { Server } from '@andes/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
<<<<<<< HEAD
=======
  title = 'PruebaFuego';

>>>>>>> feat(monitoreo): Carga de datos de un paciente de la base a partir de la búsqueda por documento. Visualización de mensajes asociados al email en caso de que hayan.
  constructor(public server: Server) {
    server.setBaseURL(environment.API);
  }
}

