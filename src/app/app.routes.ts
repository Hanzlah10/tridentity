import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes)
    },
    {
        path: 'goals',
        loadChildren: () => import('./goals/goals.routes').then(m => m.goalRoutes)
    },
    {
        path: 'quiz',
        loadChildren: () => import('./quiz/quiz.routes').then(m => m.quizRoutes)
    },
];
