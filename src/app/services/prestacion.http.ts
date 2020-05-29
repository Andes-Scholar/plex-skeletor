import { Injectable } from '@angular/core';
import { ResourceBaseHttp, Server } from '@andes/shared';
import { IPrestacionResponse } from '../interfaces/prestacion.interface';

@Injectable({ providedIn: 'root' })
export class PrestacionHTTP extends ResourceBaseHttp<IPrestacionResponse> {
    protected url = '/ejemplos/prestaciones';

    constructor(server: Server) {
        super(server);
    }
}
