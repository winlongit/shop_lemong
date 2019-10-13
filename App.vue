<script>
	import { localStorage } from '@/common/js_sdk/mp-storage/mp-storage/index.js'
	
	export default {
		onLaunch: function () {
			console.log('App Launch');
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					console.log(loginRes);
					uni.request({
						url: 'https://swu.mynatapp.cc/wx/user/login_shop', //仅为示例，并非真实接口地址。
						data: {
							"code": loginRes.code
						},
						header: {
							//自定义请求头信息
							'content-type':'application/json'
							// 'content-type':'application/x-www-form-urlencoded'
						},
						method:"POST",
						success: (res) => {
							console.log(res);
							// 推荐用法,缓存
							localStorage.setItem('openid', res.data.openid);
						}
					});
				}
			});
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "/static/iconfont/font.scss";
</style>
