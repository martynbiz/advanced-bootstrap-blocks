<?php
/**
 * Plugin Name: Advanced Bootstrap Blocks
 * Plugin URI: https://www.wordpress.org/plugins/advanced-bootstrap-blocks/
 * Description: Flexible Bootstrap 4 blocks for building custom page layouts in the Wordpress editor (aka Gutenberg.) 
 * Author: Joe Daddario
 * Author URI: https://shrthnd.org/
 * Version: 0.9.0
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
