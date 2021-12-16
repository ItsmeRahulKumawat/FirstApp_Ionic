import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rajasthan',
  templateUrl: './rajasthan.page.html',
  styleUrls: ['./rajasthan.page.scss'],
})
export class RajasthanPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
  rajasthan(){
    this.router.navigate(['/rajasthan']);
  }

}
