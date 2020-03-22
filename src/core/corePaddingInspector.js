const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;
const { createHigherOrderComponent, withState } = wp.compose;

export const CustomPaddingInspector = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
    if (props.name.includes("advanced-bootstrap-blocks") || props.name.includes("core")) {

      const isAttrDefined = (attribute) => {
        return typeof attribute !== "undefined" && attribute.length ? attribute : '';
      }

      const isPaddingSet = (list, attribute) => {
        // todo: check if padding is set and prepopulate control
        
        return isAttrDefined(attribute); 
      }

      const filterPaddingClassByPrefix = (list, prefix) => {
          return list
            .split(" ")
            .filter(name => !name.includes(prefix));
      }

      const onChangePadding = (target) => {
        const paddingType = target.getAttribute("data-padding-type");
        const paddingBreakpoint = target.getAttribute("data-padding-breakpoint");
        const paddingValue = target.value; 

        const newClassNamePaddingPrefix = `p${paddingType}-${paddingBreakpoint}-`.replace('a','').replace('-xs', '');
        const newClassNamePaddingClass = paddingValue != '' ? `${newClassNamePaddingPrefix}${paddingValue}` : ''; 
        const classNameArray = filterPaddingClassByPrefix(classNameList, newClassNamePaddingPrefix);

        const classNameListUpdated = classNameArray
          .concat(newClassNamePaddingClass)
          .join(' ')
          .trim()
          .replace(/\s\s+/, ' ');

        props.setAttributes( { 
          className: classNameListUpdated
        }); 
        
        props.setAttributes({ 
          [target.id]: paddingValue 
        });
        
        console.log(target.id, eval(`props.attributes.${[target.id]}`))
      }
      
      const onClickPaddingReset = (classList, classId) => {
        const classPaddingStateObject = eval(`props.attributes.${classId}`);
        props.setAttributes({
          className: filterPaddingClassByPrefix(classList, classPaddingStateObject)
            .join(' ')
            .trim()
            .replace(/\s\s+/, ' ')
        });

        props.setAttributes({ 
          [classId]: '' 
        });
      }

      const classNameList = isAttrDefined(props.attributes.className); 
      const variants = ['a','x','y','t','r','b','l'];
      const breakpoints = ['xs','sm','md','lg','xl'];

      const PaddingControls = ({ breakpoint, variant }) => {
       
            const controlId = `p${variant}${breakpoint}`;
            const attrName = `props.attributes.${controlId}`; 
            const value = isPaddingSet(classNameList, eval(attrName));

            return <PanelRow key={ controlId } className="flex-wrap align-items-center">
              <label 
                className="d-block w-100 m-0 small text-left"
                htmlFor={ controlId }>Padding ({controlId})</label>
              <input 
                type="range"
                id={ controlId }
                data-padding-type={ variant }
                data-padding-breakpoint={ breakpoint }
                value={ value }
                onChange={
                  e => onChangePadding(e.target)
                }
                min="0"
                max="5"
                step="1"
                style={{
                  width: "60%"
                }}
              />

              <label 
                className="sr-only"
                htmlFor={ `${controlId}_value` }>Padding Value ({controlId})</label>
              <input 
                id={ `${controlId}_value` }
                data-padding-type={ variant }
                data-padding-breakpoint={ breakpoint }
                value={ value }
                type="number" 
                min="0" 
                max="5" 
                style={{ width: '15%' }}
                disabled
              />

              <button 
                className="btn btn-sm btn-outline-dark"
                type="button"
                onClick={ () => onClickPaddingReset(classNameList, controlId) }
                style={{
                  width: "10%",
                  minWidth: "40px"
                }}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
                <span className="sr-only">Remove Padding Class ({controlId})</span>
              </button>
            </PanelRow>

      };

      return (
        <Fragment>
          <BlockEdit { ...props } />
          <InspectorControls>
            <PanelBody
              title={ __( 'Block Padding (experimental)', 'advanced-bootstrap-blocks' ) }
              initialOpen={false}
            >
            {
              breakpoints.map( breakpoint => {
                return variants.map( variant => { 
                  return <PaddingControls key={`${breakpoint}_${variant}`} breakpoint={breakpoint} variant={variant}/>
                });
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

