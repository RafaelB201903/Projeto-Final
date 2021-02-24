import { PedidoService } from './../services/pedido.service';
import { PetService } from 'src/app/services/pet.service';
import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Pet } from '../model/pet';
import { FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Pedido } from '../model/pedido';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  pet: Pet = new Pet();
  cliente: Cliente = new Cliente();
  id : string = "";
  idcliente: string ="";
  idUser: any = "";
  formGroup: FormGroup;

  lista1 : Pet[] = [];
  lista : Pedido[] = [];

  idpet: string = "";
  

  constructor(private ClienteService : ClienteService,
              private navCtrl : NavController,
              private auth : AngularFireAuth,
              private petService : PetService,
              public storage: AngularFireStorage,
              private petservice : PetService,
              private pedidoService: PedidoService,
              
              ) { 
                this.auth.currentUser.then(response=>{
                  this.id=response.uid;
                  this.idUser =this.id;
                  console.log(this.id)

                  //numero de pedidos
                  this.pedidoService.listaDePedido(response.uid).subscribe(response => {
      
                    console.log(response);
               
                    this.lista1 = response;
                 
                  }, err=> {
                
                  })
                  //numero de pets 
                  this.petService.listaDePets(this.id).subscribe(response => {
                  
                    this.lista = response;
                   
  
                  }, err=> {
                 
                  })

                //mostrar informações do cliente na tela
                this.ClienteService.clientesPorId(this.id).subscribe(response => {

          
                  this.cliente.setData(response);
                  this.dowloadImage();
                  

                    
                  }, err=> {
                 
                  })

                  //mostrar informações do pet na tela (números de pets)
                  this.petService.listaDePets(response.uid).subscribe(response => {

          
                  
                    this.lista = response;
                    
                    
  
                      
                    }, err=> {
                    //o lista de cliente retorna observable 
                    })
                })

               
               
    }



  ngOnInit() {
    
   
  }

  dowloadImage(){

    this.storage.storage.ref().child(`perfil_cliente/${this.idUser}.jpg`).getDownloadURL().then(response=>{
      this.cliente.imagem = response;
     
    }).catch(response=>{
      this.storage.storage.ref().child(`perfil_cliente/cliente_perfil.jpg`).getDownloadURL().then(response=>{
        this.cliente.imagem = response;
      
      })
    })

 }

  }


