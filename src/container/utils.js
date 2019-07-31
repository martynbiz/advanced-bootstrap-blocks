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

export const modifyGetSaveElementContainer = (element, blockType, attributes ) => {
  console.log({ ...attributes.backgroundPosition ? attributes.backgroundPosition.hasOwnProperty("x") ? { backgroundPosition: `${ Math.round(attributes.backgroundPosition.x * 100) }% ${ Math.round(attributes.backgroundPosition.y * 100) }%` } : { } : { } }); 

  if (!element) {
    return;
  }
  if (blockType.name === 'advanced-bootstrap-blocks/container') {
    if (attributes.isWrapped) {
      return (
        <div 
          className={element.props.className}
          { // conditionally render style attribute with backgroundImage property
            ...attributes.backgroundImage.hasOwnProperty("full") ? {
              style: {
                backgroundImage: `url(${attributes.backgroundImage.full.url})`,
                ...attributes.backgroundSize ? { backgroundSize: `${attributes.backgroundSize}` } : { },
                ...attributes.backgroundRepeat ? { backgroundRepeat: `${attributes.backgroundRepeat}` } : { },
                ...attributes.backgroundPosition ? attributes.backgroundPosition.hasOwnProperty("x") ? { backgroundPosition: `${ Math.round(attributes.backgroundPosition.x * 100) }% ${ Math.round(attributes.backgroundPosition.y * 100) }%` } : { } : { }
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
        { // conditionally render style attribute with backgroundImage property
          ...attributes.backgroundImage.hasOwnProperty("full") ? {
            style: {
              backgroundImage: `url(${attributes.backgroundImage.full.url})`,
              ...attributes.backgroundSize ? { backgroundSize: `${attributes.backgroundSize}` } : { },
              ...attributes.backgroundRepeat ? { backgroundRepeat: `${attributes.backgroundRepeat}` } : { },
              ...attributes.backgroundPosition ? attributes.backgroundPosition.hasOwnProperty("x") ? { backgroundPosition: `${ Math.round(attributes.backgroundPosition.x * 100) }% ${ Math.round(attributes.backgroundPosition.y * 100) }%` } : { } : { }
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