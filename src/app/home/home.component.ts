import {Component, OnInit} from '@angular/core';
import {GasPriceServiceService} from "../services/gas-price-service.service";
import {GasList} from "../model/gasList";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  price$: GasList[] = [];
  filteredPriceList: GasList[] = [];
  searchText = '';
  constructor(private gasPriceServiceService: GasPriceServiceService,) {
     this.gasPriceServiceService.getAllRequests().subscribe((data:GasList[]) =>{
       this.price$.push(...data)
     })
    console.log(this.price$)
    this.filteredPriceList = this.price$;
  }

  filterResults(event: any) {
    if (!event.target.value) {
      this.filteredPriceList = this.price$;
    }

    this.filteredPriceList = this.price$.filter(
      prices => prices?.date.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }

  ngOnInit() {

  }
}
