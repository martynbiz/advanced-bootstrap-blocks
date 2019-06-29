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

registerBlockType('advanced-bootstrap-blocks/row', {
  title: __('Row (advanced-bootstrap-blocks)', 'advanced-bootstrap-blocks'),
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
      allowedBlocks: ['advanced-bootstrap-blocks/column'],
      TEMPLATE: {
        type: 'array',
        default: [
          ['advanced-bootstrap-blocks/column', {} ,[]],
          // ['advanced-bootstrap-blocks/column', {} ,[]],
          // ['advanced-bootstrap-blocks/column', {} ,[]]
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
        style={{ outline: '1px dashed orange'}}
      >
        <InnerBlocks 
          template={ TEMPLATE }
          allowedBlocks={['advanced-bootstrap-blocks/column']}
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
      if (props.block.name == "advanced-bootstrap-blocks/row") {
        props.className = [props.className, "row"].join(" ");
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockRow' );

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/row/modify-element-edit', 
  modifyBlockListBlockRow 
);

const modifyGetSaveElementRow = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'advanced-bootstrap-blocks/row') {
    return (
      <div className={ [element.props.className, "row"].join(" ") }>
        {element}
      </div>
    )
  }

	return element;
}

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/row/modify-element-save', 
  modifyGetSaveElementRow
);
