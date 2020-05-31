import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IPrestacionResponse } from '../interfaces/prestacion.interface';

let counter = 0;

@Injectable({ providedIn: 'root' })
export class PrestacionHTTP {

    // MockServer for tihs example
    search(params: any): Observable<IPrestacionResponse[]> {
        console.info('REQUEST MOCK', ++counter);
        return of(prestacionesMock) as any;
    }
}

const prestacionesMock = [
    {
        paciente: {
            id: '586e6e8c27d3107fde139627',
            nombre: 'EJEMPLO',
            apellido: 'PRUEBA',
            documento: '33789456',
            sexo: 'femenino',
            fechaNacimiento: '2004-06-17T04:00:00.000Z'
        },
        solicitud: {
            tipoPrestacion: {
                refsetIds: [],
                conceptId: '268565007',
                term: 'Exámen médico del adulto',
                fsn: 'examen médico del adulto (procedimiento)',
                semanticTag: 'procedimiento',
                id: '5951051aa784f4e1a8e2afe1'
            },
            organizacion: {
                id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON'
            },
            profesional: {
                id: '5a1849b0764a0b2a04d6df7c',
                nombre: 'ANDRES',
                apellido: 'VELAZQUEZ BOC-HO',
                documento: '29148200'
            },
            ambitoOrigen: 'ambulatorio',
            fecha: '2020-05-27T11:51:18.802Z',
            turno: '5ecd69bc675be64cde1e976b',
            registros: [],
            historial: []
        },
        ejecucion: {
            organizacion: {
                id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON'
            },
            fecha: '2020-05-27T11:51:18.802Z',

        },
        estados: [
            {
                idOrigenModifica: null,
                motivoRechazo: null,
                observaciones: null,
                _id: '5ece5437ecf5c815d464e883',
                tipo: 'ejecucion',

            }
        ],

        id: '5ece5436ecf5c815d464e882'
    },
    {
        paciente: {
            id: '5c51dbd7ff4222724003750c',
            nombre: 'MARIANO ANDRES',
            apellido: 'BOTTA',
            documento: '34934522',
            sexo: 'masculino',
            fechaNacimiento: '1990-03-09T06:00:00.000Z',
            obraSocial: null
        },
        solicitud: {
            tipoPrestacion: {
                refsetIds: [],
                conceptId: '268565007',
                term: 'Exámen médico del adulto',
                fsn: 'examen médico del adulto (procedimiento)',
                semanticTag: 'procedimiento',
                id: '5951051aa784f4e1a8e2afe1'
            },
            tipoPrestacionOrigen: {
                refsetIds: []
            },
            organizacion: {
                id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON'
            },
            profesional: {
                id: '5bf55c7f1742c567650558a2',
                nombre: 'MARIANO ANDRES',
                apellido: 'BOTTA',
                documento: '34934522'
            },
            ambitoOrigen: 'ambulatorio',
            fecha: '2020-05-27T11:52:56.263Z',
            registros: [],
            historial: []
        },
        ejecucion: {
            organizacion: {
                id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON'
            },
            fecha: '2020-05-27T11:52:56.263Z',

        },

        estados: [
            {
                tipo: 'ejecucion',

                id: '5ece54a25e604b4cd3c0aa28'
            },
            {

                tipo: 'validada',

                id: '5ece54ad96ad884d2980213e'
            }
        ],
        id: '5ece54a25e604b4cd3c0aa27'
    },

    {
        paciente: {
            id: '586e6e8c27d3107fde139627',
            nombre: 'EJEMPLO',
            apellido: 'PRUEBA',
            documento: '33789456',
            sexo: 'femenino',
            fechaNacimiento: '2004-06-17T04:00:00.000Z'
        },
        solicitud: {
            tipoPrestacion: {
                refsetIds: [],
                conceptId: '268565007',
                term: 'Exámen médico del adulto',
                fsn: 'examen médico del adulto (procedimiento)',
                semanticTag: 'procedimiento',
                id: '5951051aa784f4e1a8e2afe1'
            },
            organizacion: {
                id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON'
            },
            profesional: {
                id: '5a1849b0764a0b2a04d6df7c',
                nombre: 'ANDRES',
                apellido: 'VELAZQUEZ BOC-HO',
                documento: '29148200'
            },
            ambitoOrigen: 'ambulatorio',
            fecha: '2020-05-27T11:51:18.802Z',
            turno: '5ecd69bc675be64cde1e976b',
            registros: [],
            historial: []
        },
        ejecucion: {
            organizacion: {
                id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON'
            },
            fecha: '2020-05-27T11:51:18.802Z',

        },
        estados: [
            {
                idOrigenModifica: null,
                motivoRechazo: null,
                observaciones: null,
                _id: '5ece5437ecf5c815d464e883',
                tipo: 'ejecucion',

            }
        ],

        id: '5ece5436ecf5c815d464e884'
    },
    {
        paciente: {
            id: '586e6e8c27d3107fde139627',
            nombre: 'JORGE',
            apellido: 'TESTING',
            documento: '33789456',
            sexo: 'femenino',
            fechaNacimiento: '2004-06-17T04:00:00.000Z'
        },
        solicitud: {
            tipoPrestacion: {
                refsetIds: [],
                conceptId: '12345678946',
                term: 'Epicrisis',
                fsn: 'Epicrisis',
                semanticTag: 'procedimiento',
                id: '5951051aa784f4e1a8e2afe1'
            },
            organizacion: {
                id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON'
            },
            profesional: {
                id: '5a1849b0764a0b2a04d6df7c',
                nombre: 'ANDRES',
                apellido: 'VELAZQUEZ BOC-HO',
                documento: '29148200'
            },
            ambitoOrigen: 'ambulatorio',
            fecha: '2020-05-27T11:51:18.802Z',
            turno: '5ecd69bc675be64cde1e976b',
            registros: [],
            historial: []
        },
        ejecucion: {
            organizacion: {
                id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON'
            },
            fecha: '2020-05-27T11:51:18.802Z',

        },
        estados: [
            {
                idOrigenModifica: null,
                motivoRechazo: null,
                observaciones: null,
                _id: '5ece5437ecf5c815d464e883',
                tipo: 'ejecucion',

            }
        ],

        id: '5ece5436ecf5c815d464e889'
    },
];
