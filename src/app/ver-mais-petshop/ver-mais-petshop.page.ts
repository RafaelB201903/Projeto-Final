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

  petshop: Petshop = new Petshop();
  id : string = "";
  idpetshop: string ="";

  constructor(private petshopService : PetshopService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute) {

      this.route.paramMap.subscribe(url=>{

       this.id = url.get('id');
        
  
        this.idpetshop = this.id;
        console.log(this.idpetshop);
      
       
        this.petshopService.petshopsPorId(this.id).subscribe(response => {


        this.petshop.setData(response);
    
          
        }, err=> {
        //o lista de cliente retorna observable 
        })
      })

    }
  ngOnInit() {
  }

  agendar(petshop){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/agendar-pedido',this.idpetshop])
    console.log(petshop.id)
  }

}
