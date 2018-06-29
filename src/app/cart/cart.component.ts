import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/Map';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }





}
