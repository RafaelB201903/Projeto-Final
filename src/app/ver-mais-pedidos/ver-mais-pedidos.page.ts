import { PetService } from './../services/pet.service';
import { PetshopService } from './../services/petshop.service';
import { PedidoService } from './../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../model/pedido';
import { Petshop } from '../model/petshop';
import { Pet } from '../model/pet';

@Component({
  selector: 'app-ver-mais-pedidos',
  templateUrl: './ver-mais-pedidos.page.html',
  styleUrls: ['./ver-mais-pedidos.page.scss'],
})
export class VerMaisPedidosPage implements OnInit {

  pedido: Pedido = new Pedido();
  id : string = "";
  idpedido: string ="";

  idpetshop : string = "";
  pet: Pet = new Pet();

  petshop: Petshop = new Petshop();
  idpet : string = "";

  constructor(private PedidoService : PedidoService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute,
    private servicepetshop : PetshopService,
    private petservice : PetService) { 
    

    this.route.paramMap.subscribe(url=>{

      this.id = url.get('id');
       
 
       this.idpedido = this.id;
       console.log(this.idpedido);
     
       //listar as informações do pedido
       this.PedidoService.buscaPorId(this.id).subscribe(response=>{
        this.idpedido = response;
        console.log(this.idpedido);

        this.idpetshop = response.idpetshop;
        
        console.log(this.idpetshop);

        this.idpet = response.pet;
        console.log(this.idpet + " PET ID");
        
        this.pedido.setData(response);//envia os dados para o html
     
        //listar as informações do pet
        this.petservice.petPorIdVerMaisPedido(this.idpet).subscribe(response=>{
          this.idpet = response;
          console.log(this.idpet);

          this.pet.setData(response);
        })

      //listar as informações do cliente
      this.servicepetshop.petshopsPorIdVerMaisPedido(this.idpetshop).subscribe(response=>{
        this.idpetshop = response;
        console.log(this.idpetshop);

        this.petshop.setData(response);//envia os dados para o html

      }, err=> {
       
      })
    })
  })
  }


  ngOnInit() {
  }

}
