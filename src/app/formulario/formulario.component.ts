import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  forma:FormGroup;
  constructor(private fb:FormBuilder){

  }

  crearFormulario(){

    this.forma = this.fb.group({
      nombre:[''],
      apellido:[''],
      correo:[''],
      pasword1:[''],
      pasword2:[''],
    })
  }
  guardar(){

  }

  limpiar(){
    
  }
}
