<template>
    <view>
        <fly-custom bgColor="bg-gradual-blue" :isBack="true">
            <block slot="backText">返回</block>
        </fly-custom>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-title text-blue text-xl"></text>目录
            </view>
        </view>
        <view class="padding text-center">
            <view class="bg-white padding-lr" v-for="(item, index) in booksList" :key="index">
                <view class="solids-bottom padding-xs flex align-center">
                    <view class="padding">{{index+1}}</view>
                    <view class="flex-sub text-left text-bold">
                        <view class="padding">{{item.name}}</view>
                    </view>
                </view>
            </view>
        </view>

        <u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>

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
    var _this;
    export default {
        data() {
            return {
                loadStatus: 'loadmore',
                booksList: [],
                list: [],
                booksTotal: 0,
                booksSize: 12,
                booksPage: 1,
                noticeShow: false //公告显示
            };
        },
        onLoad(option) {
            for (let i = 0; i < booksData.length-1; i++) {
                // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
                let item = JSON.parse(JSON.stringify(booksData[i]))
                item.id = this.$u.guid();
                this.list.push(item);
            }
            const arr = this.uniqueList(this.list);
            this.list = arr;
            this.booksTotal = this.list.length;
            this.addRandomData();
        },
        onReachBottom() {
            this.loadStatus = 'loading';
            // 模拟数据加载
            setTimeout(() => {
                this.addRandomData();
                this.loadStatus = 'loadmore';
            }, 500)
        },
        mounted() {
            _this = this;
        },
        methods: {
            // 加载数据
            addRandomData() {
                console.log(this.booksTotal)
                let startNum = (this.booksPage - 1) * this.booksSize;
                let endNum = this.booksPage * this.booksSize;
                if (endNum > this.booksTotal) {
                    endNum = this.booksTotal;
                }
                console.log('startNum' + startNum + '  endNum'+ endNum)
                for (let i = startNum; i < endNum; i++) {
                    // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
                    let item = JSON.parse(JSON.stringify(this.list[i]))
                    this.booksList.push(item);
                }
                this.booksPage++;
            },
            // 唯一数据
            uniqueList(arr) {
                const res = new Map()
                return arr.filter((arr) => !res.has(arr.name) && res.set(arr.name, 1))
            },
        }
    }
</script>

<style>
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
