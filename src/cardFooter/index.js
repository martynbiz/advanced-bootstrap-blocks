const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCardFooter,
  modifyGetSaveElementCardFooter 
} from './utils';

const settings = {
  title: __( 'Card Footer (advanced-bootstrap-blocks)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: 'layout',
  category: 'layout',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('card'),
      __('footer'),
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
  'advanced-bootstrap-blocks/card-footer', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/card-footer/modify-element-edit', 
  modifyBlockListBlockCardFooter
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/card-footer/modify-element-save', 
  modifyGetSaveElementCardFooter
);