import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { VacinaService } from './../../services/vacina.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TemplateService } from 'src/app/services/template.service';
import { PetService } from 'src/app/services/pet.service';
import { ActivatedRoute } from '@angular/router';
import { Vacina } from 'src/app/model/vacina';

@Component({
  selector: 'app-add-info-vacinas',
  templateUrl: './add-info-vacinas.page.html',
  styleUrls: ['./add-info-vacinas.page.scss'],
})
export class AddInfoVacinasPage implements OnInit {

  formGroup: FormGroup;
  idpet: string ="";
  vacina:  Vacina = new Vacina();

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private VacinaService: VacinaService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute)// responsável por poder pegar informações do cliente 
    {
      this.iniciarForm();
     }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{

      let id = url.get('id');
      

      this.idpet = id;
      console.log(this.idpet);
    })
    this.iniciarForm();
}

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      //aqui dentr vou colocar os campos do formulario
      // campos que preciso no cadastro, id gerado de forma automatica

      idpet: [this.idpet],
      medicamento: [],
      data: [],
      proximadose: [],
      
    })//NAO ESTOU FAZENDO VALIDAÇÃO OU SEJA SE ESQUECERMOS UM 
    //REGISTRO ELE N DARÁ ERRO (O FIREBASE)
  }


  
  cadastrar() {
    //template de carregamento
    

      //abre janela no inicio do carregamento

      //quando eu chamo o formGroup.value eles chamam todos esses dados lá de cima
      this.VacinaService.cadastrarVacina(this.formGroup.value).subscribe(response => {
        
        console.log("Cadastrado com sucesso");

        ;//janelinha de carregamento
        this.template.myAlert(response);//response lá do service
        //
    
        this.navCtrl.navigateBack(['/info-vacinas',this.idpet])
        
      },erro => {
        console.log("Erro")

      
        this.template.myAlert("Erro ao Cadastrar");
      })

    
  }

 

}
