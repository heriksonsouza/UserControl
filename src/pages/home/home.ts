import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {CadastroPage} from '../cadastro/cadastro';
import {PrincipalPage} from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public usuario;

  constructor(public navCtrl: NavController, public params: NavParams, public http:Http) {
    this.usuario={};
  }

  acessarCadastro(){
  this.navCtrl.push(CadastroPage);
  }

  acessarPrincipal(){
  this.navCtrl.push(PrincipalPage);
  }

  efetuarLogin(){
    this.http.post('http://localhost:8183/IonicApp/resource/usuario/login', this.usuario).map(res => res.json()).subscribe(data => {
        if (data != false) {
          console.log('Login');
        this.acessarPrincipal();
        } else {
            console.log('usuario ou senha invalidos')
        }
    });
  }

  }
