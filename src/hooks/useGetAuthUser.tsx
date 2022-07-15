import { useEffect, useState } from "react";
import { auth, db } from "src/firebase";
import { User } from "src/types/StoreDbTypes";

export const useGetAuthUser = () => {
  const [user, setUser] = useState<Partial<User>>();

  const uid = auth.currentUser?.uid;
  const usersCol = db.collection("users").doc(uid);

  useEffect(() => {
    usersCol.get().then((doc) => {
      setUser(doc.data());
    });
    // eslint-disable-next-line
  }, []);

  return user;
};
