<?php
/**
 * @package annastiina
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:05:35
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2020-02-18 15:06:07
 */

namespace Air_Light;

/**
 * Registers the Your Taxonomy taxonomy.
 *
 * @param Array $post_types Optional. Post types in
 * which the taxonomy should be registered.
 */
class Your_Taxonomy extends Taxonomy {


  public function register( array $post_types = [] ) {
    // Taxonomy labels.
    $labels = [
      'name'                  => _x( 'Your Taxonomies', 'Taxonomy plural name', 'annastiina' ),
      'singular_name'         => _x( 'Your Taxonomy', 'Taxonomy singular name', 'annastiina' ),
      'search_items'          => __( 'Search Your Taxonomies', 'annastiina' ),
      'popular_items'         => __( 'Popular Your Taxonomies', 'annastiina' ),
      'all_items'             => __( 'All Your Taxonomies', 'annastiina' ),
      'parent_item'           => __( 'Parent Your Taxonomy', 'annastiina' ),
      'parent_item_colon'     => __( 'Parent Your Taxonomy', 'annastiina' ),
      'edit_item'             => __( 'Edit Your Taxonomy', 'annastiina' ),
      'update_item'           => __( 'Update Your Taxonomy', 'annastiina' ),
      'add_new_item'          => __( 'Add New Your Taxonomy', 'annastiina' ),
      'new_item_name'         => __( 'New Your Taxonomy', 'annastiina' ),
      'add_or_remove_items'   => __( 'Add or remove Your Taxonomies', 'annastiina' ),
      'choose_from_most_used' => __( 'Choose from most used Taxonomies', 'annastiina' ),
      'menu_name'             => __( 'Your Taxonomy', 'annastiina' ),
    ];

    $args = [
      'labels'            => $labels,
      'public'            => false,
      'show_in_nav_menus' => true,
      'show_admin_column' => true,
      'hierarchical'      => true,
      'show_tagcloud'     => false,
      'show_ui'           => true,
      'query_var'         => false,
      'rewrite'           => [
        'slug' => 'your-taxonomy',
      ],
    ];

    $this->register_wp_taxonomy( $this->slug, $post_types, $args );
  }

}
