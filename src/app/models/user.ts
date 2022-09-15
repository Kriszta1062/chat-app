export interface User{
    id?: string;
    firstName:string;
    lastName:string;
    active: boolean;
    rooms: string[]; //id-s of the rooms we have acces to  
    pic: string;
  }