<?php
/**
 * Plugin Name: Advanced Bootstrap Blocks
 * Plugin URI: https://www.wordpress.org/plugins/advanced-bootstrap-blocks/
 * Description: Flexible Bootstrap 4 blocks for building custom page layouts in the Wordpress editor (aka Gutenberg.) 
 * Tags: bootstrap, gutenberg, editor, blocks
 * Contributors: helpful.dev
 * Author: helpful.dev
 * Author URI: https://helpful.dev/
 * Version: 1.0.1-beta
 * Tested up to: 5.2.1
 * Requires at least: 5.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package advanced-bootstrap-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
