<template>
	<!-- /////////////////////////////////// Sign UP ////////////////////////////////////////// -->
		<div class="loginsignup">
			<div class="modal fade my-account-bx" id="signup" tabindex="-1" role="dialog" aria-labelledby="signup" aria-hidden="true">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<h2 class="title">Sign Up Your Account</h2>
						<form @submit.prevent="handleSignup">
							<div class="form-group">
								<input type="email" class="form-control" placeholder="Email Address" v-model="userData.email" required maxlength="50">
							</div>
							<div class="form-group">
								<input type="password" class="form-control" placeholder="Password" v-model="userData.password" required minlength="6">
							</div>
							<div class="form-group">
								<button type="submit" class="btn btn-block gradient">Sign up</button>
							</div>
							<div class="form-group">
								<a href="my-account.html" class="btn facebook btn-block"><i class="fa fa-facebook m-r10"></i>Continue with Facebook</a>
							</div>
							<div class="form-group">
								<a href="my-account.html" class="btn google-plus btn-block"><i class="fa fa-google m-r10"></i>Continue with Google</a>
							</div>
							<div class="sign-text">
								<span class="">"Already have a Wedding Manager Account?" <a href="#" data-toggle="modal" data-target="#login" data-dismiss="modal">LOGIN</a></span>
							</div>
						</form>
					</div>
				</div>
			</div>
	
			<div class="modal fade my-account-bx" id="login" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<h2 class="title">Login Your Account</h2>
						<form @submit.prevent="handleLogin">
							<div class="form-group">
								<input type="email" class="form-control" placeholder="Email Address" v-model="userData.email" required maxlength="50">
							</div>
							<div class="form-group">
								<input type="password" class="form-control" placeholder="Password" v-model="userData.password" required minlength="6">
								<div class="reset-password">
									<a class="btn-link collapsed" data-toggle="collapse" href="#reset-password" role="button" aria-expanded="false" aria-controls="reset-password">Reset password?</a>
								</div>
							</div>
							<div class="form-group">
								<button type="submit" class="btn btn-block gradient">Login</button>
							</div>
							<div class="form-group">
								<a href="my-account.html" class="btn facebook btn-block"><i class="fa fa-facebook m-r10"></i> Log in with Facebook</a>
							</div>
							<div class="form-group">
								<a href="my-account.html" class="btn google-plus btn-block"><i class="fa fa-google m-r10"></i>Log in with Google</a>
							</div>
							<div class="sign-text">
								<span class="">Don't have a Wedding Manager account? <a href="#" data-toggle="modal" data-target="#signup" data-dismiss="modal">Sign up</a></span>
							</div>
						</form>
					</div>
					<div class="modal-content collapse reset-password" id="reset-password">
						<h2 class="title">Reset password?</h2>
						<form>
							<div class="form-group password-icon-bx">
								<i class="fa fa-lock"></i>
								<p>Enter your email address associated with your account, and we'll email you a link to reset your password...</p>
							</div>
							<div class="form-group">
								<input type="email" class="form-control" placeholder="Enter email address">
							</div>
							<div class="form-group">
								<button type="submit" class="btn btn-block gradient">Send reset link</button>
							</div>
							<div class="sign-text">
								<span class=""><a data-toggle="collapse" href="#reset-password" role="button" aria-expanded="false" aria-controls="reset-password">Back</a></span>
							</div>
						</form>
					</div>
				</div>
			</div>
	
		</div>
	
		<!-- /////////////////////////////////// Sign UP ////////////////////////////////////////// -->
	
	</template>
	
	<script>
	import axios from 'axios';
	
	export default {
		name: "Login",
	
		props: {
			isLogin: Boolean,
			isSignup: Boolean,
		},
	
		data() {
			return {
				userData: {
					email: '',
					password: '',
				},
	
				port: null,
			}
		},
		mounted() {
			console.log('@@@@@@@@@@@@', $('#login'))
			this.port = location.port;
			if(this.isSignup) {
				$('#signup').modal('show')
			}
	
			if(this.isLogin) {
				this.userData.email = '';
				this.userData.password = '';
				$('#login').modal('show')
			}
		},
	
		methods: {
			handleLogin(event) {
				axios
					.post("http://localhost:" + this.port + "/api/auth/signin", {
						username: this.userData.email,
						password: this.userData.password
					}).then(res => {
						localStorage.setItem('token', res.data.token);
						localStorage.setItem('refreshToken', res.data.refreshToken);
						localStorage.setItem('roles', res.data.roles);
						localStorage.setItem('username', res.data.username);
						localStorage.setItem('id', res.data.id);
						this.$emit("logInSuccess", true);
						window.toastr.success('Login Successfully!');
						$('#login').modal('hide')
						if(localStorage.getItem('loginType') == 'true') {
							$("#exampleModal").modal('show')
						}
					}).catch(err => {
						if(err.response && err.response.request.status == 401) 
							window.toastr.error(err.response.data.message);
						else window.toastr.error("Bad Connection");
					})
			},
	
			handleSignup() {
				axios
					.post("http://localhost:" + this.port + "/api/auth/signup", {
						email: this.userData.email,
						password: this.userData.password,
						role: [
							"ROLE_USER"
						]
					}).then(res => {
						window.toastr.success('SignUp Successfully!');
						$('#login').modal('show')
						$('#signup').modal('hide')
					}).catch(err => {
						console.log(err)
						if(err.response && err.response.data.message) 
							window.toastr.error(err.response.data.message);
						else window.toastr.error("Bad Connection");
					})
			}
		}
	}
	</script>
	
	<style>
	
	.loginsignup .modal-content {
		margin-top: 160px;
	}
	
	</style><template>
<!-- /////////////////////////////////// Sign UP ////////////////////////////////////////// -->
	<div class="loginsignup">
		<div class="modal fade my-account-bx" id="signup" tabindex="-1" role="dialog" aria-labelledby="signup" aria-hidden="true">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<h2 class="title">Sign Up Your Account</h2>
					<form @submit.prevent="handleSignup">
						<div class="form-group">
							<input type="email" class="form-control" placeholder="Email Address" v-model="userData.email" required maxlength="50">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Password" v-model="userData.password" required minlength="6">
						</div>
						<div class="form-group">
							<button type="submit" class="btn btn-block gradient">Sign up</button>
						</div>
						<div class="form-group">
							<a href="my-account.html" class="btn facebook btn-block"><i class="fa fa-facebook m-r10"></i>Continue with Facebook</a>
						</div>
						<div class="form-group">
							<a href="my-account.html" class="btn google-plus btn-block"><i class="fa fa-google m-r10"></i>Continue with Google</a>
						</div>
						<div class="sign-text">
							<span class="">"Already have a Wedding Manager Account?" <a href="#" data-toggle="modal" data-target="#login" data-dismiss="modal">LOGIN</a></span>
						</div>
					</form>
				</div>
			</div>
		</div>

		<div class="modal fade my-account-bx" id="login" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<h2 class="title">Login Your Account</h2>
					<form @submit.prevent="handleLogin">
						<div class="form-group">
							<input type="email" class="form-control" placeholder="Email Address" v-model="userData.email" required maxlength="50">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Password" v-model="userData.password" required minlength="6">
							<div class="reset-password">
								<a class="btn-link collapsed" data-toggle="collapse" href="#reset-password" role="button" aria-expanded="false" aria-controls="reset-password">Reset password?</a>
							</div>
						</div>
						<div class="form-group">
							<button type="submit" class="btn btn-block gradient">Login</button>
						</div>
						<div class="form-group">
							<a href="my-account.html" class="btn facebook btn-block"><i class="fa fa-facebook m-r10"></i> Log in with Facebook</a>
						</div>
						<div class="form-group">
							<a href="my-account.html" class="btn google-plus btn-block"><i class="fa fa-google m-r10"></i>Log in with Google</a>
						</div>
						<div class="sign-text">
							<span class="">Don't have a Wedding Manager account? <a href="#" data-toggle="modal" data-target="#signup" data-dismiss="modal">Sign up</a></span>
						</div>
					</form>
				</div>
				<div class="modal-content collapse reset-password" id="reset-password">
					<h2 class="title">Reset password?</h2>
					<form>
						<div class="form-group password-icon-bx">
							<i class="fa fa-lock"></i>
							<p>Enter your email address associated with your account, and we'll email you a link to reset your password...</p>
						</div>
						<div class="form-group">
							<input type="email" class="form-control" placeholder="Enter email address">
						</div>
						<div class="form-group">
							<button type="submit" class="btn btn-block gradient">Send reset link</button>
						</div>
						<div class="sign-text">
							<span class=""><a data-toggle="collapse" href="#reset-password" role="button" aria-expanded="false" aria-controls="reset-password">Back</a></span>
						</div>
					</form>
				</div>
			</div>
		</div>

	</div>

  <!-- /////////////////////////////////// Sign UP ////////////////////////////////////////// -->

</template>

<script>
import axios from 'axios';

export default {
	name: "Login",

	props: {
		isLogin: Boolean,
		isSignup: Boolean,
	},

	data() {
		return {
			userData: {
				email: '',
				password: '',
			},

			port: null,
		}
	},
	mounted() {
		this.port = location.port;
		if(this.isSignup) {
			$('#signup').modal('show')
		}

		if(this.isLogin) {
			this.userData.email = '';
			this.userData.password = '';
			$('#login').modal('show')
		}
	},

	methods: {
		handleLogin(event) {
			axios
        .post("http://localhost:" + this.port + "/api/auth/signin", {
					username: this.userData.email,
					password: this.userData.password
				}).then(res => {
					localStorage.setItem('token', res.data.token);
					localStorage.setItem('refreshToken', res.data.refreshToken);
					localStorage.setItem('roles', res.data.roles);
					localStorage.setItem('username', res.data.username);
					localStorage.setItem('id', res.data.id);
					this.$emit("logInSuccess", true);
					window.toastr.success('Login Successfully!');
					$('#login').modal('hide')
					if(localStorage.getItem('loginType') == 'true') {
						$("#exampleModal").modal('show')
					}
				}).catch(err => {
					if(err.response && err.response.request.status == 401) 
						window.toastr.error(err.response.data.message);
					else window.toastr.error("Bad Connection");
				})
		},

		handleSignup() {
			axios
        .post("http://localhost:" + this.port + "/api/auth/signup", {
					email: this.userData.email,
					password: this.userData.password,
					role: [
						"ROLE_USER"
					]
				}).then(res => {
					window.toastr.success('SignUp Successfully!');
					$('#login').modal('show')
					$('#signup').modal('hide')
				}).catch(err => {
					console.log(err)
					if(err.response && err.response.data.message) 
						window.toastr.error(err.response.data.message);
					else window.toastr.error("Bad Connection");
				})
		}
	}
}
</script>

<style>

.loginsignup .modal-content {
	margin-top: 160px;
}

</style>