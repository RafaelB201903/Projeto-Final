import { NavController } from '@ionic/angular';
import { PedidoService } from './../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Pedido } from '../model/pedido';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  lista : Pedido[] = [];
  id : string = "";

  cliente: Cliente = new Cliente();
  idpedido: string ="";
  pedido : Pedido = new Pedido();
  idcliente: string ="";
  id2: string = "";
  idpet: string = "";
  id3: string = "";

  constructor(private auth : AngularFireAuth,
    private pedidoService : PedidoService,
    private navCtrl : NavController) {
    

    this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
      this.id = response.uid;

      this.pedidoService.listaDePedido(response.uid).subscribe(response => {
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
      })
    })
  }

  ngOnInit() {
  }

  /*visualizar(pedido){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/ver-mais-pedidos',pedido.id])
    console.log(pedido.id)
  }*/

}
