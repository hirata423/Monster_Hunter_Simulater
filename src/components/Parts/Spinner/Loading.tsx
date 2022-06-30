import { Spinner, Stack } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Stack direction="row">
      <Spinner size="xl" />
    </Stack>
  );
};
