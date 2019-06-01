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

registerBlockType( 'advanced-bootstrap-blocks/container', {
    title: __( 'Container (advanced-bootstrap-blocks)', 'advanced-bootstrap-blocks' ),
    description: __(''),
    icon: 'layout',
    category: 'layout',
    keywords: [
        __('advanced-bootstrap-blocks'),
        __('container'),
    ],
    attributes: {
      isFluid: {
        type: 'bool',
        default: false
      },
      isWrapped: {
        type: 'bool',
        default: false
      },
      allowedBlocks: ['advanced-bootstrap-blocks/row'],
      TEMPLATE: {
        type: 'array',
        default: [
          ['advanced-bootstrap-blocks/row', {} ,[]]
        ]
      }
    },

    edit: function( props ) {
        const {
          className,
          attributes: {
            isFluid,
            isWrapped,
            TEMPLATE,
          },
          setAttributes
        } = props;

        const onChangeToggleFluid = () => {
          setAttributes( { isFluid: !isFluid } );
        }

        const onChangeToggleWrapped = () => {
          setAttributes( { isWrapped: !isWrapped } );
        }
        
        const onChangeColumnCount = ( value ) => {
          setAttributes( { columnCount: value } );
        }

        return (
          <Fragment>
            <InspectorControls>
                <PanelBody
                    title={ __( 'Container Settings', 'advanced-bootstrap-blocks' ) }
                >
                  <PanelRow>
                      <label
                          htmlFor="form-toggle-fluid"
                      >
                          { __( 'Full-width Container', 'advanced-bootstrap-blocks' ) }
                      </label>
                      <FormToggle
                          id="form-toggle-fluid"
                          label={ __( 'Full-width container', 'advanced-bootstrap-blocks' ) }
                          checked={ isFluid }
                          onClick={ onChangeToggleFluid }
                      />
                  </PanelRow>
                  <PanelRow>
                      <label
                          htmlFor="form-toggle-fluid"
                      >
                          { __( 'Wrap container', 'advanced-bootstrap-blocks' ) }
                      </label>
                      <FormToggle
                          id="form-toggle-fluid"
                          label={ __( 'Add Wrapper', 'advanced-bootstrap-blocks' ) }
                          checked={ isWrapped }
                          onClick={ onChangeToggleWrapped }
                      />
                  </PanelRow>
                </PanelBody>
            </InspectorControls> 
              <div 
                className={ isFluid ? "container-fluid" : "container" }
                style={{ border: '1px dashed red'}}
              >
                <InnerBlocks 
                  template={ TEMPLATE }
                  allowedBlocks={['advanced-bootstrap-blocks/row']}
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
    if (props.block.name == "advanced-bootstrap-blocks/container") {
      props.className = props.attributes.isWrapped ? props.className : "";
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockContainer' );

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/container/modify-element-edit', 
  modifyBlockListBlockContainer 
);

const modifyGetSaveElementContainer = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }

  if (blockType.name === 'advanced-bootstrap-blocks/container') {
    if (attributes.isWrapped) {
      return (
        <div className={element.props.className}>
          <div className={ attributes.isFluid ? "container-fluid" : "container" }>
            {element}
          </div>
        </div>
      )
    }
    return (
      <div className={ [element.props.className, (attributes.isFluid ? "container-fluid" : "container")].join(" ") }>
        {element}
      </div>
    )
  }

  return element;
}

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/container/modify-element-save', 
  modifyGetSaveElementContainer
);