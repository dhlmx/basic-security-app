import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sign } from 'fake-jwt-sign';
import * as decode from 'jwt-decode';
import {
  BehaviorSubject,
  Observable,
  of,
  throwError as observableThrowError
} from 'rxjs';
import {
  catchError,
  map
} from 'rxjs/operators';
import {environment } from '../../../environments/environment';
import { Role } from './role.enum';

export interface IAuthStatus {
  isAuthenticated: boolean;
  userRole: Role;
  userId: string;
}

interface IServerAuthResponse {
  accessToken: string;
}

const defaultAuthStatus = {
  isAuthenticated: false,
  userRole: Role.None,
  userId: null
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<IServerAuthResponse>;
  authStatus = new BehaviorSubject<IAuthStatus>(defaultAuthStatus);

  constructor(private httpClient: HttpClient) {
    // Fake login function to simulate roles
    this.authProvider = this.fakeAuthProvider;
    // Example of a real login call to server-side
    // this.authProvider = this.exampleAuthProvider
  }

  private fakeAuthProvider(email: string, password: string): Observable<IServerAuthResponse> {
    if (!email.toLowerCase().endsWith('@test.com')) {
      return observableThrowError('Failed to login! Email needs to end with @test.com.');
    }

    const authStatus = { isAuthenticated: true, userId: 'e4d1bc2ab25c', userRole: email.toLowerCase().includes('seller')
      ? Role.Seller
      : email.toLowerCase().includes('administrator')
      ? Role.Administrator
      : Role.None
    } as IAuthStatus;

    const authResponse = { accessToken: sign(authStatus, 'secret', { expiresIn: '1h', algorithm: 'none', }), } as IServerAuthResponse;
    return of(authResponse);
  }
}
