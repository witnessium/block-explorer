<template>
	<div :class="`icon ${name||''} ${className||''}`" >
	</div>
</template>

<script>
	export default {
		name: 'IconVue',
		props: ['name', 'width', 'height', 'bgColor', 'className'],
	}
</script>
<style lang="scss" scoped>
	$icons: (
		"backspace-white": ("width": 40, "height":21),
		"backspace": ("width": 40, "height":21),
		"change-pin": ("width": 20, "height":20),
		"close": ("width": 56, "height":56),
		"copy": ("width": 20, "height":20),
		"copy-white": ("width": 20, "height":20),
		"errow-left": ("width": 56, "height":56),
		"history": ("width": 20, "height":20),
		"log-out": ("width": 20, "height":20),
		"menu": ("width": 56, "height": 56),
		"qrcode": ("width": 20, "height":20),
		"recieve-active": ("width": 20, "height":20),
		"recieve": ("width": 20, "height":20),
		"send-active": ("width": 20, "height":20),
		"send-big": ("width": 40, "height":40),
		"send": ("width": 20, "height":20),
		"tick": ("width": 40, "height":40),
		"arrow_downward": ("width": 14, "height":14),
		"down-arrow": ("width": 14, "height":14),
		"up-arrow": ("width": 14, "height":14),
		"search": ("width": 20, "height":20),
	);
	
	@each $name, $style in $icons {
		$backSize: '';
		.#{$name} {
			background: url(../../assets/icons/#{$name}.svg);
			border: none !important;
			font-family: "Icon Font";
			@each $props, $size in $style {
				#{$props}: rem($size) !important;
				$backSize: #{$backSize  + rem($size) + ' '};
			}
			background-size: $backSize;
		}
	}

</style>