const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import {
  setBlockCustomClassName
} from './utils'; 

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Button (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('button'),
      __('btn'),
  ],
  supports: {
    anchor: true,
  },
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

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/button/set-block-custom-class-name',
	setBlockCustomClassName
);