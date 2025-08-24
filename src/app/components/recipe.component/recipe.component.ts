import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  query: string = '';
  previousResults: any[] = [];

  ngOnInit() {
    if (history.state.query) {
      this.query = history.state.query;
    }
    if (history.state.results) {
      this.previousResults = history.state.results;
    }
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.recipeService.searchRecipesById(id).subscribe({
          next: (res: any) => {
            this.recipe = res.data.recipe;
            this.loading = false;
            this.cdr.markForCheck();
          },
          error: (err) => {
            console.error('Error fetching recipe:', err);
            this.loading = false;
            this.cdr.markForCheck();
          },
        });
      } else {
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  goBack() {
    this.router.navigate(['/overview'], {
      state: { query: this.query, results: this.previousResults },
    });
  }
}
