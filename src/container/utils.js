const { 
  createHigherOrderComponent 
} = wp.compose;

export const modifyBlockListBlockContainer = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "advanced-bootstrap-blocks/container") {
      props.className = props.attributes.isWrapped ? props.className : "";
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockContainer' );

export const checkStyles = (backgroundImage) => {
  if (backgroundImage) {
    return { 
      backgroundImage: `url(${backgroundImage.full.url})`
    };
  } else {
    return;
  }
}

export const modifyGetSaveElementContainer = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name === 'advanced-bootstrap-blocks/container') {
    if (attributes.isWrapped) {
      return (
        <div 
          className={element.props.className}
          { // conditionally render style attribute with backgroundImage property
            ...attributes.backgroundImage ? {
              style: {
                backgroundImage: `url(${attributes.backgroundImage.full.url})`
              }
            } : {

            }
          }
        >
          <div className={ attributes.isFluid ? "container-fluid" : "container" }>
            {element}
          </div>
        </div>
      )
    }
    return (
      <div 
        className={ [element.props.className, (attributes.isFluid ? "container-fluid" : "container")].join(" ") }
        style={{
          backgroundImage: attributes.backgroundImage ? `url(${attributes.backgroundImage.full.url})` : '',
        }}
      >
        {element}
      </div>
    )
  }
  return element;
}