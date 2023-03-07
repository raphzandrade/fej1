import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-examples',
  templateUrl: './directives-examples.component.html',
  styleUrls: ['./directives-examples.component.scss']
})
export class DirectivesExamplesComponent implements OnInit {

  public toggleParagraph: boolean = false;
  public activeParagraph: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleParagraph(): void {
    this.toggleParagraph = !this.toggleParagraph
  }

  public onChangeActiveParagraph(): void {
    this.activeParagraph++
  }
}
