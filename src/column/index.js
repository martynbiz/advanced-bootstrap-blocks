const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockColumn,
  modifyGetSaveElementColumn 
} from './utils';

registerBlockType('advanced-bootstrap-blocks/column', {
  title: __('Column (advanced-bootstrap-blocks)', 'advanced-bootstrap-blocks'),
  description: __(''),
  icon: 'layout',
  category: 'layout',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('column'),
  ],
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
  },
  edit: edit,
  save: save
});

wp.hooks.addFilter(
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/column/modify-element-edit', 
  modifyBlockListBlockColumn 
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/column/modify-element-save', 
  modifyGetSaveElementColumn
);
