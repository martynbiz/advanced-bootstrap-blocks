const { __ } = wp.i18n;
const { Fragment, useEffect, useRef } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, RangeControl } = wp.components;
const { createHigherOrderComponent, withState } = wp.compose;

const strToRegex = (breakpoint) => {
  const columnBreakpoint = breakpoint.replace('xs', ''); 
  const regexString = `(col){1}[-](breakpoint)[-]?(auto\\b|[0-9][0-9]?\\b)`
    .replace('breakpoint', `${columnBreakpoint}`);
  console.log('regexString: ', regexString);
  return new RegExp(regexString); 
}

const removeColumnClass = (classNameList, breakpoint) => {
  if (typeof classNameList !== "undefined") {
    const regex = strToRegex(breakpoint); 

    return classNameList
      .split(" ")
      .filter(name => { const result = name.match(regex); console.log(result); return !result || result.index !== 0 }); 
  }
}

const returnColumnValue = (props, breakpoint) => {
  if (typeof props.attributes.className !== "undefined") {
    const regex = strToRegex(breakpoint); 
    const results = props.attributes.className.length && props.attributes.className.match(regex) ? Number(props.attributes.className.match(regex)[3].replace("auto", -1)) : -2; 
    if (results > -2) {
      return results;
    }
  } 
  return '';
}

const ColumnControl = withState({
  column: -2,
} )( ({ column, setState, breakpoint, defaultValue, classNameList, setAttributes } ) => {

  useEffect(() => {
    const classNameArray = removeColumnClass(classNameList, breakpoint) || [];
    let classNameListUpdated; 
    if (typeof column !== "undefined" && column.toString().length && column > -2) {
      const newClassNameColumnPrefix = `col-${breakpoint}-`.replace('a','').replace('-xs', '');
      const newClassNameColumnClass = column >= -1 ? Number(column) === -1 ? `${newClassNameColumnPrefix}auto` : `${newClassNameColumnPrefix}${column}` : ''; 
      classNameListUpdated = typeof classNameArray !== "undefined" && classNameArray
        .concat(newClassNameColumnClass)
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
  }, [column]); 

  const getColumnValue = (column, defaultValue) => {
    return Number(column) > -2 ? Number(column) : defaultValue; 
  }

  return (
      <RangeControl
        label={ 
          `.col-${breakpoint}-${getColumnValue(column, defaultValue)}`
            .replace('a', '')
            .replace('-xs', '')
            .replace(/--1/, '-auto') 
        }
        value={ getColumnValue(column, defaultValue) }
        allowReset
        onChange={ 
          column => {
            setState({
              column: column
            });
          }
        }
        min={ -1 }
        max={ 12 }
        step={ 1 }
        marks={["auto", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
        separatorType="none"
      />
  );
});

export const CustomColumnInspector = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
    if (props.name.includes("advanced-bootstrap-blocks")) {
      const breakpoints = ['xs','sm','md','lg','xl'];
      let columnObject = columnObject || {};

      breakpoints.map( breakpoint => {
        const columnValue = returnColumnValue(props, breakpoint); 
        columnObject[`col-${breakpoint}`] = {
          ref: useRef(`col-${breakpoint}`),
          breakpoint: breakpoint,
          defaultValue: typeof columnValue !== "undefined" ? columnValue : '',
        }
      });  

      return (
        <Fragment>
          <BlockEdit { ...props } />
          <InspectorControls>
            <PanelBody
              title={ __( 'Column Settings', 'advanced-bootstrap-blocks' ) }
              initialOpen={false}
            >
            {
              props.isSelected && Object.keys(columnObject).map((key, index) => {
                return (
                  <PanelRow>
                    <ColumnControl 
                        breakpoint={ columnObject[key].breakpoint }
                        defaultValue={ columnObject[key].defaultValue }
                        classNameList={ props.attributes.className }
                        setAttributes={ props.setAttributes }
                      />
                  </PanelRow>
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
}, 'CustomColumnInspector' );

