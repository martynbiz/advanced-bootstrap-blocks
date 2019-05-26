//  Import CSS.
import './style.scss';
import './editor.scss';

const { __, setLocaleData } = wp.i18n;
const { PanelBody, PanelRow } = wp.components;

const {
	registerBlockType,
} = wp.blocks;

const {
	RichText,
	MediaUpload,	
} = wp.editor;

const { Button } = wp.components;



registerBlockType( 'cgb/block-wp-bootstrap-blocks', {
		title: __( 'Bootstrap Card', 'bootstrap-blocks' ),
		icon: 'index-card',
		category: 'layout',
		attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: '.card-title',
			},
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
			ingredients: {
				type: 'array',
				source: 'children',
				selector: '.list-group',
			},
			instructions: {
				type: 'array',
				source: 'children',
				selector: '.description',
			},
		},
		edit: ( props ) => {
			const {
				className,
				attributes: {
					title,
					mediaID,
					mediaURL,
					ingredients,
					instructions,
				},
				setAttributes,
			} = props;

			const onChangeTitle = ( value ) => {
				setAttributes( { title: value } );
			};
	
			const onSelectImage = ( media ) => {
				setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};
			
			const onChangeIngredients = ( value ) => {
				setAttributes( { ingredients: value } );
			};
	
			const onChangeInstructions = ( value ) => {
				console.log(value);
				setAttributes( { instructions: value } );
			};

			return (
				<div className={ [className, "card"].join(" ") }>
					<div className="card-img-top">
						<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes="image"
							value={ mediaID }
							render={ ( { open } ) => (
								<Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
									{ ! mediaID ? __( 'Upload Image', 'bootstrap-blocks' ) : <img src={ mediaURL } alt={ __( 'Upload Recipe Image', 'bootstrap-blocks' ) } /> }
								</Button>
							) }
						/>
					</div>
					<div className="card-body">
						<RichText
							tagName="h2"
							placeholder={ __( 'Write Recipe title…', 'bootstrap-blocks' ) }
							value={ title }
							className="card-title"
							onChange={ onChangeTitle }
						/>
						
						<h3 className="card-subtitle">{ __( 'Ingredients', 'bootstrap-blocks' ) }</h3>
						<RichText
							className="list-group list-group-flush"
							tagName="ul"
							multiline="li"
							placeholder={ __( 'Write a list of ingredients…', 'bootstrap-blocks' ) }
							value={ ingredients }
							onChange={ onChangeIngredients }
						/>
						
						<h3>{ __( 'Features', 'bootstrap-blocks' ) }</h3>
						<RichText
							tagName="div"
							multiline="p"
							className="description card-text"
							placeholder={ __( 'Description', 'bootstrap-block' ) }
							value={ instructions }
							onChange={ onChangeInstructions }
						/>
					</div>
				</div>
			);
		},
		save: ( props ) => {
			const {
				className,
				attributes: {
					title,
					mediaURL,
					ingredients,
					instructions,
				},
			} = props;
			return (
				<div className={ [className, "card"].join(" ") }>	
					{
						mediaURL && (
							<img className="card-img-top" src={ mediaURL } alt={ __( 'Recipe Image', 'bootstrap-blocks' ) } />
						)
					}
					<RichText.Content tagName="h2" className="card-title" value={ title } />
					<RichText.Content tagName="ul" multiline="li" className="list-group list-group-flush" value={ ingredients } />
					<RichText.Content tagName="div" className="card-text" value={ instructions } />
				</div>
			);
		},
	} );
	