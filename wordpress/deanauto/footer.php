</main>

<footer class="site-footer">
	<div class="container">
		<div class="footer-grid">
			<div>
				<h3>Dean Auto Detailers</h3>
				<p style="color: #9ca3af; margin-bottom: 1rem;">Professional mobile car detailing in Thornton, CO and the North Denver suburbs. Quality service brought right to your doorstep.</p>
			</div>
			<div>
				<h4>Services</h4>
				<ul style="list-style: none; padding: 0;">
					<li style="margin-bottom: 0.5rem;"><a href="<?php echo esc_url( home_url( '/services/interior/' ) ); ?>">Interior Detailing</a></li>
					<li style="margin-bottom: 0.5rem;"><a href="<?php echo esc_url( home_url( '/services/exterior/' ) ); ?>">Exterior Detailing</a></li>
					<li style="margin-bottom: 0.5rem;"><a href="<?php echo esc_url( home_url( '/services/ceramic-coating/' ) ); ?>">Ceramic Coating</a></li>
					<li style="margin-bottom: 0.5rem;"><a href="<?php echo esc_url( home_url( '/pricing/' ) ); ?>">Pricing</a></li>
				</ul>
			</div>
			<div>
				<h4>Service Areas</h4>
				<ul style="list-style: none; padding: 0;">
					<li style="margin-bottom: 0.5rem;"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Thornton, CO</a></li>
					<li style="margin-bottom: 0.5rem;"><a href="<?php echo esc_url( home_url( '/westminster/' ) ); ?>">Westminster, CO</a></li>
					<li style="margin-bottom: 0.5rem;"><a href="<?php echo esc_url( home_url( '/brighton/' ) ); ?>">Brighton, CO</a></li>
					<li style="margin-bottom: 0.5rem;"><a href="<?php echo esc_url( home_url( '/north-denver/' ) ); ?>">North Denver</a></li>
				</ul>
			</div>
			<div>
				<h4>Contact</h4>
				<address style="color: #9ca3af;">
					<p><a href="mailto:deanautodetailers95@gmail.com">deanautodetailers95@gmail.com</a></p>
					<p><a href="tel:<?php echo esc_attr( deanauto_phone_tel() ); ?>"><?php echo esc_html( deanauto_phone_display() ); ?></a></p>
					<p style="font-size: 0.875rem; margin-top: 1rem;">Based in Thornton, CO · Mobile throughout North Denver</p>
					<p style="margin-top: 0.75rem;"><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact &amp; hours →</a></p>
				</address>
			</div>
		</div>
		<div class="footer-bottom">
			<p>&copy; <?php echo date( 'Y' ); ?> Dean Auto Detailers. All rights reserved.</p>
			<p style="color: #9ca3af; margin-top: 0.25rem;">Hosted and SEO by <a href="https://milehighinternet.com" target="_blank" rel="noopener noreferrer">milehighinternet.com</a></p>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
