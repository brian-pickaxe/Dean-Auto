<?php
/**
 * Template Name: Home (Front Page)
 * Front page template for Dean Auto
 */
get_header();
$book_url = deanauto_book_url();
$phone    = deanauto_phone_display();
$tel      = deanauto_phone_tel();
?>

<section class="hero">
	<div class="container hero-content">
		<div class="hero-logo">
			<img src="<?php echo esc_url( get_template_directory_uri() . '/images/deanauto3.png' ); ?>" alt="Dean Auto Detailers — mobile car detailing in Thornton, Colorado" />
		</div>
		<h1>Mobile Car Detailing<br><span class="hero-sub">in Thornton, CO</span></h1>
		<p>Premium interior, exterior &amp; ceramic coating brought to your door across Thornton and North Denver — including <a href="<?php echo esc_url( home_url( '/westminster/' ) ); ?>" style="color: inherit; text-decoration: underline;">Westminster</a> &amp; <a href="<?php echo esc_url( home_url( '/brighton/' ) ); ?>" style="color: inherit; text-decoration: underline;">Brighton</a></p>
		<div class="hero-btns">
			<a id="Setmore_button_iframe" href="<?php echo esc_url( $book_url ); ?>" class="btn btn-secondary" style="padding: 1rem 2rem; font-size: 1.125rem;">Schedule Appointment</a>
			<a href="tel:<?php echo esc_attr( $tel ); ?>" class="btn btn-outline">Call <?php echo esc_html( $phone ); ?></a>
		</div>
	</div>
	<div class="hero-fade"></div>
</section>

<section class="bg-white">
	<div class="container">
		<div class="about-grid">
			<div>
				<h2 class="section-title" style="text-align: left;">Your Mobile Detailing Experts</h2>
				<p style="font-size: 1.125rem; color: var(--gray-600); margin-bottom: 1.5rem;">At Dean Auto, we provide high-quality car detailing services at your convenience. Our team ensures your vehicle looks its best with premium products from <a href="https://adamspolishes.com" target="_blank" rel="noopener" class="external">Adam's Polishes</a> and professional techniques, right at your doorstep.</p>
				<p style="font-size: 1.125rem; color: var(--gray-600);">Serving Thornton, Westminster, Brighton, and surrounding North Denver suburbs, we are dedicated to delivering exceptional results with a focus on customer satisfaction and attention to detail.</p>
			</div>
			<div>
				<div class="about-card">
					<div class="about-card-icon primary"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
					<div>
						<h3>Convenient Mobile Service</h3>
						<p>We come to you, saving you time and hassle. No need to leave your home or office.</p>
					</div>
				</div>
				<div class="about-card" style="margin-top: 1rem;">
					<div class="about-card-icon secondary"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg></div>
					<div>
						<h3>Premium Products Used</h3>
						<p>We use premium products from <a href="https://adamspolishes.com" target="_blank" rel="noopener" class="external">Adam's Polishes</a>, <a href="https://www.koch-chemie.com" target="_blank" rel="noopener" class="external">Koch Chemie</a>, and <a href="https://psdetailproducts.com" target="_blank" rel="noopener" class="external">P&S Detail Products</a> to ensure your vehicle gets the best treatment.</p>
					</div>
				</div>
				<div class="about-card" style="margin-top: 1rem;">
					<div class="about-card-icon primary"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
					<div>
						<h3>Eco-Friendly Products</h3>
						<p>Safe detailing with environmentally conscious products for your peace of mind.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray">
	<div class="container">
		<h2 class="section-title">Our Services</h2>
		<p class="section-subtitle">Experience professional car detailing brought to your location with exceptional quality and care.</p>
		<div class="services-grid">
			<div class="service-card">
				<div class="service-icon blue"><svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7h8m-8 4h8m-8 4h4"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>
				<h3>Interior Detailing</h3>
				<p>Thorough cleaning for a fresh, new feel. Deep vacuuming, cleaning, and sanitization using Adam's Polishes premium interior care products.</p>
				<a href="<?php echo esc_url( home_url( '/services/interior/' ) ); ?>" class="learn">Learn more →</a>
			</div>
			<div class="service-card">
				<div class="service-icon teal"><svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg></div>
				<h3>Exterior Detailing</h3>
				<p>Comprehensive wash, polish, and protection using Adam's Polishes professional-grade products to restore your vehicle's shine.</p>
				<a href="<?php echo esc_url( home_url( '/services/exterior/' ) ); ?>" class="learn">Learn more →</a>
			</div>
			<div class="service-card">
				<div class="service-icon primary"><svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
				<h3>Ceramic Coating</h3>
				<p>Protect your paint with Adam's Graphene Ceramic Coating™. Premium long-lasting protection that keeps your vehicle looking pristine for years.</p>
				<a href="<?php echo esc_url( home_url( '/services/ceramic-coating/' ) ); ?>" class="learn">Learn more →</a>
			</div>
		</div>
	</div>
</section>

<section class="bg-white">
	<div class="container">
		<h2 class="section-title">Premium Products We Use</h2>
		<p class="section-subtitle">At Dean Auto we use premium products from <a href="https://adamspolishes.com" target="_blank" rel="noopener" class="external">Adam's Polishes</a>, <a href="https://www.koch-chemie.com" target="_blank" rel="noopener" class="external">Koch Chemie</a>, and <a href="https://psdetailproducts.com" target="_blank" rel="noopener" class="external">P&S Detail Products</a>. Their formulations deliver exceptional results and long-lasting protection.</p>
		<div class="products-grid">
			<?php
			$products = array(
				array( 'Graphene Ceramic Coating', "Adam's Graphene Ceramic Coating™ for 5+ years protection with hydrophobic properties.", 'Ceramic Coating', 'https://adamspolishes.com/products/graphene-ceramic-coating', 'product-adams-graphene.jpg', "Adam's Graphene Ceramic Coating bottle used by Dean Auto for paint protection in Thornton CO" ),
				array( 'Premium Polishes & Compounds', "Adam's premium polishing compounds and finishing polishes for a flawless, show-quality finish.", 'Polishing', 'https://adamspolishes.com/products/adam-s-paint-finishing-polish', 'product-adams-polish.jpg', "Adam's paint finishing polish used for mobile car polishing in Thornton and North Denver" ),
				array( 'Professional Wash Products', "Adam's Car Wash Shampoo and Ultra Foam for safe, effective cleaning that preserves your finish.", 'Washing', 'https://adamspolishes.com/products/car-shampoo', 'product-adams-shampoo.jpg', "Adam's car wash shampoo for safe hand washing during mobile exterior detailing" ),
				array( 'Interior Care Products', "Adam's interior cleaning and conditioning products keep your interior looking and feeling like new.", 'Interior', 'https://adamspolishes.com/products/adam-s-total-interior-detailer', 'product-adams-interior.jpg', "Adam's Total Interior Detailer for vinyl, leather, and plastic cabin care" ),
				array( 'Koch Chemie Protector Wax', 'High-gloss shine, long-lasting water repellency, and protection on paint, chrome, and trim.', 'Protector Wax', 'https://www.koch-chemie.com/en/products/protectorwax', 'product-koch-wax.jpg', 'Koch Chemie Protector Wax for high-gloss exterior protection after mobile detailing' ),
				array( 'P&S Xpress Interior Cleaner', 'Tackles stains, spills, and dirt on fabric, carpet, vinyl, and leather. Residue-free interior cleaning.', 'Stain Removal', 'https://psdetailproducts.com/collections/interior-cleaners', 'product-ps-xpress.jpg', 'P&S Xpress Interior Cleaner for stain removal during interior car detailing' ),
			);
			$img_base = get_template_directory_uri() . '/images/';
			foreach ( $products as $p ) :
				list( $title, $desc, $cat, $link, $img, $alt ) = $p;
			?>
			<div class="product-card">
				<div class="product-img"><img src="<?php echo esc_url( $img_base . $img ); ?>" alt="<?php echo esc_attr( $alt ); ?>" loading="lazy" /></div>
				<div class="product-body">
					<span class="product-cat"><?php echo esc_html( $cat ); ?></span>
					<h3><?php echo esc_html( $title ); ?></h3>
					<p class="desc"><?php echo esc_html( $desc ); ?></p>
					<a href="<?php echo esc_url( $link ); ?>" target="_blank" rel="noopener" class="more">Learn more about this product →</a>
				</div>
			</div>
			<?php endforeach; ?>
		</div>
		<div class="text-center mt-8">
			<a href="https://adamspolishes.com" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1.125rem;">Shop Adam's Polishes Products</a>
		</div>
	</div>
</section>

<section class="bg-white">
	<div class="container">
		<h2 class="section-title">What Our Customers Say</h2>
		<div class="testimonials-grid">
			<div class="testimonial-card">
				<div class="stars">★★★★★</div>
				<blockquote>"Dean Auto transformed my car! Exceptional service and attention to detail. Highly recommend!"</blockquote>
				<cite>— Sarah M.</cite>
			</div>
			<div class="testimonial-card">
				<div class="stars">★★★★★</div>
				<blockquote>"Professional, punctual, and the results speak for themselves. My car has never looked better."</blockquote>
				<cite>— Michael R.</cite>
			</div>
			<div class="testimonial-card">
				<div class="stars">★★★★★</div>
				<blockquote>"The convenience of mobile service combined with outstanding quality. Will definitely book again!"</blockquote>
				<cite>— Jennifer L.</cite>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray">
	<div class="container">
		<h2 class="section-title">Our Work</h2>
		<p class="section-subtitle">Explore our stunning transformations and see our detailing excellence.</p>
		<p class="gallery-tip text-center"><strong>Tip:</strong> Replace these placeholder images with your own before/after photos in the theme images folder.</p>
		<div class="gallery-grid">
			<?php
			$gallery_alts = array(
				1 => 'Car after exterior wash and polish by Dean Auto mobile detailing in Thornton, Colorado',
				2 => 'Vehicle exterior detailing result — premium wash and protection in Westminster and North Denver',
				3 => 'Car interior after deep cleaning and sanitization — mobile interior detailing in North Denver suburbs',
				4 => 'Professional hand wash and dry at your location — mobile car wash service by Dean Auto Detailers',
				5 => 'Paint polishing and correction — premium detailing in Thornton and Westminster by Dean Auto',
				6 => 'Graphene ceramic coating on car paint — long-lasting protection applied in North Denver',
			);
			for ( $i = 1; $i <= 6; $i++ ) :
				$alt = isset( $gallery_alts[ $i ] ) ? $gallery_alts[ $i ] : 'Mobile car detailing before and after in Thornton CO';
			?>
			<div class="gallery-item">
				<img src="<?php echo esc_url( get_template_directory_uri() . '/images/gallery-' . $i . '.jpg' ); ?>" alt="<?php echo esc_attr( $alt ); ?>" loading="lazy" />
			</div>
			<?php endfor; ?>
		</div>
	</div>
</section>

<?php get_footer(); ?>
