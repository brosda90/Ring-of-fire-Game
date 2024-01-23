import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

import { MatDialog } from '@angular/material/dialog';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore'; // addDoc imported here
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = new Game();

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog,
    private router: Router // Router hinzugefügt
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        const gameDocRef = doc(this.firestore, 'games', params['id']);
        docData(gameDocRef).subscribe((gameData: any) => {
          if (gameData) {
            this.game.currentPlayers = gameData.currentPlayers;
            this.game.playedCards = gameData.playedCards;
            this.game.players = gameData.players;
            this.game.stack = gameData.stack;
            this.game.pickCardAnimation = gameData.pickCardAnimation;
            this.game.currentCard = gameData.currentCard;
            Object.assign(this.game, gameData);
          }
        });
      } else {
        // Initialisieren Sie ein neues Spiel, wenn keine ID vorhanden ist
        this.newGame();
      }
    });
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop()!;
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;

        // Update the game state in Firebase
        this.updateGameState();
      }, 1000);

      setTimeout(() => {
        this.game.currentPlayers++;
        this.game.currentPlayers %= this.game.players.length;

        // Update the game state in Firebase
        this.updateGameState();
      }, 1500);
    }
  }

  updateGameState() {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      const gameDocRef = doc(this.firestore, 'games', gameId);
      const updatedState = {
        ...this.game.toJson(),
        currentPlayers: this.game.currentPlayers,
        pickCardAnimation: this.pickCardAnimation,
        currentCard: this.currentCard,
        stack: this.game.stack,
        players: this.game.players,

        // Include other properties as needed
      };
      updateDoc(gameDocRef, updatedState)
        .then(() => console.log('Game state updated'))
        .catch((error) => console.error('Error updating game state:', error));
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {});

    dialogRef.afterClosed().subscribe((name) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        console.log('The dialog was closed');
      }
    });
  }
}
