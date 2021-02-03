import { PetService } from 'src/app/services/pet.service';
import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Pet } from '../model/pet';
import { FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  cliente: Cliente = new Cliente();
  id : string = "";
  idcliente: string ="";
  idUser: any = "";
  formGroup: FormGroup;

  lista : Pet[] = [];

  idpet: string = "";
  

  constructor(private ClienteService : ClienteService,
                 private navCtrl : NavController,
              private auth : AngularFireAuth,
              private petService : PetService,
              public storage: AngularFireStorage,
              private petservice : PetService,
              
              ) { 
                this.auth.currentUser.then(response=>{
                  this.id=response.uid;
                  
                  console.log(this.id)

                //mostrar informações do cliente na tela
                this.ClienteService.clientesPorId(this.id).subscribe(response => {

          
                  this.cliente.setData(response);
                  this.dowloadImage();

                    
                  }, err=> {
                 
                  })

                  //mostrar informações do pet na tela (números de pets)
                  this.petService.listaDePets(response.uid).subscribe(response => {

          
                    console.log(response);//isso serve para ver se o problema é aqui, se houver algum erro aparecera aq
                    //solicitando uma resposta do servidor
                    this.lista = response;
                    console.log(this.lista);
                    
  
                      
                    }, err=> {
                    //o lista de cliente retorna observable 
                    })
                })

               
               
    }



  ngOnInit() {
    
   
  }

  dowloadImage(){

    this.storage.storage.ref().child(`addimagem/${this.idUser}.jpg`).getDownloadURL().then(response=>{
      this.cliente.imagem = response;
    }).catch(response=>{
      this.storage.storage.ref().child(`addimagem/perfil2.jpg`).getDownloadURL().then(response=>{
        this.cliente.imagem = response;
      })
    })

 }

  }


