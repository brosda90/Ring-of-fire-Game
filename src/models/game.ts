export class Game {
  public id?: string;
  public players: string[] = [];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayers: number = 0;
  public pickCardAnimation = false;
  public currentCard: string = '';

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.stack.push('ace_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
      this.stack.push('hearts_' + i);
    }

    this.shuffle(); // Properly call the shuffle method
  }

  public toJson() {
    return {
      players: this.players,
      stack: this.stack,
      playedCards: this.playedCards,
      currentPlayer: this.currentPlayers,
      pickCardAnimation: this.pickCardAnimation,
      currentCard: this.currentCard,
    };
  }

  shuffle() {
    for (let i = this.stack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]];
    }
  }
}
