import { Component, OnInit } from '@angular/core';
import { PrestacionHTTP } from '../services/prestacion.http';
import { IPrestacionResponse } from '../interfaces/prestacion.interface';

@Component({
    selector: 'app-prestaciones-list',
    templateUrl: 'prestaciones-list.component.html'
})
export class PrestacionesListComponent implements OnInit {
    public desde = new Date();
    public hasta = new Date();
    public paciente = '';
    public prestaciones: IPrestacionResponse[] = [];
    constructor(private prestacionHTTP: PrestacionHTTP) {

    }

    ngOnInit() {
        this.prestacionHTTP.search({ limit: 50 }).subscribe((prestaciones) => {
            this.prestaciones = prestaciones;
        });
    }
}
