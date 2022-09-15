export interface User{
    id?: string; //we get it form the authenticated user
    firstName:string;  //get from user input
    lastName:string; //get from user input
    active: boolean; //automatically change when logging in 
    rooms: string[]; //id-s of the rooms we have acces to  //we have an empty one in the beginning
    pic: string;  //get from user input
    email: string;
  }