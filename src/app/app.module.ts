import { VacinaService } from './services/vacina.service';
import { ClienteService } from './services/cliente.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

import { HttpClientModule } from '@angular/common/http';
import { PetService } from './services/pet.service';
import { PetshopService } from './services/petshop.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireStorageModule 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PetService,
    VacinaService,
    PetshopService,
    ClienteService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
