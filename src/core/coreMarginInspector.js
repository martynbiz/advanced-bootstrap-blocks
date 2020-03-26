const { __ } = wp.i18n;
const { Fragment, useEffect, useRef } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, RangeControl } = wp.components;
const { createHigherOrderComponent, withState } = wp.compose;

const strToRegex = (property, breakpoint) => {
  // const regex = /(p{1}[trblxy]?[-]?\b(sm|md|lg|xl)?[-]{1}(auto\b|[0-5]\b){1}?)/;
  const marginProperty = property.replace('a', '');
  const marginBreakpoint = breakpoint.replace('xs', ''); 
  const regexString = `m{1}(property)[-](breakpoint)[-]?([0-5]\\b)`
    .replace('property', `${marginProperty}`)
    .replace('breakpoint', `${marginBreakpoint}`);

  return new RegExp(regexString); 
}

const removeMarginClass = (classNameList, property, breakpoint) => {
  if (typeof classNameList !== "undefined") {
    const regex = strToRegex(property, breakpoint); 

    return classNameList
      .split(" ")
      .filter(name => !name.match(regex)); 
  }
}

const returnMarginValue = (props, property, breakpoint) => {
  if (typeof props.attributes.className !== "undefined") {
    const regex = strToRegex(property, breakpoint); 
    const results = props.attributes.className.length && props.attributes.className.match(regex) ? Number(props.attributes.className.match(regex)[3]) : -1; 
    if (results > -1) {
      return results;
    }
  } 
  
  return '';
}

const MarginControl = withState({
  margin: -1,
} )( ({ margin, setState, property, breakpoint, defaultValue, classNameList, setAttributes } ) => {

  useEffect(() => {
    const classNameArray = removeMarginClass(classNameList, property, breakpoint) || [];
    let classNameListUpdated; 

    if (typeof margin !== "undefined" && margin.toString().length && margin > -1) {
      const newClassNamemarginPrefix = `m${property}-${breakpoint}-`.replace('a','').replace('-xs', '');
      const newClassNamemarginClass = margin >= 0 ? `${newClassNamemarginPrefix}${margin}` : ''; 
      classNameListUpdated = typeof classNameArray !== "undefined" && classNameArray
        .concat(newClassNamemarginClass)
        .join(' ')
        .trim()
        .replace(/\s\s+/, ' ');
    } else {
      classNameListUpdated = typeof classNameArray !== "undefined" && classNameArray
        .join(' ')
        .trim()
        .replace(/\s\s+/, ' ');
    }
    
    setAttributes( { 
      className: classNameListUpdated
    });  
  }, [margin]); 

  return (
    <PanelRow>
      <RangeControl
        label={ `.m${property}-${breakpoint}` }
        value={ margin > -1 ? margin : defaultValue }
        allowReset
        onChange={ 
          margin => {
            setState({
              margin: margin
            });
          }
        }
        min={ 0 }
        max={ 5 }
        step={ 1 }
        marks={["0","1","2","3","4","5"]}
      />
    </PanelRow>
  );
});

export const CustomMarginInspector = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
    if (props.name.includes("advanced-bootstrap-blocks") || props.name.includes("core")) {
      const properties = ['a','x','y','t','r','b','l'];
      const breakpoints = ['xs','sm','md','lg','xl'];

      let marginObject = marginObject || {};
      breakpoints.map( breakpoint => {
        properties.map( property => { 
          const marginValue = returnMarginValue(props, property, breakpoint); 
          marginObject[`m${property}-${breakpoint}`] = {
            ref: useRef(`m${property}-${breakpoint}`),
            property: property,
            breakpoint: breakpoint,
            defaultValue: typeof marginValue !== "undefined" ? marginValue : '',
          }
        });
      });  

      return (
        <Fragment>
          <BlockEdit { ...props } />
          <InspectorControls>
            <PanelBody
              title={ __( 'Block Margin', 'advanced-bootstrap-blocks' ) }
              initialOpen={false}
            >
            {
              props.isSelected && Object.keys(marginObject).map((key, index) => {
                return (
                  <MarginControl 
                    // key={ marginObject[key].ref.current } 
                    // id={ marginObject[key].ref.current }
                    property={ marginObject[key].property } 
                    breakpoint={ marginObject[key].breakpoint }
                    defaultValue={ marginObject[key].defaultValue }
                    classNameList={ props.attributes.className }
                    setAttributes={ props.setAttributes }
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
}, 'CustommarginInspector' );

