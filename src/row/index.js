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

registerBlockType('bootstrap-blocks/row', {
  title: __('Row'),
  description: __('Bootstrap - Row'),
  icon: 'layout',
  category: 'layout',
  keywords: [
      __('bootstrap-blocks'),
      __('column'),
  ],
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
      allowedBlocks: ['bootstrap-blocks/column'],
      TEMPLATE: {
        type: 'array',
        default: [
          // ['bootstrap-blocks/column', {} ,[]],
          // ['bootstrap-blocks/column', {} ,[]],
          // ['bootstrap-blocks/column', {} ,[]]
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
          allowedBlocks={['bootstrap-blocks/column']}
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
      if (props.block.name == "bootstrap-blocks/row") {
        props.className = [props.className, "row"].join(" ");
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockRow' );
wp.hooks.addFilter( 'editor.BlockListBlock', 'bootstrap-blocks/row/modify-element-edit', modifyBlockListBlockRow );

const modifyGetSaveElementRow = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'bootstrap-blocks/row') {
    return (
      <div className={ [element.props.className, "row"].join(" ") }>
        {element}
      </div>
    )
  }

	return element;
}
wp.hooks.addFilter('blocks.getSaveElement', 'bootstrap-blocks/row/modify-element-save', modifyGetSaveElementRow);
