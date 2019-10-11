
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Plex, PlexModule } from '@andes/plex';
import { routing, appRoutingProviders } from './app-routing.module';
import { Server } from '@andes/shared';
import { SnomedService } from './shared/snomed.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConceptosTurneablesComponent } from './conceptos-tuneables/components/conceptos-turneables.component';
import { DetalleConceptoTurneableComponent } from './conceptos-tuneables/components/detalle-concepto-turneable.component';
import { ConceptoTruneableService } from './conceptos-tuneables/services/concepto-turneable.service';
import { NuevoConceptoTurneableComponent } from './conceptos-tuneables/components/nuevo-concepto-turneable.component';
import { MonitoreoActivacionesComponent } from './monitoreo-activaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConceptosTurneablesComponent,
    DetalleConceptoTurneableComponent,
    NuevoConceptoTurneableComponent,
    MonitoreoActivacionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlexModule,
    routing
  ],
  providers: [
    Plex,
    appRoutingProviders,
    Server,
    SnomedService,
    ConceptoTruneableService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
