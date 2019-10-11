import { MonitoreoActivacionesComponent } from './monitoreo-activaciones.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ConceptosTurneablesComponent } from './conceptos-tuneables/components/conceptos-turneables.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'conceptos-turneables', component: ConceptosTurneablesComponent },
    {
        path: 'monitoreo',
        component: MonitoreoActivacionesComponent,
        data: { title: 'Monitoreo de Activaciones' }
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
