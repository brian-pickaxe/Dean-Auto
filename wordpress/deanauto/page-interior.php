<?php
/**
 * Template Name: Interior Detailing
 */
get_header();
$book_url = deanauto_book_url();
$phone    = deanauto_phone_display();
$tel      = deanauto_phone_tel();

$schema = array(
	'@context'    => 'https://schema.org',
	'@type'       => 'Service',
	'name'        => 'Interior Car Detailing',
	'description' => 'Professional mobile interior car detailing in Thornton & North Denver. Deep cleaning, vacuuming and sanitization with Adam\'s Polishes and P&S.',
	'provider'    => array(
		'@type' => 'AutomotiveBusiness',
		'name'  => 'Dean Auto Detailers',
		'url'   => home_url( '/' ),
		'telephone' => $tel,
	),
	'areaServed'  => array(
		array( '@type' => 'City', 'name' => 'Thornton', 'addressRegion' => 'CO' ),
		array( '@type' => 'City', 'name' => 'Westminster', 'addressRegion' => 'CO' ),
		array( '@type' => 'City', 'name' => 'Brighton', 'addressRegion' => 'CO' ),
	),
	'offers'      => array(
		'@type'             => 'Offer',
		'priceSpecification'=> array(
			'@type'         => 'PriceSpecification',
			'minPrice'      => 100,
			'priceCurrency' => 'USD',
		),
	),
);
?>
<script type="application/ld+json"><?php echo wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ); ?></script>
<section class="bg-white border-b" style="border-bottom: 1px solid var(--gray-200);">
	<div class="container service-content" style="padding: 4rem 1rem;">
		<h1>Interior Car Detailing in Thornton, CO</h1>
		<p>Professional mobile interior car detailing brought to your door in Thornton and the North Denver suburbs — including <a href="<?php echo esc_url( home_url( '/westminster/' ) ); ?>">Westminster</a> and <a href="<?php echo esc_url( home_url( '/brighton/' ) ); ?>">Brighton</a>. We deep-clean and sanitize your cabin using Adam&rsquo;s Polishes and P&amp;S Detail Products for a fresh, like-new feel.</p>
		<p>Ideal for families, commuters, and anyone who wants a clean, healthy cabin without driving to a shop. We work at your home or office around your schedule.</p>
		<p>
			<a id="Setmore_button_iframe" href="<?php echo esc_url( $book_url ); ?>" class="btn btn-primary" style="padding: 0.75rem 2rem;">Book Now</a>
			<a href="tel:<?php echo esc_attr( $tel ); ?>" class="btn btn-outline" style="padding: 0.75rem 2rem; margin-left: 0.5rem;">Call <?php echo esc_html( $phone ); ?></a>
		</p>
	</div>
</section>
<section style="padding: 4rem 0;">
	<div class="container service-content">
		<h2>Our Interior Detailing Process</h2>
		<ol>
			<li><strong>Assess &amp; prep</strong> — We note stains, pet hair, and high-traffic zones so nothing is missed.</li>
			<li><strong>Deep vacuum</strong> — Carpets, seats, floor mats, and trunk are thoroughly vacuumed.</li>
			<li><strong>Surfaces &amp; crevices</strong> — Dashboard, console, door panels, vents, and tight seams are cleaned by hand.</li>
			<li><strong>Seats &amp; fabrics</strong> — Leather is cleaned and conditioned; fabric seats get a safe, residue-free clean.</li>
			<li><strong>Stain treatment</strong> — Stubborn spills and marks are treated with P&amp;S Xpress Interior Cleaner.</li>
			<li><strong>Glass &amp; finish</strong> — Interior windows are cleaned and the cabin is left fresh and sanitized.</li>
		</ol>

		<h2>What&rsquo;s Included</h2>
		<ul>
			<li>Deep vacuuming of carpets, seats, and floor mats</li>
			<li>Dashboard, console, and door panel cleaning</li>
			<li>Seat cleaning and conditioning (leather or fabric)</li>
			<li>Air vent and crevice cleaning</li>
			<li>Trunk cleaning</li>
			<li>Interior window cleaning</li>
			<li>Sanitization for a fresh, residue-free finish</li>
		</ul>

		<h2>Products We Use</h2>
		<p>We rely on professional-grade interior cleaners and protectants — including Adam&rsquo;s Total Interior Detailer and P&amp;S Xpress Interior Cleaner — for safe, effective cleaning that lasts. Every interior detail is done by hand so we reach crevices automated systems miss.</p>

		<h2>Typical Time</h2>
		<p>Most interior details take about 1.5–3 hours depending on vehicle size and condition. Heavily soiled cabins or pet hair may need extra time — we&rsquo;ll confirm when you book.</p>

		<h2>Service Area &amp; Pricing</h2>
		<p>We serve Thornton, Westminster, Brighton, Northglenn, and surrounding North Denver communities. Interior detailing starts at $100. <a href="<?php echo esc_url( home_url( '/pricing/' ) ); ?>" class="external">View pricing</a> or <a href="tel:<?php echo esc_attr( $tel ); ?>" class="external">call <?php echo esc_html( $phone ); ?></a>.</p>

		<div class="related">
			<h2>Other Automotive Services</h2>
			<p><a href="<?php echo esc_url( home_url( '/services/exterior/' ) ); ?>" class="external">Exterior detailing</a> · <a href="<?php echo esc_url( home_url( '/services/ceramic-coating/' ) ); ?>" class="external">Ceramic coating</a> · <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="external">Home</a></p>
		</div>
	</div>
</section>
<?php get_footer(); ?>
