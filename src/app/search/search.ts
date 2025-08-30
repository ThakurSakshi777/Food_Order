import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search {
  searchItem:string = '';

  constructor(private route:ActivatedRoute , private router: Router){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchItem'])
      this.searchItem = params['searchItem']
    })
  }
  search(): void{
  if( this.searchItem)
    this.router.navigateByUrl('/search/' + this.searchItem);
  }
}
