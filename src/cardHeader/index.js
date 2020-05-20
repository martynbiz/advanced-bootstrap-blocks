const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCardHeader,
  modifyGetSaveElementCardHeader,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Card Header (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('card'),
      __('header'),
  ],
  attributes: {
    // allowedBlocks: ['advanced-bootstrap-blocks/row'],
    TEMPLATE: {
      type: 'array',
      default: [
        // ['core/heading', { className: 'mb-0', anchor: newId('a'), level: '2', content: __('Card Title') } ,[]],
      ]
    }
  },
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

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/card-header/set-block-custom-class-name',
	setBlockCustomClassName
);