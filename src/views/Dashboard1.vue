
<template>
  <div class="page-wraper">
        <div class="section-full content-inner wedding-venues-details bg-gray">
            <div class="container">
				<div class="row ">
					<!-- Left part start -->
					<div class="col-xl-12 col-lg-12 col-md-12 p-b30">
						<!-- Reviews -->
						<div class="venues-reviews-box" v-for="item in eventList">
							<div class="venues-reviews">
								<div class="reviews-info">
									<div class="reviews-user">
										<h6 class="reviewer-name">{{ item.title }}</h6>
										<h6 class="wedding-date" style="text-align: left;">{{ item.createdOn }}</h6>
									</div>	
									<div class="reviews-rating">
										<ul class="rating">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
										</ul>
										<h6 class="review-date">{{ item.createdOn }}</h6>
									</div>
								</div>
								<div class="reviews-content">
									<div class="review-media">
										<img src="images/review/thum3.jpg" alt=""/>
									</div>
									<h5 class="title" style="text-align: left;">{{ item.shortDescription }}</h5>
									<p style="text-align: left;">The best photographer any bride ( especially one who does not like her photo being taken!) could ask for! Can not thank you enough Chanon.</p>
								</div>
							</div>
						</div>
						<!-- Reviews End -->
					</div>
          		</div>
        	</div>
      </div>
  </div>
</template>

<script>
	import Header from "@/views/layouts/Header.vue";
	import axios from 'axios';

	export default {
		name: "setting",
		components: {
			Header,
		},
		data() {
			return {
			eventList: [],
			port: null
			}
		},
		mounted() {
			this.port = location.port;
			axios
			.get("http://localhost:" + this.port + "/events/subEventsForAccount")
			.then((res) => {
				this.eventList = res.data;
			})
			.catch((err) => {
			console.log(err)
			// window.toastr.error("Add Failed!");
			});
		},
	}
</script>