export interface Room{
    id?: string;
    name:string;
    members: string[]; //id-s of the members 
    active: boolean;
    password?: string;
    access: string;
    pic: string;
  }