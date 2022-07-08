import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularioFlight',
  templateUrl: './formularioFlight.component.html',
  styleUrls: ['./formularioFlight.component.css']
})


export class FormularioFlightComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario!: FormGroup;

  @Input() titulo!: string;
  @Input() destiny!: string;
  @Input() origin!: string;
  @Input() price!: number;
  @Input() date!: string;
  @Input() departureTime!: string;
  @Input() arrivalTime!: string;

  ngOnInit() {
    console.log(new Date)
    this.formulario = this.formBuilder.group({
      destiny:['', Validators.required],
      departureTime:['', [Validators.required, Validators.pattern("XX/XX/XXXX HH:MM:SS")]],
      origin:['', Validators.required],
      arrivalTime:['', Validators.required],
      price:['', Validators.required],
    })
  }

  onSubmit(){
    if(this.formulario.valid){
      console.log(this.departureTime);
    }
  }

}
