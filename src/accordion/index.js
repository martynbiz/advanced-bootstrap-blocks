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

registerBlockType('advanced-bootstrap-blocks/accordion', {
  title: __('Accordion (BS4)', 'advanced-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('accordion'),
      __('collapse'),
  ],
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
      allowedBlocks: ['advanced-bootstrap-blocks/accordion'],
      TEMPLATE: {
        type: 'array',
        default: [
          ['advanced-bootstrap-blocks/card', {} ,[
            [ 
              'advanced-bootstrap-blocks/card-header', {}, 
              [
                ['core/group', { anchor: 't'+uniqueId, className: 'h3 mb-0', }, [
                  ['advanced-bootstrap-blocks/button', { className: 'text-left', style: 'link', block: true, text: 'Text', link: uniqueId }, []]
                ]],
              ]
            ],
            ['core/group', {
              anchor: uniqueId
            }, [
              ['advanced-bootstrap-blocks/card-body', {} ,[]],
            ]]
          ]],
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

const modifyBlockListBlockAccordion = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
      if (props.block.name == "advanced-bootstrap-blocks/accordion") {
        props.className = [props.className, "accordion"].join(" ");
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockAccordion' );

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/accordion/modify-element-edit', 
  modifyBlockListBlockAccordion
);

const modifyGetSaveElementAccordion = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'advanced-bootstrap-blocks/accordion') {
    return (
      <div className={ [element.props.className, "accordion"].join(" ") }>
        {element}
      </div>
    )
  }

	return element;
}

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/accordion/modify-element-save', 
  modifyGetSaveElementAccordion
);
