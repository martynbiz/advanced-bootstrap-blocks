const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 

const settings = {
  title: __( 'Button (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: 'layout',
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('button'),
  ],
  attributes: {
    type: {
      type: 'string',
      default: 'default'
    },
    style: {
      type: 'string',
      default: 'btn-primary'
    },
    outline: {
      type: 'bool',
      default: false
    },
    block: {
      type: 'bool',
      default: false
    },
    text: {
      type: 'string',
      default: 'Button'
    },
    link: {
      type: 'string',
      default: '#'
    },
    size: {
      type: 'string',
      default: ''
    },
    newWindow: {
      type: 'bool',
      default: false
    },
  },
  edit: edit,
  save: save
}

registerBlockType(
  'advanced-bootstrap-blocks/button', 
  settings
);