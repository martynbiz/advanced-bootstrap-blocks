=== Advanced Bootstrap Blocks ===
Contributors: helpfuldev
Tags: bs, bs4, bootstrap, bootstrap 4, blocks, button, columns, grid, editor, gutenberg, responsive
Donate link: https://paypal.me/helpfuldev
Requires at least: 5.0.0
Tested up to: 5.2.1
Stable tag: trunk
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.txt

Build responsive Bootstrap 4 layouts inside the Gutenberg editor. 

== Description ==

This plugin adds flexible Bootstrap 4 blocks to the WordPress editor which allow content-creators to build their own custom page layouts using the Bootstrap grid and helper classes.

The following Bootstrap components are currently available: 

* Container - fixed-width or fluid, inline background image
* Row
* Column
* Button

== Frequently Asked Questions == 

### Will this plugin apply Bootstrap styles or scripts available to my theme? 

No. Bootstrap 4 styles have been included in the Gutenberg editor but need to be added to your theme for these blocks to appear correctly on your public-facing website.

This plugin is developed, tested, and is intended to be used with [Understrap](https://understrap.com/). 

### This plugin is giving me trouble. Can you help?

Yes. This plugin is under active development and maintenance--your feedback is important. 

Please submit issues, feature requests through the [support page](http://wordpress.org/plugins/advanced-bootstrap-blocks), or browse the source at [https://gitlab.com/helpful.dev/advanced-bootstrap-blocks](https://gitlab.com/helpful.dev/advanced-bootstrap-blocks). 

== Changelog ==

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