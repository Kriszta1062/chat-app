export interface Message {
  id?: string;
  text: string;
  time: number;
  userId: string; // this is email not Id, did not have time to rename it everywhere
  roomId: string;
}
