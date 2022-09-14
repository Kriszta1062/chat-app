export interface User{
    id?: string;
    location:string;
    firstName:string;
    lastName:string;
    email: string;
    active: boolean;
    birth:string;
    rooms: string[]; //id-s of the rooms we have acces to  
    pic: string;
    password: string;
  }