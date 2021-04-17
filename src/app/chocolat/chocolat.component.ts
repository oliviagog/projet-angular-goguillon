import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chocolat } from '../core/models/chocolat';
import { ChocolatService } from '../core/services/http/chocolat.service';

@Component({
  selector: 'app-chocolat',
  templateUrl: './chocolat.component.html',
  styleUrls: ['./chocolat.component.scss']
})
export class ChocolatComponent implements OnInit {
  chocolats$: Observable<Chocolat[]>;

  constructor(private _chocolatService: ChocolatService) { }

  ngOnInit(): void {
    this.chocolats$ = this._chocolatService.get();
  }

}
