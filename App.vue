<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({ // 自定义导航条设置
				success: function(e) {
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "./static/colorui/main.css";
	@import "./static/colorui/icon.css";
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	@import "./static/styles/my-style.css";
</style>
