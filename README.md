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

This plugin implements flexible Bootstrap 4 blocks for building custom page layouts in the Wordpress editor (aka Gutenberg.) The following components are currently supported: 

* Container (fixed-width, fluid)
* Row
* Column
* Button

Bootstrap styles are included in the Gutenberg editor but need to be included in your theme (at least the bootstrap grid) for these blocks to appear correctly on your public-facing website. Once enabled, a `Reusable Blocks` menu will be available through the Wordpress Dashboard.

This plugin is developed, tested, and intended to be used within [Understrap](https://understrap.com/). 

Please submit issues, feature-, and pull-requests through [https://gitlab.com/helpful.dev/advanced-bootstrap-blocks](https://gitlab.com/helpful.dev/advanced-bootstrap-blocks). 

== Changelog ==

### 1.0.6
* Make column .offset-* classes available in editor
* Update Button editor UI (per standards in WP editor handbook)
* Improved block selection w/ CSS pointer-events

### 1.0.5
* All Bootstrap styles are now included in editor by default (this may change in the future)
* Fix bug with omission of custom container classNames in editor
* Increase padding around main container layout

### 1.0.4

* Adding basic `Button` component (with style, block, size, outline, new-window settings) 
* Minor README changes