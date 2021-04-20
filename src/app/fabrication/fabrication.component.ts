import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fabrication } from '../core/models/fabrication';
import { FabricationService } from '../core/services/http/fabrication.service';

@Component({
  selector: 'app-fabrication',
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.scss']
})
export class FabricationComponent implements OnInit {
  fabrications$: Observable<Fabrication[]>;

  constructor(private _fabricationService: FabricationService) { }

  ngOnInit(): void {
    this.fabrications$ = this._fabricationService.get();
  }
}
