import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sair-cliente',
  templateUrl: './sair-cliente.page.html',
  styleUrls: ['./sair-cliente.page.scss'],
})
export class SairClientePage implements OnInit {

  constructor(private navCtrl : NavController,
    private auth: AngularFireAuth,
    private menuCtrl : MenuController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this.auth.signOut().then(data=>{
      this.menuCtrl.enable(false);
      this.navCtrl.navigateRoot(['/login-cliente']);
    })
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      //subHeader: 'Atenção',
      message: 'Tem certeza que deseja sair?',
      buttons: ['Cancel','Sair']
    });

    await alert.present();
  }
  
}
