import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Chocolat } from 'src/app/core/models/chocolat';
import { Fabrication } from 'src/app/core/models/fabrication';
import { FabricationService } from 'src/app/core/services/http/fabrication.service';

@Component({
  selector: 'app-fabrication-form',
  templateUrl: './fabrication-form.component.html',
  styleUrls: ['./fabrication-form.component.scss']
})
export class FabricationFormComponent implements OnInit {

  fabricationForm: FormGroup;
  id: number = null;
  idchocolat: number;
  chocolat: Observable<Chocolat[]>;

  constructor(private fb: FormBuilder, private _fabricationService: FabricationService, private _route: Router) {
    this.fabricationForm = this.fb.group({
      createur: ['', [Validators.required, this.noWhitespaceValidator]],
      prix: ['', [Validators.required, this.noWhitespaceValidator]],
      idchocolat: [this.idchocolat],
    })
   }

  ngOnInit(): void {
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  onSubmit(fabrication: Fabrication) {
    if (this.fabricationForm.valid) {
      this._fabricationService.post(fabrication).subscribe(next => {
        console.log("Fabrication:", next);
        this.fabricationForm.reset();
        this._route.navigateByUrl("/fabrication");
      });
    }
  }

}
