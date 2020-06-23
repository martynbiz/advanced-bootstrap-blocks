const { 
  createHigherOrderComponent 
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/card-footer");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCardFooter = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == 'advanced-bootstrap-blocks/card-footer') {
      props.className = ["card-footer", props.block.attributes.className].join(" ").trim();
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCardFooter' );

export const modifyGetSaveElementCardFooter = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'advanced-bootstrap-blocks/card-footer') {
    return (
      <div className={ ["card-footer", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}