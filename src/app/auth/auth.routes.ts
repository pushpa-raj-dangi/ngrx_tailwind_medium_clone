import { Route, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const registerRoute: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

export const loginRoute: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];
