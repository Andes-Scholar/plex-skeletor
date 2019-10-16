import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPacienteApp } from 'src/app/interfaces/IPacienteApp';
import { Server } from '@andes/shared';

@Injectable()
export class PacienteAppService {

    private pacienteAppUrl = '/modules/mobileApp/pacienteApp';  // URL to web api

    constructor(private server: Server) { }

    get(dni: Number): Observable<IPacienteApp[]> {
        return this.server.get(this.pacienteAppUrl + '/' + dni, { showError: true });
    }

}

