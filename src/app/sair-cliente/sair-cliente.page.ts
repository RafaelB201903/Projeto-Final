import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sair-cliente',
  templateUrl: './sair-cliente.page.html',
  styleUrls: ['./sair-cliente.page.scss'],
})
export class SairClientePage implements OnInit {

  constructor(private navCtrl : NavController,
    private auth: AngularFireAuth,
    private menuCtrl : MenuController) { }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this.auth.signOut().then(data=>{
      this.menuCtrl.enable(false);
      this.navCtrl.navigateRoot(['/login-cliente']);
    })
  }
}
