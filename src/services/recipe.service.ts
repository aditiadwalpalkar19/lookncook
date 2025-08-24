import { Injectable } from '@angular/core';
import { PARAM } from '../constants/constants';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  searchRecipes(query: string) {
    let body = new HttpParams().set('search', query);
    return this.http.get(PARAM.API_URI, { params: body });
  }

  searchRecipesById(id: string) {
    let header = new HttpHeaders().set('Content-Type', PARAM.CONTENT_TYPE);

    console.log(this.http.get(`${PARAM.API_SEARCH_ID_URI}/${id}`));

    return this.http.get(`${PARAM.API_SEARCH_ID_URI}/${id}`);
  }
}
