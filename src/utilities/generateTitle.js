function generateTitle(text) {
  const choppedTitle = text.split(" ");
  const generatedTitle = `${choppedTitle[0]}...${choppedTitle
    .slice(-2)
    .join(" ")}`;
  return generatedTitle;
}

export default generateTitle;
