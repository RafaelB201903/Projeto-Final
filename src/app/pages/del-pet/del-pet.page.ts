import { PetService } from 'src/app/services/pet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TemplateService } from 'src/app/services/template.service';
import { Pet } from 'src/app/model/pet';

@Component({
  selector: 'app-del-pet',
  templateUrl: './del-pet.page.html',
  styleUrls: ['./del-pet.page.scss'],
})
export class DelPetPage implements OnInit {

  pet : Pet = new Pet();

  constructor(private PetService : PetService,
    private route: ActivatedRoute,//para capturar o id daquela rota lá n url
    private navCtrl : NavController,
    private template : TemplateService) { }

  ngOnInit() {
    //primeiro vou capturar com o route
    //this.route.paramMap.subscribe => vai tentar capturar alguma coisa
    //que sera a url lá de cima e no caso eu quero q capture o id da url
    this.route.paramMap.subscribe(url=>{
      //variavel id que vai pegar o id da url
      let id = url.get('id');
      console.log(id);

      //uma vez que eu tenho o id vou fazer uma consulta
      //no servidor utilizando esse id
      //buscaPorId(id) => vou enviar o id
      this.PetService.buscaPorId(id).subscribe(response=>{
        
        //para eu armazenar esse cliente primeiro tenho que
        //declarar ele como variavel
        this.pet = response;//response vai ser o cliente
        //os dados que receber no response vou colocar no cliente
        console.log(this.pet);
      
      })

    })

  }//ESSE CODIGO VAI LA N BANCO E PEGA O ID

  excluir() {
    //template de carregamento
    this.template.loading.then(load => {

      load.present();//abre janela no inicio do carregamento

      //quando eu chamo o formGroup.value eles chamam todos esses dados lá de cima
      this.PetService.excluir(this.pet).subscribe(response => {


        this.template.myAlert("Pet excluido com sucesso!");
        load.dismiss();//janelinha de carregamento

        //fecha janelinha

        this.navCtrl.navigateForward(['/gerenciar-pets']);
      }, erro => {


        load.dismiss();
        this.template.myAlert("Erro ao Excluir");
      })

    })
  }
}
