import { Routes } from '@angular/router';
import { Principal } from './paginas/principal/principal';
import { NosotrosComponent } from './paginas/nosotros/nosotros';
import { Contacto } from './paginas/contacto/contacto';
import { Galeria } from './paginas/galeria/galeria';


export const routes: Routes = [

    { path: '', component: Principal },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: Contacto },
    { path: 'galeria', component: Galeria }
]
