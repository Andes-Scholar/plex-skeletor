import { Component, OnInit } from '@angular/core';
import { Plex } from '@andes/plex';
import { Router } from '@angular/router';

@Component({
    selector: 'app-monitoreo-activaciones',
    templateUrl: './monitoreo-activaciones.component.html',
})
export class MonitoreoActivacionesComponent implements OnInit {
    public disableNuevoPaciente = true;
    loading = false;
    textoLibre = "";
    resultadoBusqueda;
    pacienteSeleccionado = false;
    searchClear = true;    // True si el campo de búsqueda se encuentra vacío
    escaneado: boolean;
    paciente = {
        apellido: 'García',
        nombre: 'Josefina',
        sexo: 'femenino',
        documento: '12548547',
        fechaNacimiento: new Date(),
        app_version: 'v2.0',
        device: 'Samsung S10',
    };
    private plex: Plex;

    ngOnInit() {
        this.plex.clearNavbar();
        this.updateTitle('Buscar pacientes');
        this.paciente = {
            apellido: 'García',
            nombre: 'Josefina',
            sexo: 'femenino',
            documento: '12548547',
            fechaNacimiento: new Date(),
            app_version: 'v2.0',
            device: 'Samsung S10',
        };
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
    }

    private updateTitle(nombre: string) {
        this.plex.updateTitle('ACTIVACIONES / ' + nombre);
        this.plex.updateTitle([{
            route: 'inicio',
            name: 'INICIO'
        }, {
            name: nombre
        }]);
    }

    simular() {
        if (this.textoLibre && this.textoLibre.length > 0){
            this.resultadoBusqueda = [];
            this.resultadoBusqueda.push(this.paciente);
        }
        else {
            this.resultadoBusqueda = [];
        }
    }

    hoverPaciente(paciente){

    }

    seleccionar(){
        this.pacienteSeleccionado = true;
    }
}
