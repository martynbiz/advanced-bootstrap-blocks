const { __ } = wp.i18n;

const { 
  createHigherOrderComponent 
} = wp.compose;

const { 
  registerBlockType 
} = wp.blocks;

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

const buttonStyle = ({ style, outline, block }) => {
  let styles = style; 

  if (outline)
    styles = styles.replace("btn-", "btn-outline-");
  
  if (block)
    styles = styles + " btn-block";

  return styles; 
}

registerBlockType( 'advanced-bootstrap-blocks/button', {
    title: __( 'Button (advanced-bootstrap-blocks)', 'advanced-bootstrap-blocks' ),
    description: __(''),
    icon: 'layout',
    category: 'layout',
    keywords: [
        __('advanced-bootstrap-blocks'),
        __('button'),
    ],
    attributes: {
      type: {
        type: 'string',
        default: 'default'
      },
      style: {
        type: 'string',
        default: 'btn-primary'
      },
      outline: {
        type: 'bool',
        default: false
      },
      block: {
        type: 'bool',
        default: false
      },
      text: {
        type: 'string',
        default: 'Button'
      },
      link: {
        type: 'string',
        default: '#'
      },
      size: {
        type: 'string',
        default: ''
      },
      newWindow: {
        type: 'bool',
        default: false
      },
    },

    edit: function( props ) {
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
    },
    
    save: function( props ) {
        return (
          <a 
            className={[props.className, props.attributes.size, buttonStyle(props.attributes), "btn"].join(" ")} 
            href={props.attributes.link} 
            target={props.attributes.newWindow && "_blank"}
            role="button"
            rel={props.attributes.newWindow && 'noopener noreferrer'}
          >
            {props.attributes.text}
          </a>
        );
    },
} );

// const modifyBlockListBlockContainer = createHigherOrderComponent( ( BlockListBlock ) => {
//   return ( props ) => {
//     if (props.block.name == "advanced-bootstrap-blocks/container") {
//       props.className = props.attributes.isWrapped ? props.className : "";
//     }
//     return <BlockListBlock { ...props } />;
//   };
// }, 'modifyBlockListBlockContainer' );

// wp.hooks.addFilter( 
//   'editor.BlockListBlock', 
//   'advanced-bootstrap-blocks/container/modify-element-edit', 
//   modifyBlockListBlockContainer 
// );

// const modifyGetSaveElementContainer = (element, blockType, attributes ) => {
//   if (!element) {
//     return;
//   }

//   if (blockType.name === 'advanced-bootstrap-blocks/container') {
//     if (attributes.isWrapped) {
//       return (
//         <div className={element.props.className}>
//           <div className={ attributes.isFluid ? "container-fluid" : "container" }>
//             {element}
//           </div>
//         </div>
//       )
//     }
//     return (
//       <div className={ [element.props.className, (attributes.isFluid ? "container-fluid" : "container")].join(" ") }>
//         {element}
//       </div>
//     )
//   }

//   return element;
// }

// wp.hooks.addFilter(
//   'blocks.getSaveElement', 
//   'advanced-bootstrap-blocks/container/modify-element-save', 
//   modifyGetSaveElementContainer
// );