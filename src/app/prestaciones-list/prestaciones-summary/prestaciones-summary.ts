import { Component } from '@angular/core';
import { PrestacionesListService } from '../prestaciones-list.service';
import { switchMap, distinct, toArray, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

// Debería ir a @andes/shared
const distintos = (fn, project = null) => {
    project = project || ((id) => id);
    return switchMap((prestaciones: any) => {
        return from(prestaciones).pipe(
            distinct(fn),
            map(project),
            toArray()
        );
    });
};

@Component({
    selector: 'app-prestaciones-summary',
    template: `
        <plex-title titulo="Prestaciones Unicas" ></plex-title>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let tipoPrestacion of summary$ | async" > {{ tipoPrestacion.term }} </li>
        </ul>
    `
})
export class PrestacionesSummaryComponent {

    summary$: Observable<any[]> = this.prestacionesService.prestaciones$.pipe(
        distintos(
            (p) => p.solicitud.tipoPrestacion.conceptId,
            (p) => p.solicitud.tipoPrestacion
        )
    );

    constructor(private prestacionesService: PrestacionesListService) { }

}
