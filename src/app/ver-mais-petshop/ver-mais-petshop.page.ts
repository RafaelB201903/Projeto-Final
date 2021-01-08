import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { PetService } from '../services/pet.service';
import { Petshop } from '../model/petshop';
import { PetshopService } from '../services/petshop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-mais-petshop',
  templateUrl: './ver-mais-petshop.page.html',
  styleUrls: ['./ver-mais-petshop.page.scss'],
})
export class VerMaisPetshopPage implements OnInit {

  petshop: any;
  id : string = "";
  idpetshop: string ="";

  constructor(private petshopService : PetshopService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute) {//teste

      this.route.paramMap.subscribe(url=>{

       this.id = url.get('id');
        
  
        this.idpetshop = this.id;
        console.log(this.idpetshop);
      
       
        this.petshopService.petshopsPorId(this.id).subscribe(response => {
          //this.clienteServ.listaDeClientes() -> chamei a lista de clientes 
          //o ListaDeClientes é um OBSERVABLE dessa forma retorna um subscribe
          //Esse é o comando que irá aguardar a resposta do servidor
    
          //se o servidor responder ele fazer isso aqui
        this.petshop=response;
    
          
        }, err=> {
        //o lista de cliente retorna observable 
        })
      })

    }
  ngOnInit() {
  }

}
