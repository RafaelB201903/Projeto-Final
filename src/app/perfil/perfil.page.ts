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
                  
                  /*this.petService.listaDePets(response.uid).subscribe(response => {
                    //this.clienteServ.listaDeClientes() -> chamei a lista de clientes 
                    //o ListaDeClientes é um OBSERVABLE dessa forma retorna um subscribe
                    //Esse é o comando que irá aguardar a resposta do servidor
              
                    //se o servidor responder ele fazer isso aqui
                    console.log(response);//isso serve para ver se o problema é aqui, se houver algum erro aparecera aq
                    //solicitando uma resposta do servidor
                    this.lista = response;
                    console.log(this.lista);
              
                    
                  }, err=> {
                  //o lista de cliente retorna observable 
                  })*/
                

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


