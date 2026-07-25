<?php
/**
 * Template Name: Service Area City
 * City landing pages for local SEO (Westminster, Brighton, North Denver, etc.)
 */
get_header();
$book_url = deanauto_book_url();
$phone    = deanauto_phone_display();
$tel      = deanauto_phone_tel();
$city     = get_the_title();
$slug     = get_post_field( 'post_name', get_the_ID() );

$blurbs = array(
	'westminster'  => 'From the Standley Lake area to near the Westminster Promenade, we bring professional mobile detailing to homes, apartments, and workplaces across Westminster.',
	'brighton'     => 'Serving Brighton neighborhoods and nearby Adams County addresses, we detail your vehicle on-site so you never have to wait at a shop.',
	'north-denver' => 'Across the North Denver metro — including Thornton, Westminster, Brighton, and Northglenn — Dean Auto Detailers delivers premium mobile detailing at your door.',
);

$blurb = isset( $blurbs[ $slug ] ) ? $blurbs[ $slug ] : 'We bring professional mobile car detailing to homes and workplaces throughout ' . $city . ' and nearby North Denver suburbs.';

$schema = array(
	'@context'   => 'https://schema.org',
	'@type'      => 'Service',
	'name'       => 'Mobile Car Detailing in ' . $city . ', CO',
	'description'=> 'Professional mobile car detailing in ' . $city . ', Colorado. Interior, exterior, and ceramic coating at your location.',
	'provider'   => array(
		'@type'     => 'AutomotiveBusiness',
		'name'      => 'Dean Auto Detailers',
		'telephone' => $tel,
		'url'       => home_url( '/' ),
	),
	'areaServed' => array(
		'@type'         => 'City',
		'name'          => $city,
		'addressRegion' => 'CO',
	),
);
?>
<script type="application/ld+json"><?php echo wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ); ?></script>
<section class="bg-white border-b" style="border-bottom: 1px solid var(--gray-200);">
	<div class="container service-content" style="padding: 4rem 1rem;">
		<h1>Mobile Car Detailing in <?php echo esc_html( $city ); ?>, CO</h1>
		<p>Looking for reliable <strong>car detailing in <?php echo esc_html( $city ); ?></strong>? Dean Auto Detailers brings interior cleaning, exterior wash &amp; polish, and ceramic coating to your driveway or parking lot — no shop drop-off required.</p>
		<p><?php echo esc_html( $blurb ); ?></p>
		<p>
			<a id="Setmore_button_iframe" href="<?php echo esc_url( $book_url ); ?>" class="btn btn-primary" style="padding: 0.75rem 2rem;">Book in <?php echo esc_html( $city ); ?></a>
			<a href="tel:<?php echo esc_attr( $tel ); ?>" class="btn btn-outline" style="padding: 0.75rem 2rem; margin-left: 0.5rem;">Call <?php echo esc_html( $phone ); ?></a>
		</p>
	</div>
</section>
<section style="padding: 4rem 0;">
	<div class="container service-content">
		<h2>Services Available in <?php echo esc_html( $city ); ?></h2>
		<ul>
			<li><a href="<?php echo esc_url( home_url( '/services/interior/' ) ); ?>">Interior detailing</a> — deep vacuum, stain treatment, leather/fabric care from $100</li>
			<li><a href="<?php echo esc_url( home_url( '/services/exterior/' ) ); ?>">Exterior detailing</a> — hand wash, clay bar, wax/sealant from $100</li>
			<li><a href="<?php echo esc_url( home_url( '/services/ceramic-coating/' ) ); ?>">Ceramic coating</a> — graphene paint protection from $400</li>
			<li>Full detail, polish, and add-ons — see <a href="<?php echo esc_url( home_url( '/pricing/' ) ); ?>">pricing</a></li>
		</ul>

		<h2>Why Book Mobile Detailing in <?php echo esc_html( $city ); ?></h2>
		<p>We use premium products from Adam&rsquo;s Polishes, Koch Chemie, and P&amp;S Detail Products. Every job is done by hand at your location in <?php echo esc_html( $city ); ?>, so you save a trip and keep your schedule intact.</p>

		<h2>Nearby Areas We Also Serve</h2>
		<p>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Thornton</a> ·
			<a href="<?php echo esc_url( home_url( '/westminster/' ) ); ?>">Westminster</a> ·
			<a href="<?php echo esc_url( home_url( '/brighton/' ) ); ?>">Brighton</a> ·
			<a href="<?php echo esc_url( home_url( '/north-denver/' ) ); ?>">North Denver</a>
		</p>

		<p>Ready to schedule? Call <a href="tel:<?php echo esc_attr( $tel ); ?>"><?php echo esc_html( $phone ); ?></a> or book online — we typically confirm appointments the same day.</p>
	</div>
</section>
<?php get_footer(); ?>
