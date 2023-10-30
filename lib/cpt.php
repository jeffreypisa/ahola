<?php 

  function create_posttype() {
  	register_post_type( 'project',
  	// CPT Options
  		array(
  			'labels' => array(
  				'name'                  => __( 'Collection' ),
  				'singular_name'         => __( 'Collection' ),
      		'all_items'             => __( 'Alle collections' ),
      		'add_new_item'          => __( 'Nieuw collection toevoegen' ),
      		'new_item'              => __( 'Nieuw collection' ),
          'add_new'               => __( 'Nieuw collection' ),
      		'edit_item'             => __( 'Bewerk collection' ),
      		'update_item'           => __( 'Update collection' ),
      		'view_item'             => __( 'Bekijk collection' ),
      		'search_items'          => __( 'Zoek collection' ),
  			),
  			'menu_icon'               => 'dashicons-portfolio',
  			'public'                  => true,
  			'has_archive'             => true,
  			'rewrite'                 => array('slug' => 'collection'),
  			'supports'                => array( 'title', 'thumbnail', 'editor' ),
  		)
  	);  		
  }
  // Hooking up our function to theme setup
  add_action( 'init', 'create_posttype' ); 

?>