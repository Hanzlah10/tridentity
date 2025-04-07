import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main.routes').then(m => m.homeRoutes)
    },
    {
        path: 'goals',
        loadChildren: () => import('./main/main.routes').then(m => m.goalsRoutes)
    },
];
