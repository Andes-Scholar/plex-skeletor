
import { ISendMessageCache } from 'src/app/interfaces/ISendMessageCache';
import { IPacienteApp } from './interfaces/IPacienteApp';
import { PacienteAppService } from '../services/pacienteApp.service';
import { SendMessageCacheService } from '../services/sendMessageCache.service';
import { Component, OnInit } from '@angular/core';
import { Plex } from '@andes/plex';
import { IDevice } from './interfaces/IDevice';

@Component({
    selector: 'app-monitoreo-activaciones',
    templateUrl: './monitoreo-activaciones.component.html',
})
export class MonitoreoActivacionesComponent implements OnInit {
    loading = false;
    documento: Number;
    resultadoBusqueda;
    resultadoMensajes;
    pacienteSeleccionado = false;
    searchClear = true;    // True si el campo de búsqueda se encuentra vacío
    escaneado: boolean;
    pacienteApp: IPacienteApp;
    pacienteDevice: IDevice;
    pacienteMensajes: [ISendMessageCache];
    private plex: Plex;


    constructor(private pacienteAppService: PacienteAppService, private sendMessageCacheService: SendMessageCacheService) {

    }

    ngOnInit() {
    }


    onSearchStart() {
        this.loading = true;
    }

    onSearchEnd(pacientes: any[], escaneado: boolean, busqueda: string) {
        this.searchClear = false;
        this.escaneado = escaneado;
        this.loading = false;
        this.resultadoBusqueda = pacientes;
    }

    onSearchClear() {
        this.searchClear = true;
        this.resultadoBusqueda = [];
        this.pacienteSeleccionado = false;
    }

    hoverPaciente(paciente) {

    }

    public loadPacientes() {
        this.pacienteAppService.get(this.documento).subscribe(
            datos => {
                this.resultadoBusqueda = datos;

            }
        );

    }

    public loadMensajes(email: String) {
        this.sendMessageCacheService.getByEmail(email).subscribe(
            datos => {
                this.resultadoMensajes = datos;
            }
        );
    }

    seleccionar() {
        this.pacienteSeleccionado = true;
        this.pacienteApp = this.resultadoBusqueda[0];
        this.pacienteDevice = this.pacienteApp.devices[0];
        this.loadMensajes(this.pacienteApp.email);
    }
}
