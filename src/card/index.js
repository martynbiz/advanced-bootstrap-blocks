const { __ } = wp.i18n;
import _uniqueId from 'lodash/uniqueId';

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCard,
  modifyGetSaveElementCard,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Card (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('card'),
  ],
  attributes: {
    // allowedBlocks: ['advanced-bootstrap-blocks/row'],
    TEMPLATE: {
      type: 'array',
      default: [
        ['advanced-bootstrap-blocks/card-header', {} ,[
          ['core/heading', { className: 'mb-0', level: '3', content: __('Card Title') } ,[]],
        ]],
        ['advanced-bootstrap-blocks/card-body', {} ,[]],
      ]
    }
  },
  edit: edit,
  save: save,
} 

registerBlockType( 
  'advanced-bootstrap-blocks/card', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/card/modify-element-edit', 
  modifyBlockListBlockCard
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/card/modify-element-save', 
  modifyGetSaveElementCard
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/card/set-block-custom-class-name',
	setBlockCustomClassName
);