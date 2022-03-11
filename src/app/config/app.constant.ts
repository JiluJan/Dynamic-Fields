// import { environment } from "app/environments/environment.prod";

import { environment } from "environments/environment";





export class AppConstants {
  /*
  *Base URL is not used anywhere so dont change it and dont delete it
  */
  public static get baseURL(): string {
    return environment.ICUST_URL;

  }

}
