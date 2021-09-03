<template>
	<view>
		<fly-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		</fly-custom>

		<view class="cu-timeline">
			<view class="cu-time">
				<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
				<text class='text-xl margin-left'>更新</text>
			</view>

			<view class="cu-item text-blue">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-blue">更新版本</view>
						<view class="cu-tag line-blue">1.0.9</view>
					</view>
					<view class="margin-top">新增功能：书目导航功能，版本更新功能，联系客服功能</view>
					<view class="margin-top-sm">更新书：当医生开了挂</view>
				</view>
			</view>

			<view class="cu-item text-blue">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-blue">更新版本</view>
						<view class="cu-tag line-blue">1.0.8</view>
					</view>
					<view class="margin-top">修复bug：查询结果页面右侧不能点击</view>
					<view class="margin-top-sm">更新书：大奉打更人</view>
				</view>
			</view>

			<view class="cu-time" style="padding-bottom: 140rpx;">
				<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
				<text class='text-xl margin-left'>更新</text>
			</view>
		</view>

		<view class="cu-bar bg-white tabbar shop shadow edit-fixed">
			<button class="action text-gray text-shadow">
				<view class='cuIcon-community text-gray'>
				</view>
			</button>
			<view class="action text-gray text-shadow">
				<text class="text-sm">1000人收听</text>
			</view>
			<view class='bg-gradual-blue submit margin-left-xl text-xl'>
				<button class='button-no' open-type="contact" @contact="handleContact">
					<text class='text-white'>想听有声</text>
				</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad(option) {

		},
		methods: {

		}
	};
</script>

<style lang="scss" scoped>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>

<style lang="scss" scoped>
	.cu-timeline .cu-time {
		width: 100%;
		text-align: left;
		padding: 20rpx 0 20rpx 37rpx;
		font-size: 26rpx;
		color: #888;
		display: block;
	}

	.text-red,
	.line-red,
	.lines-red {
		color: #FF3434;
	}

	.margin-avatar {
		margin-left: -15rpx;
	}

	.margin-avatar-bottom {
		margin-bottom: 150rpx;
	}

	.line-blue-tuniao::after {
		border-color: #0070ff !important;
		color: #0070ff;
	}

	.resume {
		/* background: #f1f1f1; */
		padding-top: 10rpx;
		border-radius: 6rpx;
		display: block;
		color: #666;
		line-height: 1.6;
	}

	.resume+.resume {
		margin-top: 20rpx;
	}

	.resume2 {
		padding-top: 10rpx;
		border-radius: 6rpx;
		display: block;
		color: #666;
		line-height: 1.6;
	}

	.edit {
		position: fixed;
		width: 100rpx;
		height: 100rpx;
		bottom: 250rpx;
		right: 30rpx;
		z-index: 1;
		opacity: 0.8;
		border: 1px solid #189eff;
		border-radius: 100rpx;
		box-shadow: 0rpx 0rpx 6rpx rgba(24, 158, 255, 1);
		padding: 20rpx;
	}

	.love {
		position: fixed;
		width: 100rpx;
		height: 100rpx;
		bottom: 550rpx;
		right: 30rpx;
		z-index: 1024;
		opacity: 0.8;
		border: 1px solid #189eff;
		border-radius: 100rpx;
		box-shadow: 0rpx 0rpx 6rpx rgba(24, 158, 255, 1);
		padding: 20rpx;
	}

	.bg-img-cont {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 350rpx;
	}

	.share-png {
		width: 100rpx;
		height: 100rpx;
		margin: 0 auto;
	}

	.share-wechat {
		width: 35rpx;
		height: 35rpx;
		margin: 0 10rpx -4rpx 0;
		opacity: 0.5;
	}

	.button-no::after {
		border: none;
	}

	.title-pyq {
		background-image: -webkit-linear-gradient(0deg, #1b6cff, #1ca5ff);
		/*1B6CFF 1B42FF*/
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		opacity: 0.5;
	}

	.edit-fixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
	}

	.button-no {
		border: none;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
	}

	.centre {
		text-align: center;
		margin: 200rpx auto;
		font-size: 32rpx;

		image {
			width: 300rpx;
			border-radius: 50%;
			margin: 0 auto;
		}

		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}

		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background: linear-gradient(270deg, #1cbbb4 0%, #0081ff 100%);
		}
	}
</style>
