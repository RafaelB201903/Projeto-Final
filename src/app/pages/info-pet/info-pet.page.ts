import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PetService } from 'src/app/services/pet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-pet',
  templateUrl: './info-pet.page.html',
  styleUrls: ['./info-pet.page.scss'],
})
export class InfoPetPage implements OnInit {

  

  constructor(private petService : PetService,
    private navCtrl : NavController,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      console.log(id)

     
      
    })
  }

  visualizar(pet){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/tabs/alt-info-pet',pet.id])
    console.log(pet.id)
  }

  

}
