<template>
	<div class="almond-bar header curve-btm">
		<ul class="inner-lining-s dropdown">
			<li><router-link :to="{path: '/'}" class="almond-thin">Home</router-link></li>
			<li class="almond-thin"><a>Lyrics</a>
				<ul class="dropdown-content">
					<li><router-link :to="{path: '/lyrics#once'}" class="almond-thin">Once</router-link></li>
					<li><router-link :to="{path: '/lyrics#twice'}" class="almond-thin">Twice</router-link></li>
					<li><router-link :to="{path: '/lyrics#thrice'}" class="almond-thin">Thrice</router-link></li>
				</ul>
			</li>
			<li><router-link :to="{name: 'show-articles'}" class="almond-thin">Articles</router-link></li>
		</ul>
	</div>
</template>