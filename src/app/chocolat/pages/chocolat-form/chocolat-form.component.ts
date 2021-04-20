import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chocolat } from 'src/app/core/models/chocolat';
import { ChocolatService } from 'src/app/core/services/http/chocolat.service';

@Component({
  selector: 'app-chocolat-form',
  templateUrl: './chocolat-form.component.html',
  styleUrls: ['./chocolat-form.component.scss']
})
export class ChocolatFormComponent implements OnInit {
  chocolatForm: FormGroup;
 

  constructor(private fb: FormBuilder, private _chocolatService: ChocolatService, private _route: Router) {
    this.chocolatForm = this.fb.group({
      nom: ['', [Validators.required, this.noWhitespaceValidator]],
      description: ['', [Validators.required, this.noWhitespaceValidator]],
    })
   }

  ngOnInit(): void {
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  onSubmit(chocolat: Chocolat) {
    if (this.chocolatForm.valid) {
      this._chocolatService.post(chocolat).subscribe(next => {
        console.log("Chocolat:", next);
        this.chocolatForm.reset();
        this._route.navigateByUrl("/chocolat");
      });
    }
  }
}
