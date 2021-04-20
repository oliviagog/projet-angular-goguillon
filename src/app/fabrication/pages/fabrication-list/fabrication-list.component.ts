import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fabrication } from 'src/app/core/models/fabrication';
import { FabricationService } from 'src/app/core/services/http/fabrication.service';

@Component({
  selector: 'app-fabrication-list',
  templateUrl: './fabrication-list.component.html',
  styleUrls: ['./fabrication-list.component.scss']
})
export class FabricationListComponent implements OnInit {
    fabrications$: Observable<Fabrication[]>;
    displayedColumns: string[] = ["id","createur","prix", "chocolatid", "delete", "update"];
    constructor(private _fabricationService: FabricationService, private _route:Router) { }
  
    ngOnInit(): void {
      this.fabrications$ = this._fabricationService.get();
    }
  
    deleteOne(id){
      this._fabricationService.deleteOne(id).subscribe(next=>{
        console.log("Fabrication id:", next);
        window.location.reload();
  
      });
    }
  
    goToForm() {
      this._route.navigateByUrl("/fabrication/fabrication-form");
    }
  }
