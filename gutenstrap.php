<?php
/**
 * Plugin Name: Gutenstrap - Bootstrap 4 Blocks for Gutenberg
 * Plugin URI: https://www.wordpress.org/plugins/gutenstrap/
 * Description: Light-weight Bootstrap 4 blocks for building layouts in the Gutenberg editor.
 * Author: helpfuldesign
 * Author URI: https://helpful.design/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package gutenstrap
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
