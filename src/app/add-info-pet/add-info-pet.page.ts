import { PetService } from './../services/pet.service';
import { TemplateService } from './../services/template.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Pet } from '../model/pet';

@Component({
  selector: 'app-add-info-pet',
  templateUrl: './add-info-pet.page.html',
  styleUrls: ['./add-info-pet.page.scss'],
})
export class AddInfoPetPage implements OnInit {

  formGroup: FormGroup;
  idcliente: string ="";
  idUser: any ="";

  pet: Pet = new Pet();
 

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private petServ: PetService,
    private auth : AngularFireAuth,
    private navCtrl : NavController,
    public storage: AngularFireStorage) 
    {
      
      this.auth.currentUser.then(response=>{
        this.idcliente=response.uid;
        console.log(this.idcliente)
        this.iniciarForm();
      })
      this.iniciarForm();
      this.dowloadImage();
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
        this.template.myAlert("Pet adicionado com sucesso!");//response lá do service
        //

        this.navCtrl.navigateBack(['/gerenciar-pets'])
      },erro => {
        console.log("Erro")

      
        this.template.myAlert("Erro ao adicionar o pet");
      })

    
  }

  enviarArquivo(event){
    //Capturando a imagem atravás do input type file (html)
    let img = event.srcElement.files[0];
    //Enviar para o Storage
    this.storage.storage.ref().child(`pet/${this.idUser}.jpg`).put(img).then(response=>{
         
        this.dowloadImage();

      });
    }
    
    

      dowloadImage(){

        this.storage.storage.ref().child(`pet/${this.idUser}.jpg`).getDownloadURL().then(response=>{
          this.pet.imagem = response;
        }).catch(response=>{
          this.storage.storage.ref().child(`pet/dog.png`).getDownloadURL().then(response=>{
            this.pet.imagem = response;
          })
        })

     }


}
