import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Plex, PlexModule } from '@andes/plex';
import { routing, appRoutingProviders } from './app-routing.module';
import { SharedModule, Server } from '@andes/shared';


// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PlexModule,
    SharedModule,
    routing
  ],
  providers: [
    Server,
    Plex,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
