<template>
  	<div id="app">
  		<Home></Home>
  		<el-button>默认按钮</el-button>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="text">文字按钮</el-button>
		<el-button type="primary" icon="search">搜索</el-button>
  	</div>
</template>

<script>

import Home from './components/Home'

export default {
	components: {
		Home
	}
}
</script>

<style lang='sass'>

@import url('../node_modules/element-ui/lib/theme-default/index.css');

html {
  	height: 100%;
	body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
}

#app {
	color: #000;
	margin-top: -100px;
	max-width: 600px;
	font-family: Source Sans Pro, Helvetica, sans-serif;
	text-align: center;
}

#app a {
	color: #42b983;
	text-decoration: none;
}

.logo {
	width: 100px;
	height: 100px
}
</style>
