const { 
  createHigherOrderComponent 
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/card-body");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCardBody = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == 'advanced-bootstrap-blocks/card-body') {
      props.className = ["card-body", props.block.attributes.className].join(" ").trim();
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCardBody' );

export const modifyGetSaveElementCardBody = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'advanced-bootstrap-blocks/card-body') {
    return (
      <div className={ ["card-body", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}