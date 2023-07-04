import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})

export class SceneComponent {

  @Input() frases: { txt: string, img: string }[] = []; 
  @Input() fondoActual:string='';

contador:number=0;

siguiente_frase() {
  if (this.contador >= this.frases.length - 1) {
      this.contador = 0;
  } else {
      this.contador++;
  }
  this.fondoActual = this.frases[this.contador].img;
}

anterior_frase() {
  if (this.contador <= 0) {
      this.contador = this.frases.length  -1;
  } else {
      this.contador--;
  }
  this.fondoActual = this.frases[this.contador].img;
}

} 
