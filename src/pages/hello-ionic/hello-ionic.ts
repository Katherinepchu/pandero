import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'; 

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Proveedor1Provider } from  '../../providers/proveedor1/proveedor1';




@Component({

  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  usuarios
  
  @ViewChild('username') uname;
  @ViewChild('password') password;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public proveedor1:Proveedor1Provider) { 

    console.log('enre pinches wauyyyyyyyyy...')


  }
  
  signIn() {
    this.navCtrl.push(LoginPage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('eeeeeeeeeeeeee')
   // console.log('yapue hshshsh')
   // this.proveedor.obtenerDatos()
   // .subscribe(data=>{

   //     this.usuarios =data;
   //     console.log('yajsjsjsjjsjsjsjsjjs',data)

   //   },
   //   (error)=>{console.log(error);}
   //   )
   
   this.proveedor1.obtenerDatos()
   .subscribe(data=>{

       this.usuarios =data;
       console.log('kkkkkkkkkkkkkkkkkk',data)

     },
     (error)=>{console.log(error);}
     )

  }

}