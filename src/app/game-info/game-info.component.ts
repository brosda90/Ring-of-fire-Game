import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit, OnChanges {


  cardAction = [
    { title: 'Wasserfall', description: 'Alle müssen gleichzeitig anfangen zu trinken. Sobald Spieler 1 aufhört zu trinken, darf Spieler 2 aufhören. Spieler 3 darf aufhören, sobald Spieler 2 aufgehört hat, und so weiter.' },
    { title: 'Du', description: 'Du entscheidest, wer trinkt' },
    { title: 'Ich', description: 'Glückwunsch! Trinke einen Shot!' },
    { title: 'Kategorie', description: 'Denke dir eine Kategorie aus (z.B. Farben). Jeder Spieler muss einen Gegenstand aus der Kategorie nennen.' },
    { title: 'Bust a jive', description: 'Spieler 1 macht eine Tanzbewegung. Spieler 2 wiederholt die Tanzbewegung und fügt eine zweite hinzu.' },
    { title: 'Mädels', description: 'Jeder zweite trinkt' },
    { title: 'Himmel', description: 'Hebt die Hände hoch! Der letzte Spieler trinkt!' },
    { title: 'Kumpel', description: 'Suche dir einen Kumpel aus. Dein Kumpel muss immer trinken, wenn du trinkst und umgekehrt.' },
    { title: 'Daumenmeister', description: 'Spieler 3 trinkt' },
    { title: 'Männer', description: 'Alle Männer trinken.' },
    { title: 'Quizmaster', description: 'Alle Frauen trinken.' },
    { title: 'Ich habe noch nie...', description: 'Sage etwas, das du nie getan hast. Jeder, der es getan hat, muss trinken.' },
    { title: 'Regel', description: 'Stelle eine Regel auf. Jeder muss trinken, wenn er die Regel bricht.' },
  ];
  

  title: string = '';
  description: string = '';
  @Input() card: string = '';

  constructor(){}

  ngOnInit(): void {}

  ngOnChanges(): void{
    if(this.card){
    let cardNumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber - 1].title;
    this.description = this.cardAction[cardNumber - 1].description;
  }
}
}
