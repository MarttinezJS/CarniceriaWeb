import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { SigninComponent } from './components/usuario/signin/signin.component';
import { ProductoComponent } from './components/produtos/producto/producto.component';
import { RegistrarProductoComponent } from './components/produtos/registrar-producto/registrar-producto.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracionComponent } from './components/usuario/configuracion/configuracion.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { DetallePedidoComponent } from './components/ventas/detalle-pedido/detalle-pedido.component';
import { PedidosComponent } from './components/ventas/pedidos/pedidos.component';
import { CarritoComponent } from './components/ventas/carrito/carrito.component';

export const ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'productos', component: ProductoComponent},
    { path: 'servicios', component: ServiciosComponent},
    { path: 'proveedores', component: ProveedoresComponent},
    { path: 'registroProducto', component: RegistrarProductoComponent, canActivate: [AuthGuard] },
    { path: 'usuarioconfig', component: ConfiguracionComponent, canActivate: [AuthGuard] },
    { path: 'pedidos/:id', component: PedidosComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'detallePedido/:id', component: DetallePedidoComponent},
    { path: '**', component: InicioComponent },
];
