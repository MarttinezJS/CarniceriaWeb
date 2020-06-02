import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { SigninComponent } from './components/usuario/signin/signin.component';
import { ProductoComponent } from './components/produtos/producto/producto.component';
import { RegistrarProductoComponent } from './components/produtos/registrar-producto/registrar-producto.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracionComponent } from './components/usuario/configuracion/configuracion.component';

export const ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'producto', component: ProductoComponent},
    { path: 'registroProducto', component: RegistrarProductoComponent, canActivate: [AuthGuard] },
    { path: 'usuarioconfig', component: ConfiguracionComponent, canActivate: [AuthGuard] },
    { path: '', pathMatch: 'full', component: InicioComponent }
];
