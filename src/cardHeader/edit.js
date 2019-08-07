const {
  InnerBlocks
} = wp.editor;

const {
  Fragment
} = wp.element; 

export const edit = (props) => {
  return (
    <Fragment>
      <InnerBlocks />
    </Fragment>
  );
}