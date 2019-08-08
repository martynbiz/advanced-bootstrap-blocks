const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow } = wp.components;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;

import {
  customClassNames
} from '../lib/classNames.js';

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
wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/core/modify-element-edit',
   modifyReusableCoreBlock 
);


const CustomClassNameInspector = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
    props.attributes.classNameFilter = typeof props.attributes.classNameFilter !== "undefined" ? props.attributes.classNameFilter : ""; 
		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
          <PanelBody
            title={ __( 'Bootstrap Classes', 'advanced-bootstrap-blocks' ) }
            initialOpen={false}
            >
            <PanelRow>
              <input 
                id="classNameFilter"
                type="text"
                placeholder="Filter class names"
                className="d-block w-100 mb-3"
                onChange={e => props.setAttributes({ classNameFilter: e.target.value }) }
              />
            </PanelRow>
            {
              customClassNames
                .filter(item => item.className.indexOf(props.attributes.classNameFilter) != -1 ? true : false )
                .map((item) => {
                return (
                  <PanelRow className="mt-0">
                    <label
                    >
                      <input 
                        type="checkbox" 
                        checked={
                          typeof props.attributes.className !== "undefined" && 
                          props.attributes.className.indexOf(item.className) != -1 ? true : false
                        }
                        onClick={() =>  {
                          console.log(typeof className, props)
                            const classNameList = typeof props.attributes.className !== "undefined" ? props.attributes.className.split(" ") : []; 
                            if (!classNameList.includes(item.className)) {
                              props.setAttributes( { 
                                className: [classNameList.join(" "), item.className].join(" ") 
                              } );
                            } else {
                              props.setAttributes( { 
                                className: classNameList.filter(name => name !== item.className).join(" ")
                              } );
                            }
                          } 
                        }
                      />
                      <small>{item.className}</small>
                    </label>
                  </PanelRow>
                )
              })
            }
          </PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'CustomClassNameInspector' );
addFilter( 'editor.BlockEdit', 'advanced-custom-blocks/custom-classname-inspector', CustomClassNameInspector );

