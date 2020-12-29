import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PetService } from 'src/app/services/pet.service';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/model/pet';

@Component({
  selector: 'app-info-pet',
  templateUrl: './info-pet.page.html',
  styleUrls: ['./info-pet.page.scss'],
})
export class InfoPetPage implements OnInit {

  idpet: string = "";
  pet : Pet = new Pet();

  constructor(private petService : PetService,
    private navCtrl : NavController,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');

      this.idpet= id;
      console.log(id)
      console.log(this.idpet)

      this.petService.buscaPorId(id).subscribe(response=>{
        this.pet = response;
        console.log(this.pet);
      })
    })
  }

  visualizar(){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/tabs/alt-info-pet',this.idpet])
    console.log(this.idpet)
  }

  visualizar2(){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/tabs/info-vacinas',this.idpet])
    console.log(this.idpet)
  }

}
