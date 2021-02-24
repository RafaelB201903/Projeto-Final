import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { PetService } from '../services/pet.service';
import { Petshop } from '../model/petshop';
import { PetshopService } from '../services/petshop.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-ver-mais-petshop',
  templateUrl: './ver-mais-petshop.page.html',
  styleUrls: ['./ver-mais-petshop.page.scss'],
})
export class VerMaisPetshopPage implements OnInit {

  petshop: Petshop = new Petshop();
  id : string = "";
  idpetshop: string ="";
  idUser: any = "";

  constructor(private petshopService : PetshopService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute,
    public storage: AngularFireStorage) {

      this.route.paramMap.subscribe(url=>{

       this.id = url.get('id');
        this.idUser = this.id;
  
        this.idpetshop = this.id;
        console.log(this.idpetshop);
      
       
        this.petshopService.petshopsPorId(this.id).subscribe(response => {

        this.dowloadImage();
        this.petshop.setData(response);
        this.idUser = response.id;
        console.log(this.idUser)
          
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

  dowloadImage(){

    this.storage.storage.ref().child(`perfil_petshop/${this.idUser}.jpg`).getDownloadURL().then(response=>{
      this.petshop.imagem = response;
      console.log("puxou do banco")
      console.log(this.idUser);
    }).catch(response=>{
      this.storage.storage.ref().child(`perfil_petshop/petshop_perfil.jpg`).getDownloadURL().then(response=>{
        this.petshop.imagem = response;
        console.log("nao puxou do banco")
       
      })
    })

 }

}
