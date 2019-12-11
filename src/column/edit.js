const {
  InnerBlocks
} = wp.blockEditor;

export const edit = (props) => {
  return (
    <div 
      // style={{ outline: '1px dashed green'}}
    >
      <InnerBlocks />
    </div>
  );
}