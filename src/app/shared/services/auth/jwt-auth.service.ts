import { Injectable } from "@angular/core";
import { LocalStoreService } from "../local-store.service";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { map, catchError, delay } from "rxjs/operators";
import { User } from "../../models/user.model";
import { of, BehaviorSubject, throwError } from "rxjs";
import { environment } from "environments/environment";

const DEMO_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNha3RoaXZlbCBNIiwiaWF0IjoxNTE2MjM5MDIyfQ.bBICv7tbGE5acaOULVhq_q9O50dHiYDnSfQYg3_Av1k";

const DEMO_USER: User = {
  id: "5b700c45639d2c0c54b354ba",
  displayName: "Sakthivel M",
  role: "SA",
};

@Injectable({
  providedIn: "root",
})
export class JwtAuthService {
  token;
  isAuthenticated: Boolean;
  user: User = {};
  user$ = (new BehaviorSubject<User>(this.user));
  signingIn: Boolean;
  return: string;
  JWT_TOKEN = "JWT_TOKEN";
  APP_USER = "ICUST_USER";

  constructor(
    private ls: LocalStoreService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/');
  }

  public signin() {
    return of({token: DEMO_TOKEN, user: DEMO_USER})
      .pipe(
        delay(1000),
        map((res: any) => {
          this.setUserAndToken(res.token, res.user, !!res);
          this.signingIn = false;
          return res;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );

  }

  /*
    checkTokenIsValid is called inside constructor of
    shared/components/layouts/admin-layout/admin-layout.component.ts
  */
  public checkTokenIsValid() {
    return of(DEMO_USER)
      .pipe(
        map((profile: User) => {
          this.setUserAndToken(this.getJwtToken(), profile, true);
          this.signingIn = false;
          return profile;
        }),
        catchError((error) => {
          return of(error);
        })
      );
    
  }

  public signout() {
    this.setUserAndToken(null, null, false);
    this.router.navigateByUrl("sessions/signin");
  }

  isLoggedIn(): Boolean {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return this.ls.getItem(this.JWT_TOKEN);
  }
  getUser() {
    return this.ls.getItem(this.APP_USER);
  }

  setUserAndToken(token: String, user: User, isAuthenticated: Boolean) {
    this.isAuthenticated = isAuthenticated;
    this.token = token;
    this.user = user;
    this.user$.next(user);
    this.ls.setItem(this.JWT_TOKEN, token);
    this.ls.setItem(this.APP_USER, user);
  }
}
