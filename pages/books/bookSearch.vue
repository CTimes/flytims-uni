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

		<button class='' open-type="contact">
			<view class="shop">
				<view class="bg0 pa">
					<view class="bg1">
						<image src="/static/img/fenxiang.png" class="button-shop shadow"></image>
					</view>
				</view>
				<view class="hx-box pa">
					<view class="pr">
						<view class="hx-k1 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k2 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k3 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k4 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k5 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k6 pa0">
							<view class="span"></view>
						</view>
					</view>
				</view>
			</view>
		</button>
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
				console.log(this.isHaveBook)
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

	 /* 悬浮按钮 */
	 .button-shop {
		 width: 90rpx;
		 height: 90rpx;
		 display: flex;
		 flex-direction: row;
		 position: fixed;
		 /* bottom:200rpx;
           right: 20rpx; */
		 left: 5rpx;
		 top: 5rpx;
		 z-index: 1001;
		 border-radius: 100px;
		 opacity: 0.9;
	 }


	 /* 按钮 */
	 .shop {
		 bottom: 300rpx;
		 right: 75rpx;
		 position: fixed;
		 z-index: 9999;
	 }


	 .pa,
	 .pa0 {
		 position: absolute
	 }

	 .pa0 {
		 left: 0;
		 top: 0
	 }


	 .bg0 {
		 width: 100rpx;
		 height: 100rpx;
		 top: 50%;
		 left: 50%;
		 transform: translate(-50%, -50%);
	 }

	 .bg1 {
		 width: 100%;
		 height: 100%;
	 }




	 .hx-box {
		 top: 50%;
		 left: 50%;
		 width: 100rpx;
		 height: 100rpx;
		 transform-style: preserve-3d;
		 transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	 }

	 .hx-box .pr {
		 width: 100rpx;
		 height: 100rpx;
		 transform-style: preserve-3d;
		 animation: hxz 20s linear infinite;
	 }

	 @keyframes hxz {
		 0% {
			 transform: rotateX(0deg);
		 }

		 100% {
			 transform: rotateX(-360deg);
		 }
	 }



	 .hx-box .pr .pa0 {
		 width: 100rpx;
		 height: 100rpx;
		 /* border: 4px solid #5ec0ff; */
		 border-radius: 1000px;
	 }

	 .hx-box .pr .pa0 .span {
		 display: block;
		 width: 100%;
		 height: 100%;
		 background: url(https://z3.ax1x.com/2021/07/06/RoKanS.png) no-repeat center center;
		 background-size: 100% 100%;
		 animation: hx 4s linear infinite;
	 }

	 @keyframes hx {
		 to {
			 transform: rotate(360deg);
		 }
	 }

	 .hx-k1 {
		 transform: rotateX(-60deg) rotateZ(-60deg)
	 }

	 .hx-k2 {
		 transform: rotateX(-30deg) rotateZ(-30deg)
	 }

	 .hx-k3 {
		 transform: rotateX(0deg) rotateZ(0deg)
	 }

	 .hx-k4 {
		 transform: rotateX(30deg) rotateZ(30deg)
	 }

	 .hx-k5 {
		 transform: rotateX(60deg) rotateZ(60deg)
	 }

	 .hx-k6 {
		 transform: rotateX(90deg) rotateZ(90deg)
	 }
</style>
