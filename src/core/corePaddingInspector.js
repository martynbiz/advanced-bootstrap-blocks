const { __ } = wp.i18n;
const { Fragment, useEffect, useRef } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, RangeControl } = wp.components;
const { createHigherOrderComponent, withState } = wp.compose;

export const CustomPaddingInspector = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
    if (props.name.includes("advanced-bootstrap-blocks") || props.name.includes("core")) {
      
      // const properties = ['a','x','y','t','r','b','l'];
      // const breakpoints = ['xs','sm','md','lg','xl'];

      const properties = ['a','x','y','t','r','b','l'];
      const breakpoints = ['xs','sm','md','lg','xl'];

      const variants = [];

      const strToRegex = (property, breakpoint) => {
        // const regex = /(p{1}[trblxy]?[-]?\b(sm|md|lg|xl)?[-]{1}(auto\b|[0-5]\b){1}?)/;
        const paddingProperty = property.replace('a', '');
        const paddingBreakpoint = breakpoint.replace('xs', ''); 
        const regexString = `p{1}(property)[-](breakpoint)[-]?([0-5]\\b)`
          .replace('property', `${paddingProperty}`)
          .replace('breakpoint', `${paddingBreakpoint}`);

        return new RegExp(regexString); 
      }

      const removePaddingClass = (property, breakpoint) => {
        if (typeof props.attributes.className !== "undefined") {
        const regex = strToRegex(property, breakpoint); 

          return props.attributes.className
            .split(" ")
            .filter(name => !name.match(regex)); 
        }
      }

      const returnPaddingValue = (property, breakpoint) => {
        if (typeof props.attributes.className !== "undefined") {
          const regex = strToRegex(property, breakpoint); 
          const results = props.attributes.className.length && props.attributes.className.match(regex) ? Number(props.attributes.className.match(regex)[3]) : -1; 
          if (results > -1) {
            return results;
          }
        }
      }
      
      breakpoints.map( breakpoint => {
        properties.map( property => { 
          const paddingValue = returnPaddingValue(property, breakpoint); 
          variants.push({
            ref: useRef(`p${property}-${breakpoint}`),
            property: property,
            breakpoint: breakpoint,
            defaultValue: typeof paddingValue !== "undefined" ? paddingValue : '',
          });
        });
      });
      
      const PaddingControl = withState( {
        padding: '',
      } )( 
        ( { ref, defaultValue, padding, setState, property, breakpoint } ) => {

          // useEffect(() => {
          //   if (typeof padding !== "undefined" && padding.toString().length && padding > -1) {
          //     const newClassNamePaddingPrefix = `p${property}-${breakpoint}-`.replace('a','').replace('-xs', '');
          //     const newClassNamePaddingClass = padding >= 0 ? `${newClassNamePaddingPrefix}${padding}` : ''; 
          //     const classNameArray = removePaddingClass(property, breakpoint) || [];
                
          //     const classNameListUpdated = typeof classNameArray !== "undefined" && classNameArray
          //       .concat(newClassNamePaddingClass)
          //       .join(' ')
          //       .trim()
          //       .replace(/\s\s+/, ' ');
                            
          //     // return () => {
          //       props.setAttributes( { 
          //         className: classNameListUpdated
          //       });  
          //     // }
          //   }
          // }, [padding]);

          return (
            <PanelRow>
              <RangeControl
                ref={ ref }
                key={ ref }
                label={ `.p${property}-${breakpoint}` }
                value={ typeof padding !== "undefined" && padding > -1 && padding || defaultValue}
                defaultValue={ defaultValue }
                onChange={ 
                  padding => {
                    // props.setAttributes('')
                    let classNameListUpdated; 
                    if (typeof padding !== "undefined" && padding.toString().length && padding > -1) {
                      const newClassNamePaddingPrefix = `p${property}-${breakpoint}-`.replace('a','').replace('-xs', '');
                      const newClassNamePaddingClass = padding >= 0 ? `${newClassNamePaddingPrefix}${padding}` : ''; 
                      const classNameArray = removePaddingClass(property, breakpoint) || [];
                        
                      classNameListUpdated = typeof classNameArray !== "undefined" && classNameArray
                        .concat(newClassNamePaddingClass)
                        .join(' ')
                        .trim()
                        .replace(/\s\s+/, ' ');
                                    

                    } else {
                      const classNameArray = removePaddingClass(property, breakpoint) || [];
                      classNameListUpdated = typeof classNameArray !== "undefined" && classNameArray
                        .join(' ')
                        .trim()
                        .replace(/\s\s+/, ' ');
                    }
                    
                    props.setAttributes( { 
                      className: classNameListUpdated
                    });  
                    
                    setState( { padding } );
                    
                  }
                }
                min={ 0 }
                max={ 5 }
                allowReset
              />
            </PanelRow>
          );
        }
      );
      
      return (
        <Fragment>
          <BlockEdit { ...props } />
          <InspectorControls>
            <PanelBody
              title={ __( 'Block Padding (experimental)', 'advanced-bootstrap-blocks' ) }
              initialOpen={false}
            >
            {
              variants.map(variant => {
                return (
                  <PaddingControl 
                    key={ variant.ref } 
                    ref={ variant.ref } 
                    property={ variant.property } 
                    breakpoint={ variant.breakpoint }
                    defaultValue={ variant.defaultValue }
                  />
                );
              })
            }
            </PanelBody>
          </InspectorControls>
        </Fragment>
      );
    } else {
      return <BlockEdit { ...props } />; 
    }
	};
}, 'CustomPaddingInspector' );

