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
      ],
      answer: "Verdadera",
      "explanation":"Porque el COVID-19 afecta las vías respiratorias, entonces podria causar ataques de asma, neumonía y trastornos respiratorios agudos."
    },
      {
        id: 1,
        title: "Las infusiones con miel, limón o jengibre ¿curan el COVID-19?",
        options: [
          {
            a:"Verdadero",
            b:"Falso"
          }
        ],
        answer: "Falso",
        "explanation":"Las infusiones son las grandes aliadas para el alivio de los síntomas de la gripe y los resfriados, también de la covid. Sin embargo, esto no cura el covid."
    },
      {
        id: 2,
        title: "¿Las moscas domésticas pueden transmitir el COVID-19?",
        options: [
          {
            a:"Verdadero",
            b:"Falso"
          }
        ],
        answer: "Falso",
        "explanation":"Hasta la fecha no existe ningún dato ni información que indique que las moscas domésticas puedan transmitir el virus causante de la COVID-19."
      },
      {
        id: 3,
        title: "¿El coronavirus puede afectar a personas jóvenes?",
        options: [
          {
            a:"Verdadero",
            b:"Falso"
          }
      ],
      answer: "Verdadera",
      "explanation":"El nuevo coronavirus (2019-nCoV) puede infectar a personas de todas las edades, si bien se ha observado que las personas mayores y las que padecen algunas enfermedades (como el asma, la diabetes o las cardiopatías) tienen más probabilidades de enfermarse gravemente cuando adquieren la infección."
    },
    {
      id: 4,
      title: "Los termómetros sin contacto detectan el COVID-19",
      options: [
        {
          a:"Verdadero",
          b:"Falso"
        }
    ],
    answer: "Falso",
    "explanation":"Los termómetros sin contacto resultan eficaces para detectar a personas con fiebre. Sin embargo, no permiten detectar a personas infectadas por el virus de la COVID-19."
    },
    {
      id: 5,
      title: "¿Rociar el cuerpo con alcohol y cloro es efectivo para eliminar el Coronavirus? ",
      options: [
        {
          a:"Verdadero",
          b:"Falso"
        }
    ],
    answer: "Falso",
    "explanation":"Esto no tiene ningún efecto para que el virus no pueda acceder por su principal puerta de entrada, que es la mucosa respiratoria."
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
