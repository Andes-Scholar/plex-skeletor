import { Component } from '@angular/core';
import { PrestacionesListService } from './prestaciones-list.service';



@Component({
    selector: 'app-prestaciones-list',
    templateUrl: 'prestaciones-list.component.html',
    providers: [PrestacionesListService]
})
export class PrestacionesListComponent {
    public desde$ = this.prestacionesListService.desde.asObservable();
    public hasta$ = this.prestacionesListService.hasta.asObservable();
    public pacienteInputText$ = this.prestacionesListService.pacienteInputText.asObservable();

    public prestacionesFiltradas$ = this.prestacionesListService.prestacionesFiltradas$;

    constructor(private prestacionesListService: PrestacionesListService) {

    }



    onChangeDesde($event) {
        const { value } = $event;
        this.prestacionesListService.setDesde(value);
    }

    onChangeHasta($event) {
        const { value } = $event;
        this.prestacionesListService.setHasta(value);
    }

    onChangePaciente($event) {
        const { value } = $event;
        this.prestacionesListService.setSearch(value);
    }
}
