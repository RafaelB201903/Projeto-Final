import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Pet } from 'src/app/model/pet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-imagem-pet',
  templateUrl: './add-imagem-pet.page.html',
  styleUrls: ['./add-imagem-pet.page.scss'],
})
export class AddImagemPetPage implements OnInit {

  idUser: any = "";
 
  pet: Pet = new Pet();

  constructor(private auth: AngularFireAuth,
    private route: ActivatedRoute,
    public storage: AngularFireStorage) {
      this.route.paramMap.subscribe(url=>{
        this.idUser = url.get('id');
        console.log(this.idUser)
      })
      
      this.dowloadImage();
     }

  ngOnInit() {
  }

  enviarArquivo(event){
    //Capturando a imagem atravás do input type file (html)
    let img = event.srcElement.files[0];
    //Enviar para o Storage
    this.storage.storage.ref().child(`pet/${this.idUser}.jpg`).put(img).then(response=>{
         
        this.dowloadImage();

      });
    }
    
    

      dowloadImage(){

        this.storage.storage.ref().child(`pet/${this.idUser}.jpg`).getDownloadURL().then(response=>{
          this.pet.imagem = response;
        }).catch(response=>{
          this.storage.storage.ref().child(`pet/dog.png`).getDownloadURL().then(response=>{
            this.pet.imagem = response;
          })
        })

     }

}
