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

registerBlockType('advanced-bootstrap-blocks/accordion', {
  title: __('Accordion (BS4)', 'advanced-bootstrap-blocks'),
  description: __(''),
  icon: <svg class="bi bi-bootstrap" fill="#563d7c" stroke="#563d7c" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#563d7c" stroke="#563d7c" fill-rule="evenodd" d="M6.002 2h8a4 4 0 014 4v8a4 4 0 01-4 4h-8a4 4 0 01-4-4V6a4 4 0 014-4zm0 1.5a2.5 2.5 0 00-2.5 2.5v8a2.5 2.5 0 002.5 2.5h8a2.5 2.5 0 002.5-2.5V6a2.5 2.5 0 00-2.5-2.5h-8zM7.062 14h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.543-2.11H7.063V14zm1.313-4.875V6.658h1.78c.974 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H8.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H8.375v2.725z" clip-rule="evenodd"/></svg>,
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
