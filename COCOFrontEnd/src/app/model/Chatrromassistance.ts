import { user } from './User';
import { MessageChattrom } from './MessageChattrom';

export class Chatrromassistance {
    chatRoomId!: number;
    description!: string;
    nom!: string;
    owner!: user;
    status!: boolean;
    messages!: MessageChattrom[];
    isitowner!:boolean;
    isitinthelis!:boolean;
    users!:user[];
  }