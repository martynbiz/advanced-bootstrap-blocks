const { __ } = wp.i18n;

const { 
  createHigherOrderComponent 
} = wp.compose;

const { 
  registerBlockType 
} = wp.blocks;

const {
  Toolbar,
  Button,
  Tooltip,
  Panel,
  PanelBody,
  PanelRow,
  FormToggle,
  RangeControl
} = wp.components;

const {
  Fragment
} = wp.element; 

const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
  InspectorControls,
  InnerBlocks
} = wp.editor;

registerBlockType('advanced-bootstrap-blocks/column', {
  title: __('Column (advanced-bootstrap-blocks)', 'advanced-bootstrap-blocks'),
  description: __(''),
  icon: 'layout',
  category: 'layout',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('column'),
  ],
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
  },
  edit: function ( props ) {
    return (
      <div 
        // className={props.className}
        style={{ outline: '1px dashed green'}}
      >
        <InnerBlocks />
      </div>
    );
  },
  save: function( props ) {
    return (
      <Fragment>
          <InnerBlocks.Content />
      </Fragment>
    );  
  }
});

const modifyBlockListBlockColumn = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
      if (props.block.name == "advanced-bootstrap-blocks/column") {
        props.className = [props.block.attributes.className, "col"].join(" ");
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockColumn' );

wp.hooks.addFilter(
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/column/modify-element-edit', 
  modifyBlockListBlockColumn 
);

const modifyGetSaveElementColumn = (element, blockType, attributes ) => {
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
wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/column/modify-element-save', 
  modifyGetSaveElementColumn
);
