const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCardBody,
  modifyGetSaveElementCardBody 
} from './utils';

const settings = {
  title: __( 'Card Body (advanced-bootstrap-blocks)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: 'layout',
  category: 'layout',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('card'),
      __('body'),
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
  'advanced-bootstrap-blocks/card-body', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/card-body/modify-element-edit', 
  modifyBlockListBlockCardBody
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/card-body/modify-element-save', 
  modifyGetSaveElementCardBody
);