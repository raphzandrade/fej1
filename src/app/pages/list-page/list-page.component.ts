import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/interfaces';
import { PersonsService } from 'src/app/services/persons/persons.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public persons: Person[] = []

  constructor(
    public personsService: PersonsService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadPersons()
  }

  private loadPersons(): void {
    // this.persons = this.personsService.getPersons()

    const recipe = this.personsService.getPersonsFromApi()

    recipe.subscribe((response: Person[]) => {
      this.persons = response
    })
  }

  // public onAddPerson(): void {
  //   const newPerson: Person = new Person(0, 'newPerson', 18)

  //   this.personsService.createPersonOnApi(newPerson).subscribe(response => {
  //     this.persons.push(response)
  //   })
  // }

  onDeleteCard(id: number): void {
    this.personsService.deletePersonOnApi(id).subscribe(() => {
      const indexToDelete = this.persons.findIndex(person => person.id = id)

      delete this.persons[indexToDelete]
    })
  }

  onUseService(): void {
    this.personsService.helloWorld()
  }

  onRegisterNewPerson(): void {
    this.router.navigateByUrl("/cadastro")
  }

  onGoToDirectivesExamples(): void {
    this.router.navigateByUrl('diretivas')
  }
}