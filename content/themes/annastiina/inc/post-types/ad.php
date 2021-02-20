<?php
/**
 * @package annastiina
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:06:45
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-02-20 21:03:50
 **/

namespace Air_light;

/**
 * Registers the Your Post Type post type.
 */
class Ad extends Post_Type {

  public function register() {

    // Modify all the i18ized strings here.
    $generated_labels = [
      'name'                  => _x( 'Mainokset', 'Post Type General Name', 'annastiina' ),
      'singular_name'         => _x( 'Mainos', 'Post Type Singular Name', 'annastiina' ),
      'menu_name'             => __( 'Mainokset', 'annastiina' ),
      'name_admin_bar'        => __( 'Mainokset', 'annastiina' ),
      'archives'              => __( 'Mainos-arkistot', 'annastiina' ),
      'attributes'            => __( 'Mainoksen attribuutit', 'annastiina' ),
      'parent_item_colon'     => __( 'Isäntämainos:', 'annastiina' ),
      'all_items'             => __( 'Kaikki mainokset', 'annastiina' ),
      'add_new_item'          => __( 'Lisää mainos', 'annastiina' ),
      'add_new'               => __( 'Lisää mainos', 'annastiina' ),
      'new_item'              => __( 'Uusi mainos', 'annastiina' ),
      'edit_item'             => __( 'Muokkaa mainosta', 'annastiina' ),
      'update_item'           => __( 'Päivitä mainos', 'annastiina' ),
      'view_item'             => __( 'Katso mainos', 'annastiina' ),
      'view_items'            => __( 'Katso mainoksia', 'annastiina' ),
      'search_items'          => __( 'Etsi mainos', 'annastiina' ),
      'not_found'             => __( 'Ei löydy', 'annastiina' ),
      'not_found_in_trash'    => __( 'Ei löydy roskista', 'annastiina' ),
      'featured_image'        => __( 'Artikkelikuva', 'annastiina' ),
      'set_featured_image'    => __( 'Aseta artikkelikuva', 'annastiina' ),
      'remove_featured_image' => __( 'Poista artikkelikuva', 'annastiina' ),
      'use_featured_image'    => __( 'Käytä artikkelikuvana', 'annastiina' ),
      'insert_into_item'      => __( 'Lisää kohteeseen', 'annastiina' ),
      'uploaded_to_this_item' => __( 'Lisätty kohteeseen', 'annastiina' ),
      'items_list'            => __( 'Mainoslista', 'annastiina' ),
      'items_list_navigation' => __( 'Mainoslistan navigointi', 'annastiina' ),
      'filter_items_list'     => __( 'Suodata listaa', 'annastiina' ),
    ];

    // Definition of the post type arguments. For full list see:
    // http://codex.wordpress.org/Function_Reference/register_post_type
    $args = [
      'label'                 => __( 'Mainos', 'annastiina' ),
      'description'           => __( 'Ad slots', 'annastiina' ),
      'labels'                => $generated_labels,
      'supports'              => array( 'title', 'revisions', 'post-formats' ),
      'hierarchical'          => false,
      'public'                => false,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'menu_position'         => 5,
      'menu_icon'             => 'dashicons-forms',
      'show_in_admin_bar'     => true,
      'show_in_nav_menus'     => true,
      'can_export'            => true,
      'has_archive'           => false,
      'exclude_from_search'   => false,
      'publicly_queryable'    => false,
      'capability_type'       => 'page',
    ];

    $this->register_wp_post_type( $this->slug, $args );
  }
}
