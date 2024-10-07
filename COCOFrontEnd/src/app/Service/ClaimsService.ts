import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams  } from '@angular/common/http';
import { Claims } from '../model/Claims';
import {Observable, catchError} from "rxjs";
@Injectable({
    providedIn: 'root',
  })
  export class ClaimsService {
    
    constructor(private httpClient: HttpClient){}
    GetALLClaims() {
        return this.httpClient.get<Claims>('http://localhost:8081/api/GetALLClaims');
      }
      findByUser(id:number) {
        return this.httpClient.get<Claims>(`http://localhost:8081/api/findByUser/${id}`);
      }
    AddClaim(claim:Claims): Observable<Claims> {
        return this.httpClient.post<Claims>('http://localhost:8081/api/addClaim', claim);
      }
      statusClaims(id: number, statu:string): Observable<Claims> {
        return this.httpClient.put<Claims>(`http://localhost:8081/api/statusClaims/${id}/${statu}`, null);
      }
      Delete(id: number) {
        return this.httpClient.delete(`http://localhost:8081/api/DeleteClaims/${id}`);
      }
      UpdateClaims(claim: Claims): Observable<Claims> {
        return this.httpClient.put<Claims>('http://localhost:8081/api/UpdateClaims', claim);
      }
      calculateClaimPercentage(): Observable<Map<string, number>> {
        return this.httpClient.get<Map<string, number>>('http://localhost:8081/api/calculateClaimPercentage');
      }
      getClaims(page: number, size: number): Observable<Claims[]> {
        const params = new HttpParams()
          .set('page', page.toString())
          .set('size', size.toString());
    
        return this.httpClient.get<Claims[]>('http://localhost:8081/api/claims/page', { params });
      }
  }