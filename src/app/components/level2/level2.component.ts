import { Component, OnInit } from '@angular/core';
import { LevelsJsonService } from 'src/app/services/levels-json.service';


@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {

quiz: any[] = [];
indexQuiz: number = 0;
questions: any[] = [];

  constructor(private LevelsService: LevelsJsonService) {
    LevelsService.getQuiz().subscribe(
      (data) => {
        console.log(data.levels[0]["level-two"][0])
        this.questions = data.levels[0]["level-two"][0];
        this.getQuiz(this.indexQuiz);

      },
      (err) => {
        console.log(err);
      }
    );
    console.log('soy el menu');
  }

  ngOnInit(): void {
  }

  getQuiz(index: number) {
    this.quiz = this.questions[index]["level-two"];
    this.indexQuiz = index;
  }






}
