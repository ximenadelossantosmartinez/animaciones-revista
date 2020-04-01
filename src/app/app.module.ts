import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConocemosComponent } from './conocemos/conocemos.component';
import { NAnterioresComponent } from './n-anteriores/n-anteriores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LineamientosComponent } from './lineamientos/lineamientos.component';
import { AdminModule } from './admin/admin.module'

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';
import { Numero49Component } from './numero49/numero49.component';
import { Numero48Component } from './numero48/numero48.component';
import { Numero47Component } from './numero47/numero47.component';
import { Numero30Component } from './numero30/numero30.component';
import { Numero34Component } from './numero34/numero34.component';
import { Numero46Component } from './numero46/numero46.component';
import { Numero43Component } from './numero43/numero43.component';
import { Numero42Component } from './numero42/numero42.component';
import { Numero44Component } from './numero44/numero44.component';
import { Numero17Component } from './numero17/numero17.component';
import { Numero19Component } from './numero19/numero19.component';
import { Numero20Component } from './numero20/numero20.component';
import { Numero35Component } from './numero35/numero35.component';
import { Numero40Component } from './numero40/numero40.component';
import { Numero41Component } from './numero41/numero41.component';
import{AuthService} from './auth/auth.service.service';
import { AdministradorComponent } from './administrador/administrador.component';
import { UnploadFileComponent } from './unpload-file/unpload-file.component';





var config = {
  apiKey: "AIzaSyBPtj72z2hEkAiElAJa5GdghKVrB5ehdk4",
    authDomain: "revistatecnocultura-ef63f.firebaseapp.com",
    databaseURL: "https://revistatecnocultura-ef63f.firebaseio.com",
    projectId: "revistatecnocultura-ef63f",
    storageBucket: "revistatecnocultura-ef63f.appspot.com",
    messagingSenderId: "854432391264",
    appId: "1:854432391264:web:b3dffceb1ffe1f9083e305"


};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ConocemosComponent,
    NAnterioresComponent,
    EditorialComponent,
    ContactanosComponent,
    LineamientosComponent,
    AdministradorComponent,
    LoginComponent,
    Numero49Component,
    Numero48Component,
    Numero47Component,
    Numero30Component,
    Numero34Component,
    Numero46Component,
    Numero43Component,
    Numero42Component,
    Numero44Component,
    Numero17Component,
    Numero19Component,
    Numero20Component,
    Numero35Component,
    Numero40Component,
    Numero41Component,
    UnploadFileComponent,
    
    
 
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
