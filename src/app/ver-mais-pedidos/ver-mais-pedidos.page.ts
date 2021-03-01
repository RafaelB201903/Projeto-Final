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
import { AngularFireStorage } from '@angular/fire/storage';

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
  idUser: any = "";

  constructor(private PedidoService : PedidoService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute,
    private servicepetshop : PetshopService,
    private petservice : PetService,
    public storage: AngularFireStorage) { 
    

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

        this.idUser = this.idpet;
        
        this.pedido.setData(response);//envia os dados para o html
     
        //listar as informações do pet
        this.petservice.petPorIdVerMaisPedido(this.idpet).subscribe(response=>{
        
          this.dowloadImage();

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

  dowloadImage(){

    this.storage.storage.ref().child(`pet/${this.idUser}.jpg`).getDownloadURL().then(response=>{
      this.pet.imagem = response;
      console.log("puxou do banco")
    }).catch(response=>{
      this.storage.storage.ref().child(`pet/dog.png`).getDownloadURL().then(response=>{
        this.pet.imagem = response;
        console.log("nao puxou do banco")
      })
    })

 }

}
