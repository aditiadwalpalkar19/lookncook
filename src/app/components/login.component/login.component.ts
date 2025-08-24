import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  loginWithGoogle = () => {
    this.auth.loginWithGoogle().subscribe({
      next: (user: any) => {
        this.router.navigate(['/overview']);
      },
    });
  };
}
