import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private persons: Person[] = [
    { id: 0, name: 'outros nomes', age: 40 },
    { id: 0, name: 'outros nomes2', age: 41 },
  ]

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPersons(): Person[] {
    return this.persons
  }

  public getPersonsFromApi(): Observable<Person[]> {
    const url = 'http://localhost:3000/persons'

    const recipe = this.httpClient.get<Person[]>(url)

    return recipe
  }

  public createPerson(newPerson: Person): void {
    this.persons.push(newPerson)
  }

  public createPersonOnApi(newPerson: Person): Observable<Person> {
    const url = 'http://localhost:3000/persons'

    const recipe = this.httpClient.post<Person>(url, newPerson)

    return recipe
  }

  public deletePersonOnApi(id: number): Observable<unknown> {
    const url = `http://localhost:3000/persons/${id}`

    const recipe = this.httpClient.delete(url)

    return recipe
  }

  public helloWorld(): void {
    console.log('Hello World!')
  }
}
