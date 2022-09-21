export interface User {
  id?: string; //we get it form the authenticated user
  firstName: string; //get from user input
  lastName: string; //get from user input
  active: boolean; //automatically change when logging in
  pic: string; //get from user input
  email: string;
}
