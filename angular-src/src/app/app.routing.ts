import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUserComponent } from './components/about-user/about-user.component';

const appRoutes: Routes =[
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'dashboard/:username',
        component: AboutUserComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);