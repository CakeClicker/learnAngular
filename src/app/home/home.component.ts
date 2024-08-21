import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
likeCounter = 0;
constructor(private snackbar: MatSnackBar){}

likeShibe(event: any) {
  this.likeCounter++;
   this.snackbar.open("Thx for liking", "dismiss",
    {duration:3000}
  )
}
shareShibe(event: any) {
  this.snackbar.open("Thx for sharing", "dismiss",
    {duration:3000}
  )
}

}
