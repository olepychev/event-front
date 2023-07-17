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

        <div class="section-full bg-white plan-tools-bx">
          <div class="container">
            <ul class="plan-tools-list">
              <li
                class="wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <a href="my-account.html" class="list-box home-list active">
                  <h6 class="title"><i class="la la-home"></i>Home</h6>
                  <p>150 days to go</p>
                </a>
              </li>
              <li
                class="wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <a href="planner-guest-list.html" class="list-box guest-list">
                  <h6 class="title"><i class="la la-user"></i>Guest List</h6>
                  <p>4 invited</p>
                </a>
              </li>
              <li
                class="wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <a
                  href="planner-budget-select.html"
                  class="list-box budget-list"
                >
                  <h6 class="title"><i class="la la-money"></i>Budget</h6>
                  <p>100% Remaining</p>
                </a>
              </li>
              <li
                class="wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <a
                  href="planner-checklist-select-date.html"
                  class="list-box check-list"
                >
                  <h6 class="title">
                    <i class="la la-check-square"></i>Checklist
                  </h6>
                  <p>19% Complete</p>
                </a>
              </li>
              <li
                class="wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <a href="planner-shortlist.html" class="list-box short-list">
                  <h6 class="title">
                    <i class="la la-heart-o"></i>Shortlist
                  </h6>
                  <p>2 Saved</p>
                </a>
              </li>
              <li
                class="wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <a href="planner-advice.html" class="list-box advice-list">
                  <h6 class="title"><i class="la la-bookmark"></i>Advice</h6>
                  <p>250 ideas</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

    <div class="wedding-filter-search wedding-filter-advice">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 d-flex">
						<h2 class="title">My Settings</h2>
					</div>
				</div>
			</div>
		</div>
		<!-- Planner advice End -->
    <!-- contact area -->
      <div class="section-full content-inner-2 bg-gray">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="settings-box m-b30 gray-input">
                  <form>
                    <div class="form-title"><h2>My Wedding Details</h2></div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="form-group">
                          <label>Your Name</label>
                          <input type="text" class="form-control" placeholder="" :value="this.userDetail.username">
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="form-group">
                          <label>Your partner's name</label>
                          <input type="text" class="form-control" placeholder="">
                        </div>
                      </div>
                    </div>
                  </form>
                  <form>
                    <div class="form-title">
                      <h2>My Login Methods</h2>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <label>Change the email</label>
                          <input type="email" class="form-control" placeholder="Change email">
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <label>Reset password</label>
                          <input type="password" class="form-control m-b10" placeholder="New Password">
                          <input type="password" class="form-control m-b10" placeholder="Re Type Password">
                        </div>
                      </div>
                      <button type="button" class="btn gradient btn-block">Save</button>
                    </div>
                  </form>
                  
                </div>
              </div>
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

export default {
  name: "setting",
  components: {
    Header,
  },

  data() {
    return {
      userDetail: {
        username: '',
      }
    }
  },

  mounted() {
    this.userDetail.username = localStorage.getItem('username');
  },
}
</script>