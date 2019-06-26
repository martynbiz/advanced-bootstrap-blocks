export const buttonStyle = ({ style, outline, block }) => {
  let styles = style; 
  if (outline)
    styles = styles.replace("btn-", "btn-outline-");
  if (block)
    styles = styles + " btn-block";
  return styles; 
}