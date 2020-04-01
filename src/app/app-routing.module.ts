import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import {ContactanosComponent} from './contactanos/contactanos.component'
import { AdministradorComponent } from './administrador/administrador.component'
import{ConocemosComponent} from './conocemos/conocemos.component'
import {EditorialComponent} from './editorial/editorial.component'
import{InicioComponent} from './inicio/inicio.component'
import{LineamientosComponent} from './lineamientos/lineamientos.component'
import {NAnterioresComponent} from './n-anteriores/n-anteriores.component'
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
import { UnploadFileComponent } from './unpload-file/unpload-file.component';



const routes: Routes = [
    {
      path:  'Inicio',
      component:  InicioComponent
  },    {
    path:  'Conocenos',
    component:  ConocemosComponent
},
{
  path:  'Lineamientos',
  component:  LineamientosComponent
},
{
  path:  'Editorial',
  component:  EditorialComponent
},
{
  path:  'Contactanos',
  component:  ContactanosComponent
},
{
path:  'Anteriores',
component:  NAnterioresComponent
},
{
  path:  'Numero49',
  component:  Numero49Component
  },
  {
  path:  'Numero48',
  component:  Numero48Component
  },

  {
    path:  'Numero47',
    component:  Numero47Component
    },
    {
      path:  'Numero46',
      component:  Numero46Component
      },
    {
      path:  'Numero30',
      component:  Numero30Component
      },
      {
        path:  'Numero40',
        component:  Numero40Component
        },
      {
        path:  'Numero35',
        component:  Numero35Component
        },
      {
        path:  'Numero34',
        component:  Numero34Component
        },
        {
          path:  'Numero44',
          component:  Numero44Component
          },
        {
          path:  'Numero43',
          component:  Numero43Component
          },
          {
            path:  'Numero42',
            component:  Numero42Component
            },
          {
            path:  'Numero41',
            component:  Numero41Component
            },
            {
              path:  'Numero20',
              component:  Numero20Component
              },
            {
              path:  'Numero19',
              component:  Numero19Component
              },
            {
              path:  'Numero17',
              component:  Numero17Component
              },
              
              {
                path:  'Administrador',
                component:  AdministradorComponent
                },

                {
                  path:  'unpload-file',
                  component:  UnploadFileComponent
                  },
 
  
    
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
