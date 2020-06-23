const { 
  createHigherOrderComponent 
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/column");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

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
      <div 
        {...attributes.anchor ? { id: attributes.anchor } : { } }
        className={ ["col", element.props.className].join(" ").trim() }
      >
        {element}
      </div>
    )
  }
  return element;
}