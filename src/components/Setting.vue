<template>
		<div class="setting">
			<div class="modal fade my-account-bx" id="setting" tabindex="-1" role="dialog" aria-labelledby="setting" aria-hidden="true">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<h2 class="title">Sign Up Your Account</h2>
						<form @submit.prevent="onSubmit">
							<div class="form-group">
								<input type="email" class="form-control" placeholder="Email Address" v-model="userData.email" disabled required maxlength="50">
							</div>
							<div class="form-group">
								<input type="password" class="form-control" placeholder="Old Password" v-model="userData.oldPassword" required minlength="6">
							</div>
							<div class="form-group">
								<input type="password" class="form-control" placeholder="New Password" v-model="userData.newPassword" required minlength="6">
							</div>
							<div class="form-group">
								<input type="password" class="form-control" placeholder="New Password Confirm" v-model="userData.newPasswordConfirm" required minlength="6">
							</div>
							<div class="form-group">
								<button type="submit" class="btn btn-block gradient">Change Password</button>
							</div>
						</form>
					</div>
				</div>
			</div>	
		</div>

	</template>
	
	<script>
	import axios from 'axios';
	
	export default {
		name: "Setting",
	
		props: {
		},
	
		data() {
			return {
				userData: {
					email: '',
					oldPassword: '',
					newPassword: '',
					newPasswordConfirm: '',
				},
			}
		},
		mounted() {
			userData.email = localhost.getItem('username')
		},
	
		methods: {
			onSubmit() {
				if(this.userData.newPassword != this.userData.newPasswordConfirm) {
					window.toastr.error('Password dismatch!!!');
				}
				else {
					window.toastr.success('Successfully Changed!');
				}
			}
		}
	}
	</script>
	
	<style>
	
	.setting .modal-content {
		margin-top: 160px;
	}
	
	</style>