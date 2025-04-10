import { Route } from "@angular/router";
import { GoalsComponent } from "./components/goals/goals.component";
import { HomeComponent } from "./components/home/home.component";
import { QuizComponent } from "./components/quiz/quiz.component";

export const goalsRoutes: Route[] = [
    {
        path: '',
        component: GoalsComponent
    }
]

export const homeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    }
]
export const quizRoutes: Route[] = [
    {
        path: '',
        component: QuizComponent
    }
]