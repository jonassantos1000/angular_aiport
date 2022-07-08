import { Router, Routes } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/service/client/client.service';

@Component({
  selector: 'app-novoClient',
  templateUrl: './novoClient.component.html',
  styleUrls: ['./novoClient.component.css']
})
export class NovoClientComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private service: ClientService, private route: Router) { }

  @Input() titulo:string="Inserir Cliente"
  @Input() nome!:string;
  @Input() cpf!: string;
  @Input() logradouro!: string;
  @Input() email!:string;
  @Input() telefone!: string;
  @Input() status!: boolean;
  @Input() idClient!: string;

  client: client= {} as client;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      email: ['', [Validators.required, Validators.email]],
      logradouro: ['', Validators.required],
      telefone: ['',Validators.required]
    });
  }

  popularObjeto(){
    this.getMaskTelefone();
    this.client.nome=this.nome;
    this.client.cpf=this.cpf;
    this.client.email=this.email;
    this.client.logradouro=this.logradouro;
    this.client.telefone=this.telefone;
  }

  onSubmit(){
    if(this.formulario.valid){
      this.popularObjeto();
      if(this.idClient != undefined){
        this.service.put(this.client,this.idClient).subscribe((response) => {
          this.status=true,this.status=false
        });
      }else{
        this.service.post(this.client).subscribe((response) => {
          this.status=true,this.status=false
        });
      }
      setTimeout(() => {
        this.route.navigate(["/cliente"])
      }, 1000)
    }else{
      alert("Existem campos pendentes de preenchimento")
    }
  }

  getMaskTelefone(){
    this.telefone = this.telefone
    .padStart(11, '0')
    .replace(/[^0-9]/, '')
    .replace(
        /(\d{2})(\d{5})(\d{4})/,
        '($1) $2-$3'
    );
  }

}
