import { Component, OnInit } from '@angular/core';

import { HttpHelperService } from '../../services/http-helper.service';
import { Pizza } from '../../models/pizza.model';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'nat-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  pizzas: Pizza[] = [];

  constructor(
    private http: HttpHelperService
  ) { }

  ngOnInit(): void {
    this.http.find<Pizza[]>("pizzas").subscribe((res) => {
      this.pizzas = res.body;
    });
  }

}
