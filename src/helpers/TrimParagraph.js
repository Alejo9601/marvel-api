const TrimParagraph = (p, max_chars) => {
  if (p.length > max_chars) {
    p = p.substr(0, max_chars) + " ...";
  }
  return p;
};

export default TrimParagraph;
