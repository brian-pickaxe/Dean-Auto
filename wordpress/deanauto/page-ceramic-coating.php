<?php
/**
 * Template Name: Ceramic Coating
 */
get_header();
$book_url = deanauto_book_url();
$phone    = deanauto_phone_display();
$tel      = deanauto_phone_tel();

$schema = array(
	'@context'    => 'https://schema.org',
	'@type'       => 'Service',
	'name'        => 'Ceramic Coating',
	'description' => 'Graphene ceramic coating in Thornton & North Denver. 5+ years paint protection with a hydrophobic finish. Mobile service from Dean Auto Detailers.',
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
			'minPrice'      => 400,
			'priceCurrency' => 'USD',
		),
	),
);
?>
<script type="application/ld+json"><?php echo wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ); ?></script>
<section class="bg-white border-b" style="border-bottom: 1px solid var(--gray-200);">
	<div class="container service-content" style="padding: 4rem 1rem;">
		<h1>Ceramic Coating in Thornton, CO</h1>
		<p>Long-lasting paint protection with Adam&rsquo;s Graphene Ceramic Coating™ for Thornton and North Denver — including <a href="<?php echo esc_url( home_url( '/westminster/' ) ); ?>">Westminster</a> and <a href="<?php echo esc_url( home_url( '/brighton/' ) ); ?>">Brighton</a>. We come to you for paint correction and multi-layer ceramic coating that delivers a hydrophobic, high-gloss finish for 5+ years.</p>
		<p>
			<a id="Setmore_button_iframe" href="<?php echo esc_url( $book_url ); ?>" class="btn btn-primary" style="padding: 0.75rem 2rem;">Get a Quote</a>
			<a href="tel:<?php echo esc_attr( $tel ); ?>" class="btn btn-outline" style="padding: 0.75rem 2rem; margin-left: 0.5rem;">Call <?php echo esc_html( $phone ); ?></a>
		</p>
	</div>
</section>
<section style="padding: 4rem 0;">
	<div class="container service-content">
		<h2>Our Ceramic Coating Process</h2>
		<ol>
			<li><strong>Wash &amp; decontaminate</strong> — Thorough wash and chemical/mechanical decontamination so the paint is clean.</li>
			<li><strong>Paint correction</strong> — Machine polish as needed to remove swirls and light scratches before coating.</li>
			<li><strong>Panel prep</strong> — Surfaces are wiped with panel prep so the coating bonds correctly.</li>
			<li><strong>Apply graphene ceramic</strong> — Adam&rsquo;s Graphene Ceramic Coating is applied in controlled sections.</li>
			<li><strong>Cure &amp; inspect</strong> — Coating flashes and levels; we inspect for even coverage and gloss.</li>
			<li><strong>Care guidance</strong> — You leave with maintenance tips and a kit so protection lasts for years.</li>
		</ol>

		<h2>What&rsquo;s Included</h2>
		<ul>
			<li>Paint correction (as needed)</li>
			<li>Multi-layer graphene ceramic coating</li>
			<li>5+ years of protection</li>
			<li>UV and chemical resistance</li>
			<li>Hydrophobic surface (water beading)</li>
			<li>Enhanced gloss and shine</li>
			<li>Maintenance kit included</li>
		</ul>

		<h2>Products We Use</h2>
		<p>We use Adam&rsquo;s Graphene Ceramic Coating™ for durable, hydrophobic protection. Before coating, we correct paint when necessary so the surface is smooth and defect-free.</p>

		<h2>Typical Time</h2>
		<p>Ceramic coating packages usually take a half day to a full day depending on paint condition and vehicle size. We&rsquo;ll give a clear time estimate when you book.</p>

		<h2>Service Area &amp; Pricing</h2>
		<p>We serve the North Denver metro including Thornton, Westminster, Brighton, and Northglenn. Ceramic coating packages start at $400. <a href="<?php echo esc_url( home_url( '/pricing/' ) ); ?>" class="external">View pricing</a> or <a href="tel:<?php echo esc_attr( $tel ); ?>" class="external">call <?php echo esc_html( $phone ); ?></a>.</p>

		<div class="related">
			<h2>Other Automotive Services</h2>
			<p><a href="<?php echo esc_url( home_url( '/services/interior/' ) ); ?>" class="external">Interior detailing</a> · <a href="<?php echo esc_url( home_url( '/services/exterior/' ) ); ?>" class="external">Exterior detailing</a> · <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="external">Home</a></p>
		</div>
	</div>
</section>
<?php get_footer(); ?>
