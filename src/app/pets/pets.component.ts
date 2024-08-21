import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss'
})
export class PetsComponent {

  constructor(private snackBar: MatSnackBar) {}

  callSnackbar(event: any) {
    let snackbarRef = this.snackBar.open(event, event, {duration:3000});
  }
}
