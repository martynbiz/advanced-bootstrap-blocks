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

registerBlockType('gutenstrap/column', {
  title: __('Column (Gutenstrap)', 'gutenstrap'),
  description: __(''),
  icon: 'layout',
  category: 'layout',
  keywords: [
      __('gutenstrap'),
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
        style={{ border: '1px dashed green'}}
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
      if (props.block.name == "gutenstrap/column") {
        props.className = [props.block.attributes.className, "col"].join(" ");
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockColumn' );

wp.hooks.addFilter(
  'editor.BlockListBlock', 
  'gutenstrap/column/modify-element-edit', 
  modifyBlockListBlockColumn 
);

const modifyGetSaveElementColumn = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'gutenstrap/column') {
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
  'gutenstrap/column/modify-element-save', 
  modifyGetSaveElementColumn
);
