const {
  Fragment
} = wp.element; 

const {
  InnerBlocks
} = wp.editor;

export const save = (props) => {
  return (
    <Fragment>
      <InnerBlocks.Content />
    </Fragment>
  );  
}