import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css']
})
export class Level4Component implements OnInit {

  question: any;
  questions: Array<{}> = [
    {
      id: 0,
      title: "En ________ de 2019 se detectó el primer caso de Coronavirus en China.",
      options: [
        {
          a:"Octubre",
          b:"Noviembre",
          c:"Diciembre"
      }
    ],
      explanation:"Fue notificado por primera vez en Wuhan (China) el 31 de diciembre de 2019.",
      answer:"Diciembre"
  },
    {
      id: 1,
      title: "Evitar tocarse la cara, nariz y ________.",
      options: [
        {
        a: "Codos",
        b:"Pies",
        c:"Ojos"
      }
    ],
    explanation:"Las manos tocan muchas superficies que pueden estar contaminadas con el virus. Si se toca los ojos, la nariz o la boca con las manos contaminadas, puedes transferir el virus de la superficie a sí mismo.",
    answer:"Ojos"
  },
    {
      id: 2,
      title: "Al toser deberíamos cubrirnos la boca con la parte interna ________.",
      options: [
        {
        a:"Del codo",
        b:"De la mano",
        c:"Del hombro"
      }
      ],
      explanation: "Al toser o estornudar, cúbrase la boca y la nariz con el codo flexionado o con un pañuelo; tire el pañuelo inmediatamente y lávese las manos con un desinfectante de manos a base de alcohol, o con agua y jabón. Al cubrir la boca y la nariz durante la tos o el estornudo se evita la propagación de gérmenes y virus. Si usted estornuda o tose cubriéndose con las manos puede contaminar los objetos o las personas a los que toque.",
      answer:"El codo"
    },
    {
      id: 3,
      title: "Los geles con ________ son útiles frente al coronavirus.",
      options: [
        {
        a:"Lidocaína",
        b:"Diclofenaco",
        c:"Alcohol"
      }
    ],
    explanation:"Utiliza alcohol gel  de manos cuando no tengas disponible agua y jabón.",
    answer:"Alcohol"
  },
  {
    id: 4,
    title: "La OMS recomienda una distancia mínima de ________ para evitar contagios.",
    options: [
      {
      a:"1 metro",
      b:"4 metros",
      c:"3 metros"
      }
    ],
    explanation:"Mantenga al menos 1 metro (3 pies) de distancia entre usted y las demás personas, particularmente aquellas que tosan, estornuden y tengan fiebre. Cuando alguien con una enfermedad respiratoria, como la infección por el 2019-nCoV, tose o estornuda, proyecta pequeñas gotículas que contienen el virus. Si está demasiado cerca, puede inhalar el virus.",
    answer:"1 metro"
},
{
  id: 5,
  title: "Deberías lavarte las manos durante ________ para eliminar la enfermedad por coronavirus.",
  options: [
    {
    a:"15 segundos",
    b:"20 segundos",
    c:"1 minuto"
    }
  ],
  explanation:"Como mínimo, 20 segundos. Es lo que se tarda en cantar el “cumpleaños feliz” dos veces. Lávate las manos con frecuencia con agua y jabón, sobre todo antes de comer; también después de sonarte la nariz, toser o estornudar, así como después de ir al baño.",
  answer:"20 segundos"
},
  ];

index:any=0;

  constructor(private router: Router) {

  }


  nextQuestion(){
    if (this.index <= this.questions.length -1) {
      return this.question = this.questions[(this.index++)];
    } else {
      this.router.navigateByUrl('/correct4');
    }
  }

  ngOnInit(): void {
    this.question = this.questions[(this.index)];
  }

}
