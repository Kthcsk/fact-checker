import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {

  question: any;
  questions: Array<{}> = [
    {
      id: 0,
      title: "Las personas con asma tienen mayor riesgo ante el COVID-19",
      options: [
        {
          a:"Verdadero",
          b:"Falso"
        }
      ]
    },
      {
        id: 1,
        title: "Las infusiones con miel, limón o jengibre ¿curan el COVID-19?",
        options: [
          {
            a:"Verdadero",
            b:"Falso"
          }
      ]
    },
      {
        id: 2,
        title: "¿Las moscas domésticas pueden transmitir el COVID-19?",
        options: [
          {
            a:"Verdadero",
            b:"Falso"
          }
        ]
      },
      {
        id: 3,
        title: "¿El coronavirus puede afectar a personas jóvenes?",
        options: [
          {
            a:"Verdadero",
            b:"Falso"
          }
      ]
    },
    {
      id: 4,
      title: "Los termómetros sin contacto NO detectan el COVID-19",
      options: [
        {
          a:"Verdadero",
          b:"Falso"
        }
    ]
    },
    {
      id: 5,
      title: "¿Rociar el cuerpo con alcohol y cloro es efectivo para eliminar el Coronavirus? ",
      options: [
        {
          a:"Verdadero",
          b:"Falso"
        }
    ]
    },
      ];

  index:any=0;

  constructor(private router: Router) {
  }

  nextQuestion(){
    if (this.index <= this.questions.length -1) {
      return this.question = this.questions[(this.index++)];
    } else {
      this.router.navigateByUrl('/correct');
    }
  }

  ngOnInit(): void {
    this.question = this.questions[(this.index)];
  }

}
