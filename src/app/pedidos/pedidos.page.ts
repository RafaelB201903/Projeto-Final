import { PetService } from './../services/pet.service';
import { ClienteService } from './../services/cliente.service';
import { NavController } from '@ionic/angular';
import { PedidoService } from './../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Pedido } from '../model/pedido';
import { Cliente } from '../model/cliente';
import { Pet } from '../model/pet';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  lista : Pedido[] = [];
  id : string = "";

  cliente: Cliente = new Cliente();
 
  pedido : Pedido = new Pedido();

  pet : Pet = new Pet();
 
  idpet: string = "";
 

  constructor(private auth : AngularFireAuth,
    private pedidoService : PedidoService,
    private navCtrl : NavController,
    private clienteservice : ClienteService,
    private PetService : PetService) {
    

    this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
      this.id = response.uid;
      console.log(this.id)

      //colocar as informações do cliente no card 
      this.clienteservice.buscaPorId(this.id).subscribe(response => {


        this.cliente.setData(response);
        console.log(response );
    
          
        }, err=> {
        //o lista de cliente retorna observable 
        })

      
      this.pedidoService.listaDePedido(response.uid).subscribe(response => {
      
        console.log(response);//isso serve para ver se o problema é aqui, se houver algum erro aparecera aq
   
        this.lista = response;
        
        //this.idpet = response;
        //console.log(this.idpet + " ID PET")

        this.pet.setData(response);
        
      }, err=> {
    
      })

      
      /*colocar as informações do pet no card
      this.PetService.buscaPorId(this.id).subscribe(response => {


        this.pet.setData(response);
        console.log(response );
    
          
        }, err=> {
        //o lista de cliente retorna observable 
        })*/
       

    })
  }

  ngOnInit() {
  }

  visualizar(pedido){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/ver-mais-pedidos',pedido.id])
    console.log(pedido.id)
  }

}
