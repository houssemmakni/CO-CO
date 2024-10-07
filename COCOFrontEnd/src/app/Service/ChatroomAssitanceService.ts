import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Chatrromassistance} from "../model/Chatrromassistance";
import {Observable, catchError} from "rxjs";
import {MessageChattrom} from "../model/MessageChattrom";
import {user} from "../model/User";
@Injectable({
    providedIn: 'root'
  })
  export class ChatroomAssitanceService {
    constructor(private httpClient: HttpClient) {
    }
    getAllUsers() {
        return this.httpClient.get<user>('http://localhost:8081/api/Chatroom/AllUsers');
      }
    getAllRooms() {
        return this.httpClient.get<any>('http://localhost:8081/api/Chatroom/AllChatroom');
      }
    deleteChaatroom(id: number) {
        return this.httpClient.delete(`http://localhost:8081/api/Chatroom/Delete/${id}`);
      }
      joindre(idu: number,idroom:number): Observable<Chatrromassistance> {
        return this.httpClient.put<Chatrromassistance>(`http://localhost:8081/api/Chatroom/joindre/${idu}/${idroom}`,null);
      }
      invite(ids: number[], idroom: number): Observable<Chatrromassistance> {
        return this.httpClient.post<Chatrromassistance>(`http://localhost:8081/api/Chatroom/invite/${idroom}`,ids);
      }
      updateChatroom(c: Chatrromassistance): Observable<Chatrromassistance> {
        return this.httpClient.post<Chatrromassistance>(`http://localhost:8081/api/Chatroom/update`,c);
      }
      AddChatroom(c: Chatrromassistance,id:number): Observable<Chatrromassistance> {
        return this.httpClient.post<Chatrromassistance>(`http://localhost:8081/api/Chatroom/add/${id}`,c);
      }

      AddMessage(m: MessageChattrom,idromm:number,idu:number): Observable<MessageChattrom> {
        return this.httpClient.post<MessageChattrom>(`http://localhost:8081/api/Message/add/${idromm}/${idu}`,m);
      }
      UpdateMessage(m: MessageChattrom): Observable<MessageChattrom> {
        return this.httpClient.post<MessageChattrom>(`http://localhost:8081/api/Message/update`,m);
      }
      deleteMessage(id: number) {
        return this.httpClient.delete(`http://localhost:8081/api/Message/remove/${id}`);
      }
      username(id:number){
        return this.httpClient.get<string>(`http://localhost:8081/api/Chatroom/getusername/${id}`);
      }
  }