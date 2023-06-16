<template>
  <div>
    <!--<div id="loading-area"></div>-->
    <div class="page-wraper">
      <!-- header -->
      <Header />
      <!-- header END -->
      <!-- Content -->
      <div class="page-wraper">
        <!-- header -->
        <header class="site-header header-transparent mo-left">
          <!-- main header -->
          <div class="sticky-header main-bar-wraper navbar-expand-lg">
            <div class="main-bar clearfix">
              <div class="container-fluid clearfix">
                <!-- website logo -->
                <div class="logo-header mostion">
                  <a class="header-logo1" href="index.html"
                    ><img src="images/logo-white-1.png" alt=""
                  /></a>
                  <a class="header-logo2" href="index.html"
                    ><img src="images/logo-black-1.png" alt=""
                  /></a>
                </div>
                <!-- extra nav -->
                <div class="extra-nav">
                  <div class="extra-cell">
                    <a href="#" class="btn gradient openbtn"
                      ><span>Your Wedding Manager </span
                      ><i class="fa fa-bars"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="mySidenav" class="sidenav right-nav">
            <a href="javascript:void(0)" class="closebtn menu-close"
              ><i class="ti-close"></i
            ></a>
            <ul class="">
              <li>
                <a href="my-account.html"><i class="la la-home"></i>Home</a>
              </li>
              <li>
                <a href="planner-guest-list.html"
                  ><i class="la la-user"></i>Guest List</a
                >
              </li>
              <li>
                <a href="planner-budget-select.html"
                  ><i class="la la-money"></i>Budget</a
                >
              </li>
              <li>
                <a href="planner-checklist-select-date.html"
                  ><i class="la la-check-square"></i>Checklist</a
                >
              </li>
              <li>
                <a href="planner-shortlist.html"
                  ><i class="la la-file-text-o"></i>Shortlist</a
                >
              </li>
              <li>
                <a href="planner-shortlist.html"
                  ><i class="la la-user-plus"></i>Booked Suppliers</a
                >
              </li>
              <li>
                <a href="planner-advice.html"
                  ><i class="la la-lightbulb-o"></i>Advice</a
                >
              </li>
              <li>
                <a href="scrapbook.html"
                  ><i class="la la-laptop"></i>Scrapbook</a
                >
              </li>
              <li>
                <a href="settings.html"><i class="la la-cog"></i>Settings</a>
              </li>
              <li>
                <a href="index.html"><i class="la la-sign-out"></i>Log out</a>
              </li>
            </ul>
          </div>
          <!-- main header END -->
        </header>
        <!-- header END -->
        <!-- Content -->
        <div class="page-content bg-white">
          <!-- Section Banner -->
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
          <!-- Section Banner END -->
          <!-- Manager Tools -->
          <div class="section-full bg-white plan-tools-bx">
            <div class="container">
              <table class="table">
                <tfoot>
                  <tr>
                    <td class="add-list" colspan="6">
                      <form>
                        <div class="input-group">
                          <div class="input-group-append">
                            <a
                              href="javascript:;"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              class="btn gradient"
                            >
                              Get Started with wedding manager
                            </a>
                          </div>
                        </div>
                      </form>
                    </td>
                  </tr>
                </tfoot>
              </table>
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
          <!-- Manager Tools End -->
          <div class="wedding-filter-search wedding-filter-advice">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h2 class="title">Our wedding budget</h2>
                  <a
                    href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                    class="video-popup popup-youtube video"
                    ><i class="la la-play-circle-o"></i> Watch how the budget
                    works</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Manager Tools -->
          <!-- Vendors Category -->
          <div class="section-full bg-gray content-inner">
            <div class="container">
              <div class="row">
                <div
                  class="col-lg-6 col-md-12 col-sm-12 card-container wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div class="featured-bx m-b30">
                    <div class="featured-media">
                      <img src="images/gallery/gallery/pic1.jpg" alt="" />
                    </div>
                    <div class="featured-info">
                      <h5 class="title">
                        <a href="wedding-venues-search.html"
                          >Gosfield Hall Wedding Venue</a
                        >
                      </h5>
                      <a
                        href="wedding-venues-search.html"
                        class="btn gradient btn-sm"
                        >Search</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 card-container">
                  <div class="row">
                    <div
                      class="col-lg-6 col-md-6 col-sm-6 card-container wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.4s"
                    >
                      <div class="featured-bx m-b30">
                        <div class="featured-media">
                          <img src="images/gallery/gallery/pic3.jpg" alt="" />
                        </div>
                        <div class="featured-info">
                          <h5 class="title">
                            <a href="wedding-venues-search.html"
                              >Wedding Photographers</a
                            >
                          </h5>
                          <a
                            href="wedding-venues-search.html"
                            class="btn gradient btn-sm"
                            >Search</a
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-lg-6 col-md-6 col-sm-6 card-container wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.6s"
                    >
                      <div class="featured-bx m-b30">
                        <div class="featured-media">
                          <img src="images/gallery/gallery/pic4.jpg" alt="" />
                        </div>
                        <div class="featured-info">
                          <h5 class="title">
                            <a href="wedding-venues-search.html"
                              >Wedding Caterers</a
                            >
                          </h5>
                          <a
                            href="wedding-venues-search.html"
                            class="btn gradient btn-sm"
                            >Search</a
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 card-container wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.8s"
                    >
                      <div class="featured-bx m-b30">
                        <div class="featured-media">
                          <img src="images/gallery/gallery/pic2.jpg" alt="" />
                        </div>
                        <div class="featured-info">
                          <h5 class="title">
                            <a href="wedding-venues-search.html"
                              >Wedding Florists</a
                            >
                          </h5>
                          <a
                            href="wedding-venues-search.html"
                            class="btn gradient btn-sm"
                            >Search</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Our Services -->
          <div class="section-full bg-white content-inner about-us">
            <div class="container">
              <div class="section-head text-black text-center">
                <h2 class="box-title">Expert Advice and Real Weddings</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
              </div>
              <div class="row sp20">
                <div
                  class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div class="listing-bx m-b20 expert-advice">
                    <div class="listing-media">
                      <img src="images/listing/pic1.jpg" alt="" />
                      <div class="media-info">
                        <a class="like-btn" href="javascript:void(0)"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </div>
                    </div>
                    <div class="listing-info">
                      <h3 class="title">
                        <a href="outdoor-wedding-venues.html"
                          >Outdoor Wedding Venues in London</a
                        >
                      </h3>
                      <a href="outdoor-wedding-venues.html" class="btn-link"
                        >Expert Advice</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div class="listing-bx m-b20 expert-advice">
                    <div class="listing-media">
                      <img src="images/listing/pic2.jpg" alt="" />
                      <div class="media-info">
                        <a class="like-btn" href="javascript:void(0)"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </div>
                    </div>
                    <div class="listing-info">
                      <h3 class="title">
                        <a href="outdoor-wedding-venues.html"
                          >Barn Wedding Venues in Cheshire</a
                        >
                      </h3>
                      <a href="outdoor-wedding-venues.html" class="btn-link"
                        >Expert Advice</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  <div class="listing-bx m-b20 expert-advice">
                    <div class="listing-media">
                      <img src="images/listing/pic3.jpg" alt="" />
                      <div class="media-info">
                        <a class="like-btn" href="javascript:void(0)"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </div>
                    </div>
                    <div class="listing-info">
                      <h3 class="title">
                        <a href="outdoor-wedding-venues.html"
                          >Small Wedding Venues in Yorkshire</a
                        >
                      </h3>
                      <a href="outdoor-wedding-venues.html" class="btn-link"
                        >Expert Advice</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.8s"
                >
                  <div class="listing-bx m-b20 expert-advice">
                    <div class="listing-media">
                      <img src="images/listing/pic4.jpg" alt="" />
                      <div class="media-info">
                        <a class="like-btn" href="javascript:void(0)"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </div>
                    </div>
                    <div class="listing-info">
                      <h3 class="title">
                        <a href="outdoor-wedding-venues.html"
                          >Asian Wedding Venues Birmingham</a
                        >
                      </h3>
                      <a href="outdoor-wedding-venues.html" class="btn-link"
                        >Expert Advice</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div class="listing-bx m-b20 expert-advice">
                    <div class="listing-media">
                      <img src="images/listing/pic5.jpg" alt="" />
                      <div class="media-info">
                        <a class="like-btn" href="javascript:void(0)"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </div>
                    </div>
                    <div class="listing-info">
                      <h3 class="title">
                        <a href="outdoor-wedding-venues.html"
                          >Unusual wedding venues in London</a
                        >
                      </h3>
                      <a href="outdoor-wedding-venues.html" class="btn-link"
                        >Expert Advice</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div class="listing-bx m-b20 expert-advice">
                    <div class="listing-media">
                      <img src="images/listing/pic6.jpg" alt="" />
                      <div class="media-info">
                        <a class="like-btn" href="javascript:void(0)"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </div>
                    </div>
                    <div class="listing-info">
                      <h3 class="title">
                        <a href="outdoor-wedding-venues.html"
                          >Choosing Wedding Food in 5 Simple</a
                        >
                      </h3>
                      <a href="outdoor-wedding-venues.html" class="btn-link"
                        >Expert Advice</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  <div class="listing-bx m-b20 expert-advice">
                    <div class="listing-media">
                      <img src="images/listing/pic7.jpg" alt="" />
                      <div class="media-info">
                        <a class="like-btn" href="javascript:void(0)"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </div>
                    </div>
                    <div class="listing-info">
                      <h3 class="title">
                        <a href="outdoor-wedding-venues.html"
                          >Wedding Films : 4 Reasons Why You</a
                        >
                      </h3>
                      <a href="outdoor-wedding-venues.html" class="btn-link"
                        >Expert Advice</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.8s"
                >
                  <div class="listing-bx m-b20 expert-advice">
                    <div class="listing-media">
                      <img src="images/listing/pic8.jpg" alt="" />
                      <div class="media-info">
                        <a class="like-btn" href="javascript:void(0)"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </div>
                    </div>
                    <div class="listing-info">
                      <h3 class="title">
                        <a href="outdoor-wedding-venues.html"
                          >How to Confirm Your Wedding</a
                        >
                      </h3>
                      <a href="outdoor-wedding-venues.html" class="btn-link"
                        >Expert Advice</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Our Services -->
          <!-- Vendors Category End -->
          <div class="section-full bg-gray content-inner">
            <div class="container">
              <div class="section-head text-black text-center">
                <h2 class="box-title">Get organised</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
              </div>
              <div class="row">
                <div
                  class="col-lg-4 col-md-4 col-sm-6 col-12 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.3s"
                >
                  <div class="planning-tools text-center m-b30">
                    <div class="icon-bx">
                      <i class="flaticon-dollar"></i>
                    </div>
                    <div class="content-bx">
                      <h5 class="title">
                        Manager your <br />
                        wedding Budget
                      </h5>
                      <a
                        href="planner-budget-select.html"
                        class="btn purple gradient"
                        >Budget</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-4 col-sm-6 col-12 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  <div class="planning-tools text-center m-b30">
                    <div class="icon-bx">
                      <i class="flaticon-management"></i>
                    </div>
                    <div class="content-bx">
                      <h5 class="title">Manage your wedding Guest List</h5>
                      <a
                        href="planner-guest-list.html"
                        class="btn yellow gradient"
                        >Guest List</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-4 col-sm-12 col-12 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.9s"
                >
                  <div class="planning-tools text-center m-b30">
                    <div class="icon-bx">
                      <i class="flaticon-checked"></i>
                    </div>
                    <div class="content-bx">
                      <h5 class="title">Start your wedding Checklist</h5>
                      <a
                        href="planner-checklist-select-date.html"
                        class="btn green gradient"
                        >Checklist</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Manager Tools End -->
          <div
            class="modal fade date-wizard planroll"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModal"
          >
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-dialog" role="document">
              <form class="modal-content start-here" id="ProfileStep1" v-show="tabIndex == 0">
                <div class="planroll-nav">
                  <a href="#" class="prev">Back</a>
                  <span>1 / 6</span>
                  <a href="#" class="next" @click="GoToStep(1)" :style="eventData.title == '' ? 'visibility: hidden': 'visibility: visible'"
                    >Skip</a
                  >
                </div>
                <div
                  class="planroll-imgbx"
                  style="background-image: url(images/icon/pic2.png)"
                ></div>
                <div class="start-here-bx">
                  <div class="">
                    <div class="planroll-title">
                      <h5 class="title">What are you Planning for?</h5>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label class="label" for="eventType">Event Type</label>
                        <select
                          id="eventType"
                          v-model="eventData.type"
                          @change="(ev) => getSubEventTypes(ev.target.value)"
                        >
                          <option
                            v-for="eventType in eventTypes"
                            :key="eventType.type"
                            :value="eventType.type"
                          >
                            {{ eventType.description }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label class="label" for="subEventType"
                          >Sub Event Type</label
                        >
                        <select id="subEventType" v-model="eventData.subType">
                          <option
                            v-for="eventType in subEventTypes"
                            :key="eventType.type"
                            :value="eventType.type"
                          >
                            {{ eventType.description }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control search"
                            placeholder="Your event name "
                            id="title"
                            v-model="eventData.title"
                            @input="TitleChange"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <ul
                      style="display: none"
                      class="select-list clearfix list-inline list-2"
                    >
                      <li>
                        <div class="custom-control custom-checkbox checkbox-lg">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="must-haves1"
                          />
                          <label class="custom-control-label" for="must-haves1"
                            >We have a rough budget in mind</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox checkbox-lg">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="must-haves2"
                          />
                          <label class="custom-control-label" for="must-haves2"
                            >We've decided on our venue</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox checkbox-lg">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="must-haves3"
                          />
                          <label class="custom-control-label" for="must-haves3"
                            >We know who we'll be inviting</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox checkbox-lg">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="must-haves4"
                          />
                          <label class="custom-control-label" for="must-haves4"
                            >We know the style of venue we want</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox checkbox-lg">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="must-haves5"
                          />
                          <label class="custom-control-label" for="must-haves5"
                            >We haven't started at all</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox checkbox-lg">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="must-haves6"
                          />
                          <label class="custom-control-label" for="must-haves6"
                            >We've already set the date!</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="modal-footer text-center">
                  <button
                    type="button"
                    class="btn gradient"
                    data-toggle="tooltip"
                    @click="GoToStep(1)"
                    data-placement="top"
                    :disabled="eventData.title == ''"
                    title="Congrats! Even your names look great together."
                  >
                    Let's get started!
                  </button>
                </div>
              </form>
              <form class="modal-content start-planning" id="ProfileStep2" v-show="tabIndex == 1">
                <div class="planroll-nav">
                  <a href="#" class="prev" @click="GoToStep(-1)"
                    >Back</a
                  >
                  <span>2 / 6</span>
                  <a href="#" class="next" @click="GoToStep(1)" :style="eventData.userName == '' ? 'visibility: hidden': 'visibility: visible'"
                    >Skip</a
                  >
                </div>
                <div
                  class="planroll-imgbx"
                  style="background-image: url(images/icon/pic1.jpg)"
                ></div>
                <div class="start-here-bx">
                  <div class="planroll-title">
                    <h5 class="title">Welcome To Event Manager</h5>
                    <p>Add your name below.</p>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="eventData.userName"
                      placeholder="Your Name"
                    />
                  </div>
                  <div v-if="eventData.type != 'BIRTHDAY'" class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Partner's name"
                    />
                  </div>
                </div>
                <div class="modal-footer text-center">
                  <button
                    type="button"
                    class="btn gradient"
                    data-toggle="tooltip"
                    data-placement="top"
                    @click="GoToStep(1)"
                    :disabled="eventData.userName == ''"
                    title="Congrats! Even your names look great together."
                  >
                    Next Step
                  </button>
                </div>
              </form>
              <form class="modal-content start-here" id="ProfileStep3" v-show="tabIndex == 2">
                <div class="planroll-nav">
                  <a href="#" class="prev" @click="GoToStep(-1)"
                    >Back</a
                  >
                  <span>3 / 6</span>
                  <a href="#" class="next" @click="GoToStep(1)"
                    >Skip</a
                  >
                </div>
                <div class="modal-header">
                  <h5 class="title">Your Ideal event date</h5>
                  <span class="date">{{
                    formattedDateTime(eventData.Time.start) +
                    " - " +
                    formattedDateTime(eventData.Time.end)
                  }}</span>
                </div>
                <form
                  action="#"
                  id="myForm"
                  role="form"
                  data-toggle="validator"
                  method="post"
                  accept-charset="utf-8"
                >
                  <v-date-picker
                    v-model="eventData.Time"
                    mode="dateTime"
                    is-range
                    :min-date="new Date()"
                  ></v-date-picker>
                  <!-- SmartWizard html -->
                  <div v-if="eventData.type === 'WED'" class="col-md-12">
                    <v-date-picker
                      v-model="eventData.Time"
                      mode="dateTime"
                      :masks="TimeFormat"
                      is-range
                      :min-date="new Date()"
                    >
                      <template
                        v-slot="{ inputValue, inputEvents, isDragging }"
                      >
                        <div
                          class="flex flex-col sm:flex-row justify-start items-center"
                        >
                          <div class="relative flex-grow">
                            <!-- <svg
                              class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg> -->
                            <input
                              class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                              :class="
                                isDragging ? 'text-gray-600' : 'text-gray-900'
                              "
                              :value="inputValue.start"
                              v-on="inputEvents.start"
                            />
                          </div>
                          <span class="flex-shrink-0 m-2">
                            <!-- <svg
                              class="w-4 h-4 stroke-current text-gray-600"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg> -->
                          </span>
                          <div class="relative flex-grow">
                            <svg
                              class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <!-- <path
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path> -->
                            </svg>
                            <input
                              style="display: none"
                              class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                              :class="
                                isDragging ? 'text-gray-600' : 'text-gray-900'
                              "
                              :value="inputValue.end"
                              v-on="inputEvents.end"
                            />
                          </div>
                        </div>
                      </template>
                    </v-date-picker>
                  </div>
                  <!-- <div v-else id="smartwizard">
                    <v-date-picker v-model="eventData.Time.start" />
                  </div> -->
                  <!-- <div class="modal-footer text-center"></div> -->
                </form>
                <div
                  class="planroll-imgbx"
                  style="background-image: url(images/icon/pic3.png); display: none;"
                ></div>
                <div
                  style="display: none"
                  class="start-here-bx wedding-reception-bx"
                >
                  <div class="planroll-title">
                    <h5 class="title">
                      Have you booked your wedding reception venue?
                    </h5>
                  </div>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        >Yes, we have!</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        >No, not yet!</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control search"
                          placeholder="Your wedding venue name?"
                        />
                      </div>
                      <div class="form-group text-center">
                        <div
                          class="custom-control custom-radio radio-lg d-inline"
                        >
                          <input
                            type="radio"
                            class="custom-control-input"
                            id="later"
                          />
                          <label class="custom-control-label" for="later"
                            >We'll do it later</label
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control search"
                          placeholder="e.g. ‘Bristol’, Yorkshire, or ‘Scotland’"
                        />
                      </div>
                      <div class="form-group text-center">
                        <div
                          class="custom-control custom-radio radio-lg d-inline"
                        >
                          <input
                            type="radio"
                            class="custom-control-input"
                            id="Undecided"
                          />
                          <label class="custom-control-label" for="Undecided"
                            >Undecided on where</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer text-center">
                  <button
                    type="button"
                    class="btn gradient"
                    data-toggle="tooltip"
                    @click="GoToStep(1)"
                    data-placement="top"
                    title="Congrats! Even your names look great together."
                  >
                    Next Step
                  </button>
                </div>
              </form>
              <!-- date wizard area -->
              <div class="modal-content date-wizard-area" id="ProfileStep4" v-show="tabIndex == 3">
                <div class="planroll-nav">
                  <a href="#" class="prev" @click="GoToStep(-1)"
                    >Prev</a
                  >
                  <span>4 / 6</span>
                  <a href="#" class="next" @click="GoToStep(1)"
                    >Next</a
                  >
                </div>
                <div
                  class="planroll-imgbx"
                  style="background-image: url(images/icon/pic4.png)"
                ></div>
                <div class="start-here-bx wedding-reception-bx">
                  <div class="planroll-title">
                    <h5 class="title">
                      Have you booked your wedding reception venue?
                    </h5>
                    <p>This will help us show you suitable venues.</p>
                  </div>
                  <div class="form-group">
                    <div class="row col-md-12">
                      <google-map
                        style="width: 100%"
                        @added-address="updateAddress"
                      />
                    </div>
                  </div>
                  <div style="display: none" class="form-group text-center">
                    <div class="custom-control custom-radio radio-lg d-inline">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="know-yet"
                      />
                      <label class="custom-control-label" for="know-yet"
                        >We don't know yet</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <form class="modal-content start-here" id="ProfileStep5" v-show="tabIndex == 4">
                <div class="planroll-nav">
                  <a href="#" class="prev" @click="GoToStep(-1)"
                    >Back</a
                  >
                  <span>5 / 6</span>
                  <a href="#" class="next" @click="GoToStep(1)"
                    >Skip</a
                  >
                </div>
                <div class="d-flex justify-content-center">
                  <div
                    class="planroll-imgbx"
                    style="background-image: url(images/icon/pic4.png); margin: 0 10px;"
                  >
                  </div>
                  
                  <div
                    class="planroll-imgbx"
                    style="background-image: url(images/icon/pic5.png); margin: 0 10px;"
                  ></div>
                </div>
                <div class="start-here-bx wedding-reception-bx">
                  <div class="planroll-title">
                    <h5 class="title">Do you have estimated guests and budget in mind?</h5>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      :class="{'is-invalid': parseInt(eventData.estimatedGuests.replaceAll(' ', '').replaceAll(',', '')) > 100000}"
                      placeholder="Estimated number of guests?"
                      id="estimatedGuests"
                      v-model="eventData.estimatedGuests"
                      @keydown="GuestsKeyDown"
                      min="0"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"
                          ><i class="fa fa-usd"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        :class="{'is-invalid': parseInt(eventData.budget.replaceAll(' ', '').replaceAll(',', '')) > 1000000000}"
                        placeholder="Estimated wedding budget?"
                        id="budget"
                        v-model="eventData.budget"
                        @keydown="EstimatedBudgetKeyDown"
                        min="0"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group text-center">
                    <div class="custom-control custom-radio radio-lg d-inline">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="know-yet"
                      />
                      <label
                        style="display: none"
                        class="custom-control-label"
                        for="know-yet"
                        >We don't know yet</label
                      >
                    </div>
                  </div>
                </div>
                <div class="modal-footer text-center">
                  <button
                    type="button"
                    class="btn gradient"
                    data-toggle="tooltip"
                    data-placement="top"
                    @click="GoToStep(1)"
                    title="Congrats! Even your names look great together."
                  >
                    Next Step
                  </button>
                </div>
              </form>
              <!-- <form class="modal-content start-here" id="ProfileStep6" v-show="tabIndex == 5">
                <div class="planroll-nav">
                  <a href="#" class="prev" @click="GoToStep(-1)"
                    >Back</a
                  >
                  <span>6 / 6</span>
                  <a href="#" class="next" @click="GoToStep(1)"
                    >Skip</a
                  >
                </div>
                <div
                  class="planroll-imgbx"
                  style="background-image: url(images/icon/pic5.png)"
                ></div>
                <div class="start-here-bx wedding-reception-bx">
                  <div class="planroll-title">
                    <h5 class="title">
                      Do you have an overall wedding budget in mind?
                    </h5>
                    <p>
                      Guess-timate your total budget so we can tell you what to
                      spend on each supplier. Not sure? The average UK wedding
                      costs around £17,000.
                    </p>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"
                          ><i class="fa fa-usd"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Estimated wedding budget?"
                        id="budget"
                        v-model="eventData.budget"
                        @keydown="EstimatedBudgetKeyDown"
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group text-center">
                    <div class="custom-control custom-radio radio-lg d-inline">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="know-yet1"
                      />
                      <label
                        style="display: none"
                        class="custom-control-label"
                        for="know-yet1"
                        >We don't know yet</label
                      >
                    </div>
                  </div>
                </div>
                <div class="modal-footer text-center">
                  <button
                    type="button"
                    class="btn gradient"
                    data-toggle="tooltip"
                    data-placement="top"
                    @click="GoToStep(1)"
                    title="Congrats! Even your names look great together."
                  >
                    Next Step
                  </button>
                </div>
              </form> -->
              <form class="modal-content start-here" id="ProfileStep7" v-show="tabIndex == 5">
                <div class="planroll-nav">
                  <a href="#" class="prev" @click="GoToStep(-1)"
                    >Back</a
                  >
                  <span>6 / 6</span>
                  <a href="#" class="next" @click="GoToStep(1)" :style="eventData.emailAddress == '' || !isEmailValid ? 'visibility: hidden': 'visibility: visible'"
                    >Skip</a
                  >
                </div>
                <div
                  class="planroll-imgbx"
                  style="background-image: url(images/icon/pic6.png)"
                ></div>
                <div class="start-here-bx wedding-reception-bx">
                  <div class="planroll-title">
                    <h5 class="title">Add Your Email Address</h5>
                    <!-- <p>
                      Add your partner to your Wedding Manager so you can plan
                      your wedding together.
                    </p> -->
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="eventData.emailAddress"
                      class="form-control"
                      :class="{'is-invalid': !isEmailValid}"
                      @keydown="(ev) => validateEmail(ev)"
                      placeholder="Add your email"
                      required
                    />
                  </div>

                  <div class="form-group" v-if="eventData.type != 'BIRTHDAY'">
                    <input
                      type="email"
                      v-model="eventData.emailPartnerAddress"
                      class="form-control"
                      :class="{'is-invalid': !isPartnerEmailValid}"
                      @keydown="(ev) => validatePartnerEmail(ev)"
                      placeholder="Add your partner email"
                    />
                  </div>
                </div>
                <div class="modal-footer text-center">
                  <button
                    type="button"
                    class="btn gradient"
                    data-toggle="tooltip"
                    data-placement="top"
                    :disabled="(eventData.emailAddress == '' || !isEmailValid)"
                    @click="CreateEvent()"
                    title="Congrats! Even your names look great together."
                  >
                    Save & Create Event
                  </button>
                </div>
              </form>
              <!-- <form class="modal-content start-here" id="ProfileStep8" v-show="tabIndex == 6">
                <div class="planroll-nav">
                  <a href="#" class="prev" @click="GoToStep(-1)"
                    >Back</a
                  >
                  <span>7 / 6</span>
                  <a href="#" class="next" @click="GoToStep(1)"
                    >Done</a
                  >
                </div>
                <div
                  class="planroll-imgbx"
                  style="background-image: url(images/icon/pic7.png)"
                ></div>
                <div class="start-here-bx wedding-reception-bx">
                  <div class="planroll-title">
                    <h5 class="title">And finally...</h5>
                    <p>
                      All enquiries you send will come from this email address:
                      Confirm your email address
                    </p>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="eventData.emailAddress"
                      placeholder="confirm your email"
                    />
                  </div>
                </div>
                <div class="modal-footer text-center">
                  <button
                    type="button"
                    class="btn gradient"
                    data-toggle="tooltip"
                    data-placement="top"
                    @click="GoToStep('ProfileStep9')"
                    title="Congrats! Even your names look great together."
                  >
                    Confirm
                  </button>
                </div>
              </form> -->
              <div class="modal-content start-here" id="ProfileStep9" v-show="tabIndex == 6">
                <div class="planroll-nav">
                  <a href="#" class="prev" @click="GoToStep(-1)"
                    >Prev</a
                  >
                  <span>Done</span>
                  <a href="#" class="next" @click="GoToFinish()">Finish</a>
                </div>
                <div
                  class="planroll-imgbx"
                  style="background-image: url(images/icon/pic8.png)"
                ></div>
                <div class="start-here-bx wedding-reception-bx">
                  <div class="planroll-title">
                    <h5 class="title">
                      Congratulations, your Wedding Manager is ready!
                    </h5>
                  </div>
                  <div class="found-matches">
                    <h4 class="title">We’ve found your matches!</h4>
                    <p>There are 8441 wedding venues in the United Kingdom.</p>

                    <div class="text-center">
                      <button
                        type="button"
                        class="btn gradient m-auto"
                        data-toggle="tooltip"
                        data-placement="top"
                        @click="GoToDashboard()"
                      >
                        Go to Dashboard
                      </button>
                    </div>
                    <!-- <a href="wedding-venues-search.html" class="btn gradient"
                      ><i class="fa fa-search"></i> Go to Dashboard</a
                    > -->
                  </div>
                  <div class="form-group">
                    <ul class="myacountlist">
                      <li>
                        <a href="planner-checklist-select-date.html"
                          ><img src="images/icon/icon2/icon4.png" alt="" /><span
                            >Checklist</span
                          ></a
                        >
                      </li>
                      <li>
                        <a href="planner-shortlist.html"
                          ><img src="images/icon/icon2/icon6.png" alt="" /><span
                            >Shortlist</span
                          ></a
                        >
                      </li>
                      <li>
                        <a href="planner-budget-select.html"
                          ><img src="images/icon/icon2/icon5.png" alt="" /><span
                            >Budget</span
                          ></a
                        >
                      </li>
                      <li>
                        <a href="planner-guest-list.html"
                          ><img src="images/icon/icon2/icon3.png" alt="" /><span
                            >Guest List</span
                          ></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal End -->
        </div>
        <!-- Content END-->
        <!-- Footer -->
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
        <!-- Footer END-->
        <button class="scroltop fa fa-chevron-up"></button>
      </div>
      <!-- Content END-->
      <!-- Footer -->
      <google-map style="width: 100%" @added-address="updateAddress" />
      <Footer />
      <!-- Footer END-->
      <button class="scroltop fa fa-chevron-up" @click="scroll2top"></button>
    </div>
  </div>
</template>

<script>
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";
import axios from "axios";
import GoogleMap from "@/components/GoogleMap";
import moment from "moment";
import vueDropzone from "vue2-dropzone";

import Vue from "vue";
import VCalendar from "v-calendar";
Vue.use(VCalendar);

export default {
  name: "planner-add-event",
  components: {
    Header,
    Footer,
    vueDropzone,
    GoogleMap,
  },
  data() {
    return {
      TimeFormat: {
        input: "YYYY-MM-DD hh:mm A",
      },
      eventData: {
        userName: "",
        emailAddress: "",
        emailPartnerAddress: "",
        title: "",
        Time: {
          start: new Date(),
          end: new Date(),
        },
        type: "",
        subType: "",
        budget: "",
        estimatedGuests: "",
        description: "",
        address: {
          address: "",
          city: "",
          state: "",
          country: "",
          postalCode: "",
          latitude: "",
          longitude: "",
        },
      },
      mainEventId: 0,
      mainEventName: "",
      eventId: 0,
      eventTitle: "",
      expenseType: "",
      noData: false,
      addEventID: 100,
      addExpenseType: "PHOTO",
      addAmount: 0,
      eventNames: [
        { text: "John's wedding", value: "100" },
        { text: "Ring Ceremony", value: "101" },
      ],
      tabIndex: 0,
      isEmailValid: true,
      isPartnerEmailValid: true,
      eventTypes: [
        {
          id: "wedding",
          value: "wedding",
        },
        {
          id: "wedding1",
          value: "wedding1",
        },
      ],
      subEventTypes: [],
      eventName: null,
      expenseTypes: [
        { text: "Photographer", value: "PHOTO" },
        { text: "Videographer", value: "VIDEO" },
        { text: "Decoration Budget", value: "DECOR" },
        { text: "Clothing Budget", value: "CLOTHING" },
        { text: "VENUE", value: "VENUE" },
        { text: "DJ", value: "DJ" },
        { text: "OTHER", value: "OTHER" },
      ],
      budgetData: [],
      parameters: [],
      name: "",
      port: null,
    };
  },
  created() {
    this.port = location.port;
    // jQuery("#exampleModal").css(
    //   "margin-top",
    //   Math.max(0, (jQuery(window).height() - dialog.height()) / 2)
    // );
    // this.GoToStep("ProfileStep1");

    // jQuery(".modal-content").hide();
    // jQuery("#ProfileStep1").show();
    this.getEventTypes();
    // this.ready();
    // var modal = jQuery("#exampleModal"),
    //   dialog = modal.find(".modal-dialog");
    // modal.css("display", "block");
    // dialog.css(
    //   "margin-top",
    //   Math.max(0, (jQuery(window).height() - dialog.height()) / 2)
    // );
    // jQuery(".modal-content").hide();
    // jQuery("#ProfileStep1").show();
    // $("#exampleModal").modal("show");
    // var modal = jQuery("#exampleModal"),
    //   dialog = modal.find(".modal-dialog");
    // console.log(modal);
    // modal.css("display", "block");
    // dialog.css(
    //   "margin-top",
    //   Math.max(0, (jQuery(window).height() - dialog.height()) / 2)
    // );
    // console.log($("#exampleModal").modal("show"));
    // $("#exampleModal").modal("show");
    // jQuery(".modal-content").hide();
    // jQuery("ProfileStep1").show();
    // console.log(jQuery("#ProfileStep1"));
  },
  mounted() {},
  methods: {
    ready() {
      // Toolbar extra buttons
      var btnFinish = $("<button></button>")
        .text("Finish")
        .addClass("btn btn-info")
        .on("click", function () {
          if (!$(this).hasClass("disabled")) {
            var elmForm = $("#myForm");
            if (elmForm) {
              elmForm.validator("validate");
              var elmErr = elmForm.find(".has-error");
              if (elmErr && elmErr.length > 0) {
                alert("Oops we still have error in the form");
                return false;
              } else {
                alert("Great! we are ready to submit form");
                elmForm.submit();
                return false;
              }
            }
          }
        });
      var btnCancel = $("<button></button>")
        .text("Cancel")
        .addClass("btn btn-danger")
        .on("click", function () {
          $("#smartwizard").smartWizard("reset");
          $("#myForm").find("input, textarea").val("");
        });

      // Smart Wizard
      // $("#smartwizard").smartWizard({
      //   selected: 0,
      //   theme: "dots",
      //   transitionEffect: "fade",
      //   toolbarSettings: {
      //     toolbarPosition: "bottom",
      //     toolbarExtraButtons: [btnFinish, btnCancel],
      //   },
      //   anchorSettings: {
      //     markDoneStep: true, // add done css
      //     markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
      //     removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
      //     enableAnchorOnDoneStep: true, // Enable/Disable the done steps navigation
      //   },
      // });

      // $("#smartwizard").on(
      //   "leaveStep",
      //   function (e, anchorObject, stepNumber, stepDirection) {
      //     var elmForm = $("#form-step-" + stepNumber);
      //     // stepDirection === 'forward' :- this condition allows to do the form validation
      //     // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
      //     if (stepDirection === "forward" && elmForm) {
      //       elmForm.validator("validate");
      //       var elmErr = elmForm.children(".has-error");
      //       if (elmErr && elmErr.length > 0) {
      //         // Form validation failed
      //         return false;
      //       }
      //     }
      //     return true;
      //   }
      // );

      // $("#smartwizard").on(
      //   "showStep",
      //   function (e, anchorObject, stepNumber, stepDirection) {
      //     // Enable finish button only on last step
      //     if (stepNumber == 3) {
      //       $(".btn-finish").removeClass("disabled");
      //     } else {
      //       $(".btn-finish").addClass("disabled");
      //     }
      //   }
      // );
    },
    allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    
    GoToFinish() {

      const startFormattedTime = this.formattedDateForSubmit(
        this.eventData.Time.start
      );
      const endFormattedTime = this.formattedDateForSubmit(
        this.eventData.Time.end
      );

      let locationData = {
        address: this.eventData.address.address,
        city: this.eventData.address.city,
        state: this.eventData.address.state,
        country: this.eventData.address.country,
        postalCode: this.eventData.address.postalCode,
        longitude: this.eventData.address.longitude,
        latitude: this.eventData.address.latitude,
      };

      let requestData = {
        title: this.eventData.title,
        multiEvent: "Y",
        emailAddress: this.eventData.emailAddress,
        emailPartnerAddress: this.eventData.emailPartnerAddress,
        eventType: this.eventData.type,
        eventSubType: this.eventData.subType,
        budget: Number(this.eventData.budget.replace(/[, " "]/g, "")),
        estimatedGuests: Number(
          this.eventData.estimatedGuests.replace(/[, " "]/g, "")
        ),
        fromDate: startFormattedTime,
        toDate: endFormattedTime,
        shortDescription: this.eventData.description,
        location: locationData,
      };
      console.log(requestData);

      this.tabIndex = 0;
      $(".close").click();
      axios
        .post("http://localhost:" + this.port + "/events", requestData)
        .then((res) => {
          console.log("res: ", res);
          if (res.statusText === "Created") {
            window.toastr.success("New Event Successfully Added");
            this.$router.push({
              name: "/subevent_list",
              query: {
                mainEventId: res.data,
              },
            });
          } else {
            window.toastr.error("Failed to add new Event");
          }
        });
    },

    GoToDashboard() {
      $('.close').click();
      this.$router.push({
        name: "/sub/dashboard",
        // query: {
        //   mainEventId: res.data,
        // },
      });
    },
    GuestsKeyDown(e) {
      let cursor = e.target.selectionStart;
      let value = e.target.value + "";
      let key = e.key;
      if (key != "Backspace" && key != "Delete") {
        setTimeout(() => {
          if (!Number(key) && key != 0) {
            this.eventData.estimatedGuests = value;
          }
        }, 0);
      }
      
      setTimeout(() => {
        if (
          key == "Backspace" &&
          (value[cursor] == " " || value[cursor] == ",")
        )
          cursor -= 1;
        if (key == "Delete" && (value[cursor] == " " || value[cursor] == ","))
          cursor += 1;
        if (Number(key) || key == "Backspace" || key == "Delete" || key == 0) {
          value = this.eventData.estimatedGuests;
          let val = value.replace(/ /g, "").replace(/,/g, "");
          let str = "";
          let cursorTemp = cursor;
          if (key != "Backspace" && key != "Delete" && val.length != 0) {
            if (cursorTemp % 3 == 0) cursor += 2;
          }
          for (let i = val.length; i > 0; i--) {
            if (i != val.length && (val.length - i + 1) % 3 == 0 && i != 1) {
              str += val[i - 1] + ", ";
            } else str += val[i - 1];
          }

            this.eventData.estimatedGuests = str.split("").reverse().join("");

        }
        setTimeout(() => {
          if (
            (key != "Backspace" && key != "Delete" && Number(key)) ||
            key == 0
          )
            cursor += 1;
          if (key == "ArrowLeft" || key == "Backspace") cursor -= 1;
          if (key == "ArrowRight") cursor += 1;
          e.target.selectionStart = cursor;
          e.target.selectionEnd = cursor;
        }, 10);
      }, 0);
    },
    EstimatedBudgetKeyDown(e) {
      let cursor = e.target.selectionStart;
      let value = e.target.value + "";
      let key = e.key;
      if (key != "Backspace" && key != "Delete") {
        setTimeout(() => {
          if (!Number(key) && key != 0) {
            this.eventData.budget = value;
          }
        }, 0);
      }
      setTimeout(() => {
        if (
          key == "Backspace" &&
          (value[cursor] == " " || value[cursor] == ",")
        )
          cursor -= 1;
        if (key == "Delete" && (value[cursor] == " " || value[cursor] == ","))
          cursor += 1;
        if (Number(key) || key == "Backspace" || key == "Delete" || key == 0) {
          value = this.eventData.budget;
          let val = value.replace(/ /g, "").replace(/,/g, "");
          let str = "";
          let cursorTemp = cursor;
          if (key != "Backspace" && key != "Delete" && val.length != 0) {
            if (cursorTemp % 3 == 0) cursor += 2;
          }
          for (let i = val.length; i > 0; i--) {
            if (i != val.length && (val.length - i + 1) % 3 == 0 && i != 1) {
              str += val[i - 1] + ", ";
            } else str += val[i - 1];
          }

            this.eventData.budget = str.split("").reverse().join("");

          
        }
        setTimeout(() => {
          if (
            (key != "Backspace" && key != "Delete" && Number(key)) ||
            key == 0
          )
            cursor += 1;
          if (key == "ArrowLeft" || key == "Backspace") cursor -= 1;
          if (key == "ArrowRight") cursor += 1;
          e.target.selectionStart = cursor;
          e.target.selectionEnd = cursor;
        }, 10);
      }, 0);
    },
    getGeoCode() {
      axios
        .get(
          "http://localhost:" +
            this.port +
            "/maps/api/geocode/json?address=shenyang+liaoning+CN&key=AIzaSyD8OJWvqCanCoFm8ZQM8YFOaxIlAHwUIcQ"
        )
        .then((res) => {
          console.log(res.data.results[0].geometry.location);
        });
    },

    validateEmail(e) {
      const re = /\S+@\S+\.\S+/;
      this.isEmailValid = re.test(String(e.target.value).toLowerCase());
    },

    validatePartnerEmail(e) {
      const re = /\S+@\S+\.\S+/;
      this.isPartnerEmailValid = re.test(String(e.target.value).toLowerCase());
    },

    getEventTypes() {
      axios
        .get("http://localhost:" + this.port + "/events/types")
        .then((res) => {
          this.eventTypes = res.data;
          this.eventData.type = this.eventTypes[0].type;
          this.getSubEventTypes(this.eventData.type);
        });
    },
    scroll2top() {
      window.$("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    },
    CreateEvent() {
      const startFormattedTime = this.formattedDateForSubmit(
        this.eventData.Time.start
      );
      const endFormattedTime = this.formattedDateForSubmit(
        this.eventData.Time.end
      );

      let locationData = {
        address: this.eventData.address.address,
        city: this.eventData.address.city,
        state: this.eventData.address.state,
        country: this.eventData.address.country,
        postalCode: this.eventData.address.postalCode,
        longitude: this.eventData.address.longitude,
        latitude: this.eventData.address.latitude,
      };

      let requestData = {
        title: this.eventData.title,
        multiEvent: "Y",
        emailAddress: this.eventData.emailAddress,
        emailPartnerAddress: this.eventData.emailPartnerAddress,
        eventType: this.eventData.type,
        eventSubType: this.eventData.subType,
        budget: Number(this.eventData.budget.replace(/[, " "]/g, "")),
        estimatedGuests: Number(
          this.eventData.estimatedGuests.replace(/[, " "]/g, "")
        ),
        fromDate: startFormattedTime,
        toDate: endFormattedTime,
        shortDescription: this.eventData.description,
        location: locationData,
      };

      axios
        .post("http://localhost:" + this.port + "/events", requestData)
        .then((res) => {
          if (res.statusText === "Created") {
            window.toastr.success("New Event Successfully Added");
            Gotostep(1);
          } else {
            window.toastr.error("Failed to add new Event");
          }
        }).catch((err) => {
          window.toastr.error("Failed to add new Event");
        });
    },
    GoToStep(pos) {
      this.tabIndex += pos;
      // jQuery(".modal-content").hide();
      // jQuery("#" + id).show();
      // console.log("Gotostep");
    },
    formattedDateForSubmit(date) {
      return moment(date.toLocaleString("en-GB"), "DD/MM/YYYY HH:mm:ss").format(
        "YYYY-MM-DD HH:mm"
      );
    },
    formattedDateTime(date) {
      return moment(date.toLocaleString("en-GB"), "DD/MM/YYYY HH:mm:ss").format(
        "DD MMMM YYYY"
      );
    },
    getSubEventTypes(eventType) {
      axios
        .get("http://localhost:" + this.port + "/events/subtypes")
        .then((res) => {
          this.subEventTypes = [];
          for (let item of res.data) {
            if (item.parentType === eventType) {
              this.subEventTypes.push(item);
            }
          }
          this.eventData.subType = this.subEventTypes[0].type;
        });
    },
    TitleChange(e) {
      let value = e.target.value;
      if (value.length > 150) this.eventData.title = value.slice(0, 150);
    },
    updateAddress(currentPlace) {
      console.log(currentPlace);
      this.eventData.address.address = currentPlace.name;
      this.eventData.address.city = currentPlace.vicinity;
      this.eventData.address.state = currentPlace.address_components.find(
        (element) => element.types[0] === "administrative_area_level_1"
      )?.long_name;
      this.eventData.address.country = currentPlace.address_components.find(
        (element) => element.types[0] === "country"
      )?.long_name;
      this.eventData.address.postalCode = currentPlace.address_components.find(
        (element) => element.types[0] === "postal_code"
      )?.long_name;
      this.eventData.address.longitude = currentPlace.geometry.location.lng();
      this.eventData.address.latitude = currentPlace.geometry.location.lat();
    },

  },
};
</script>

<style>
select {
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  display: block;
  width: 180px;
}
select:focus {
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}
div.row div {
  margin: 0 auto;
}

div.row {
  margin: 20px 0;
}

div.row h2,
h3 {
  margin-bottom: 0;
}
.label {
  color: #94aab0;
  margin-bottom: 10px;
  text-align: left;
  display: block;
}

button:disabled {
  background: rgb(122,122,122) !important;
}
</style>
