import { Component , OnInit} from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.html',
  styleUrl: './tags.css'
})
export class Tags {

tags:Tag[] = [];

constructor(private fs:FoodService) {}

 ngOnInit(): void {
    this.tags = this.fs.getAllTag();   // <-- fetch tags from your service
  }
}
