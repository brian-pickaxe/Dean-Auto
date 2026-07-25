<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="navbar" role="navigation" aria-label="Main">
	<div class="container nav-inner">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav-brand"><?php bloginfo( 'name' ); ?></a>
		<div class="nav-links">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
			<a href="<?php echo esc_url( home_url( '/services/interior/' ) ); ?>">Services</a>
			<a href="<?php echo esc_url( home_url( '/pricing/' ) ); ?>">Pricing</a>
			<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About</a>
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact</a>
			<a href="tel:<?php echo esc_attr( deanauto_phone_tel() ); ?>" class="nav-phone"><?php echo esc_html( deanauto_phone_display() ); ?></a>
			<a id="Setmore_button_iframe" href="<?php echo esc_url( deanauto_book_url() ); ?>" class="btn btn-primary nav-book-now" style="float: none; color: #fff !important;">Book Now</a>
		</div>
		<button type="button" class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
			<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
		</button>
	</div>
	<div class="nav-mobile" id="nav-mobile">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
		<a href="<?php echo esc_url( home_url( '/services/interior/' ) ); ?>">Interior</a>
		<a href="<?php echo esc_url( home_url( '/services/exterior/' ) ); ?>">Exterior</a>
		<a href="<?php echo esc_url( home_url( '/services/ceramic-coating/' ) ); ?>">Ceramic Coating</a>
		<a href="<?php echo esc_url( home_url( '/pricing/' ) ); ?>">Pricing</a>
		<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About</a>
		<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact</a>
		<a href="tel:<?php echo esc_attr( deanauto_phone_tel() ); ?>" class="nav-phone"><?php echo esc_html( deanauto_phone_display() ); ?></a>
		<a id="Setmore_button_iframe_mobile" href="<?php echo esc_url( deanauto_book_url() ); ?>" class="btn btn-primary nav-book-now" style="display: block; text-align: center; margin-top: 0.5rem; color: #fff !important;">Book Now</a>
	</div>
</nav>

<script>
document.getElementById('nav-toggle')?.addEventListener('click', function() {
	document.getElementById('nav-mobile').classList.toggle('open');
});
</script>

<main class="main-pt">
