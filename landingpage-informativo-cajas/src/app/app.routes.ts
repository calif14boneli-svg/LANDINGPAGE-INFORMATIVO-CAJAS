import { Routes } from '@angular/router';
import { Principal } from './paginas/principal/principal';
import { NosotrosComponent } from './paginas/nosotros/nosotros';
import { TipoProducto } from './paginas/tipo-producto/tipo-producto';
import { ProductoDetalle } from './paginas/producto-detalle/producto-detalle';


export const routes: Routes = [

    { path: '', component: Principal },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'tipoProducto', component: TipoProducto },
{ path: 'tipoProducto/:id', component: ProductoDetalle },
  { path: '**', redirectTo: '' }
]
