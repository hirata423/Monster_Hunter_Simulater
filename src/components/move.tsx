import { AspectRatio } from "@chakra-ui/react";

export const Move = () => {
  return (
    <>
      <AspectRatio maxW="650" h="400px" ratio={1}>
        <iframe
          src="https://www.youtube.com/embed/QWEEXLWX_Vw"
          title="YouTube video player"
          allowFullScreen
        />
      </AspectRatio>
    </>
  );
};
