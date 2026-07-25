<?php
/**
 * Template Name: Exterior Detailing
 */
get_header();
$book_url = deanauto_book_url();
$phone    = deanauto_phone_display();
$tel      = deanauto_phone_tel();

$schema = array(
	'@context'    => 'https://schema.org',
	'@type'       => 'Service',
	'name'        => 'Exterior Car Detailing',
	'description' => 'Mobile exterior car detailing in Thornton & North Denver. Hand wash, clay bar, wax and wheel cleaning with Koch Chemie and Adam\'s Polishes.',
	'provider'    => array(
		'@type'     => 'AutomotiveBusiness',
		'name'      => 'Dean Auto Detailers',
		'url'       => home_url( '/' ),
		'telephone' => $tel,
	),
	'areaServed'  => array(
		array( '@type' => 'City', 'name' => 'Thornton', 'addressRegion' => 'CO' ),
		array( '@type' => 'City', 'name' => 'Westminster', 'addressRegion' => 'CO' ),
		array( '@type' => 'City', 'name' => 'Brighton', 'addressRegion' => 'CO' ),
	),
	'offers'      => array(
		'@type'              => 'Offer',
		'priceSpecification' => array(
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
		<h1>Exterior Car Detailing in Thornton, CO</h1>
		<p>Full exterior car detailing at your home or office in Thornton and North Denver — including <a href="<?php echo esc_url( home_url( '/westminster/' ) ); ?>">Westminster</a> and <a href="<?php echo esc_url( home_url( '/brighton/' ) ); ?>">Brighton</a>. We use Koch Chemie and Adam&rsquo;s Polishes to restore shine, remove contaminants, and protect your paint with a lasting wax or sealant.</p>
		<p>
			<a id="Setmore_button_iframe" href="<?php echo esc_url( $book_url ); ?>" class="btn btn-primary" style="padding: 0.75rem 2rem;">Book Now</a>
			<a href="tel:<?php echo esc_attr( $tel ); ?>" class="btn btn-outline" style="padding: 0.75rem 2rem; margin-left: 0.5rem;">Call <?php echo esc_html( $phone ); ?></a>
		</p>
	</div>
</section>
<section style="padding: 4rem 0;">
	<div class="container service-content">
		<h2>Our Exterior Detailing Process</h2>
		<ol>
			<li><strong>Pre-rinse &amp; wheels</strong> — Loose dirt is rinsed away; wheels and tires are cleaned thoroughly.</li>
			<li><strong>Hand wash</strong> — Two-bucket style hand wash with Adam&rsquo;s Car Wash Shampoo / Ultra Foam — no brushes or tunnels.</li>
			<li><strong>Decontamination</strong> — Paint is clay-barred when needed to remove bonded contaminants.</li>
			<li><strong>Dry &amp; inspect</strong> — Soft-towel dry and panel-by-panel inspection.</li>
			<li><strong>Protect</strong> — Koch Chemie Protector Wax or sealant for gloss and water beading.</li>
			<li><strong>Trim &amp; glass</strong> — Exterior trim dressing and window cleaning for a finished look.</li>
		</ol>

		<h2>What&rsquo;s Included</h2>
		<ul>
			<li>Hand wash and dry</li>
			<li>Wheel and tire cleaning</li>
			<li>Paint decontamination</li>
			<li>Clay bar treatment (as needed)</li>
			<li>Wax or sealant application</li>
			<li>Trim restoration</li>
			<li>Exterior window cleaning</li>
		</ul>

		<h2>Products We Use</h2>
		<p>Koch Chemie Protector Wax for high-gloss shine and water repellency, plus Adam&rsquo;s Polishes wash and finishing products for safe, professional paint care.</p>

		<h2>Typical Time</h2>
		<p>Most exterior details take about 1.5–2.5 hours depending on vehicle size and paint condition. Larger trucks and vans may take longer.</p>

		<h2>Service Area &amp; Pricing</h2>
		<p>We serve Thornton, Westminster, Brighton, Northglenn, and surrounding North Denver communities. Exterior detailing starts at $100. <a href="<?php echo esc_url( home_url( '/pricing/' ) ); ?>" class="external">View pricing</a> or <a href="tel:<?php echo esc_attr( $tel ); ?>" class="external">call <?php echo esc_html( $phone ); ?></a>.</p>

		<div class="related">
			<h2>Other Automotive Services</h2>
			<p><a href="<?php echo esc_url( home_url( '/services/interior/' ) ); ?>" class="external">Interior detailing</a> · <a href="<?php echo esc_url( home_url( '/services/ceramic-coating/' ) ); ?>" class="external">Ceramic coating</a> · <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="external">Home</a></p>
		</div>
	</div>
</section>
<?php get_footer(); ?>
