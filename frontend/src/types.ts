// import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface User {
  id?: number;
  name: string;
  email: string;
  type: string;
}
export interface Evento {
  Date: Date;
  Event: string;
  Description: string;
  id_user: number;
}
// export interface Options{
//   headers?: HttpHeaders | {
//       [header: string]: string | string[];
//   };
//   observe?: 'body';
//   context?: HttpContext;
//   params?: HttpParams | {
//       [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
//   };
//   reportProgress?: boolean;
//   responseType?: 'json';
//   withCredentials?: boolean;
//   transferCache?: {
//       includeHeaders?: string[];
//   } | boolean;
// }
