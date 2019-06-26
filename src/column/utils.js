const { 
  createHigherOrderComponent 
} = wp.compose;

export const modifyBlockListBlockColumn = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "advanced-bootstrap-blocks/column") {
      props.className = [props.block.attributes.className, "col"].join(" ");
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockColumn' );

export const modifyGetSaveElementColumn = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'advanced-bootstrap-blocks/column') {
    return (
      <div className={ [element.props.className, "col"].join(" ") }>
        {element}
      </div>
    )
  }
  return element;
}