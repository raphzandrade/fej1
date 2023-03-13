import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/interfaces';
import { PersonsService } from 'src/app/services/persons/persons.service';
import { BehaviorSubject, interval, map, mapTo, Observable, Subject, takeUntil, timer } from 'rxjs'
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy {

  public persons: Person[] = []
  public seconds: number
  public dateObj: Date = new Date()
  public currencyValue: number = 99
  public personsObservable: Observable<Person[]>
  public myString: string = 'test string'


  private cancelSubscription: Subject<void> = new Subject()
  public intervalObservable = interval(1000).pipe(takeUntil(this.cancelSubscription))


  constructor(
    public personsService: PersonsService,
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadPersons()
    // this.intervalObservable.subscribe((currentSecond) => { this.seconds = currentSecond })
  }

  ngOnDestroy(): void {
    this.cancelSubscription.next()
    this.cancelSubscription.complete()
  }

  public loadPersons(): void {
    this.cancelSubscription.next()

    const recipe = this.personsService.getPersonsFromApi()
    this.personsObservable = recipe

    this.persons = undefined

    recipe.pipe(takeUntil(this.cancelSubscription)).subscribe((response: Person[]) => {
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

  onCancelSubscriptions(): void {
    this.cancelSubscription.next()
  }

  onRegisterNewPerson(): void {
    this.router.navigateByUrl("/cadastro")
  }

  onGoToDirectivesExamples(): void {
    this.router.navigateByUrl('diretivas')
  }

  public onLogout(): void {
    this.authService.logout()
  }
}