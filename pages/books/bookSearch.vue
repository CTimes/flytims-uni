<template>
	<view class="wrap">
		<fly-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">搜索</block>
		</fly-custom>

		<u-notice-bar mode="horizontal" type="primary" :list="listBar"></u-notice-bar>

		<view class="fly-serche">
			<u-search v-model="value" @custom="custom" @search="search"
					  bg-color="#FFFFFF" border-color="#000000" height="84" margin="40rpx"></u-search>
			<u-toast ref="uToast" />
		</view>

		<view class="fly-text">《我真没想出名啊》搜索：我/我真...</view>

	</view>
</template>

<script>
	import booksData from "@/common/data/uiImg.js";
	export default {
		data() {
			return {
				listBar: [
					'不定时更新资源，扫码关注小程序',
					'没有想听的有声书，请联系作者'
				],
				value: '',
				booksList: null,
				isHaveBook: false,
			}
		},
		methods: {
			custom(value) {
				// 点搜索时
				this.booksList = booksData;
				for (let i = 0; i < booksData.length-1; i++) {
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.booksList[i]))
					if(item.name.indexOf(value) != -1){
						this.isHaveBook = true;
					}
				}
				if(this.isHaveBook){
					this.$u.route('/pages/books/book', {
						name: value
					});

				} else {
					this.$refs.uToast.show({
						title: '正在加紧录入中',
						type: 'success'
					})
				}
				this.value = null;
			},
			search(value) {
				// 点搜索时
				this.booksList = booksData;
				for (let i = 0; i < booksData.length - 1; i++) {
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.booksList[i]))
					if (item.name.indexOf(value) != -1) {
						this.isHaveBook = true;
					}
				}
				if (this.isHaveBook) {
					this.$u.route('/pages/books/book', {
						name: value
					});

				} else {
					this.$refs.uToast.show({
						title: '正在加紧录入中',
						type: 'success'
					})
				}
				this.value = null;
			}
		}
	}
</script>

<style lang="scss" scoped>
	 .fly-serche{
		 flex-direction: row;
		 justify-content: center;
		 align-items: center;
		 overflow: visible;
		 padding: 300rpx 0 70rpx;
	 }

	.fly-text{
		flex-direction: row;
		text-align: center;
		border-width: 1px;
		border-color: #ddd;
		border-style: dashed;
		background-color: rgb(250, 250, 250);
		padding: 20px 10px;
		border-radius: 3px;
	}
</style>
