import {user} from '../model/User';
import { TypeClaim } from '../model/TypeClaim';
export class Claims{
    idClaims!:number;
    title!: string;
    otherDetails!: string;
    description!: string;
    typeClaim!: TypeClaim;
    statusClaims!:string;
    createdAt!:Date;
    consultAt!:Date;
    user!:user;
    isDropdownOpen:boolean=false;
}