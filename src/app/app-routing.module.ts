import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'game/:id', component: GameComponent }, // Ändern Sie diese Zeile
  { path: 'game', component: GameComponent }, // Optional, falls Sie eine Route ohne ID wollen
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
