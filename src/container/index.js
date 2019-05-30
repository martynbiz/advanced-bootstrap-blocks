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

registerBlockType( 'gutenstrap/container', {
    title: __( 'Container (Gutenstrap)', 'gutenstrap' ),
    description: __(''),
    icon: 'layout',
    category: 'layout',
    keywords: [
        __('gutenstrap'),
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
      allowedBlocks: ['gutenstrap/row'],
      TEMPLATE: {
        type: 'array',
        default: [
          ['gutenstrap/row', {} ,[]]
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
                    title={ __( 'Container Settings', 'gutenstrap' ) }
                >
                  <PanelRow>
                      <label
                          htmlFor="form-toggle-fluid"
                      >
                          { __( 'Full-width Container', 'gutenstrap' ) }
                      </label>
                      <FormToggle
                          id="form-toggle-fluid"
                          label={ __( 'Full-width container', 'gutenstrap' ) }
                          checked={ isFluid }
                          onClick={ onChangeToggleFluid }
                      />
                  </PanelRow>
                  <PanelRow>
                      <label
                          htmlFor="form-toggle-fluid"
                      >
                          { __( 'Wrap container', 'gutenstrap' ) }
                      </label>
                      <FormToggle
                          id="form-toggle-fluid"
                          label={ __( 'Add Wrapper', 'gutenstrap' ) }
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
                  allowedBlocks={['gutenstrap/row']}
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
    if (props.block.name == "gutenstrap/container") {
      props.className = props.attributes.isWrapped ? props.className : "";
    }
    return <BlockListBlock { ...props } />;
  };
}, 'modifyBlockListBlockContainer' );

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'gutenstrap/container/modify-element-edit', 
  modifyBlockListBlockContainer 
);

const modifyGetSaveElementContainer = (element, blockType, attributes ) => {
  if (!element) {
    return;
  }

  if (blockType.name === 'gutenstrap/container') {
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
  'gutenstrap/container/modify-element-save', 
  modifyGetSaveElementContainer
);