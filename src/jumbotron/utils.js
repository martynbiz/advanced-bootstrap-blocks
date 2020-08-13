const { 
  createHigherOrderComponent 
} = wp.compose;

const { 
  getBlockDefaultClassName 
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/jumbotron");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const setBlockAttributes = ( attributes ) => {
  if (typeof attributes.className !== "undefined")
    attributes.className = attributes.className.replace(`${defaultClassName} `, "");
  
	return attributes;
}

export const modifyBlockListBlockJumbotron = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "advanced-bootstrap-blocks/jumbotron") {
      props.className = props.attributes.isWrapped ? props.className : "";
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockJumbotron' );

export const modifyGetSaveElementJumbotron = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name === 'advanced-bootstrap-blocks/jumbotron') {
    // if (attributes.isWrapped) {
    //   return (
    //     <div 
    //       {...attributes.anchor ? { id: attributes.anchor } : { } }
    //       className={element.props.className}
    //       { // conditionally render style attribute with backgroundImage property
    //         ...attributes.backgroundImage.hasOwnProperty("full") ? {
    //           style: {
    //             backgroundImage: `url(${attributes.backgroundImage.full.url})`,
    //             ...attributes.backgroundSize ? { backgroundSize: `${attributes.backgroundSize}` } : { },
    //             ...attributes.backgroundRepeat ? { backgroundRepeat: `${attributes.backgroundRepeat}` } : { },
    //             ...attributes.backgroundPosition ? attributes.backgroundPosition.hasOwnProperty("x") ? { backgroundPosition: `${ Math.round(attributes.backgroundPosition.x * 100) }% ${ Math.round(attributes.backgroundPosition.y * 100) }%` } : { } : { },
    //             ...attributes.backgroundAttachment ? { backgroundAttachment: `${attributes.backgroundAttachment}` } : { },
    //           }
    //         } : {

    //         }
    //       }
    //     >
    //       <div className={ attributes.isFluid ? "jumbotron jumbotron-fluid" : "jumbotron" }>
    //         {element}
    //       </div>
    //     </div>
    //   )
    // }
    return (
      <div 
        {...attributes.anchor ? { id: attributes.anchor } : { } }
        className={ [(attributes.isFluid ? "jumbotron jumbotron-fluid" : "jumbotron"), element.props.className].join(" ").trim() }
        { // conditionally render style attribute with backgroundImage property
          ...attributes.backgroundImage.hasOwnProperty("full") ? {
            style: {
              backgroundImage: `url(${attributes.backgroundImage.full.url})`,
              ...attributes.backgroundSize ? { backgroundSize: `${attributes.backgroundSize}` } : { },
              ...attributes.backgroundRepeat ? { backgroundRepeat: `${attributes.backgroundRepeat}` } : { },
              ...attributes.backgroundPosition ? attributes.backgroundPosition.hasOwnProperty("x") ? { backgroundPosition: `${ Math.round(attributes.backgroundPosition.x * 100) }% ${ Math.round(attributes.backgroundPosition.y * 100) }%` } : { } : { },
              ...attributes.backgroundAttachment ? { backgroundAttachment: `${attributes.backgroundAttachment}` } : { },
            }
          } : {

          }
        }
      >
        {element}
      </div>
    )
  }
  return element;
}