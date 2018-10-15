import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: LoginLayoutComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    },
    {
        path: '', component: LoginLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: '', component: DefaultLayoutComponent,
        children: [
            {
                path: 'users',
                component: UserlistComponent
            }
        ]
    }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }