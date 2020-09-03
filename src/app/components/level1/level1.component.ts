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
      "number": 1,
      "question": "Las personas con ________ tienen mayor riesgo ante el COVID-19",
      "options": [
        "Asma",
        "Diabetes",
        "Hipertensión"
      ],
      "answer": "Asma",
      "explanation": "Porque el COVID-19 afecta las vías respiratorias, entonces podria causar ataques de asma, neumonía y trastornos respiratorios agudos."
    },
    {
      "number": 2,
      "question": "Las infusiones con miel, limón o jengibre ¿curan el COVID-19?",
      "options": [
        "Si",
        "No"
      ],
      "answer": "No",
      "explanation": "Las infusiones son las grandes aliadas para el alivio de los síntomas de la gripe y los resfriados. Sin embargo, esto no cura el covid."
    },
    {
      "number": 3,
      "question": "¿Las moscas pueden transmitir el COVID-19?",
      "options": [
        "Verdadero",
        "Falso"
      ],
      "answer": "Falso",
      "explanation": "Hasta la fecha no existe ningún dato ni información que indique que las moscas puedan transmitir el virus causante de la COVID-19."
    },
    {
      "number": 4,
      "question": "El coronavirus puede afectar:",
      "options": [
        "Solo a ancianos",
        "Solo a jóvenes",
        "A todas las personas"
      ],
      "answer": "A todas las personas",
      "explanation": "Puede infectar a personas de todas las edades, si bien se ha observado que las personas mayores y las que padecen algunas enfermedades tienen más probabilidades de enfermarse gravemente cuando adquieren la infección."
    },
    {
      "number": 5,
      "question": "Los termómetros sin contacto detectan ________",
      "options": [
        "El COVID-19",
        "Fiebre",
        "Presión arterial"
      ],
      "answer": "Fiebre",
      "explanation": "Los termómetros sin contacto resultan eficaces para detectar a personas con fiebre."
    },
    {
      "number": 6,
      "question": "Rociar el cuerpo con cloro puede ________ ",
      "options": [
        "Proteger del COVID-19",
        "Dañar la piel",
        "Aclarar la piel"
      ],
      "answer": "Dañar la piel",
      "explanation": "Rociar el cuerpo con cloro, puede causar quemaduras en la piel."
    }

  ]


  index:any=0;
  answer: any;
  options: any;

  correctOption: Object;
  wrongOption: Object;


  constructor(private router: Router) {
  }

  nextQuestion(){
    if (this.index <= this.questions.length -1) {
      return this.question = this.questions[(this.index++)];
    } else {
      this.router.navigateByUrl('/correct');
    }
  }

  getAnswer(option:any) {
    if(option === this.question.answer) {
      this.correctOption = option;
      this.wrongOption = {};
    } else {
      this.wrongOption = option;
      this.correctOption = {};
    }
    console.log(this.wrongOption)
  }

  getCorona() {

  }

  ngOnInit(): void {
    this.question = this.questions[(this.index)];
  }

}
