import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-add-imagem',
  templateUrl: './add-imagem.page.html',
  styleUrls: ['./add-imagem.page.scss'],
})
export class AddImagemPage implements OnInit {

  imagem: any; //armazenada a imagem
  idUser: any = "";
  formGroup: FormGroup;
  addimagem: Cliente = new Cliente();



  constructor(private formBuilder: FormBuilder,
    private clientServ: ClienteService,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private loadingController: LoadingController,
    public fireStorage: AngularFireStorage) {

      this.iniciarForm();
      this.auth.authState.subscribe(response=>{
        this.idUser = response.uid;
        this.dowloadImage();
      }
        )
  
}

  
     

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: [this.addimagem.nome],
      cpf: [this.addimagem.cpf],
      telefone: [this.addimagem.telefone],
      complemento: [this.addimagem.complemento],
      cep: [this.addimagem.cep],
      cidade: [this.addimagem.cidade],
      bairro: [this.addimagem.bairro],
      endereco: [this.addimagem.endereco],
      ncasa: [this.addimagem.ncasa]
    })
  }

  enviarArquivo(event){
    //Capturando a imagem atravás do input type file (html)
    this.imagem = event.srcElement.files[0];
    //Enviar para o Storage
    this.uploadStorage();
    }
    
    uploadStorage(){
      //Enviar ao firebase
      this.fireStorage.storage.ref().child(`addimagem/${this.idUser}.jpg`).put(this.imagem).then(response=>{
         
        console.log("imagerm enviada com sucesso");

      });
      
      }

      dowloadImage(){

        this.fireStorage.storage.ref().child(`addimagem/${this.idUser}.jpg`).getDownloadURL().then(response=>{
          this.imagem = response;
        })

      }

}
