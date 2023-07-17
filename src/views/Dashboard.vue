<template>
  <div class="page-wraper">
    <Header />
    <div class="page-wraper">
      <div class="page-content bg-white">
        <div
            class="dlab-bnr-inr text-center dlab-bnr-inr-sm overlay-black-dark"
            style="background-image: url(images/main-slider/slide1.jpg); background-size: cover;"
            id="app-banner"
          >
            <div class="container">
              <div class="dlab-bnr-inr-entry align-m dlab-home">
                <div class="bnr-content">
                  <div class="wedding-details">
                    <div class="wedding-info wedding-info-left">
                      <h2 class="wedding-name">Kuldeep Gaur</h2>
                      <div class="wedding-img">
                        <img src="images/testimonials/pic1.jpg" alt="" />
                      </div>
                    </div>
                    <div class="wedding-heart">
                      <i class="fa fa-heart"></i>
                    </div>
                    <div class="wedding-info wedding-info-right">
                      <div class="wedding-img">
                        <img src="images/testimonials/pic2.jpg" alt="" />
                      </div>
                      <h2 class="wedding-name">Deepika Sharma</h2>
                    </div>
                  </div>
                  <div class="wedding-location">
                    <a
                      href="javascript:;"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      class="location-name"
                      >London <i class="fa fa-pencil m-l5"></i
                    ></a>
                    <p class="location-info">
                      A Sunday in November 2019 157 days to go!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Search Filter -->
            <div class="search-filter">
              <div class="container">
                <form class="filter-form" action="wedding-venues-search.html">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                      <select class="form-control" style="height: 100%">
                        <option>We’re looking for</option>
                        <option>Photographers</option>
                        <option>Florists</option>
                        <option>Videographers</option>
                        <option>Catering</option>
                        <option>Wedding Dress and Accessories</option>
                        <option>Music</option>
                        <option>Entertainment</option>
                        <option>Cakes</option>
                        <option>Stationery</option>
                        <option>Beauty, Hair and Make-Up</option>
                        <option>Menswear</option>
                        <option>Wedding Rings and Jewellery</option>
                        <option>Transport</option>
                        <option>Decoration and Hire</option>
                        <option>Planners, Toastmasters and Celebrants</option>
                        <option>Marquee Hire</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                      <input
                        type="text"
                        class="form-control search"
                        placeholder="Near"
                      />
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Or Called"
                        id="datepicker"
                      />
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-6 col-6 d-flex">
                      <button class="btn btn-block gradient text-uppercase">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Search Filter END -->
          </div>
        </div>

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
										<h6 class="wedding-date">{{ item.createdOn }}</h6>
									</div>	
									<div class="reviews-rating">
										<ul class="rating">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
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
									<h5 class="title">{{ item.shortDescription }}</h5>
									<p>The best photographer any bride ( especially one who does not like her photo being taken!) could ask for! Can not thank you enough Chanon.</p>
								</div>
							</div>
						</div>
						<!-- Reviews End -->
						<!-- Up Next Slide End -->
            </div>
          </div>
        </div>
      </div>
		<!-- contact area END -->
		<!-- contact area end -->
		<div class="modal fade deal-modal" id="deal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header justify-content-center">
						<a href="#" class="btn red btn-sm radius-xl">Wedding Manager Deal</a>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="deal-inner">
							<h5 class="title">Weekend March 2020 Offer</h5>
							<span class="price">Save £800</span>
							<p>This special offer for weekends in March 2020 includes: catering for 60 day guests/catering for a total of 100 guests in the evening; videographer; DJ Friday: £6,355 Saturday: £6,855 Sunday: £5,855</p>
							<span class="date">Offer expires: 31/03/2020</span>
						</div>
					</div>
					<div class="modal-footer justify-content-center">
						<button type="button" class="btn">Redeem offer</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Modal -->
		<div class="modal fade add-guest planner-modal-bx" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModal2" aria-hidden="true">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<h2 class="modal-title text-center">Send a message to Maidens Barn</h2>
					<form>
						<div class="form-group text-center">
							<small class="small-bx">We will pass your details to the supplier so they can get back to you with a proposal.</small>
						</div>
						<div>
							<ul class="popup-profile-info">
								<li><strong>Email:</strong><span>kkgaur9736@gmail.com</span></li>
								<li><strong>Names:</strong><span>kk gaur & kk kuldeep</span></li>
								<li><strong>Phone:</strong><span>[recommended]</span></li>
								<li><strong>Ideal date:</strong><span>20th Feb 2020</span></li>
								<li><strong>Estimated guests:</strong><span>[missing]</span></li>
								<li><a class="collapsed btn-link" role="button" data-toggle="collapse" href="#edit" aria-expanded="false" aria-controls="edit">Edit <i class="fa fa-pencil"></i></a></li>
							</ul>
							<div class="filter-bx fade collapse gray-bx" id="edit" style="">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Email address</label>
											<input type="text" class="form-control" placeholder="Add an email">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Phone number</label>
											<input type="text" class="form-control" placeholder="Add a phone number">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Your name</label>
											<input type="text" class="form-control" placeholder="">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Your partner's name</label>
											<input type="text" class="form-control" placeholder="">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Estimated guests</label>
											<input type="text" class="form-control" placeholder="">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Ideal date</label>
											<input type="date" class="form-control">
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group gray-bx">
							<label class="label-title">Your must-haves</label>
							<ul class="select-list clearfix list-inline list-3">
								<li>
									<div class="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" class="custom-control-input" id="more-info">
										<label class="custom-control-label" for="more-info">More info</label>
									</div>
								</li>
								<li>
									<div class="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" class="custom-control-input" id="Brochure">
										<label class="custom-control-label" for="Brochure">Brochure</label>
									</div>
								</li>
								<li>
									<div class="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" class="custom-control-input" id="Pricing-details">
										<label class="custom-control-label" for="Pricing-details">Pricing details</label>
									</div>
								</li>
								<li>
									<div class="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" class="custom-control-input" id="Alternative-dates">
										<label class="custom-control-label" for="Alternative-dates">Alternative-dates</label>
									</div>
								</li>
								<li>
									<div class="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" class="custom-control-input" id="Availability">
										<label class="custom-control-label" for="Availability">Availability</label>
									</div>
								</li>
								<li>
									<div class="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" class="custom-control-input" id="Quote">
										<label class="custom-control-label" for="Quote">Quote</label>
									</div>
								</li>
								<li>
									<div class="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" class="custom-control-input" id="Showround-date">
										<label class="custom-control-label" for="Showround-date">Showround date</label>
									</div>
								</li>
								<li>
									<div class="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" class="custom-control-input" id="Other">
										<label class="custom-control-label" for="Other">Other</label>
									</div>
								</li>
							</ul>
						</div>
						<div class="form-group gray-bx">
							<div class="text-center">
								<a class="collapsed black btn-link" role="button" data-toggle="collapse" href="#maidens-barn" aria-expanded="false" aria-controls="maidens-barn"><i class="fa fa-plus-circle"></i> Add a custom message</a>
							</div>
							<div class="filter-bx fade collapse" id="maidens-barn" style="">
								<div class="row">
									<div class="col-md-12">
										<div class="m-t30">
											<label class="label-title">Edit your message below</label>
											<textarea class="form-control" placeholder="Add an email"></textarea>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 text-center m-t30">
								<button class="btn green gradient">Request brochure</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- Modal End -->
		<!-- Modal -->
		<div class="modal fade add-guest write-reviews planner-modal-bx" id="writeReviews" tabindex="-1" role="dialog" aria-labelledby="writeReviews" aria-hidden="true">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<h2 class="modal-title text-center">Submit a review for Chanon deValois Photography</h2>
					<form>
						<div class="gray-bx">
							<div class="row">
								<div class="col-lg-12">
									<div class="form-group">
										<label class="label-title">Rate your experience*</label>	
										<div class="comment-form-rating">
											<label class="pull-left m-r20">Your Rating</label>
											<div id="review_form_wrapper">
												<div id="review_form">
													<div id="respond" class="comment-respond">
														<div class="rating-widget">
															<!-- Rating Stars Box -->
															<div class="rating-stars">
																<ul id="stars">
																	<li class="star" title="Poor" data-value="1">
																		<i class='fa fa-star fa-fw'></i>
																	</li>
																	<li class="star" title="Fair" data-value="2">
																		<i class="fa fa-star fa-fw"></i>
																	</li>
																	<li class="star" title="Good" data-value="3">
																		<i class="fa fa-star fa-fw"></i>
																	</li>
																	<li class="star" title="Excellent" data-value="4">
																		<i class="fa fa-star fa-fw"></i>
																	</li>
																	<li class="star" title="WOW!!!" data-value="5">
																		<i class="fa fa-star fa-fw"></i>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group">
										<label class="label-title">Title*</label>	
										<input type="text" class="form-control" placeholder="Simply the best wedding of my life">
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group">
										<label class="label-title">Message*</label>	
										<textarea class="form-control" placeholder="Don't be shy, get personal and share the juicy details!"></textarea>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group">
										<label class="label-title">Add a photo<span>Optional</span></label>	
										<input type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple>
									</div>
								</div>
							</div>
						</div>
						<div class="white-bx p-tb30">
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label class="label-title">By*</label>	
										<div class="select-input">
											<div class="select-group">
												<select>
													<option>A happy couple</option>
													<option>A couple's parents</option>
													<option>Happy guests</option>
													<option>Suppliers</option>
													<option>Other</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label class="label-title">Wedding date*</label>	
										<input type="date" class="form-control">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label class="label-title">Your name*</label>	
										<input type="text" class="form-control" placeholder="Romeo & Juliet">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label class="label-title">Email* <span>(We won't show it on your review)</span></label>	
										<input type="text" class="form-control" placeholder="Email">
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group">
										<div class="recaptcha">
											<div class="g-recaptcha" data-sitekey="<!-- Put reCaptcha Site Key -->" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											<input class="form-control d-none" style="display:none;" data-recaptcha="true" required data-error="Please complete the Captcha">
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group">
										<p class="text-reviews">All reviews submitted will be verified and posted within 24 hours. By submitting this review you are verifying that it is an honest and accurate review. Wedding Manager reserves the right to request evidence of any feedback provided.</p>
									</div>
								</div>
								<div class="col-md-12 text-center">
									<button class="btn green gradient">Add a review</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- Modal End -->
		<!-- Modal -->
		<div class="modal fade add-guest planner-modal-bx" id="contactSupplier" tabindex="-1" role="dialog" aria-labelledby="contactSupplier" aria-hidden="true">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<h2 class="modal-title text-center">Send a message to Chanon deValois Photography</h2>
					<form>
						<div class="form-group text-center">
							<small class="small-bx">We will pass your details to the supplier so they can get back to you with a proposal.</small>
						</div>
						<div>
							<ul class="popup-profile-info">
								<li><strong>Email:</strong><span>kkgaur9736@gmail.com</span></li>
								<li><strong>Names:</strong><span>kk gaur & kk kuldeep</span></li>
								<li><strong>Phone:</strong><span>[recommended]</span></li>
								<li><strong>Ideal date:</strong><span>20th Feb 2020</span></li>
								<li><strong>Estimated guests:</strong><span>[missing]</span></li>
								<li><a class="collapsed btn-link" role="button" data-toggle="collapse" href="#profile-edit" aria-expanded="false" aria-controls="profile-edit">Edit <i class="fa fa-pencil"></i></a></li>
							</ul>
							<div class="filter-bx fade collapse gray-bx" id="profile-edit">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Email address</label>
											<input type="text" class="form-control" placeholder="Add an email">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Phone number</label>
											<input type="text" class="form-control" placeholder="Add a phone number">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Your name</label>
											<input type="text" class="form-control" placeholder="">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Your partner's name</label>
											<input type="text" class="form-control" placeholder="">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Estimated guests</label>
											<input type="text" class="form-control" placeholder="">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label-title">Ideal date</label>
											<input type="date" class="form-control">
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group gray-bx">
							<div class="text-center">
								<a class="collapsed black btn-link" role="button" data-toggle="collapse" href="#contactSupplierEdit" aria-expanded="false" aria-controls="contactSupplierEdit"><i class="fa fa-plus-circle"></i> Add a custom message</a>
							</div>
							<div class="filter-bx fade collapse" id="contactSupplierEdit" style="">
								<div class="row">
									<div class="col-md-12">
										<div class="m-t30">
											<label class="label-title">Edit your message below</label>
											<textarea class="form-control" placeholder="Add an email"></textarea>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 text-center m-t30">
								<button class="btn green gradient">Request brochure</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- Modal End -->
		<!-- Modal -->
		<div class="modal fade add-guest planner-modal-bx" id="edit-details" tabindex="-1" role="dialog" aria-labelledby="edit-details" aria-hidden="true">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<h2 class="modal-title text-center">Edit your details</h2>
					<form>
						<div class="form-group text-center">
							<small class="small-bx">We will pass your details to the supplier so they can get back to you with a proposal.</small>
						</div>
						<div class="row">
							<div class="col-lg-6">
								<div class="form-group">
									<label class="label-title">Email*</label>	
									<input type="text" class="form-control" placeholder="Enter your email address">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-group">
									<label class="label-title">Phone*</label>	
									<input type="text" class="form-control" placeholder="Enter your phone number">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-group">
									<label class="label-title">Your name*</label>	
									<input type="text" class="form-control" placeholder="What's your name?">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-group">
									<label class="label-title">Your partner's name*</label>	
									<input type="text" class="form-control" placeholder="Who are you marrying?">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-group">
									<label class="label-title">Estimated guests*</label>	
									<input type="text" class="form-control" placeholder="How many guests?">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-group">
									<label class="label-title">Ideal date*</label>	
									<input type="date" class="form-control">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-group">
									<label class="label-title">Location*</label>	
									<input type="text" class="form-control" placeholder="Chelmsford, UK">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 text-center m-t30">
								<button class="btn green gradient">Save information</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>

        <footer class="site-footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                  <div class="widget widget-list">
                    <h5 class="widget-title">About Us</h5>
                    <ul>
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="pressandmedia.html">Press And Media</a></li>
                      <li>
                        <a href="javascript:void(0);">info@example.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                  <div class="widget widget-list">
                    <h5 class="widget-title">For Couples</h5>
                    <ul>
                      <li>
                        <a href="wedding-planning-tools.html">Manager Tools</a>
                      </li>
                      <li>
                        <a href="wedding-suppliers.html">Wedding Suppliers</a>
                      </li>
                      <li>
                        <a href="wedding-ideas-inspiration.html"
                          >Ideas Inspiration</a
                        >
                      </li>
                      <li>
                        <a href="wedding-gift-lists.html">Wedding Gift Lists</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                  <div class="widget widget-list">
                    <h5 class="widget-title">For Business</h5>
                    <ul>
                      <li><a href="index-business.html">Business</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                  <div class="widget widget-app">
                    <h5 class="widget-title">GET THE APP</h5>
                    <img src="images/app1.jpg" alt="" />
                    <img src="images/app2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <span class="copyright">
                    © Copyright 2019 Wedding Manager</span
                  >
                </div>
                <div class="col-lg-6">
                  <ul class="footer-list">
                    <li><a href="cookie-policy.html">Cookie Policy</a></li>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="terms.html">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
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