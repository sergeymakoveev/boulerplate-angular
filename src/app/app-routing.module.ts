import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService /*, StatusService */ } from './services';

import {
    Page404Component,
    PageMainComponent,
    PageUsersComponent,
    // PageUserComponent,
    // PageUserEditComponent
} from './pages';

const ROUTES: Routes = [
    {
        path: '',
        canActivate: [AuthService],
        children: [
            {
                path: 'main',
                component: PageMainComponent,
                data: {title: 'Главная'},
                // canActivate: [StatusService]
            },
            {
                path: 'users',
                component: PageUsersComponent,
                data: { title: 'Пользователи' },
                // canActivate: [StatusService]
            },
            // {
            //     path: 'users/:id',
            //     component: PageUserComponent,
            //     data: {title: 'Просмотр данных пользователя', class: 'users-edit'}
            // },
            // {
            //     path: 'users/:id/edit',
            //     component: PageUserEditComponent,
            //     data: {title: 'Редактирование данных пользователя', class: 'users-edit'}
            // },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'main',
            }
        ]
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: Page404Component,
        data: { title: 'Страница не найдена' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
