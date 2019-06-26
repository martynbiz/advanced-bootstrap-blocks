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
  if (!element) {
    return;
  }
  if (blockType.name === 'advanced-bootstrap-blocks/container') {
    if (attributes.isWrapped) {
      return (
        <div className={element.props.className}>
          <div className={ attributes.isFluid ? "container-fluid" : "container" }>
            {element}
          </div>
        </div>
      )
    }
    return (
      <div className={ [element.props.className, (attributes.isFluid ? "container-fluid" : "container")].join(" ") }>
        {element}
      </div>
    )
  }
  return element;
}