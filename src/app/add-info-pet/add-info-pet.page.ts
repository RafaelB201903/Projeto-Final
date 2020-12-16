import { PetService } from './../services/pet.service';
import { TemplateService } from './../services/template.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-info-pet',
  templateUrl: './add-info-pet.page.html',
  styleUrls: ['./add-info-pet.page.scss'],
})
export class AddInfoPetPage implements OnInit {

  formGroup: FormGroup;
 idcliente: string ="";

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private petServ: PetService,
    private auth : AngularFireAuth) 
    {
      
      this.auth.currentUser.then(response=>{
        this.idcliente=response.uid;
        this.iniciarForm();
      })
      this.iniciarForm();

     }

  ngOnInit() {
    
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      //aqui dentr vou colocar os campos do formulario
      // campos que preciso no cadastro, id gerado de forma automatica
      idcliente: [this.idcliente],
      nomedopet: [],
      raca: [],
      especie: [],
      cor: [],
      sexo: [],
      datadenasc:[],
      tutor: [],
      endereco: [],
      cidade: [],
      estado: [],
      telefone: [],
      celular: [],
    })//NAO ESTOU FAZENDO VALIDAÇÃO OU SEJA SE ESQUECERMOS UM 
    //REGISTRO ELE N DARÁ ERRO (O FIREBASE)
  }


  cadastrar() {
    //template de carregamento
    

      //abre janela no inicio do carregamento

      //quando eu chamo o formGroup.value eles chamam todos esses dados lá de cima
      this.petServ.cadastrar(this.formGroup.value).subscribe(response => {
        
        console.log("Cadastrado com sucesso");

        ;//janelinha de carregamento
        this.template.myAlert(response);//response lá do service
        //

        
      },erro => {
        console.log("Erro")

      
        this.template.myAlert("Erro ao Cadastrar");
      })

    
  }

}
