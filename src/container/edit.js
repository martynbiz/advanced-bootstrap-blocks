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

export const edit = (props) => {
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
      <div 
        className={ isFluid ? [className, "container-fluid"].join(" ") : [className, "container"].join(" ") }
        style={{ outline: '1px dashed red'}}
      >
        <InnerBlocks 
          template={ TEMPLATE }
          allowedBlocks={['advanced-bootstrap-blocks/row']}
        />
      </div>
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
    </Fragment>
  );
}