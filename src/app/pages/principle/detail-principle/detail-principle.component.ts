import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectSubcomponentComponent } from "../../select-subcomponent/select-subcomponent.component";
import { DetailIndicatorsComponent } from "../../indicator/detail-indicators/detail-indicators.component";
import { Subcomponent } from '../../../model/Subcomponent';
import { LayoutDecisionPrinciple } from '../../../model/LayoutDecisionPrinciple';

@Component({
  selector: 'app-detail-principle',
  templateUrl: './detail-principle.component.html',
  styleUrls: ['./detail-principle.component.css'],
  imports: [SelectSubcomponentComponent, DetailIndicatorsComponent]
})
export class DetailPrincipleComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  subcomponents: Subcomponent[] = [
    { id: 1, header: 'Subcomponent 1', indicators: [ 
      {id: 1, description: "lorem ipsum", evidence: 1, status: "ok"},
      {id: 2, description: "lorem ipsum", evidence: 1, status: "ok"},
      {id: 3, description: "lorem ipsum", evidence: 1, status: "ok"}]},
    { id: 2, header: 'Subcomponent 2', indicators: [ 
      {id: 1, description: "lorem ipsum", evidence: 0, status: "ok"},
      {id: 2, description: "lorem ipsum", evidence: 0, status: "ok"},
      {id: 3, description: "lorem ipsum", evidence: 0, status: "ok"}]
    },
    { id: 3, header: 'Subcomponent 3', indicators: [
      {id: 1, description: "lorem ipsum", evidence: -1, status: "ok"},
      {id: 2, description: "lorem ipsum", evidence: 0, status: "ok"},
      {id: 3, description: "lorem ipsum", evidence: 1, status: "ok"},
      {id: 4, description: "lorem ipsum", evidence: 1, status: "ok"},]
    }
  ]

  indicators = [ 
    {id: 1, description: "lorem ipsum", evidence: 1, status: "ok"},
    {id: 2, description: "lorem ipsum", evidence: 1, status: "ok"},
    {id: 3, description: "lorem ipsum", evidence: 1, status: "ok"},
    {id: 1, description: "lorem ipsum", evidence: 0, status: "ok"},
    {id: 2, description: "lorem ipsum", evidence: 0, status: "ok"},
    {id: 3, description: "lorem ipsum", evidence: 0, status: "ok"},
    {id: 1, description: "lorem ipsum", evidence: 1, status: "ok"},
    {id: 2, description: "lorem ipsum", evidence: -1, status: "ok"},
    {id: 3, description: "lorem ipsum", evidence: 1, status: "ok"},
    {id: 4, description: "lorem ipsum", evidence: -1, status: "ok"}
  ];

  layout: LayoutDecisionPrinciple | undefined;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID:', this.id);

    this.layout = { subcomponents: this.subcomponents, indicators: this.indicators}; 
    // Ou, se você quiser observar mudanças nos parâmetros da rota:
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    // });
  }
}