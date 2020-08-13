const { __ } = wp.i18n;

const { 
  createHigherOrderComponent 
} = wp.compose;

const { 
  registerBlockType,
  getBlockDefaultClassName
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
} = wp.blockEditor;

import icon from '../core/icon-bootstrap.svg'; 

registerBlockType('advanced-bootstrap-blocks/card-deck', {
  title: __('Card Deck (BS4)', 'advanced-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('card-deck'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
      allowedBlocks: ['advanced-bootstrap-blocks/card'],
      TEMPLATE: {
        type: 'array',
        default: [
          ['advanced-bootstrap-blocks/card', {} ,[]],
          ['advanced-bootstrap-blocks/card', {} ,[]],
          // ['advanced-bootstrap-blocks/card', {} ,[]]
        ]
      },
  },
  edit: function( props ) {
    const {
      className,
      attributes: {
        anchor,
        TEMPLATE,
      },
      setAttributes
    } = props;

    return (
      <div 
        {...anchor ? { id: anchor } : { } }
        className={props.className}
      >
        <InnerBlocks 
          template={ TEMPLATE }
          allowedBlocks={['advanced-bootstrap-blocks/card']}
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

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/card-deck");

const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/card-deck/set-block-custom-class-name',
	setBlockCustomClassName
);

const modifyBlockListBlockRow = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
      if (props.block.name == "advanced-bootstrap-blocks/card-deck") {
        props.className = [props.className, "card-deck"].join(" ");
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockRow' );

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/card-deck/modify-element-edit', 
  modifyBlockListBlockRow 
);

const modifyGetSaveElementRow = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'advanced-bootstrap-blocks/card-deck') {
    return (
      <div 
        {...attributes.anchor ? { id: attributes.anchor } : { } } 
        className={ ["card-deck", element.props.className].join(" ").trim() }
      >
        {element}
      </div>
    )
  }

	return element;
}

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/card-deck/modify-element-save', 
  modifyGetSaveElementRow
);
