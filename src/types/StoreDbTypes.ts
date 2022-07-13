export type User = {
  uid: string;
  email: string;
  username: string;
  avatar?: string;
};

export type Post = {
  uid: string;
  userName: string;
  avatar: string;
  intro: string;
  image: string;
  timeStamp: string;
  likeId: string;
};

export type Comment = {
  id: number;
  uid?: string;
  avatar?: string;
  username?: string;
  comment: string;
  time: string;
};
