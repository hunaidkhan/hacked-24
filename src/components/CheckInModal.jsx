import React from "react";
import { Box } from "native-base";

const CheckInModal = () => {
  return (
    <Box>
      <Box
        alignSelf="center" // bg="primary.500"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
        bg={["red.400", "blue.400"]}
      >
        This is a Box
      </Box>
    </Box>
  );
};

export default CheckInModal;
