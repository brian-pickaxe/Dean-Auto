<?php
/**
 * Dean Auto theme functions and setup
 */

function deanauto_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
	add_theme_support( 'custom-logo', array(
		'height'      => 120,
		'width'       => 400,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'deanauto' ),
	) );
}
add_action( 'after_setup_theme', 'deanauto_setup' );

/** Ensure page templates appear in the Template dropdown */
function deanauto_register_page_templates( $templates ) {
	$theme_dir = get_stylesheet_directory();
	$map       = array(
		'page-contact.php'         => 'Contact',
		'page-interior.php'        => 'Interior Detailing',
		'page-exterior.php'        => 'Exterior Detailing',
		'page-ceramic-coating.php' => 'Ceramic Coating',
		'page-service-area.php'    => 'Service Area City',
	);
	foreach ( $map as $file => $label ) {
		if ( file_exists( $theme_dir . '/' . $file ) ) {
			$templates[ $file ] = $label;
		}
	}
	return $templates;
}
add_filter( 'theme_page_templates', 'deanauto_register_page_templates' );

function deanauto_scripts() {
	wp_enqueue_style( 'deanauto-style', get_stylesheet_uri(), array(), '1.3.1' );
	// Setmore booking script (loaded on all pages for Book Now button)
	wp_enqueue_script(
		'setmore-booking',
		'https://assets.setmore.com/integration/static/setmoreIframeLive.js',
		array(),
		null,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'deanauto_scripts' );

/** Book Now URL - change if your Setmore link changes */
function deanauto_book_url() {
	return 'https://deanautodetailers.setmore.com';
}

/** Click-to-call phone helpers */
function deanauto_phone_display() {
	return '(720) 532-3072';
}

function deanauto_phone_tel() {
	return '+17205323072';
}

/**
 * SEO title + meta description map (primary market: Thornton).
 *
 * @return array{title:?string,description:?string,canonical:?string}
 */
function deanauto_seo_meta_for_request() {
	$home = home_url( '/' );
	$meta = array(
		'title'       => null,
		'description' => null,
		'canonical'   => null,
	);

	if ( is_front_page() ) {
		$meta['title']       = 'Mobile Car Detailing Thornton CO | Dean Auto Detailers';
		$meta['description'] = 'Professional mobile car detailing brought to your doorstep in Thornton & North Denver. Premium interior cleaning, exterior polishing & ceramic coatings. Book today!';
		$meta['canonical']   = $home;
		return $meta;
	}

	if ( is_page() ) {
		$slug = get_post_field( 'post_name', get_queried_object_id() );
		$map  = array(
			'pricing'          => array(
				'title'       => 'Pricing | Mobile Car Detailing Cost Thornton CO | Dean Auto',
				'description' => 'Transparent mobile car detailing prices in Thornton & North Denver. Interior & exterior from $100, full detail from $180, ceramic coating from $400. Book online.',
				'canonical'   => home_url( '/pricing/' ),
			),
			'about'            => array(
				'title'       => 'About Us | Mobile Car Detailing Experts | Dean Auto Detailers',
				'description' => 'Meet Dean Auto Detailers — mobile car detailing in Thornton, CO using Adam\'s Polishes, Koch Chemie & P&S. Serving Westminster, Brighton & North Denver.',
				'canonical'   => home_url( '/about/' ),
			),
			'contact'          => array(
				'title'       => 'Contact | Book Mobile Car Detailing Thornton CO | Dean Auto',
				'description' => 'Book mobile car detailing in Thornton & North Denver. Call (720) 532-3072 or email deanautodetailers95@gmail.com. We come to your home or office.',
				'canonical'   => home_url( '/contact/' ),
			),
			'interior'         => array(
				'title'       => 'Interior Car Detailing Thornton CO | Dean Auto Detailers',
				'description' => 'Mobile interior car detailing in Thornton & North Denver. Deep cleaning, vacuuming & sanitization with Adam\'s Polishes & P&S. From $100. Book today!',
				'canonical'   => home_url( '/services/interior/' ),
			),
			'exterior'         => array(
				'title'       => 'Exterior Car Detailing Thornton CO | Dean Auto Detailers',
				'description' => 'Mobile exterior car detailing in Thornton & North Denver. Hand wash, clay bar, wax & wheel cleaning with Koch Chemie & Adam\'s Polishes. From $100.',
				'canonical'   => home_url( '/services/exterior/' ),
			),
			'ceramic-coating'  => array(
				'title'       => 'Ceramic Coating Thornton CO | Paint Protection | Dean Auto',
				'description' => 'Graphene ceramic coating in Thornton & North Denver. 5+ years paint protection with a hydrophobic finish. Mobile service. From $400. Get a quote.',
				'canonical'   => home_url( '/services/ceramic-coating/' ),
			),
			'westminster'      => array(
				'title'       => 'Mobile Car Detailing Westminster CO | Dean Auto Detailers',
				'description' => 'Professional mobile car detailing in Westminster, CO. Interior, exterior & ceramic coating at your home or office. Call (720) 532-3072 to book.',
				'canonical'   => home_url( '/westminster/' ),
			),
			'brighton'         => array(
				'title'       => 'Mobile Car Detailing Brighton CO | Dean Auto Detailers',
				'description' => 'Professional mobile car detailing in Brighton, CO. Interior, exterior & ceramic coating brought to your door. Call (720) 532-3072 to book.',
				'canonical'   => home_url( '/brighton/' ),
			),
			'north-denver'     => array(
				'title'       => 'Mobile Car Detailing North Denver | Dean Auto Detailers',
				'description' => 'Mobile car detailing across North Denver suburbs including Thornton, Westminster & Brighton. Premium products. Call (720) 532-3072.',
				'canonical'   => home_url( '/north-denver/' ),
			),
		);
		if ( isset( $map[ $slug ] ) ) {
			return $map[ $slug ];
		}
	}

	return $meta;
}

function deanauto_document_title( $title ) {
	$meta = deanauto_seo_meta_for_request();
	if ( ! empty( $meta['title'] ) ) {
		return $meta['title'];
	}
	return $title;
}
add_filter( 'pre_get_document_title', 'deanauto_document_title', 20 );

/** Yoast SEO is active on production — feed it our optimized titles/descriptions. */
function deanauto_yoast_title( $title ) {
	$meta = deanauto_seo_meta_for_request();
	return ! empty( $meta['title'] ) ? $meta['title'] : $title;
}
function deanauto_yoast_description( $desc ) {
	$meta = deanauto_seo_meta_for_request();
	return ! empty( $meta['description'] ) ? $meta['description'] : $desc;
}
function deanauto_yoast_canonical( $canonical ) {
	$meta = deanauto_seo_meta_for_request();
	return ! empty( $meta['canonical'] ) ? $meta['canonical'] : $canonical;
}
add_filter( 'wpseo_title', 'deanauto_yoast_title', 20 );
add_filter( 'wpseo_opengraph_title', 'deanauto_yoast_title', 20 );
add_filter( 'wpseo_twitter_title', 'deanauto_yoast_title', 20 );
add_filter( 'wpseo_metadesc', 'deanauto_yoast_description', 20 );
add_filter( 'wpseo_opengraph_desc', 'deanauto_yoast_description', 20 );
add_filter( 'wpseo_twitter_description', 'deanauto_yoast_description', 20 );
add_filter( 'wpseo_canonical', 'deanauto_yoast_canonical', 20 );

function deanauto_output_seo_head() {
	// Avoid duplicate meta tags when Yoast is handling SEO output.
	if ( defined( 'WPSEO_VERSION' ) ) {
		return;
	}
	$meta = deanauto_seo_meta_for_request();
	if ( ! empty( $meta['description'] ) ) {
		echo '<meta name="description" content="' . esc_attr( $meta['description'] ) . '" />' . "\n";
	}
	if ( ! empty( $meta['canonical'] ) ) {
		echo '<link rel="canonical" href="' . esc_url( $meta['canonical'] ) . '" />' . "\n";
	}
	$title = ! empty( $meta['title'] ) ? $meta['title'] : wp_get_document_title();
	$desc  = ! empty( $meta['description'] ) ? $meta['description'] : get_bloginfo( 'description' );
	$url   = ! empty( $meta['canonical'] ) ? $meta['canonical'] : home_url( '/' );
	$img   = get_template_directory_uri() . '/images/deanauto.png';
	echo '<meta property="og:type" content="website" />' . "\n";
	echo '<meta property="og:site_name" content="Dean Auto Detailers" />' . "\n";
	echo '<meta property="og:title" content="' . esc_attr( $title ) . '" />' . "\n";
	echo '<meta property="og:description" content="' . esc_attr( $desc ) . '" />' . "\n";
	echo '<meta property="og:url" content="' . esc_url( $url ) . '" />' . "\n";
	echo '<meta property="og:image" content="' . esc_url( $img ) . '" />' . "\n";
	echo '<meta name="twitter:card" content="summary_large_image" />' . "\n";
	echo '<meta name="twitter:title" content="' . esc_attr( $title ) . '" />' . "\n";
	echo '<meta name="twitter:description" content="' . esc_attr( $desc ) . '" />' . "\n";
}
add_action( 'wp_head', 'deanauto_output_seo_head', 1 );

/** LocalBusiness / AutomotiveBusiness JSON-LD */
function deanauto_output_local_business_schema() {
	$data = array(
		'@context'    => 'https://schema.org',
		'@type'       => 'AutomotiveBusiness',
		'@id'         => home_url( '/#organization' ),
		'name'        => 'Dean Auto Detailers',
		'alternateName' => 'Dean Auto',
		'description' => 'Professional mobile car detailing services in Thornton, Westminster, Brighton, and North Denver suburbs. Interior, exterior, and ceramic coating using premium Adam\'s Polishes, Koch Chemie, and P&S products.',
		'url'         => home_url( '/' ),
		'logo'        => get_template_directory_uri() . '/images/deanauto.png',
		'image'       => get_template_directory_uri() . '/images/deanauto.png',
		'telephone'   => deanauto_phone_tel(),
		'email'       => 'deanautodetailers95@gmail.com',
		'priceRange'  => '$$',
		'address'     => array(
			'@type'           => 'PostalAddress',
			'addressLocality' => 'Thornton',
			'addressRegion'   => 'CO',
			'postalCode'      => '80233',
			'addressCountry'  => 'US',
		),
		'geo'         => array(
			'@type'     => 'GeoCoordinates',
			'latitude'  => '39.8680',
			'longitude' => '-104.9719',
		),
		'areaServed'  => array(
			array( '@type' => 'City', 'name' => 'Thornton', 'addressRegion' => 'CO' ),
			array( '@type' => 'City', 'name' => 'Westminster', 'addressRegion' => 'CO' ),
			array( '@type' => 'City', 'name' => 'Brighton', 'addressRegion' => 'CO' ),
			array( '@type' => 'City', 'name' => 'Northglenn', 'addressRegion' => 'CO' ),
		),
		'openingHoursSpecification' => array(
			array(
				'@type'     => 'OpeningHoursSpecification',
				'dayOfWeek' => array( 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ),
				'opens'     => '08:00',
				'closes'    => '18:00',
			),
			array(
				'@type'     => 'OpeningHoursSpecification',
				'dayOfWeek' => 'Saturday',
				'opens'     => '09:00',
				'closes'    => '17:00',
			),
		),
		'hasOfferCatalog' => array(
			'@type'           => 'OfferCatalog',
			'name'            => 'Car Detailing Services',
			'itemListElement' => array(
				array(
					'@type'       => 'Offer',
					'itemOffered' => array(
						'@type'       => 'Service',
						'name'        => 'Interior Detailing',
						'description' => 'Complete interior cleaning and refresh from $100',
						'url'         => home_url( '/services/interior/' ),
					),
				),
				array(
					'@type'       => 'Offer',
					'itemOffered' => array(
						'@type'       => 'Service',
						'name'        => 'Exterior Detailing',
						'description' => 'Hand wash, wheels, and exterior finish from $100',
						'url'         => home_url( '/services/exterior/' ),
					),
				),
				array(
					'@type'       => 'Offer',
					'itemOffered' => array(
						'@type'       => 'Service',
						'name'        => 'Ceramic Coating',
						'description' => 'Long-lasting ceramic paint protection from $400',
						'url'         => home_url( '/services/ceramic-coating/' ),
					),
				),
			),
		),
		'sameAs' => array( 'https://deanautodetailers.setmore.com' ),
		'potentialAction' => array(
			'@type'  => 'ReserveAction',
			'target' => array(
				'@type'          => 'EntryPoint',
				'url'            => deanauto_book_url(),
				'actionPlatform' => array(
					'http://schema.org/DesktopWebPlatform',
					'http://schema.org/MobileWebPlatform',
				),
			),
			'result' => array(
				'@type' => 'Reservation',
				'name'  => 'Book Dean Auto Detailing Appointment',
			),
		),
	);

	echo '<script type="application/ld+json">' . wp_json_encode( $data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . '</script>' . "\n";
}
add_action( 'wp_head', 'deanauto_output_local_business_schema', 5 );

/**
 * Ensure SEO landing pages exist (services + city pages).
 * Runs once after option flag is set.
 */
function deanauto_ensure_seo_pages() {
	if ( get_option( 'deanauto_seo_pages_v1' ) === '1' ) {
		return;
	}
	if ( ! function_exists( 'wp_insert_post' ) ) {
		return;
	}

	$parent_id = 0;
	$services  = get_page_by_path( 'services' );
	if ( ! $services ) {
		$parent_id = wp_insert_post(
			array(
				'post_title'  => 'Services',
				'post_name'   => 'services',
				'post_status' => 'publish',
				'post_type'   => 'page',
				'post_content'=> 'Mobile car detailing services from Dean Auto Detailers.',
			)
		);
	} else {
		$parent_id = (int) $services->ID;
	}

	$pages = array(
		array(
			'title'    => 'Interior Detailing',
			'slug'     => 'interior',
			'parent'   => $parent_id,
			'template' => 'page-interior.php',
		),
		array(
			'title'    => 'Exterior Detailing',
			'slug'     => 'exterior',
			'parent'   => $parent_id,
			'template' => 'page-exterior.php',
		),
		array(
			'title'    => 'Ceramic Coating',
			'slug'     => 'ceramic-coating',
			'parent'   => $parent_id,
			'template' => 'page-ceramic-coating.php',
		),
		array(
			'title'    => 'Westminster',
			'slug'     => 'westminster',
			'parent'   => 0,
			'template' => 'page-service-area.php',
		),
		array(
			'title'    => 'Brighton',
			'slug'     => 'brighton',
			'parent'   => 0,
			'template' => 'page-service-area.php',
		),
		array(
			'title'    => 'North Denver',
			'slug'     => 'north-denver',
			'parent'   => 0,
			'template' => 'page-service-area.php',
		),
	);

	foreach ( $pages as $page ) {
		$path = $page['parent'] ? 'services/' . $page['slug'] : $page['slug'];
		$existing = get_page_by_path( $path );
		if ( $existing ) {
			update_post_meta( $existing->ID, '_wp_page_template', $page['template'] );
			continue;
		}
		$id = wp_insert_post(
			array(
				'post_title'  => $page['title'],
				'post_name'   => $page['slug'],
				'post_status' => 'publish',
				'post_type'   => 'page',
				'post_parent' => $page['parent'],
			)
		);
		if ( $id && ! is_wp_error( $id ) ) {
			update_post_meta( $id, '_wp_page_template', $page['template'] );
		}
	}

	update_option( 'deanauto_seo_pages_v1', '1' );
}
add_action( 'init', 'deanauto_ensure_seo_pages', 20 );

/**
 * Pricing Packages - editable from WordPress admin
 * Custom Post Type so you can add, edit, reorder packages without touching theme code.
 */
function deanauto_register_package_post_type() {
	$labels = array(
		'name'               => 'Pricing Packages',
		'singular_name'      => 'Package',
		'menu_name'          => 'Pricing Packages',
		'add_new'            => 'Add Package',
		'add_new_item'       => 'Add New Package',
		'edit_item'          => 'Edit Package',
		'new_item'           => 'New Package',
		'view_item'          => 'View Package',
		'search_items'       => 'Search Packages',
		'not_found'          => 'No packages found.',
		'not_found_in_trash' => 'No packages found in Trash.',
	);
	$args = array(
		'labels'             => $labels,
		'public'             => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'menu_position'      => 25,
		'menu_icon'          => 'dashicons-cart',
		'supports'           => array( 'title' ),
		'has_archive'        => false,
		'rewrite'            => false,
		'query_var'          => false,
		'show_in_rest'       => false,
	);
	register_post_type( 'deanauto_package', $args );
}
add_action( 'init', 'deanauto_register_package_post_type' );

function deanauto_package_meta_boxes() {
	add_meta_box(
		'deanauto_package_details',
		'Package details',
		'deanauto_package_meta_box_callback',
		'deanauto_package',
		'normal'
	);
}
add_action( 'add_meta_boxes', 'deanauto_package_meta_boxes' );

/** Background/media image for a pricing card, based on package title. */
function deanauto_package_card_image( $title ) {
	$map = array(
		'Interior'         => 'interior-glistening-dash.jpg',
		'Exterior'         => 'gallery-1.jpg',
		'Full Detail'      => 'gallery-4.jpg',
		'Polish'           => 'gallery-5.jpg',
		'Ceramic Coating'  => 'product-adams-graphene.jpg',
	);
	$key = trim( (string) $title );
	$file = isset( $map[ $key ] ) ? $map[ $key ] : 'gallery-2.jpg';
	$path = get_template_directory() . '/images/' . $file;
	if ( ! file_exists( $path ) ) {
		return '';
	}
	return get_template_directory_uri() . '/images/' . $file;
}

/** Extra services shown below the package cards (hardcoded; edit here to change). */
function deanauto_get_extra_services() {
	return array(
		array( 'name' => 'Engine Bay Detail', 'price' => '$30' ),
		array( 'name' => 'Interior Polish', 'price' => '$40' ),
		array( 'name' => 'Stain Removal', 'price' => '$50' ),
		array( 'name' => 'Headlight Restoration', 'price' => '$35' ),
		array( 'name' => 'Trim Restoration', 'price' => '$40' ),
		array( 'name' => 'Glass Ceramic', 'price' => '$12 / window' ),
		array( 'name' => 'Interior Ceramic', 'price' => '$25 / seat' ),
		array( 'name' => 'Ceramic Wheels', 'price' => '$75' ),
	);
}

/** Default package definitions (vehicle-size pricing). */
function deanauto_get_default_packages() {
	return array(
		array(
			'title'    => 'Interior',
			'price'    => 'From $100',
			'desc'     => 'Complete interior cleaning and refresh',
			'note'     => '',
			'features' => "Deep vacuuming\nDashboard and console cleaning\nSeat cleaning and conditioning\nInterior window cleaning\nDoor panels, vents, and trunk",
			'popular'  => false,
			'sedan'    => '$100',
			'suv'      => '$115',
			'truck'    => '$130',
			'van'      => '$145',
		),
		array(
			'title'    => 'Exterior',
			'price'    => 'From $100',
			'desc'     => 'Hand wash, wheels, and exterior finish',
			'note'     => '',
			'features' => "Hand wash and dry\nWheel and tire cleaning\nTrim dressing\nExterior window cleaning",
			'popular'  => false,
			'sedan'    => '$100',
			'suv'      => '$115',
			'truck'    => '$130',
			'van'      => '$145',
		),
		array(
			'title'    => 'Full Detail',
			'price'    => 'From $180',
			'desc'     => 'Interior and exterior combined',
			'note'     => '',
			'features' => "Full interior detailing\nFull exterior detailing\nBest value for a complete refresh",
			'popular'  => true,
			'sedan'    => '$180',
			'suv'      => '$210',
			'truck'    => '$240',
			'van'      => '$270',
		),
		array(
			'title'    => 'Polish',
			'price'    => 'From $150',
			'desc'     => 'Paint correction and polish',
			'note'     => 'Price varies based on paint condition.',
			'features' => "Paint correction\nMachine polish\nRestored gloss and clarity",
			'popular'  => false,
			'sedan'    => '$150',
			'suv'      => '$200–$250',
			'truck'    => '$225–$300',
			'van'      => '$300–$400',
		),
		array(
			'title'    => 'Ceramic Coating',
			'price'    => 'From $400',
			'desc'     => 'Long-lasting paint protection',
			'note'     => '',
			'features' => "Paint prep and coating\nHydrophobic protection\nEnhanced gloss and durability",
			'popular'  => false,
			'sedan'    => '$400',
			'suv'      => '$550',
			'truck'    => '$650',
			'van'      => '$750',
		),
	);
}

function deanauto_package_meta_box_callback( $post ) {
	wp_nonce_field( 'deanauto_package_save', 'deanauto_package_nonce' );
	$price       = get_post_meta( $post->ID, '_package_price', true );
	$description = get_post_meta( $post->ID, '_package_description', true );
	$note        = get_post_meta( $post->ID, '_package_note', true );
	$features    = get_post_meta( $post->ID, '_package_features', true );
	$popular     = get_post_meta( $post->ID, '_package_most_popular', true );
	$sedan       = get_post_meta( $post->ID, '_package_price_sedan', true );
	$suv         = get_post_meta( $post->ID, '_package_price_suv', true );
	$truck       = get_post_meta( $post->ID, '_package_price_truck', true );
	$van         = get_post_meta( $post->ID, '_package_price_van', true );
	?>
	<p>
		<label for="package_price"><strong>Price headline</strong> (e.g. From $100)</label><br>
		<input type="text" id="package_price" name="package_price" value="<?php echo esc_attr( $price ); ?>" class="widefat">
	</p>
	<p>
		<label for="package_description"><strong>Short description</strong></label><br>
		<input type="text" id="package_description" name="package_description" value="<?php echo esc_attr( $description ); ?>" class="widefat">
	</p>
	<p><strong>Vehicle size prices</strong></p>
	<p style="display:grid;grid-template-columns:1fr 1fr;gap:8px;max-width:480px;">
		<label>Sedan<br><input type="text" name="package_price_sedan" value="<?php echo esc_attr( $sedan ); ?>" class="widefat"></label>
		<label>SUV<br><input type="text" name="package_price_suv" value="<?php echo esc_attr( $suv ); ?>" class="widefat"></label>
		<label>Truck<br><input type="text" name="package_price_truck" value="<?php echo esc_attr( $truck ); ?>" class="widefat"></label>
		<label>Van<br><input type="text" name="package_price_van" value="<?php echo esc_attr( $van ); ?>" class="widefat"></label>
	</p>
	<p>
		<label for="package_note"><strong>Note</strong> (optional, e.g. price varies by paint condition)</label><br>
		<input type="text" id="package_note" name="package_note" value="<?php echo esc_attr( $note ); ?>" class="widefat">
	</p>
	<p>
		<label for="package_features"><strong>Features</strong> (one per line)</label><br>
		<textarea id="package_features" name="package_features" class="widefat" rows="6"><?php echo esc_textarea( $features ); ?></textarea>
	</p>
	<p>
		<label><input type="checkbox" name="package_most_popular" value="1" <?php checked( $popular, '1' ); ?>> Mark as &ldquo;Most popular&rdquo;</label>
	</p>
	<?php
}

function deanauto_package_save_meta( $post_id ) {
	if ( ! isset( $_POST['deanauto_package_nonce'] ) || ! wp_verify_nonce( $_POST['deanauto_package_nonce'], 'deanauto_package_save' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	if ( get_post_type( $post_id ) !== 'deanauto_package' ) {
		return;
	}
	$fields = array(
		'package_price'         => '_package_price',
		'package_description'   => '_package_description',
		'package_note'          => '_package_note',
		'package_price_sedan'   => '_package_price_sedan',
		'package_price_suv'     => '_package_price_suv',
		'package_price_truck'   => '_package_price_truck',
		'package_price_van'     => '_package_price_van',
	);
	foreach ( $fields as $post_key => $meta_key ) {
		if ( isset( $_POST[ $post_key ] ) ) {
			update_post_meta( $post_id, $meta_key, sanitize_text_field( wp_unslash( $_POST[ $post_key ] ) ) );
		}
	}
	if ( isset( $_POST['package_features'] ) ) {
		update_post_meta( $post_id, '_package_features', sanitize_textarea_field( wp_unslash( $_POST['package_features'] ) ) );
	}
	$popular = isset( $_POST['package_most_popular'] ) && $_POST['package_most_popular'] ? '1' : '0';
	update_post_meta( $post_id, '_package_most_popular', $popular );
}
add_action( 'save_post_deanauto_package', 'deanauto_package_save_meta' );

/** Insert default packages. Pass $force_replace true to delete existing packages first. */
function deanauto_seed_default_packages( $force_replace = false ) {
	$existing = get_posts( array(
		'post_type'   => 'deanauto_package',
		'numberposts' => -1,
		'post_status' => 'any',
		'fields'      => 'ids',
	) );
	if ( $existing && ! $force_replace ) {
		return;
	}
	if ( $force_replace && $existing ) {
		foreach ( $existing as $id ) {
			wp_delete_post( $id, true );
		}
	}
	foreach ( deanauto_get_default_packages() as $i => $pkg ) {
		$id = wp_insert_post( array(
			'post_type'   => 'deanauto_package',
			'post_title'   => $pkg['title'],
			'post_status' => 'publish',
			'menu_order'  => $i,
		) );
		if ( $id && ! is_wp_error( $id ) ) {
			update_post_meta( $id, '_package_price', $pkg['price'] );
			update_post_meta( $id, '_package_description', $pkg['desc'] );
			update_post_meta( $id, '_package_note', $pkg['note'] );
			update_post_meta( $id, '_package_features', $pkg['features'] );
			update_post_meta( $id, '_package_most_popular', $pkg['popular'] ? '1' : '0' );
			update_post_meta( $id, '_package_price_sedan', $pkg['sedan'] );
			update_post_meta( $id, '_package_price_suv', $pkg['suv'] );
			update_post_meta( $id, '_package_price_truck', $pkg['truck'] );
			update_post_meta( $id, '_package_price_van', $pkg['van'] );
		}
	}
}
add_action( 'after_switch_theme', 'deanauto_seed_default_packages' );

/** One-time migrate to vehicle-size pricing packages (v2). */
function deanauto_maybe_migrate_pricing_v2() {
	if ( get_option( 'deanauto_pricing_version' ) === '2' ) {
		return;
	}
	deanauto_seed_default_packages( true );
	update_option( 'deanauto_pricing_version', '2' );
}
add_action( 'init', 'deanauto_maybe_migrate_pricing_v2' );

/** Allow creating / resetting default packages from admin */
function deanauto_maybe_seed_packages_via_url() {
	if ( ! is_admin() || ! current_user_can( 'edit_posts' ) ) {
		return;
	}
	if ( isset( $_GET['deanauto_seed_packages'] ) && $_GET['deanauto_seed_packages'] === '1' && isset( $_GET['_wpnonce'] ) && wp_verify_nonce( $_GET['_wpnonce'], 'deanauto_seed_packages' ) ) {
		deanauto_seed_default_packages();
		wp_safe_redirect( admin_url( 'edit.php?post_type=deanauto_package&seeded=1' ) );
		exit;
	}
	if ( isset( $_GET['deanauto_reset_packages'] ) && $_GET['deanauto_reset_packages'] === '1' && isset( $_GET['_wpnonce'] ) && wp_verify_nonce( $_GET['_wpnonce'], 'deanauto_reset_packages' ) ) {
		deanauto_seed_default_packages( true );
		update_option( 'deanauto_pricing_version', '2' );
		wp_safe_redirect( admin_url( 'edit.php?post_type=deanauto_package&reset=1' ) );
		exit;
	}
}
add_action( 'admin_init', 'deanauto_maybe_seed_packages_via_url' );

function deanauto_package_admin_notice() {
	$screen = get_current_screen();
	if ( ! $screen || $screen->id !== 'edit-deanauto_package' ) {
		return;
	}
	if ( isset( $_GET['seeded'] ) && $_GET['seeded'] === '1' ) {
		echo '<div class="notice notice-success is-dismissible"><p>Default pricing packages have been created. Edit them below.</p></div>';
		return;
	}
	if ( isset( $_GET['reset'] ) && $_GET['reset'] === '1' ) {
		echo '<div class="notice notice-success is-dismissible"><p>Pricing packages were reset to the current vehicle-size pricing.</p></div>';
		return;
	}
	$count = wp_count_posts( 'deanauto_package' );
	$total = (int) $count->publish + (int) $count->draft;
	$reset_url = wp_nonce_url( add_query_arg( 'deanauto_reset_packages', '1', admin_url( 'edit.php?post_type=deanauto_package' ) ), 'deanauto_reset_packages' );
	if ( $total > 0 ) {
		echo '<div class="notice notice-info is-dismissible"><p><a href="' . esc_url( $reset_url ) . '">Reset packages to current pricing</a> (replaces all Pricing Packages with Interior, Exterior, Full Detail, Polish, and Ceramic Coating).</p></div>';
		return;
	}
	$url = wp_nonce_url( add_query_arg( 'deanauto_seed_packages', '1', admin_url( 'edit.php?post_type=deanauto_package' ) ), 'deanauto_seed_packages' );
	echo '<div class="notice notice-warning is-dismissible"><p>No pricing packages yet. <a href="' . esc_url( $url ) . '">Create default packages</a>.</p></div>';
}
add_action( 'admin_notices', 'deanauto_package_admin_notice' );
