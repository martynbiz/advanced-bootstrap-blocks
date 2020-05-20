const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCardFooter,
  modifyGetSaveElementCardFooter,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Card Footer (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
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

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/card-footer/set-block-custom-class-name',
	setBlockCustomClassName
);