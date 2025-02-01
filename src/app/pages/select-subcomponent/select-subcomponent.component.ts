import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { DetailIndicatorsComponent } from "../indicator/detail-indicators/detail-indicators.component";
import { Subcomponent } from '../../model/Subcomponent';

@Component({
  selector: 'app-select-subcomponent',
  imports: [CommonModule, AccordionModule, DetailIndicatorsComponent],
  templateUrl: './select-subcomponent.component.html',
  styleUrl: './select-subcomponent.component.css'
})
export class SelectSubcomponentComponent {

  @Input() subcomponents: Subcomponent[] = [];

 
}
