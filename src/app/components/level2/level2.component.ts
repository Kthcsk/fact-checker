import { Component, OnInit } from '@angular/core';
import { LevelsJsonService } from 'src/app/services/levels-json.service';


@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {

products: any[] = [];
indexMenu: number = 0;
options1: any[] = [];
public selectProduct: any[] = [];

  constructor(private LevelsService: LevelsJsonService) {
    LevelsService.getProducts().subscribe(
      (data) => {
        console.log(data.levels[0]["level-two"])
        this.options1 = data.levels[0]["level-two"];
        this.getProduct(this.indexMenu);

      },
      (err) => {
        console.log(err);
      }
    );
    console.log('soy el menu');
  }

  ngOnInit(): void {
  }

  getProduct(index: number) {
    this.products = this.options1[index]['level-two'];
    this.indexMenu = index;
  }

  addProduct(index: number) {
    this.selectProduct.push({
      number2: this.products[index]['number'],
      options2: this.products[index]['options'],
      question: this.products[index]['question']
    });
  }

}
