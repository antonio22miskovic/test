<template>
	<div>
		<Navbar/>
		<Drawer/>
		<v-container>
			<router-view/>
		</v-container>
	</div>
</template>
<script>
import Navbar from '../../components/layouts/navbar/Navbar'
import Drawer from '../../components/layouts/sidebar/Drawer'
	export default{
		name:'Home',
		components:{
			Navbar,
			Drawer
		},
		mounted(){

		},
		data : () => ({

		}),
		methods:{
			}
		}
</script>