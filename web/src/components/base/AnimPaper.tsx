import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSpring, animated } from "@react-spring/web";

const AnimatedPaper = animated((props) => <Paper {...props} />);

export const AnimPaper = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  const { x } = useSpring({
    from: { x: 0 },
    x: isOpen ? 1 : 0,
    config: { duration: 200 },
  });

  const styles = useSpring({
    x: isOpen ? -500 : 0,
    y: isOpen ? 100 : 0,
  });

  return (
    <Box>
      <AnimatedPaper
        sx={{ m: 1, width: 100, height: 100 }}
        elevation={4}
        style={{
          height: x.to({ range: [0, 1], output: [60, 300] }),
          width: x.to({ range: [0, 1], output: [60, 500] }),
          borderRadius: x.to({ range: [0, 1], output: [45, 10] }),
          ...styles,
        }}
      >
        {children}
      </AnimatedPaper>
    </Box>
  );
};

export default AnimPaper;
