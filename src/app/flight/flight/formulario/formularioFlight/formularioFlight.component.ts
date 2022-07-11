import { FlightService } from 'src/app/service/flight/flight.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight.model';

@Component({
  selector: 'app-formularioFlight',
  templateUrl: './formularioFlight.component.html',
  styleUrls: ['./formularioFlight.component.css']
})


export class FormularioFlightComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service:FlightService,private router:Router) { }

  formulario!: FormGroup;
  flight: Flight={} as Flight;

  @Input() titulo!: string;
  @Input() destiny!: string;
  @Input() origin!: string;
  @Input() price!: number;
  @Input() date!: string;
  @Input() departureDate!: string;
  @Input() departureTime!: string;
  @Input() arrivalDate!: string;
  @Input() arrivalTime!: string;

  ngOnInit() {
    console.log(new Date)
    this.formulario = this.formBuilder.group({
      destiny:['', Validators.required],
      departureDate:['', [Validators.required]],
      departureTime:['', [Validators.required]],
      origin:['', Validators.required],
      arrivalDate:['', Validators.required],
      arrivalTime:['', Validators.required],
      price:['', Validators.required],
    })
  }

  validDate(nome:string){
    if(nome=='chegada'){
      this.arrivalDate = this.arrivalDate.replace(/(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])((19|20)\d{2})/,"$1/$2/$3")
      if(this.arrivalDate.length < 9){
        this.arrivalDate="";
      }
    }

    if(nome=='partida'){
      this.departureDate = this.departureDate.replace(/(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])((19|20)\d{2})/,"$1/$2/$3")
      if(this.departureDate.length < 9){
        this.departureDate="";
      }
    }

  }

  validTime(nome: string){
    if(nome=='chegada'){
      this.arrivalTime=this.arrivalTime.replace(/^([0|1|2]{1}\d)([0|1|2|3|4|5]{1}\d)$/,"$1:$2")
      if(this.arrivalTime.length < 5){
          this.arrivalTime="";
        }
    }

    if(nome=='partida'){
      this.departureTime=this.departureTime.replace(/^([0|1|2]{1}\d)([0|1|2|3|4|5]{1}\d)$/,"$1:$2")
      if(this.departureTime.length < 5){
        this.departureTime="";
      }
    }
  }

  populaObjeto(){
    this.flight.arrivalTime=`${this.arrivalDate} ${this.arrivalTime}`;
    this.flight.departureTime=`${this.departureDate} ${this.departureTime}`;
    this.flight.destiny=this.destiny;
    this.flight.origin=this.origin;
    this.flight.price=this.price;
  }

  post(){
    this.service.post(this.flight).subscribe((flight)=> {
      () => alert('Voo inserido com sucesso !');
      this.router.navigate(['/voos'])
    },
      erro => alert(`Erro: ${erro.error.causa} \n\nMensagem: ${erro.error.mensagem}`)
    )
  }

  put(){

  }

  onSubmit(){
    if(this.formulario.invalid){
      alert('Verique as informações inseridas, existem um ou mais campos em branco');
      this.router.navigate(['/novoVoo'])
      return;
    }
    this.populaObjeto();

    if(this.flight.id == undefined){
      this.post();
    }else{
      this.put();
    }
  }
}
