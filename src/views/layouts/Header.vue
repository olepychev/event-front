<template>
	<div>
    <header class="site-header header-transparent mo-left" id="site-header">
        <!-- main header -->
        <div class="sticky-header main-bar-wraper navbar-expand-lg">
            <div class="main-bar clearfix ">
                <div class="container-fluid clearfix">
                    <!-- website logo -->
                    <div class="logo-header mostion">
                        <a class="header-logo1" href="index.html"><img src="images/logo-white-1.png" alt=""></a>
                        <a class="header-logo2" href="index.html"><img src="images/logo-black-1.png" alt=""></a>
                    </div>
                    <!-- extra nav -->
                    <div class="extra-nav">
                        <div class="extra-cell">

														<button v-if="!isloggedIn" class="btn green gradient radius-sm m-l10" @click="onLogIn()"><span>Sign In</span> <i class="la la-sign-in"></i></button>
														<button v-if="!isloggedIn" class="btn purple gradient radius-sm m-l10" @click="onSignUp()"><span>Sign Up</span> <i class="la la-user-plus"></i></button>
														<span v-if="isloggedIn" class="text-green" style="font-weight: bold;">{{ this.userDetail.username }}</span>
														<button v-if="isloggedIn" class="btn purple gradient radius-sm m-l10" @click="onSignOut()"><span>Sign Out</span> <i class="la la-user-plus"></i></button>
														<button v-if="isloggedIn" class="btn purple gradient radius-sm m-l10" @click="onSetting()"><span>Setting</span> <i class="la la-user"></i></button>
                            <!-- <a href="#" class="btn gradient openbtn"><span>Your Wedding Manager </span><i class="fa fa-bars"></i></a> -->
                        </div>

                    </div>

                </div>
            </div>
        </div>
				
        <!-- <div id="mySidenav" class="sidenav right-nav">
					<a href="javascript:void(0)" class="closebtn menu-close"><i class="ti-close"></i></a>
					<ul class="">
						<li><a href="my-account.html"><i class="la la-home"></i>Home</a></li>
						<li><a href="planner-guest-list.html"><i class="la la-user"></i>Guest List</a></li>
						<li><a href="planner-budget-select.html"><i class="la la-money"></i>Budget</a></li>
						<li><a href="planner-checklist-select-date.html"><i class="la la-check-square"></i>Checklist</a></li>
						<li><a href="planner-shortlist.html"><i class="la la-file-text-o"></i>Shortlist</a></li>
						<li><a href="planner-shortlist.html"><i class="la la-user-plus"></i>Booked Suppliers</a></li>
						<li><a href="planner-advice.html"><i class="la la-lightbulb-o"></i>Advice</a></li>
						<li><a href="scrapbook.html"><i class="la la-laptop"></i>Scrapbook</a></li>
						<li><a href="settings.html"><i class="la la-cog"></i>Settings</a></li>
						<li><a href="index.html"><i class="la la-sign-out"></i>Log out</a></li>
					</ul>
				</div> -->
					
						<!-- main header END -->
		</header>
		<Login :isSignup="isSignups" :isLogin="isLogins" :key="loginKey" @logInSuccess="logInSuccess"></Login>
		<Setting></Setting>
	</div>
</template>

<script>
import Login from "../../components/Login.vue";
import Setting from "../../components/Setting.vue";

export default {
	name: "Header",

	components: {
		Login,
		Setting,
	},

	data() {
		return {
			isLogins: false,
			isSignups: false,
			loginKey: 0,
			isloggedIn: false,
			userDetail: {
				username: ''
			}
		}
	},

	mounted() {
		this.isloggedIn = localStorage.getItem('token') ? true: false;
		this.userDetail.username = localStorage.getItem('username');
	},

	methods: {
		onLogIn() {
			localStorage.setItem('loginType', false);
			this.isLogins = true;
			this.loginKey ++; 
			this.isSignups = false;
		},

		onSignUp() {
			this.isSignups = true;
			localStorage.setItem('loginType', false);
			this.loginKey ++; 
			this.isLogins = false;
		},

		onSignOut() {
			localStorage.removeItem('token');
			localStorage.removeItem('refreshToken');
			localStorage.removeItem('roles');
			localStorage.removeItem('username');
			localStorage.removeItem('id');
			this.isloggedIn = false;
			window.toastr.success("SignOut Successfully!");
		},

		logInSuccess(isLog) {
			this.isloggedIn = isLog;
		},

		onSetting() {
			console.log('asdfsadf')
			$('#setting').modal('show')
		}
	}
};
		
</script>

<style scoped>

</style>
