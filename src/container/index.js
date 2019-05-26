const { __ } = wp.i18n;
const { 
  registerBlockType 
} = wp.blocks;
const {
  Toolbar,
  Button,
  Tooltip,
  PanelBody,
  PanelRow,
  FormToggle,
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


registerBlockType( 'bootstrap-blocks/container', {
    title: __( 'Bootstrap - Container', 'bootstrap-blocks' ),
    icon: 'layout',
    category: 'layout',
    attributes: {
      fluid: {
        type: 'bool',
        default: 'none'
      }
    },

    edit: function( props ) {
        const {
          className,
          attributes: {
            fluid
          },
          setAttributes
        } = props;

        const toggleFluid = ( value ) => {
          setAttributes( { fluid: !fluid } );
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
                            checked={ fluid }
                            onClick={ toggleFluid }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls> 
            <div className={ [className, (fluid ? "container-fluid" : "container ")].join(" ") }>
                <div className="row">
                  <InnerBlocks />
                </div>
            </div>
          </Fragment>
        );
    },
    save: function( props ) {
        const {
          className,
          attributes: {
            fluid
          }
        } = props;

        return (
            <div className={ [className, (fluid ? "container-fluid" : "container ")].join(" ") }>
                <div className="row">
                  <InnerBlocks.Content />
                </div>
            </div>
        );
    },
    
} );
