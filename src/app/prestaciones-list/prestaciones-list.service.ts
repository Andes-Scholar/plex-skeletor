import { Injectable } from '@angular/core';
import { PrestacionHTTP } from '../services/prestacion.http';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { IPrestacionResponse } from '../interfaces/prestacion.interface';
import { filter, switchMap, map } from 'rxjs/operators';
import * as moment from 'moment';
import { cache } from '@andes/shared';

@Injectable()
export class PrestacionesListService {

    // Filtros
    public desde = new BehaviorSubject(new Date());
    public hasta = new BehaviorSubject(new Date());
    public pacienteInputText = new BehaviorSubject('');

    // Observables


    prestaciones$ = combineLatest(
        this.desde.pipe(filter(date => this.validDate(date))),
        this.hasta.pipe(filter(date => this.validDate(date)))
    ).pipe(
        switchMap(([desde, hasta]) => {
            return this.makeSearch(desde, hasta);
        }),
        cache()
    );

    prestacionesFiltradas$ = combineLatest(
        this.prestaciones$,
        this.pacienteInputText
    ).pipe(
        map(([prestaciones, textInput]) => {
            return this.filtrarPrestaciones(prestaciones, textInput);
        })
    );

    constructor(private prestacionesRequest: PrestacionHTTP) { console.log('DESCONSTRUITE'); }

    validDate(date: Date) {
        return moment(date).isValid();
    }

    makeSearch(desde: Date, hasta: Date) {
        const desdeStr = moment(desde).startOf('day').format();
        const hastaStr = moment(hasta).endOf('day').format();
        return this.prestacionesRequest.search({
            limit: 50,
            solicitud: `${desdeStr}|${hastaStr}`
        });
    }

    filtrarPrestaciones(prestaciones: IPrestacionResponse[], pacienteInputText: string) {
        if (pacienteInputText) {
            const prestacionesFiltras = prestaciones.filter((prestacion) => {
                return prestacion.paciente.apellido.includes(pacienteInputText);
            });
            return prestacionesFiltras;
        }
        return prestaciones;
    }

    // Seteos de filtros
    setDesde(value: Date) {
        this.desde.next(value);
    }

    setHasta(value: Date) {
        this.hasta.next(value);
    }

    setSearch(value: string) {
        this.pacienteInputText.next(value);
    }
}
