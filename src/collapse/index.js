const { __ } = wp.i18n;
import _uniqueId from 'lodash/uniqueId';

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
} = wp.blockEditor;

let uniqueId = _uniqueId('id'); 

import icon from '../core/icon-bootstrap.svg'; 

registerBlockType('advanced-bootstrap-blocks/collapse', {
  title: __('Collapse (BS4)', 'advanced-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('collapse'),
  ],
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
      // allowedBlocks: [],
      TEMPLATE: {
        type: 'array',
        default: [

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
        className={props.className}
      >
        <InnerBlocks 
          template={ TEMPLATE }
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

const modifyBlockListBlockCollapse = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
      if (props.block.name == "advanced-bootstrap-blocks/collapse") {
        props.className = [props.className, "collapse", "show"].join(" ");
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockCollapse' );

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/collapse/modify-element-edit', 
  modifyBlockListBlockCollapse
);

const modifyGetSaveElementCollapse = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'advanced-bootstrap-blocks/collapse') {
    return (
      <div id={anchor} className={ [element.props.className, "collapse"].join(" ") }>
        {element}
      </div>
    )
  }

	return element;
}

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/collapse/modify-element-save', 
  modifyGetSaveElementCollapse
);
