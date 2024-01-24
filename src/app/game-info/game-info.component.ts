import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit, OnChanges {


  cardAction = [
    { title: 'Alphabet-Rückwärts', description: 'Sage das Alphabet rückwärts auf, ohne einen Fehler zu machen.' },
    { title: 'Unberührter Boden', description: 'Bleibe für eine Minute auf einem Bein stehen, ohne das Gleichgewicht zu verlieren.' },
    { title: 'Gedächtniskünstler', description: 'Zähle rückwärts von 100 ab, aber überspringe jede Zahl, die durch 3 teilbar ist' },
    { title: 'Reim-Duell', description: 'Finde innerhalb von 20 Sekunden ein Wort, das sich auf "Orange" reimt.' },
    { title: 'Unsichtbare Zeichnung', description: 'Zeichne in der Luft einen Kreis und eine gerade Linie gleichzeitig, jeweils mit einer Hand.' },
    { title: 'Statuen-Spiel', description: ' Bleibe komplett bewegungslos, während die anderen versuchen, dich zum Lachen zu bringen, für 30 Sekunden.' },
    { title: 'Im Kopf Rechnen', description: ' Multipliziere zwei zufällig gewählte zweistellige Zahlen im Kopf.' },
    { title: 'Geschichtenerzähler', description: 'Beginne eine Geschichte mit einem Satz, der nächste in der Runde muss fortfahren.' },
    { title: 'Liedgut', description: 'Summe ein bekanntes Lied, und die anderen müssen es erraten.' },
    { title: 'Sprachakrobat', description: 'Wähle einen Satz und sage ihn in drei verschiedenen Sprachen.' },
    { title: 'Geistige Flexibilität', description: 'Nenne innerhalb von 15 Sekunden fünf Hauptstädte von Ländern, die nicht auf "n" enden.' },
    { title: 'Unsichtbare Künstler', description: 'Male mit deinem Finger in die Luft und die anderen müssen das Gemälde erraten.' },
    { title: 'Der Blick', description: 'Starre jemanden 30 Sekunden lang an, ohne zu blinzeln oder zu lachen. Wer zuerst nachgibt oder lacht, hat verloren.' },
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
