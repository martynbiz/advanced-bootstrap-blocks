const { __ } = wp.i18n;

const { 
  registerBlockType,
  getBlockDefaultClassName
} = wp.blocks;

const {
  Fragment
} = wp.element; 

const {
  InnerBlocks
} = wp.blockEditor;

import { edit } from './edit'; 
import { save } from './save'; 
import {
  modifyBlockListBlockContainer, 
  modifyGetSaveElementContainer,
  setBlockCustomClassName,
  setBlockAttributes,
} from './utils'; 

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/container");


const settings = {
  title: __( 'Container (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  // icon: 'layout',
  icon: <svg class="bi bi-bootstrap" fill="#563d7c" stroke="#563d7c" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#563d7c" stroke="#563d7c" fill-rule="evenodd" d="M6.002 2h8a4 4 0 014 4v8a4 4 0 01-4 4h-8a4 4 0 01-4-4V6a4 4 0 014-4zm0 1.5a2.5 2.5 0 00-2.5 2.5v8a2.5 2.5 0 002.5 2.5h8a2.5 2.5 0 002.5-2.5V6a2.5 2.5 0 00-2.5-2.5h-8zM7.062 14h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.543-2.11H7.063V14zm1.313-4.875V6.658h1.78c.974 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H8.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H8.375v2.725z" clip-rule="evenodd"/></svg>,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('container'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
    classNameFilter: {
      type: 'string',
      default: ''
    },
    isFluid: {
      type: 'bool',
      default: false
    },
    isWrapped: {
      type: 'bool',
      default: false
    },
    backgroundImage: {
      type: 'object',
      default: {},
    },
    backgroundSize: {
      type: 'string',
      default: ''
    },
    backgroundRepeat: {
      type: 'string',
      default: ''
    },
    backgroundPosition: {
      type: 'object',
      default: {},
    },
    backgroundAttachment: {
      type: 'string',
      default: ''
    },
    allowedBlocks: ['advanced-bootstrap-blocks/row'],
    TEMPLATE: {
      type: 'array',
      default: [
        ['advanced-bootstrap-blocks/row', {} ,[]]
      ]
    }
  },
  edit: edit,
  save: save,
} 

registerBlockType( 
  'advanced-bootstrap-blocks/container', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/container/modify-element-edit', 
  modifyBlockListBlockContainer
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/container/modify-element-save', 
  modifyGetSaveElementContainer
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/container/set-block-custom-class-name',
	setBlockCustomClassName
);

// wp.hooks.addFilter(
// 	'blocks.getBlockAttributes',
// 	'advanced-bootstrap-blocks/container/set-block-attributes',
// 	setBlockAttributes
// );


// const fixForRenamedBlockClassNames = (props, blockType, attributes) => {
//   if (blockType.name === 'advanced-bootstrap-blocks/container') {
//       if (props.className.includes(defaultClassName)) {
//           props.className = props.className.replace(`${defaultClassName} `, '');
//       }
//   }
//   return props;
// };

// wp.hooks.addFilter(
//   'blocks.getSaveContent.extraProps',
//   'advanced-bootstrap-blocks/container/block-filters',
//   fixForRenamedBlockClassNames
// );