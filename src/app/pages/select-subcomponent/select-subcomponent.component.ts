import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { DetailIndicatorsComponent } from "../indicator/detail-indicators/detail-indicators.component";
import { Indicator } from '../../model/Indicator';

@Component({
  selector: 'app-select-subcomponent',
  imports: [CommonModule, AccordionModule, DetailIndicatorsComponent],
  templateUrl: './select-subcomponent.component.html',
  styleUrl: './select-subcomponent.component.css'
})
export class SelectSubcomponentComponent {

  
  subcomponents = [
    { id: 1, header: 'subcomponent 1', indicators: [ 
      {id: 1, description: "lorem ipsum", evidence: true, status: "ok"},
      {id: 2, description: "lorem ipsum", evidence: true, status: "ok"},
      {id: 3, description: "lorem ipsum", evidence: true, status: "ok"}]},
    { id: 2, header: 'subcomponent 2', indicators: [ 
      {id: 1, description: "lorem ipsum", evidence: false, status: "ok"},
      {id: 2, description: "lorem ipsum", evidence: false, status: "ok"},
      {id: 3, description: "lorem ipsum", evidence: false, status: "ok"}]
    },
    { id: 3, header: 'subcomponent 3', indicators: [
      {id: 1, description: "lorem ipsum", evidence: true, status: "ok"},
      {id: 2, description: "lorem ipsum", evidence: false, status: "ok"},
      {id: 3, description: "lorem ipsum", evidence: true, status: "ok"},
      {id: 4, description: "lorem ipsum", evidence: false, status: "ok"},]
    },
  ]

 
}
