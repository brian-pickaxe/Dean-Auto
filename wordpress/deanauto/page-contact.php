<?php
/**
 * Template Name: Contact
 */
get_header();
$phone = deanauto_phone_display();
$tel   = deanauto_phone_tel();
?>
<!-- template: page-contact.php -->
<section style="padding: 5rem 0;">
	<div class="container">
		<div class="text-center mb-8">
			<h1 class="section-title">Contact Us</h1>
			<p class="section-subtitle">Get in touch to schedule your appointment or ask any questions. We're here to help!</p>
		</div>
		<div class="contact-grid">
			<div class="contact-card">
				<div class="icon primary">Email</div>
				<h3>Email</h3>
				<a href="mailto:deanautodetailers95@gmail.com">deanautodetailers95@gmail.com</a>
			</div>
			<div class="contact-card">
				<div class="icon secondary">Phone</div>
				<h3>Phone</h3>
				<a href="tel:<?php echo esc_attr( $tel ); ?>"><?php echo esc_html( $phone ); ?></a>
				<p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--gray-600);">Tap to call on mobile</p>
			</div>
			<div class="contact-card">
				<div class="icon primary">Area</div>
				<h3>Service Area</h3>
				<p style="color: var(--gray-600);">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Thornton</a>,
					<a href="<?php echo esc_url( home_url( '/westminster/' ) ); ?>">Westminster</a>,
					<a href="<?php echo esc_url( home_url( '/brighton/' ) ); ?>">Brighton</a>,
					and <a href="<?php echo esc_url( home_url( '/north-denver/' ) ); ?>">North Denver</a> suburbs
				</p>
			</div>
		</div>

		<div class="map-embed" style="margin-bottom: 3rem;">
			<h2 style="font-size: 1.5rem; font-weight: 700; color: var(--gray-900); margin-bottom: 1rem; text-align: center;">Our North Denver Service Area</h2>
			<p style="text-align: center; color: var(--gray-600); margin-bottom: 1.25rem; max-width: 40rem; margin-left: auto; margin-right: auto;">We're a mobile detailer based in Thornton, CO — we come to you across the North Denver metro. Find us on Google as <strong>Dean Auto Detailers</strong>.</p>
			<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 0.75rem; border: 1px solid var(--gray-200);">
				<iframe
					title="Dean Auto Detailers service area map — Thornton and North Denver, Colorado"
					src="https://maps.google.com/maps?q=Thornton%2C%20CO&amp;z=11&amp;output=embed"
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					allowfullscreen
				></iframe>
			</div>
		</div>

		<div class="hours-card">
			<h2 style="font-size: 1.875rem; font-weight: 700; color: var(--gray-900); margin-bottom: 1.5rem;">Business Hours</h2>
			<?php
			$clock_icon = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
			?>
			<div class="hours-row"><span class="icon" style="display:inline-flex;align-items:center;justify-content:center;color:var(--primary-600);"><?php echo $clock_icon; ?></span><div><p style="font-weight: 600; color: var(--gray-900);">Monday - Friday</p><p style="color: var(--gray-600);">8:00 AM - 6:00 PM</p></div></div>
			<div class="hours-row"><span class="icon" style="display:inline-flex;align-items:center;justify-content:center;color:var(--primary-600);"><?php echo $clock_icon; ?></span><div><p style="font-weight: 600; color: var(--gray-900);">Saturday</p><p style="color: var(--gray-600);">9:00 AM - 5:00 PM</p></div></div>
			<div class="hours-row"><span class="icon" style="display:inline-flex;align-items:center;justify-content:center;color:var(--primary-600);"><?php echo $clock_icon; ?></span><div><p style="font-weight: 600; color: var(--gray-900);">Sunday</p><p style="color: var(--gray-600);">By Appointment</p></div></div>
			<div style="margin-top: 2rem; padding: 1rem; background: var(--gray-50); border-radius: 0.5rem;">
				<p style="font-size: 0.875rem; color: var(--gray-600);">We offer flexible scheduling to accommodate your needs. Call <a href="tel:<?php echo esc_attr( $tel ); ?>"><?php echo esc_html( $phone ); ?></a> to discuss custom appointment times.</p>
			</div>
		</div>
	</div>
</section>
<?php get_footer(); ?>
