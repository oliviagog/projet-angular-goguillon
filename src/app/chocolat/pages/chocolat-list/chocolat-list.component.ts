import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Chocolat } from 'src/app/core/models/chocolat';
import {ChocolatService} from 'src/app/core/services/http/chocolat.service';
@Component({
  selector: 'app-chocolat-list',
  templateUrl: './chocolat-list.component.html',
  styleUrls: ['./chocolat-list.component.scss']
})
export class ChocolatListComponent implements OnInit {
  chocolats$: Observable<Chocolat[]>;
  displayedColumns: string[] = ["id", "nom", "description","delete","update"];
  constructor(private _chocolatService: ChocolatService, private _route:Router) { }

  ngOnInit(): void {
    this.chocolats$ = this._chocolatService.get();
  }

  deleteOne(id){
    this._chocolatService.deleteOne(id).subscribe(next=>{
      console.log("Chocolat id:", next);
    });
  }
}
