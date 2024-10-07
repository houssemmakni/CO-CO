import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reaction} from "../model/Reaction";
import {Observable, catchError} from "rxjs";
import {Reponse} from "../model/Reponse";
import {user} from "../model/User";
@Injectable({
    providedIn: 'root'
  })
  export class ReactionReponseService {
    constructor(private httpClient: HttpClient) {
    }
    AddReponse(r: Reponse,idm:number,idu:number): Observable<Reponse> {
        return this.httpClient.post<Reponse>(`http://localhost:8081/api/ReponseReaction/addReponse/${idm}/${idu}`,r);
      }
      AddReaction(r: Reaction,idm:number,idu:number): Observable<Reaction> {
        return this.httpClient.post<Reaction>(`http://localhost:8081/api/ReponseReaction/addReaction/${idm}/${idu}`,r);
      }
    
      UpdateReponse(id: number,contenu:String): Observable<Reponse> {
        return this.httpClient.put<Reponse>(`http://localhost:8081/api/ReponseReaction/UpdateReponse/${id}/${contenu}`,null);
      }
      UpdateReaction(id: number,contenu:String): Observable<Reaction> {
        return this.httpClient.put<Reaction>(`http://localhost:8081/api/ReponseReaction/UpdateReaction/${id}/${contenu}`,null);
      }
      deleteReaction(id: number) {
        return this.httpClient.delete(`http://localhost:8081/api/ReponseReaction/RemoveReaction/${id}`);
      }
  }