# Advanced Bootstrap Blocks
Contributors: helpfuldev
Tags: bootstrap, blocks, editor, gutenberg, responsive
Donate link: https://paypal.me/helpfuldev
Requires at least: 5.0.0
Tested up to: 5.2.1
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.txt

Build responsive Bootstrap 4 layouts inside the Gutenberg editor. 

== Description ==

This plugin adds flexible Bootstrap 4 blocks to the Wordpress editor (a.k.a Gutenberg) to allow content-creators to build their own custom page layouts. The following components are currently supported: 

* Container (fixed-width, fluid)
* Row
* Column
* Button

Bootstrap 4 styles are included in the Gutenberg editor but need to be included in your theme for these blocks to appear correctly on your public-facing website.

This plugin is developed, tested, and is intended to be used with [Understrap](https://understrap.com/). 

Please submit issues, feature-, and pull-requests through [https://gitlab.com/helpful.dev/advanced-bootstrap-blocks](https://gitlab.com/helpful.dev/advanced-bootstrap-blocks). 

== Changelog ==

### 1.0.7
* Refine `Button` block (add URL picker, button text is directly editable)
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