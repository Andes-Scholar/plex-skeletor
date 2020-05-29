import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { IPrestacionResponse } from '../interfaces/prestacion.interface';

@Pipe({ name: 'estado', pure: false })
export class EstadoPipe implements PipeTransform {
    transform(value: IPrestacionResponse): any {
        const lastEstate = value.estados[value.estados.length - 1].tipo;
        console.log(lastEstate);
        return lastEstate;
    }
}
