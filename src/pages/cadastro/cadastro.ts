import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Cadastro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
public usuario;

constructor(public navCtrl: NavController, public params: NavParams, public http:Http) {
    this.usuario={};
}

salvar(){
  console.log(this.usuario);
  this.http.post('http://localhost:8183/IonicApp/resource/usuario/inserir', this.usuario).map(res => res.json()).subscribe(data => {
      console.log('Funcionando');
      this.usuario = {};
      this.efetuarLogin();
  });
}

efetuarLogin(){
    this.navCtrl.pop();
  }

}
