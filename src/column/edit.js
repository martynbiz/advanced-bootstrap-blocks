const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
  InspectorControls,
  InnerBlocks
} = wp.editor;

export const edit = (props) => {
  return (
    <div 
      style={{ outline: '1px dashed green'}}
    >
      <InnerBlocks />
    </div>
  );
}