const { 
  createHigherOrderComponent 
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/card");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockCard = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "advanced-bootstrap-blocks/card") {
      props.className = [props.block.attributes.className, "card"].join(" ").trim();
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockCard' );

export const modifyGetSaveElementCard = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'advanced-bootstrap-blocks/card') {
    return (
      <div className={ ["card", element.props.className].join(" ").trim() }>
        {element}
      </div>
    )
  }
  return element;
}