const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCardHeader,
  modifyGetSaveElementCardHeader 
} from './utils';

const settings = {
  title: __( 'Card Header (advanced-bootstrap-blocks)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: 'layout',
  category: 'layout',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('card'),
      __('header'),
  ],
  // attributes: {
  //   allowedBlocks: ['advanced-bootstrap-blocks/row'],
  //   TEMPLATE: {
  //     type: 'array',
  //     default: [
  //       ['advanced-bootstrap-blocks/row', {} ,[]]
  //     ]
  //   }
  // },
  edit: edit,
  save: save,
} 

registerBlockType( 
  'advanced-bootstrap-blocks/card-header', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/card-header/modify-element-edit', 
  modifyBlockListBlockCardHeader
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/card-header/modify-element-save', 
  modifyGetSaveElementCardHeader
);