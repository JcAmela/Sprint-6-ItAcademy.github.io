import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  frases: { txt: string, img: string }[] = [];
  mostrarBienvenida: boolean = true;
  fondoActual:string="";

  comenzar() {
    this.mostrarBienvenida = false;
    this.fondoActual = this.frases[0].img;
  }

  constructor() {
    this.frases = [
      { 
        txt: "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial", 
        img: "./assets/img/1.jpg" 
      },
      { 
        txt: "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.", 
        img: "./assets/img/2.jpg"
      },
      { 
        txt: "El héroe decidió atravesar la puerta que le llevaba a casa", 
        img: "./assets/img/3.jpg" 
      },
      { 
        txt: "Mientras tanto, otras heroes no tuvieron tanta suerte en su elección...", 
        img: "./assets/img/4.jpg"
      }
    ]
  }
} 
