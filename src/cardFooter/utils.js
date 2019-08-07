const { 
  createHigherOrderComponent 
} = wp.compose;

export const modifyBlockListBlockCardHeader = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == 'advanced-bootstrap-blocks/card-footer') {
      props.className = [props.block.attributes.className, "card-footer"].join(" ");
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCardBody' );

export const modifyGetSaveElementCardHeader = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'advanced-bootstrap-blocks/card-footer') {
    return (
      <div className={ [element.props.className, "card-footer"].join(" ") }>
        {element}
      </div>
    )
  }
  return element;
}