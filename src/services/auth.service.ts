import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    return from(
      signInWithPopup(this.auth, provider)
        .then((success) => true)
        .catch((error) => null)
    );
  };

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  get currentUser() {
    return this.auth.currentUser;
  }
}
