const { __ } = wp.i18n;

const {
  SelectControl,
  BaseControl,
  PanelBody,
  PanelRow,
  FormToggle,
} = wp.components;

const {
  Fragment
} = wp.element; 

const {
  MediaUpload,
  InspectorControls,
  InnerBlocks
} = wp.editor;

import {
  checkStyles
} from './utils'; 

export const edit = (props) => {
  const {
    className,
    attributes: {
      isFluid,
      isWrapped,
      backgroundImage,
      backgroundRepeat,
      backgroundSize,
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

  const onSelectBackgroundImage = (value ) => {
    setAttributes({
      backgroundImage: value.sizes,
      backgroundSize: '',
      backgroundRepeat: false,
    });
  }

  const classNameAttribute = () => {
    const containerClass = isFluid ? "container-fluid" : "container"; 
    return [className, containerClass].join(" ");
  }

  return (
    <Fragment>
      <div style={{outline: '1px dashed red'}}>
        <div 
          className={classNameAttribute()}
          { // conditionally render style attribute with backgroundImage property
            ...backgroundImage ? {
              style: {
                backgroundImage: `url(${backgroundImage.full.url})`,
                ...backgroundSize ? { backgroundSize: `${backgroundSize}` } : { },
                ...backgroundRepeat ? { backgroundRepeat: `${backgroundRepeat}` } : { }
              }
            } : {

            }
          }
        >
          <InnerBlocks 
            template={ TEMPLATE }
            allowedBlocks={['advanced-bootstrap-blocks/row']}
          />
        </div>
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
          <PanelBody
            title={ __( 'Background Settings', 'advanced-bootstrap-blocks' ) }
            initialOpen={false}
          >
            <PanelRow>
              <div className="w-100">
                <label
                    htmlFor="form-media-select"
                    style={{
                      display: 'block'
                    }}
                >
                    { __( 'Background image', 'advanced-bootstrap-blocks' ) }
                </label>
                <MediaUpload 
                    id="form-media-select"
                    onSelect={onSelectBackgroundImage}
                    render={ ({open}) => {
                        return backgroundImage && (
                          <div>
                            <img 
                              src={backgroundImage.medium.url} 
                              alt="Background image preview"
                              className="w-100 mb-2 rounded-sm"
                            />
                            <div className="btn-group">
                              <button className="btn btn-primary btn-sm" onClick={open}>
                                Replace
                              </button>
                              <button className="btn btn-dark btn-sm" onClick={() => { setAttributes({backgroundImage: false})}}>
                                Clear
                              </button>
                            </div>
                          </div>
                        ) || (
                          <button className="btn btn-dark btn-sm" onClick={open}>
                            Select
                          </button>
                        );
                    }}
                  />  
              </div>
            </PanelRow>
            <PanelRow>
                <SelectControl
                    label="Background Size"
                    value={ backgroundSize }
                    className="d-block w-100 mb-2"
                    options={ [
                        { label: '', value: '' },
                        { label: 'Cover', value: 'cover' },
                        { label: 'Contain', value: 'contain' },
                        { label: 'Custom', 
                          value: typeof backgroundSize !== "undefined" && 
                                 backgroundSize !== 'cover' && backgroundSize !== 'contain' &&
                                 backgroundSize || '100% auto'  
                        },
                    ] }
                    onChange={ ( backgroundSize ) => { setAttributes( { backgroundSize } ) } }
                />
            </PanelRow>
              {
              typeof backgroundSize !== "undefined" && backgroundSize.length > 0 && 
              backgroundSize !== "cover" && backgroundSize !== "contain" && 
                <PanelRow className="mt-0">
                  <BaseControl
                    className="d-block w-100"
                  >
                    <input 
                      type="text"
                      value={backgroundSize}
                      onChange={(e) => {
                        console.log(e.target.value)
                        setAttributes({ backgroundSize: e.target.value })
                      }}
                    />
                  </BaseControl>
                </PanelRow>
              }
            <PanelRow className="mt-0">
              <SelectControl
                  label="Background Repeat"
                  value={ backgroundRepeat }
                  className="d-block w-100 mb-2"
                  options={ [
                      { label: '', value: '' },
                      { label: 'Repeat', value: 'repeat' },
                      { label: 'No-repeat', value: 'no-repeat' },
                  ] }
                  onChange={ ( backgroundRepeat ) => { setAttributes( { backgroundRepeat } ) } }
              />
            </PanelRow>
          </PanelBody>
      </InspectorControls> 
    </Fragment>
  );
}