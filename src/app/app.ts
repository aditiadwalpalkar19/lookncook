import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login.component/login.component';
import { OverviewComponent } from './components/overview.component/overview.component';
import { RecipeComponent } from './components/recipe.component/recipe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, OverviewComponent, RecipeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('LookNCook');
}
