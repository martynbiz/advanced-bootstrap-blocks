const { 
  createHigherOrderComponent 
} = wp.compose;

const {
  getBlockDefaultClassName
} = wp.blocks;

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/button-group");

export const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

export const modifyBlockListBlockButtonGroup = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "advanced-bootstrap-blocks/button-group") {
      props.className = [props.block.attributes.className, "btn-group"].join(" ");
      props.ariaLabel = props.block.attributes.ariaLabel;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockButtonGroup' );

export const modifyGetSaveElementButtonGroup = (element, blockType, attributes) => {
  if (!element) {
    return;
  }
  if (blockType.name == 'advanced-bootstrap-blocks/button-group') {
    return (
      <div 
        className={ ["btn-group", element.props.className].join(" ").trim() }
        role="group"
        aria-label={attributes.ariaLabel}>
        {element}
      </div>
    )
  }
  return element;
}