import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {

  constructor(private router: Router,
    private navCtrl : NavController,
    private auth: AngularFireAuth,
    private menuCtrl : MenuController) { }

  ngOnInit() {
    
  }

  goPage() {
    this.router.navigate(['/pedido-novo'])
  }



  logout(){
    this.auth.signOut().then(data=>{
      this.menuCtrl.enable(false);
      this.navCtrl.navigateRoot(['/login-cliente']);
    })
  }
}
