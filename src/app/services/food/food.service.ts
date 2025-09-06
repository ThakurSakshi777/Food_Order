import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor(){}

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

getAllFoodByTag(tag: string): Foods[] {
  if (!tag || tag.toLowerCase().trim() === 'all') return this.getAll();

  return this.getAll().filter(food =>
    food.tags?.some(t => t.toLowerCase().trim() === tag.toLowerCase().trim())
  );
}

getAllTag():Tag[]{
  return [
    { name: 'All' , count: 14},
    { name: 'fastfood' , count: 4},
    { name: 'pizza' , count: 2},
    { name: 'lunch' , count: 3},
    { name: 'slowfood' , count: 2},
    { name: 'hamburger' , count: 1},
    { name: 'fry' , count: 1},
    { name: 'soup' , count: 1},
  ];

}


  getAll():Foods[]{
    return [
    {
      id: 1,
      price: 350,
      name: 'Roasted Meat',
      favorite: false,
      star: 4.5,
      tags: ['lunch', 'slowfood'],
      imageUrl: '/assets/dinner1.jpeg',
      cookTime: '25 - 40',
      origins: ['Italy', 'France'],
    },
    {
      id: 2,
      price: 220,
      name: 'Smoked Salmon and Cream Cheese Toast',
      favorite: false,
      star: 4.9,
      tags: ['fastfood'],
      imageUrl: '/assets/dinner2.png',
      cookTime: '15 - 25',
      origins: ['USA'],
    },
    {
      id: 3,
      price: 90,
      name: 'Raspberry Cake',
      favorite: false,
      star: 4.0,
      tags: ['dessert', 'sweet'],
      imageUrl: '/assets/dinner3.png',
      cookTime: '30 - 50',
      origins: ['France'],
    },
    {
      id: 4,
      price: 180,
      name: 'Shahi Paneer',
      favorite: false,
      star: 4.3,
      tags: ['lunch', 'Indian' ,'soup'],
      imageUrl: '/assets/dinner4.png',
      cookTime: '30 - 45',
      origins: ['India'],
    },
    {
      id: 5,
      price: 120,
      name: 'Noodles',
      favorite: false,
      star: 4.2,
      tags: ['fastfood', 'asian'],
      imageUrl: '/assets/dinner5.png',
      cookTime: '10 - 20',
      origins: ['China'],
    },
    {
      id: 6,
      price: 300,
      name: 'Pan-fried Sole',
      favorite: false,
      star: 3.8,
      tags: ['lunch', 'seafood'],
      imageUrl: '/assets/dinner6.png',
      cookTime: '20 - 30',
      origins: ['Spain'],
    },
    {
      id: 7,
      price: 500,
      name: 'Pizza',
      favorite: false,
      star: 4.5,
      tags: ['fastfood', 'pizza'],
      imageUrl: '/assets/hero1.png',
      cookTime: '20 - 30',
      origins: ['Italy'],
    },
    {
      id: 8,
      price: 150,
      name: 'Burger',
      favorite: false,
      star: 4.6,
      tags: ['fastfood', 'hamburger'],
      imageUrl: '/assets/hero2.png',
      cookTime: '10 - 15',
      origins: ['USA'],
    },
    {
      id: 9,
      price: 130,
      name: 'Mix Veg',
      favorite: false,
      star: 4.0,
      tags: ['lunch', 'Indian' ,'fry'],
      imageUrl: '/assets/about.png',
      cookTime: '25 - 40',
      origins: ['India'],
    },
    ];
  }
}
