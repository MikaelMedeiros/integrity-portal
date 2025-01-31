import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectSubcomponentComponent } from "../../select-subcomponent/select-subcomponent.component";

@Component({
  selector: 'app-detail-principle',
  templateUrl: './detail-principle.component.html',
  styleUrls: ['./detail-principle.component.css'],
  imports: [SelectSubcomponentComponent]
})
export class DetailPrincipleComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID:', this.id);
    // Ou, se você quiser observar mudanças nos parâmetros da rota:
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    // });
  }
}