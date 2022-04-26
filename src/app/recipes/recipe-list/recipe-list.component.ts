import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','The Test Description'
    ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNALUie_gfGDGVaSBmD05xz3GxX97FP4M3gzB-4edxnnnmMnVeHGc4Lt7q1I5YUdtJCI&usqp=CAU'),
    
    new Recipe('A Test Recipe 2', 'The Test 2 Description', 
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
