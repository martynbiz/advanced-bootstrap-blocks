=== Advanced Bootstrap Blocks ===
Contributors: helpfuldev
Tags: bootstrap, responsive, layout, grid, page builder, container, columns, blocks, button, group, editor, gutenberg
Donate link: https://paypal.me/helpfuldev
Requires at least: 5.0.0
Tested up to: 5.3.1
Stable tag: trunk
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.txt

Build responsive Bootstrap 4 layouts inside the Gutenberg editor. 

== Description ==

This plugin adds flexible Bootstrap 4 blocks to the WordPress editor for creating custom page layouts using the Bootstrap grid.

Are you using Advanced Bootstrap Blocks? Please [write a review](https://wordpress.org/plugins/advanced-bootstrap-blocks/#reviews)!

== Blocks == 

The following Bootstrap components are available: 

* Container (fixed-width or fluid, with background image settings)
* Row
* Column
* Button and Button Group

== Frequently Asked Questions ==

### Does this plugin add Bootstrap styles or scripts to my theme? 

This plugin does not add styles or scripts to your website. Necessary Bootstrap 4 will be available in the editor but needs to be added to your theme for these blocks to appear correctly on your public-facing website.

### This plugin is giving me trouble. Can you help?

Yes. This plugin is under active development and maintenance--your feedback is important. 

Please submit issues, feature requests through the [support page](http://wordpress.org/plugins/advanced-bootstrap-blocks), or browse the source at [https://gitlab.com/helpful.dev/advanced-bootstrap-blocks](https://gitlab.com/helpful.dev/advanced-bootstrap-blocks). 

== Changelog ==
### 1.1.4 
* Override block outlines with original outline colors
* Replaced icon on all blocks with Bootstrap-branded icon
* Updated default state of Card block to match basic Bootstrap 4 example
* Retitled Container "Background Settings" to "Background Image Settings"
* Minor changes to block editor UI

### 1.1.3
* Added Button Group block
* Removed colored block outlines (made redundant by WP 5.3 release)
* Modified initial state of Container block (defaults to 3 columns) 
* Modified initial state of Card block (includes Card Header, Card Body, and Card Footer)

### 1.1.1-1.1.2
* Removed vertical margin from blocks in WordPress v5.3

### 1.1.0
* Added `Card`, `CardHeader`, and `CardBody` blocks
* Added `Bootstrap Classes` inspector utility for toggling BS4 classes

### 1.0.10
* Added background size, repeat, and position settings to Container `Background Image` settings
* Fixed namespacing and inheritance issues with editor-specific Bootstrap grid styles
* Removed unneeded wrapping div from around Container in WP editor

### 1.0.9
* Fixed bug with `Container` save markup
* Fixed bug with `Button` text state 

### 1.0.8
* Added background-image selector to `Container` block (adds `style="background-image:url();"` to `Container` markup)

### 1.0.7
* Refined `Button` block (add URL picker, button text is directly editable)
* General UI improvements

### 1.0.6
* Made column .offset-* classes available in editor
* Updated Button editor UI (per standards in WP editor handbook)
* Improved block selection w/ CSS pointer-events

### 1.0.5
* All Bootstrap styles now included in editor by default (this may change in the future)
* Fixed bug with omission of custom container classNames in editor
* Increased padding around main container layout

### 1.0.4
* Added basic `Button` component (with style, block, size, outline, new-window settings) 
* Minor README changes