const { __ } = wp.i18n;

const {
  Fragment
} = wp.element; 

const {
  SelectControl,
  RadioControl,
  PanelBody,
  PanelRow,
  FormToggle,
} = wp.components;

const {
  InspectorControls,
  URLInputButton,
} = wp.editor;

import {
  buttonStyle,
  getCaretPosition,
  setCaretPosition
} from './utils'; 


export const edit = (props) => {
  const {
    attributes: {
      text,
      link,
      style,
      outline,
      block,
      size,
      newWindow,
    },
    className,
    isSelected,
    setAttributes
  } = props;
  
  const onChangeText = ( value ) => {
    setAttributes( { text: value } );
  }

  const onChangeLink = ( value ) => {
    setAttributes( { link: value } );
  }

  const onChangeStyle = ( value ) => {
    setAttributes( { style: value } );
  }

  const onChangeOutline = () => {
    setAttributes( { outline: !outline } );
  }

  const onChangeBlock = () => {
    setAttributes( { block: !block } );
  }

  const onChangeSize = ( value ) => {
    setAttributes( { size: value } );
  }
  
  const onChangeNewWindow = () => {
    setAttributes( { newWindow: !newWindow } );
  }

  const onInput = (e) => {
    const target = e.target;
    const position = getCaretPosition(target);
    
    if (text != target.text && typeof target === "Node") {
      setAttributes( { text: target.text } );
      setCaretPosition(target, position);
      setTimeout(function() {
        setCaretPosition(target, position);
      }, 0);
    }
  }

  return (
    <Fragment>
      <div className={[block ? "d-flex" : "d-inline-flex", "align-items-start"].join(" ")}>
        <a
          className={[className, size, buttonStyle(props.attributes), "btn"].join(" ")} 
          href={link} 
          target={newWindow && '_blank'}
          role="button"
          rel={newWindow && 'noopener noreferrer'}
          contentEditable
          onInput={onInput}
          onClick={(e) => e.preventDefault()}
          style={{ marginTop: '3px' }}
        >
          {text}
        </a>
        <URLInputButton
          label="Link picker"
          url={ link }
          onChange={ ( link ) => setAttributes( { link } ) }
        />
      </div>
      <InspectorControls>
          <PanelBody
              title={ __( 'Button Settings', 'advanced-bootstrap-blocks' ) }
          >
            <PanelRow>
              <SelectControl
                label="Button Style"
                value={ style }
                options={ [
                    { label: 'Primary', value: 'btn-primary' },
                    { label: 'Secondary', value: 'btn-secondary' },
                    { label: 'Success', value: 'btn-success' },
                    { label: 'Danger', value: 'btn-danger' },
                    { label: 'Warning', value: 'btn-warning' },
                    { label: 'Info', value: 'btn-info' },
                    { label: 'Light', value: 'btn-light' },
                    { label: 'Dark', value: 'btn-dark' },
                    { label: 'Link', value: 'btn-link' },
                ] }
                onChange={onChangeStyle}
            />
            </PanelRow>
            <PanelRow>
                <label
                    htmlFor="form-toggle-outline"
                >
                    { __( 'Button Outline Setting', 'advanced-bootstrap-blocks' ) }
                </label>
                <FormToggle
                    id="form-toggle-outline"
                    label={ __( 'Toggle Outline', 'advanced-bootstrap-blocks' ) }
                    checked={outline}
                    onChange={onChangeOutline}
                />
            </PanelRow>
            <PanelRow>
                <label
                    htmlFor="form-toggle-block"
                >
                    { __( 'Button Block Setting', 'advanced-bootstrap-blocks' ) }
                </label>
                <FormToggle
                    id="form-toggle-block"
                    label={ __( 'Toggle block', 'advanced-bootstrap-blocks' ) }
                    checked={block}
                    onChange={onChangeBlock}
                />
            </PanelRow>
            <PanelRow>
              <RadioControl
                  label="Button size"
                  help=""
                  selected={ size }
                  options={ [
                    { label: 'Default', value: '' },
                    { label: 'Large', value: 'btn-lg' },
                    { label: 'Small', value: 'btn-sm' },
                  ] }
                  onChange={onChangeSize}
                />
            </PanelRow>
            <PanelRow>
                <label
                    htmlFor="form-toggle-window"
                >
                    { __( 'Open link in new window', 'advanced-bootstrap-blocks' ) }
                </label>
                <FormToggle
                    id="form-toggle-window"
                    label={ __( 'Open link in new window', 'advanced-bootstrap-blocks' ) }
                    checked={newWindow}
                    onChange={onChangeNewWindow}
                />
            </PanelRow>
          </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}