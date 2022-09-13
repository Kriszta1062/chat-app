export interface Room{
    id?: string;
    name:string;
    members: string[];
    active: boolean;
    password?: string;
    access: string;
    pic: string;
  }