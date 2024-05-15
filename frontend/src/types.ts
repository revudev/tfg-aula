// import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface User {
  id?: number;
  name: string;
  email: string;
  type: string;
  user_id?: number;
}
export interface Evento {
  Date: Date;
  Event: string;
  Description: string;
  id_user: number;
}
export interface AvailableData {
  [key: string]: string[];
}
export interface messageResponsive {
  message: string;
  resultado: boolean;
}

export interface Plan {
  id?: number;
  iniciativa?: string | string[];
  mercadoMarketing?: string | string[];
  gestiones?: string | string[];
  user_id?: number;
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
