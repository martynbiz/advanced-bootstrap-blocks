const { __ } = wp.i18n;

const {
  Fragment
} = wp.element; 

const {
  SelectControl,
  RadioControl,
  TextControl,
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
  RichText,
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
  InspectorControls,
  InnerBlocks
} = wp.editor;

import { 
  buttonStyle,
} from './utils';

export const edit = (props) => {
  const {
    attributes: {
      type, 
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

  return (
    <Fragment>
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
      <Fragment>
        <a
          className={[className, size, buttonStyle(props.attributes), "btn"].join(" ")} 
          href={link} 
          target={newWindow && '_blank'}
          role="button"
          rel={newWindow && 'noopener noreferrer'}
          onClick={(e) => e.preventDefault()}
        >
          {text}
        </a>
        {
          isSelected && <Toolbar>
            <TextControl
                label="Button text"
                value={ text }
                onChange={onChangeText}
            />
            <TextControl
                label="Button link"
                value={ link }
                onChange={onChangeLink}
            />
          </Toolbar>
        }
      </Fragment>
    </Fragment>
  );
}