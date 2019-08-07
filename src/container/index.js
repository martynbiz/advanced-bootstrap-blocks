const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import {
  modifyBlockListBlockContainer, 
  modifyGetSaveElementContainer
} from './utils'; 

const settings = {
  title: __( 'Container (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: 'layout',
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('container'),
  ],
  attributes: {
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