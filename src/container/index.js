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
  title: __( 'Container (advanced-bootstrap-blocks)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: 'layout',
  category: 'layout',
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
      default: false,
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