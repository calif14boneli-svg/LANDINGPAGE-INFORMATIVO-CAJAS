import { Routes } from '@angular/router';
import { Principal } from './paginas/principal/principal';
import { NosotrosComponent } from './paginas/nosotros/nosotros';
import { Galeria } from './paginas/galeria/galeria';
import { Contacto } from './paginas/contacto/contacto';
import { ProductoDetalle } from './paginas/producto-detalle/producto-detalle';
import { Servicios } from './paginas/servicios/servicios';
import { ServicioDetalle } from './paginas/servicio-detalle/servicio-detalle';
import { TipoProducto } from './paginas/tipo-producto/tipo-producto';



export const routes: Routes = [

    { path: '', component: Principal },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'galeria', component: Galeria },
    { path: 'contacto', component: Contacto },
    { path: 'producto-detalle', component: ProductoDetalle },
    { path: 'servicios', component: Servicios },
    { path: 'servicio-detalle', component: ServicioDetalle },
    { path: 'tipo-producto', component: TipoProducto }
]
