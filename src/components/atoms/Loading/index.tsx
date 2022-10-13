import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

export function Loading() {
  return (
    <CircularProgress
      isIndeterminate
      color="green.300"
      size="150px"
      thickness="4px"
    >
      <CircularProgressLabel fontSize="md" color="#fff">
        Carregando
      </CircularProgressLabel>
    </CircularProgress>
  );
}
