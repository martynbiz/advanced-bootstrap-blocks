import {
  buttonStyle
} from './utils'; 

export const save = (props) => {
  return (
    <a 
      {...props.attributes.anchor ? { id: props.attributes.anchor } : { } }
      className={
        ["btn", typeof props.className !== "undefined" && props.className.length ? props.className : [], props.attributes.size.length ? props.attributes.size : [], buttonStyle(props.attributes)]
          .join(" ")
          .replace(/\s\s+/g, ' ')
      }
      href={props.attributes.link} 
      target={props.attributes.newWindow && "_blank"}
      role="button"
      rel={props.attributes.newWindow && 'noopener noreferrer'}
    >
      {props.attributes.text}
    </a>
  );
}