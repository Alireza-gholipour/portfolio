import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  @Input()
  dish!: Dish;
  
  ngOnInit(): void {
  }

}

