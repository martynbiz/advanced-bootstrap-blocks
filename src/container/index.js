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

import icon from '../core/icon-bootstrap.svg'; 

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/container");

const settings = {
  title: __( 'Container (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
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
    // allowedBlocks: ['advanced-bootstrap-blocks/row'],
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