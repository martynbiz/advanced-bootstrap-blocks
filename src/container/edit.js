const { __ } = wp.i18n;

const {
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
                backgroundImage: `url(${backgroundImage.full.url})`
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
          </PanelBody>
      </InspectorControls> 
    </Fragment>
  );
}