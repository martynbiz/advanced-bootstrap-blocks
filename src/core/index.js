const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;

import { CustomClassNameInspector } from './coreClassNameInspector.js';
import { CustomPaddingInspector } from './corePaddingInspector.js';

addFilter( 
  'editor.BlockEdit', 
  'advanced-custom-blocks/custom-classname-inspector', 
  CustomClassNameInspector 
);

addFilter( 
  'editor.BlockEdit', 
  'advanced-custom-blocks/custom-padding-inspector', 
  CustomPaddingInspector 
);

const addSupportReusableCoreBlock = function( settings, name ) {
  if ( name === 'core/block' ) {
      const newSettings = lodash.assign( {}, settings, {
        supports: lodash.assign( {}, settings.supports, {
          align: true, 
          default: 'full'
        } ),
      } );
      settings = newSettings; 
  }
  return settings;
}
addFilter(
  'blocks.registerBlockType',
  'advanced-bootstrap-blocks/core/block',
  addSupportReusableCoreBlock
);

const modifyReusableCoreBlock = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "core/block") {
      props.attributes.align = props.attributes.align || 'full';
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockContainer' );
addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/core/modify-element-edit',
   modifyReusableCoreBlock 
);