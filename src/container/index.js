const { __ } = wp.i18n;

const { 
  createHigherOrderComponent 
} = wp.compose;

const { 
  registerBlockType 
} = wp.blocks;

const {
  Toolbar,
  Button,
  Tooltip,
  Panel,
  PanelBody,
  PanelRow,
  FormToggle,
  RangeControl
} = wp.components;

const {
  Fragment
} = wp.element; 

const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
  InspectorControls,
  InnerBlocks
} = wp.editor;

// import "./editor.scss"; 

registerBlockType( 'bootstrap-blocks/container', {
    title: __( 'Bootstrap - Container', 'bootstrap-blocks' ),
    icon: 'layout',
    category: 'layout',
    attributes: {
      fluid: {
        type: 'bool',
        default: false
      },
      columns: {},
      allowedBlocks: ['bootstrap-blocks/row'],
      TEMPLATE: {
        type: 'array',
        default: [
          ['bootstrap-blocks/row', {} ,[]]
        ]
      }
    },

    edit: function( props ) {
        const {
          className,
          attributes: {
            fluid,
            TEMPLATE,
            columnCount
          },
          setAttributes
        } = props;

        const onChangeToggleFluid = ( ) => {
          setAttributes( { fluid: !fluid } );
        }
        
        const onChangeColumnCount = ( value ) => {
          setAttributes( { columnCount: value } );
        }
        
        return (
          <Fragment>
            <InspectorControls>
                <PanelBody
                    title={ __( 'Container Settings', 'bootstrap-blocks' ) }
                >
                  <PanelRow>
                      <label
                          htmlFor="form-toggle-fluid"
                      >
                          { __( 'Full-width Container', 'bootstrap-blocks' ) }
                      </label>
                      <FormToggle
                          id="form-toggle-fluid"
                          label={ __( 'Full-width Container', 'bootstrap-blocks' ) }
                          checked={ !fluid }
                          onClick={ onChangeToggleFluid }
                      />
                  </PanelRow>
                  <div 
                    style={{
                      display: `block`, 
                      width: `100%`,
                      marginTop: `15px`
                    }}
                  >
                    <label
                        htmlFor="form-column-count"
                    >
                      { __( 'Columns', 'bootstrap-blocks' ) }
                    </label>
                    <PanelRow>
                      <RangeControl
                          id="form-column-count"
                          value={ columnCount }
                          onChange={ onChangeColumnCount }
                          min={ 1 }
                          max={ 12 }
                        />
                    </PanelRow>
                  </div>
                </PanelBody>
            </InspectorControls> 
            <div 
              style={{ border: '1px dashed red'}}
            >
              <InnerBlocks 
                template={ TEMPLATE }
                allowedBlocks={['bootstrap-blocks/row']}
              /> 
            </div>
          </Fragment>
        );
    },
    save: function( props ) {
        return (
          <Fragment>
            <InnerBlocks.Content />
          </Fragment>
        );
    },
    
} );


const modifyBlockListBlockContainer = createHigherOrderComponent( ( BlockListBlock ) => {
  return ( props ) => {
    if (props.block.name == "bootstrap-blocks/container") {
      props.className = [(!props.attributes.fluid ? "container-fluid" : "container")].join(" ");
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockContainer' );
wp.hooks.addFilter( 'editor.BlockListBlock', 'bootstrap-blocks/container/modify-element-edit', modifyBlockListBlockContainer );

const modifyGetSaveElementContainer = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }

  if (blockType.name === 'bootstrap-blocks/container') {
    element.props.className = [element.props.className, (!attributes.fluid ? "container-fluid" : "container")].join(" ");
    return (
      <div className={ element.props.className }>
        {element}
      </div>
    )
  }

  return element;
}
wp.hooks.addFilter('blocks.getSaveElement', 'bootstrap-blocks/container/modify-element-save', modifyGetSaveElementContainer);



