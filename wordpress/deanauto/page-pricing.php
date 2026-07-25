<?php
/**
 * Template Name: Pricing
 * Displays packages from Pricing Packages (Dean Auto admin). Edit under Pricing Packages in the sidebar.
 */
get_header();
$book_url = deanauto_book_url();

$packages = new WP_Query( array(
	'post_type'      => 'deanauto_package',
	'posts_per_page' => -1,
	'orderby'        => 'menu_order',
	'order'          => 'ASC',
	'post_status'    => 'publish',
) );

$extras = function_exists( 'deanauto_get_extra_services' ) ? deanauto_get_extra_services() : array();
?>
<section class="page-hero">
	<div class="container">
		<h1>Pricing</h1>
		<p>Transparent pricing for all our mobile detailing services. Contact us for a custom quote based on your vehicle size and specific needs.</p>
	</div>
</section>
<section style="padding: 5rem 0;" class="bg-gray">
	<div class="container">
		<div class="pricing-grid">
			<?php
			if ( $packages->have_posts() ) :
				while ( $packages->have_posts() ) :
					$packages->the_post();
					$price    = get_post_meta( get_the_ID(), '_package_price', true );
					$desc     = get_post_meta( get_the_ID(), '_package_description', true );
					$note     = get_post_meta( get_the_ID(), '_package_note', true );
					$features = get_post_meta( get_the_ID(), '_package_features', true );
					$popular  = get_post_meta( get_the_ID(), '_package_most_popular', true ) === '1';
					$features_list = array_filter( array_map( 'trim', explode( "\n", (string) $features ) ) );
					// Drop vehicle-size price lines if any remain in features.
					$features_list = array_values( array_filter( $features_list, function ( $line ) {
						return ! preg_match( '/^(Sedan|SUV|Truck|Van)\s*[—\-–]/i', $line );
					} ) );
					$image = function_exists( 'deanauto_package_card_image' )
						? deanauto_package_card_image( get_the_title() )
						: '';
					$card_class = 'pricing-card';
					if ( $popular ) {
						$card_class .= ' pricing-card-popular';
					}
					?>
					<div class="<?php echo esc_attr( $card_class ); ?>">
						<?php if ( $image ) : ?>
							<div class="pricing-card-media" style="background-image: url('<?php echo esc_url( $image ); ?>');" role="img" aria-hidden="true"></div>
						<?php endif; ?>
						<div class="pricing-card-body">
							<?php if ( $popular ) : ?>
								<div class="pricing-badge">Most popular</div>
							<?php endif; ?>
							<h3><?php the_title(); ?></h3>
							<?php if ( $price ) : ?><p class="price"><?php echo esc_html( $price ); ?></p><?php endif; ?>
							<?php if ( $desc ) : ?><p class="p-desc"><?php echo esc_html( $desc ); ?></p><?php endif; ?>
							<?php if ( $note ) : ?>
								<p class="p-note"><?php echo esc_html( $note ); ?></p>
							<?php endif; ?>
							<?php if ( ! empty( $features_list ) ) : ?>
								<ul>
									<?php foreach ( $features_list as $feature ) : ?>
										<li><?php echo esc_html( $feature ); ?></li>
									<?php endforeach; ?>
								</ul>
							<?php endif; ?>
						</div>
					</div>
					<?php
				endwhile;
				wp_reset_postdata();
			endif;
			?>
		</div>

		<?php if ( ! empty( $extras ) ) : ?>
			<div class="extras-section">
				<h2>Extra Services</h2>
				<p class="extras-intro">Add-ons available with any package.</p>
				<div class="extras-grid">
					<?php foreach ( $extras as $extra ) : ?>
						<div class="extra-card">
							<span class="extra-name"><?php echo esc_html( $extra['name'] ); ?></span>
							<span class="extra-price"><?php echo esc_html( $extra['price'] ); ?></span>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		<?php endif; ?>

		<div class="text-center">
			<a id="Setmore_button_iframe" href="<?php echo esc_url( $book_url ); ?>" class="btn btn-primary" style="padding: 1rem 2rem;">Book Now</a>
		</div>
	</div>
</section>
<?php get_footer(); ?>
