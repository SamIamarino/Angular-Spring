import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';
 
@Component({
  selector: 'app-sales-person-list',
  imports: [],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup','Kumar','anup.kumar@gmail.com', 4000 ),
    new SalesPerson('Kleber','Freitas','kleber.freitas@gmail.com', 3000 ),
    new SalesPerson('Jose','Anisio','jose.123@gmail.com', 2000 ),
    new SalesPerson('Vilmar ','Cavalcante','vilmar.cav@gmail.com', 1000 ),
    new SalesPerson('Milton','Nascimento','Milton.nascimento@gmail.com', 14000 )
  ];


}
