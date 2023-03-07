import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/interfaces';
import { PersonsService } from 'src/app/services/persons/persons.service';
import { validateAge } from 'src/app/validators';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  public isSending: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private personsService: PersonsService,
    private router: Router
  ) { }

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    age: [null, Validators.compose([Validators.required, validateAge(), Validators.min(18)])]
  })

  ngOnInit(): void {
  }

  public setStringAsAge(): void {
    this.myForm.get('age').setValue("Isso definitivamente é uma string")
  }

  public hasError(controlName: string, errorName: string): boolean {
    const control = this.myForm.get(controlName)

    const hasError = control.hasError(errorName) && control.touched

    return hasError;
  }

  private touchAllControls(): void {
    this.myForm.markAllAsTouched()
  }

  public onSubmit(): void {
    this.touchAllControls()

    if (this.myForm.invalid) {
      return;
    }

    this.isSending = true

    const name = this.myForm.get('name').value
    const age = this.myForm.get('age').value

    const newPerson: Person = {
      id: 0,
      name,
      age,
    }

    this.personsService.createPersonOnApi(newPerson).subscribe(() => {
      this.isSending = false
      this.router.navigateByUrl('/minha-lista')
    })

  }
}