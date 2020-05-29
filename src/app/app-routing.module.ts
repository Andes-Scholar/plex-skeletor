import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { PrestacionesListComponent } from './prestaciones-list/prestaciones-list.component';

const appRoutes: Routes = [
    { path: 'prestaciones', component: PrestacionesListComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
