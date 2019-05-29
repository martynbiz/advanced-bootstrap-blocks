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

registerBlockType('gutenstrap/row', {
  title: __('Row'),
  description: __('Bootstrap - Row'),
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
      allowedBlocks: ['gutenstrap/column'],
      TEMPLATE: {
        type: 'array',
        default: [
          // ['gutenstrap/column', {} ,[]],
          // ['gutenstrap/column', {} ,[]],
          // ['gutenstrap/column', {} ,[]]
        ]
      },
  },
  edit: function( props ) {
    const {
      className,
      attributes: {
        TEMPLATE,
      },
      setAttributes
    } = props;

    return (
      <div 
        className={props.className}
        style={{ border: '1px dashed orange'}}
      >
        <InnerBlocks 
          template={ TEMPLATE }
          allowedBlocks={['gutenstrap/column']}
        /> 
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

const modifyBlockListBlockRow = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
      if (props.block.name == "gutenstrap/row") {
        props.className = [props.className, "row"].join(" ");
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockRow' );
wp.hooks.addFilter( 'editor.BlockListBlock', 'gutenstrap/row/modify-element-edit', modifyBlockListBlockRow );

const modifyGetSaveElementRow = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'gutenstrap/row') {
    return (
      <div className={ [element.props.className, "row"].join(" ") }>
        {element}
      </div>
    )
  }

	return element;
}
wp.hooks.addFilter('blocks.getSaveElement', 'gutenstrap/row/modify-element-save', modifyGetSaveElementRow);
