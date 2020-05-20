const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockButtonGroup,
  modifyGetSaveElementButtonGroup,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Button Group (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('button'),
      __('btn'),
      __('group'),
  ],
  attributes: {
    ariaLabel: {
      type: 'string',
      default: 'Button Group'
    },
    allowedBlocks: ['advanced-bootstrap-blocks/button', ''],
    TEMPLATE: {
      type: 'array',
      default: [
        ['advanced-bootstrap-blocks/button', {} ,[]],
        ['advanced-bootstrap-blocks/button', {} ,[]]
      ]
    }
  },
  edit: edit,
  save: save,
} 

registerBlockType( 
  'advanced-bootstrap-blocks/button-group', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/button-group/modify-element-edit', 
  modifyBlockListBlockButtonGroup
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/button-group/modify-element-save', 
  modifyGetSaveElementButtonGroup
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/button-group/set-block-custom-class-name',
	setBlockCustomClassName
);