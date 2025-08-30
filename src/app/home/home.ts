import { Component , OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Search } from '../search/search';
import { Tags } from '../tags/tags';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , Search , Tags],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  foods: Foods[] = [];
 constructor(private fs: FoodService , private route: ActivatedRoute){

 }
 ngOnInit(): void {
  this.route.params.subscribe(params => {
    if(params['searchItem'])
      this.foods = this.fs.getAll().filter( food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));

     else if (params['tag']) {
      this.foods = this.fs.getAllFoodByTag(params['tag']);
     }

    else {
        this.foods = this.fs.getAll();
    }
  });

 }
}
