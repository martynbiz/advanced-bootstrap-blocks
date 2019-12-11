const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCard,
  modifyGetSaveElementCard 
} from './utils';

const settings = {
  title: __( 'Card (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: 'layout',
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
        ['advanced-bootstrap-blocks/card-header', {} ,[]],
        ['advanced-bootstrap-blocks/card-body', {} ,[]],
        ['advanced-bootstrap-blocks/card-footer', {} ,[]],
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