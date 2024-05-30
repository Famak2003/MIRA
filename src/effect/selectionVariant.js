const selectionVariant = {
  hoverEffect: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
  clickEffect: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
  visible: {
    x: "-128px",
    y: "80px",
    transition: {
      type: "spring",
    },
  },
};
export { selectionVariant };
