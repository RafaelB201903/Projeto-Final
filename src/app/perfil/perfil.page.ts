import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  lista : Cliente[] = [];
  constructor(private ClienteService : ClienteService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.ClienteService.listaDeClientes().subscribe(response => {
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
    
  }

  }


