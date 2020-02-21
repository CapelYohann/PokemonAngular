import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Pokemon } from '../../classes/Pokemon'
import { BattleService } from '../../battle/service/battle/battle.service';

@Component({
  selector: 'pokemon-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {

  constructor(
    private battleService: BattleService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemon: Pokemon
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getTypes(): string[] {
    return this.battleService.getTypes();
  }
}
