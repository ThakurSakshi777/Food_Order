// import { Component } from '@angular/core';
// import { Foods } from '../shared/models/food';
// import { ActivatedRoute } from '@angular/router';
// import { FoodService } from '../services/food/food.service';

// @Component({
//   selector: 'app-foodpage',
//   standalone: true,
//   imports: [],
//   templateUrl: './foodpage.html',
//   styleUrl: './foodpage.css'
// })
// export class Foodpage {
// food!: Foods;

// constructor(private activatedRoute:ActivatedRoute ,private foodservice:FoodService) {
//   activatedRoute.params.subscribe((params) => {
//     if(params['id'])
//       this.food = foodservice.getFoodByTd(params['id']);
//   })
// }
// }

import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foodpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foodpage.html',
  styleUrl: './foodpage.css'
})
export class Foodpage {
  food!: Foods;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodservice: FoodService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodservice.getFoodById(params['id']);
      }
    });
  }
}
