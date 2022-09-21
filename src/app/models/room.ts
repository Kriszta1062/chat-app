export interface Room {
  id?: string;
  name: string;
  members: string[]; //emails-s of the members
  // active: boolean; // wanted to display the  activity status, if at least one member is online, but I was out of time
  password?: string;
  access: string;
  pic: string;
}
