const { 
  createHigherOrderComponent 
} = wp.compose;

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
wp.hooks.addFilter(
  'blocks.registerBlockType',
  'gutenstrap/core/block',
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
wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'gutenstrap/core/modify-element-edit',
   modifyReusableCoreBlock 
);


