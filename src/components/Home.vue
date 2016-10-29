<script>
import getLocation from '../assets/js/location';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  	getLocation: getLocation
  }
}
</script>
<template>
  	<div class="home" @click="getLocation">
	    <img src="../assets/img/front.png" height="220" width="283">
  	</div>
</template>

<style lang='sass' scoped>
.home {
	color: blue;
}
</style>
