import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
  isChecked = false;

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  onToggleChange(event: any) {
    let snackbarRef = this.snackBar.open(`Toggle is ${event.checked ? 'ON' : 'OFF'}`, 'Close', {
      duration: 3000
    });
    };
    navigateToPets() {
      this.router.navigate(['/pets']);
    }
    navigateToHome() {
      this.router.navigate(['/home']);
    }
  }
