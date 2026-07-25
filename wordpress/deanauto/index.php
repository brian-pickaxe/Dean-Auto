<?php
/**
 * Default template. Fallback if no front-page or specific template.
 */
get_header();
?>
<div class="container" style="padding: 4rem 1rem;">
	<h1><?php bloginfo( 'name' ); ?></h1>
	<p><?php bloginfo( 'description' ); ?></p>
	<p><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary">Go to Home</a></p>
</div>
<?php get_footer(); ?>
