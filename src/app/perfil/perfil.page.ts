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
  

  constructor(private ClienteService : ClienteService,
                 private navCtrl : NavController,
              private auth : AngularFireAuth,
              private petService : PetService,
              public storage: AngularFireStorage
              ) { 
                this.auth.currentUser.then(response=>{
                  this.id=response.uid;
                  
                  console.log(this.id)

                
                this.ClienteService.clientesPorId(this.id).subscribe(response => {

          
                  this.cliente.setData(response);
                  this.dowloadImage();

                  
              
                    
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


