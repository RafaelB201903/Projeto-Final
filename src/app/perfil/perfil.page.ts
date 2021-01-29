import { PetService } from 'src/app/services/pet.service';
import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Pet } from '../model/pet';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  cliente: Cliente = new Cliente();
  id : string = "";
  idcliente: string ="";

  lista : Pet[] = [];
  

  constructor(private ClienteService : ClienteService,
              private navCtrl : NavController,
              private auth : AngularFireAuth,
              private petService : PetService
              ) { 
                this.auth.currentUser.then(response=>{
                  this.id=response.uid;
                  
                  console.log(this.id)

                
                this.ClienteService.clientesPorId(this.id).subscribe(response => {

          
                this.cliente.setData(response);

                  
              
                    
                  }, err=> {
                  //o lista de cliente retorna observable 
                  })
                })

               
               
    }



  ngOnInit() {
    
   
  }

  }


