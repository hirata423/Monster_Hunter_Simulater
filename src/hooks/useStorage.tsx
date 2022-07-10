import { useCallback, useState } from "react";
import { storage } from "src/firebase";

export const useStorage = () => {
  const [image, setImage] = useState<string>("");

  const stg = useCallback((props: any) => {
    const { Children, File } = props;
    const randomId = Math.random().toString(32).substring(2);
    const uploadTask = storage
      .ref(`/images/${Children}/${randomId}.png`)
      .put(File);
    uploadTask.on(
      "state_changed",
      (snapShot: any) => {
        console.log("snapShot", snapShot);
      },
      (err: any) => {
        console.log("err", err);
      },
      () => {
        storage
          .ref(`/images/${Children}/`)
          .child(`${randomId}.png`)
          .getDownloadURL()
          .then((fireBaseUrl: string) => {
            console.log(fireBaseUrl);
            setImage(fireBaseUrl);
          });
      }
    );
  }, []);

  return { image, setImage, stg };
};
