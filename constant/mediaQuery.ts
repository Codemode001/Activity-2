const breakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px",
  xxlarge: "1400px",
};

const media = {
  up(breakpoint: keyof typeof breakpoints) {
    return `@media (min-width: ${breakpoints[breakpoint]})`;
  },
  down(breakpoint: keyof typeof breakpoints) {
    return `@media (max-width: ${breakpoints[breakpoint]})`;
  },
};

export { breakpoints, media };
