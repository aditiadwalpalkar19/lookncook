import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from 'firebase/auth';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../../services/recipe.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [CommonModule, FormsModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  user!: User | null;
  userInput = '';
  recipes: any[] = [];

  constructor(
    private auth: AuthService,
    private recipe: RecipeService,
    private router: Router
  ) {
    this.user = this.auth.currentUser;
    if (this.user) {
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

  ngOnInit(): void {
    this.getCurrentUser();

    if (history.state.query) {
      this.userInput = history.state.query;
    }
    if (history.state.results) {
      this.recipes = history.state.results;
    }
  }

  getCurrentUser = () => {
    const currentUser = localStorage.getItem('user');
    this.user = JSON.parse(currentUser!);
  };

  search() {
    const query = this.userInput.trim();
    if (!query) return;

    this.recipe.searchRecipes(query).subscribe({
      next: (result: any) => {
        this.recipes = result.data.recipes;
      },
      error: (err: any) => console.log(err),
    });
  }

  selectedRecipe(recipe: any) {
    this.router.navigate(['/recipes', recipe.id], {
      state: { query: this.userInput.trim(), results: this.recipes },
    });
  }

  logout() {
    this.auth
      .logout()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      })
      .catch((err) => console.error('Logout failed:', err));
  }
}
