import { Routes } from '@angular/router';
import { Principal } from './paginas/principal/principal';
import { NosotrosComponent } from './paginas/nosotros/nosotros';


export const routes: Routes = [

    { path: '', component: Principal },
    { path: 'nosotros', component: NosotrosComponent }
]
