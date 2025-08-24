import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component/login.component';
import { OverviewComponent } from './components/overview.component/overview.component';
import { RecipeComponent } from './components/recipe.component/recipe.component';

export const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'recipes/:id', component: RecipeComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
];
