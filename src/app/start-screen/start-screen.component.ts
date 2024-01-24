import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../models/game';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore'; // addDoc imported here

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent implements OnInit {
  private game: Game;
  public showRules = false;

  constructor(private router: Router, private firestore: Firestore) {
    this.game = new Game(); // Initialisieren Sie das Game-Objekt
  }
  ngOnInit(): void {}

  newGame() {
    const gamesCollection = collection(this.firestore, 'games');
    addDoc(gamesCollection, { ...this.game })
      .then((docRef) => {
        console.log(`New game added with ID: ${docRef.id}`);
        this.router.navigate(['/game', docRef.id]); // Navigieren zur URL mit ID
      })
      .catch((error) => {
        console.error('Error adding game to Firestore: ', error);
      });
  }

  rules() {
    this.showRules = true; // Setzen Sie showRules auf true, wenn auf "Regeln" geklickt wird
  }

  closeRules() {
    this.showRules = false; // Setzen Sie showRules auf false, wenn auf "Schließen" geklickt wird
  }
}
