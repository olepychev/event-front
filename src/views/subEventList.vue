<template>
  <div>
    <div class="page-wraper">
      <!-- header -->
      <Header />
      <!-- header End -->
      <!-- Content -->
      <div class="page-content bg-white">
        <!-- Section Banner -->
        <div
          class="dlab-bnr-inr text-center dlab-bnr-inr-sm overlay-black-dark"
          style="
            background-image: url(images/main-slider/slide1.jpg);
            background-size: cover;
          "
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
                  <a href="settings.html" class="location-name"
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
                    <input
                      type="text"
                      class="form-control"
                      placeholder="We’re looking for"
                    />
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Near"
                    />
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Or Called"
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
            <ul class="plan-tools-list">
              <li
                v-for="subevent in subeventData"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
                @click="openDetails(subevent.eventId)"
              >
                <div
                  :class="
                    selected == subevent.eventId
                      ? 'list-box home-list active'
                      : 'list-box home-list'
                  "
                >
                  <h6 class="title">
                    <i class="la la-home"></i>{{ subevent.title }}
                  </h6>
                  <p>150 days to go</p>
                </div>
              </li>
              <!-- <li
                class="wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <a href="planner-guest-list.html" class="list-box home-list">
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
                  class="list-box budget-list active"
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
                  <h6 class="title"><i class="la la-heart-o"></i>Shortlist</h6>
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
              </li> -->
            </ul>
          </div>
        </div>
        <!-- Manager Tools End -->
        <!-- contact area -->
        <div class="section-full content-inner bg-gray">
          <div class="container">
            <div class="row column-reverse">
              <div class="col-lg-9 col-md-8 col-sm-12">
                <div class="section-full wedding-venues-details bg-gray">
                  <div class="container">
                    <div class="row">
                      <!-- Left part start -->
                      <div class="col-xl-12 col-lg-12 col-md-12 p-b30">
                        <div class="details-media-bx">
                          <div class="featured-info">
                            <h4 class="title">{{ subeventDetails.title }}</h4>
                            <p class="address">
                              <i class="fa fa-map-marker m-r5 text-primary"></i>
                              <!-- Marmora Road Chi Minh City, Vietnam -->
                              {{
                                subeventDetails.location &&
                                subeventDetails.location.address +
                                  ", " +
                                  subeventDetails.location.city +
                                  ", " +
                                  subeventDetails.location.state +
                                  ", " +
                                  subeventDetails.location.country +
                                  ", " +
                                  subeventDetails.location.postalCode
                              }}
                            </p>
                            <!-- <ul class="featured-star">
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                            </ul> -->
                          </div>
                          <div class="featured-lists">
                            <ul class="navbar">
                              <li>
                                <a href="#price" class="scroll nav-link"
                                  ><i class="la la-money"></i>&#36;{{
                                    subeventDetails.budget &&
                                    addCommas(String(subeventDetails.budget))
                                  }}</a
                                >
                              </li>
                              <li>
                                <a href="#upto" class="scroll nav-link"
                                  ><i class="la la-users"></i
                                  >{{
                                    subeventDetails.estimatedGuests &&
                                    addCommas(
                                      String(subeventDetails.estimatedGuests)
                                    )
                                  }}</a
                                >
                              </li>
                              <li>
                                <a href="#upto" class="scroll nav-link"
                                  ><i class="la la-bed"></i>9 Bedrooms</a
                                >
                              </li>
                              <li>
                                <a href="#upto" class="scroll nav-link"
                                  ><i class="la la-diamond"></i>Exclusive Use</a
                                >
                              </li>
                              <li>
                                <a href="#upto" class="scroll nav-link"
                                  ><i class="la la-pencil"></i>Wedding
                                  Licence</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="featured-media">
                            <div class="featured-gallery">
                              <div class="row column-reverse">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                  <h5 class="title">Guests' details</h5>
                                  <ul class="dec-exp-bx">
                                    <li>
                                      Attending Guests<span>{{
                                        guestCount.guestCountDto?.attending
                                      }}</span>
                                    </li>
                                    <li>
                                      Invited Guests<span>{{
                                        guestCount.guestCountDto?.invited
                                      }}</span>
                                    </li>
                                    <li>
                                      Maybe Attending<span>{{
                                        guestCount.guestCountDto?.mayBe
                                      }}</span>
                                    </li>
                                    <li>
                                      Guests Not Attending<span>{{
                                        guestCount.guestCountDto?.notAttending
                                      }}</span>
                                    </li>
                                    <li>
                                      Unconfirmed Guests<span>{{
                                        guestCount.guestCountDto?.unconfirmed
                                      }}</span>
                                    </li>
                                  </ul>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                  <h5 class="title">Invites' details</h5>
                                  <ul class="dec-exp-bx">
                                    <li>
                                      Total invites<span>{{
                                        guestCount.inviteCountDto?.total
                                      }}</span>
                                    </li>
                                    <li>
                                      Invited<span>{{
                                        guestCount.inviteCountDto?.invited
                                      }}</span>
                                    </li>
                                    <li>
                                      Pending<span>{{
                                        guestCount.inviteCountDto?.pending
                                      }}</span>
                                    </li>
                                    <li>
                                      Expected Attendees<span>{{
                                        guestCount.inviteCountDto
                                          ?.expectedAttendees
                                      }}</span>
                                    </li>
                                    <li>
                                      Invited Attendees<span>{{
                                        guestCount.inviteCountDto
                                          ?.invitedAttendees
                                      }}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <img src="images/blog/default/thum3.jpg" alt="" />
                              <button class="lightGalleryButton">
                                <i class="fa fa-picture-o"></i> View Photos (12)
                              </button>
                            </div>
                          </div>
                        </div>
                        <!-- Full Description -->
                        <h5 class="details-title">Event Information</h5>
                        <div class="description-box">
                          <p>
                            {{
                              subeventDetails.shortDescription &&
                              subeventDetails.shortDescription
                            }}
                          </p>
                          <div class="dlab-divider bg-gray-dark">
                            <i class="icon-dot c-square"></i>
                          </div>
                          <h4 class="title">
                            Personal Message from the Manager
                          </h4>
                          <p>Name of Wedding Contact: Chanon deValois</p>
                          <p>
                            Hello, May I take this opportunity to wish you
                            congratulations on your engagement! This is such an
                            exciting time and I know from experience that
                            sometimes it feels like there is so much to do. My
                            aim is to provide you with friendly and professional
                            service. I provide clear and open pricing, no hidden
                            agenda or unexpected extras. My half day coverage
                            starts at £600 and full day £1200. Please email me
                            to find out more. I look forward to hearing from
                            you.
                          </p>
                        </div>
                        <!-- Full Description End -->
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#exampleModal2"
                          class="btn btn-block gradient green m-b30"
                          >Request a quote</a
                        >
                        <h5 class="text-quote">
                          Matt Wing is a professional and talented photographer
                          who has an eye for the special moments in your day
                          that could easily go unseen by other photographers.
                          His gorgeous photography speaks for itself!
                        </h5>
                        <div class="row sp20">
                          <div class="col-md-6 m-b20">
                            <div
                              class="card-bx red h100"
                              data-toggle="modal"
                              data-target="#deal"
                            >
                              <div class="inner">
                                <span class="tag-btn"
                                  >Exclusive Wedding Manager Deal</span
                                >
                                <h6 class="title">
                                  Wedding Manager Couple Discount
                                </h6>
                                <p>
                                  SENSATIONAL special offer for all remaining
                                  2019 weekend dates: £6,199 (incl. VAT)
                                  catering for 80 day guests/a total of 100
                                  evening guests; DJ
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 m-b20">
                            <div
                              class="card-bx blue h100"
                              data-toggle="modal"
                              data-target="#deal"
                            >
                              <div class="inner">
                                <span class="tag-btn"
                                  >Wedding Manager Deal</span
                                >
                                <h6 class="title">Seasonal Offer Available</h6>
                                <p>Save £800</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 m-b20">
                            <div
                              class="card-bx green h100"
                              data-toggle="modal"
                              data-target="#deal"
                            >
                              <div class="inner">
                                <span class="tag-btn"
                                  >Exclusive Wedding Manager Deal</span
                                >
                                <h6 class="title">
                                  Wedding Manager Couple Discount
                                </h6>
                                <p>Save £800</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 m-b20">
                            <div
                              class="card-bx yellow h100"
                              data-toggle="modal"
                              data-target="#deal"
                            >
                              <div class="inner">
                                <span class="tag-btn"
                                  >Exclusive Wedding Manager Deal</span
                                >
                                <h6 class="title">
                                  Wedding Manager Couple Discount
                                </h6>
                                <p>Save £800</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Pricing & Costs -->
                        <h5 class="details-title" id="price">
                          Pricing & Costs
                        </h5>
                        <div class="pricing-costs-box">
                          <h5 class="title">Prices start at</h5>
                          <h2 class="price">£1200</h2>
                          <div class="row sp20">
                            <div class="col-md-6 m-b20">
                              <div class="pricost-box">
                                <h5 class="pricost-title">
                                  <i class="la la-institution"></i>Venue Hire
                                  Only
                                </h5>
                                <div class="card-bx red bordered">
                                  <div class="inner">
                                    <ul class="deal-list">
                                      <li>
                                        <span>Prices Start At</span>
                                        <strong>£2,999</strong>
                                      </li>
                                      <li>
                                        <span>Prices Start At</span>
                                        <strong>£5,799</strong>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <p class="pricost-content readmore">
                                  Our venue-only hire includes tables/chairs.
                                  You choose from our list of six caterers.
                                  Alternatively, our packages include a Anim
                                  pariatur cliche reprehenderit, enim eiusmod
                                  high life accusamus terry richardson ad squid.
                                  Nihil anim keffiyeh helvetica, craft beer
                                  labore wes anderson cred nesciunt sapiente ea
                                  proident.
                                  <span class="btn-link">Read More</span>
                                </p>
                              </div>
                            </div>
                            <div class="col-md-6 m-b20">
                              <div class="pricost-box">
                                <h5 class="pricost-title">
                                  <i class="la la-institution"></i>In-house
                                  catering <span>(Price Per Head)</span>
                                </h5>
                                <div class="card-bx green bordered">
                                  <div class="inner">
                                    <ul class="deal-list">
                                      <li>
                                        <span>Prices Start At</span>
                                        <strong>£2,999</strong>
                                      </li>
                                      <li>
                                        <span>Prices Start At</span>
                                        <strong>£5,799</strong>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <p class="pricost-content">
                                  Our venue-only hire includes tables/chairs.
                                  You choose from our list of six caterers.
                                  Alternatively, our packages include a
                                  <span class="collapse" id="dec4"
                                    >Anim pariatur cliche reprehenderit, enim
                                    eiusmod high life accusamus terry richardson
                                    ad squid. Nihil anim keffiyeh helvetica,
                                    craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident.</span
                                  >
                                  <a
                                    class="btn-link"
                                    data-toggle="collapse"
                                    href="#dec4"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                  >
                                    Read More
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div class="col-md-6 m-b20">
                              <div class="pricost-box">
                                <h5 class="pricost-title">
                                  <i class="la la-gift"></i>Packages
                                </h5>
                                <div class="card-bx yellow bordered">
                                  <div class="inner">
                                    <ul class="deal-list">
                                      <li>
                                        <span>Prices Start At</span>
                                        <strong>£2,999</strong>
                                      </li>
                                      <li>
                                        <span>Prices Start At</span>
                                        <strong>£5,799</strong>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <p class="pricost-content">
                                  Our venue-only hire includes tables/chairs.
                                  You choose from our list of six caterers.
                                  Alternatively, our packages include a
                                  <span class="collapse" id="dec3"
                                    >Anim pariatur cliche reprehenderit, enim
                                    eiusmod high life accusamus terry richardson
                                    ad squid. Nihil anim keffiyeh helvetica,
                                    craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident.</span
                                  >
                                  <a
                                    class="btn-link"
                                    data-toggle="collapse"
                                    href="#dec3"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                  >
                                    Read More
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div class="col-md-6 m-b20">
                              <div class="pricost-box">
                                <h5 class="pricost-title">
                                  <i class="la la-gift"></i>Venue Hire Only
                                </h5>
                                <div class="card-bx blue bordered">
                                  <div class="inner">
                                    <ul class="deal-list">
                                      <li>
                                        <span>Prices Start At</span>
                                        <strong>£2,999</strong>
                                      </li>
                                      <li>
                                        <span>Prices Start At</span>
                                        <strong>£5,799</strong>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <p class="pricost-content">
                                  Our venue-only hire includes tables/chairs.
                                  You choose from our list of six caterers.
                                  Alternatively, our packages include a
                                  <span class="collapse" id="dec2"
                                    >Anim pariatur cliche reprehenderit, enim
                                    eiusmod high life accusamus terry richardson
                                    ad squid. Nihil anim keffiyeh helvetica,
                                    craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident.</span
                                  >
                                  <a
                                    class="btn-link"
                                    data-toggle="collapse"
                                    href="#dec2"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                  >
                                    Read More
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            href="javascript:;"
                            data-toggle="modal"
                            data-target="#exampleModal2"
                            class="btn gradient"
                            >Request a quote</a
                          >
                        </div>
                        <!-- Pricing & Costs End -->

                        <h5 class="details-title" id="upto">
                          Features & Capacity
                        </h5>
                        <div class="row sp20">
                          <div class="col-md-6 m-b20">
                            <div class="card-bx border-bx white">
                              <div class="iconbx">
                                <i class="la la-home"></i>
                              </div>
                              <div class="inner">
                                <ul class="deal-list">
                                  <li>
                                    <span>Prices Start At</span>
                                    <strong>£2,999</strong>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 m-b20">
                            <div class="card-bx border-bx white">
                              <div class="iconbx">
                                <i class="la la-clock-o"></i>
                              </div>
                              <div class="inner">
                                <ul class="deal-list">
                                  <li>
                                    <span>Prices Start At</span>
                                    <strong>£2,999</strong>
                                  </li>
                                  <li>
                                    <span>Prices Start At</span>
                                    <strong>£5,799</strong>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 m-b20">
                            <div class="card-bx border-bx white">
                              <div class="iconbx">
                                <i class="la la-users"></i>
                              </div>
                              <div class="inner">
                                <ul class="deal-list">
                                  <li>
                                    <span>Prices Start At</span>
                                    <strong>£2,999</strong>
                                  </li>
                                  <li>
                                    <span>Prices Start At</span>
                                    <strong>£5,799</strong>
                                  </li>
                                  <li>
                                    <span>Prices Start At</span>
                                    <strong>£5,799</strong>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 m-b20">
                            <div class="card-bx border-bx white">
                              <div class="iconbx">
                                <i class="la la-bed"></i>
                              </div>
                              <div class="inner">
                                <ul class="deal-list">
                                  <li>
                                    <span>Prices Start At</span>
                                    <strong>£2,999</strong>
                                  </li>
                                  <li>
                                    <span>Prices Start At</span>
                                    <strong>£5,799</strong>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Pricing & Costs End -->
                        <h5 class="details-title">Details</h5>
                        <div class="inner-content-bx">
                          <div class="details-list">
                            <h5 class="title">Products and Services</h5>
                            <ul class="list-check primary clearfix list-2">
                              <li>Wedding Hall</li>
                              <li>Dining</li>
                              <li>Liability Insurance</li>
                              <li>In House Catering</li>
                              <li>Dining</li>
                              <li>DJ Facilities</li>
                              <li>Personal Chef</li>
                              <li>Guest Parking</li>
                              <li>Seating Amenities</li>
                              <li>Parking</li>
                            </ul>
                          </div>
                          <div class="details-list">
                            <h5 class="title">Photography Style</h5>
                            <ul class="list-check primary clearfix list-2">
                              <li>Wedding Hall</li>
                              <li>Dining</li>
                              <li>Liability Insurance</li>
                              <li>In House Catering</li>
                              <li>Dining</li>
                              <li>DJ Facilities</li>
                              <li>Personal Chef</li>
                              <li>Guest Parking</li>
                              <li>Seating Amenities</li>
                              <li>Parking</li>
                            </ul>
                          </div>
                        </div>
                        <!-- Details -->

                        <!-- Reviews -->
                        <h5 class="details-title">
                          Reviews (8)
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#writeReviews"
                            class="btn btn-sm float-right"
                          >
                            + Add a review
                          </button>
                        </h5>
                        <div class="no-review">
                          <img src="images/icon/no-review1.png" alt="" />
                          <h4 class="title">No Review Yet</h4>
                          <p>
                            Be the first one to tell everyone about the
                            experience you,ve had with this supplier
                          </p>
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#writeReviews"
                            class="btn green"
                          >
                            + Add a review
                          </button>
                        </div>
                        <div class="venues-reviews-box">
                          <div class="venues-reviews">
                            <div class="reviews-info">
                              <div class="reviews-user">
                                <h6 class="reviewer-name">Fran & Josh</h6>
                                <h6 class="wedding-date">
                                  Married in November 2018
                                </h6>
                              </div>
                              <div class="reviews-rating">
                                <ul class="rating">
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                </ul>
                                <h6 class="review-date">January 2019</h6>
                              </div>
                            </div>
                            <div class="reviews-content">
                              <div class="review-media">
                                <img src="images/review/thum3.jpg" alt="" />
                              </div>
                              <h5 class="title">The best photographer!!!</h5>
                              <p>
                                The best photographer any bride ( especially one
                                who does not like her photo being taken!) could
                                ask for! Can not thank you enough Chanon.
                              </p>
                            </div>
                          </div>
                          <div class="venues-reviews">
                            <div class="reviews-info">
                              <div class="reviews-user">
                                <h6 class="reviewer-name">Fran & Josh</h6>
                                <h6 class="wedding-date">
                                  Married in November 2018
                                </h6>
                              </div>
                              <div class="reviews-rating">
                                <ul class="rating">
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                </ul>
                                <h6 class="review-date">January 2019</h6>
                              </div>
                            </div>
                            <div class="reviews-content">
                              <div class="review-media">
                                <img src="images/review/thum1.jpg" alt="" />
                              </div>
                              <h5 class="title">The best photographer!!!</h5>
                              <p>
                                The best photographer any bride ( especially one
                                who does not like her photo being taken!) could
                                ask for! Can not thank you enough Chanon.
                              </p>
                            </div>
                          </div>
                          <div class="venues-reviews">
                            <div class="reviews-info">
                              <div class="reviews-user">
                                <h6 class="reviewer-name">Fran & Josh</h6>
                                <h6 class="wedding-date">
                                  Married in November 2018
                                </h6>
                              </div>
                              <div class="reviews-rating">
                                <ul class="rating">
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                  <li><i class="fa fa-star"></i></li>
                                </ul>
                                <h6 class="review-date">January 2019</h6>
                              </div>
                            </div>
                            <div class="reviews-content">
                              <h5 class="title">The best photographer!!!</h5>
                              <p>
                                The best photographer any bride ( especially one
                                who does not like her photo being taken!) could
                                ask for! Can not thank you enough Chanon.
                              </p>
                            </div>
                          </div>
                          <!-- Pagination -->
                          <div class="pagination-bx m-b30">
                            <ul class="pagination">
                              <li class="previous">
                                <a href="javascript:void(0);"
                                  ><i class="ti-arrow-left"></i
                                ></a>
                              </li>
                              <li class="active"><a href="#">1</a></li>
                              <li><a href="javascript:void(0);">2</a></li>
                              <li><a href="javascript:void(0);">3</a></li>
                              <li class="next">
                                <a href="javascript:void(0);"
                                  ><i class="ti-arrow-right"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <!-- Pagination END -->
                          <div class="card-bx yellow afnone bordered m-b30">
                            <div class="inner">
                              <span class="tag-btn pull-right"
                                >Our Autumn Open Evening</span
                              >
                              <h6 class="title">
                                Wedding Manager Couple Discount
                              </h6>
                              <p>
                                Always an enjoyable event! The Barn will be set
                                up for a wedding - come and enjoy wandering
                                around the Barn and our beautiful gardens with a
                                glass of fizz in hand! 6pm-9pm.
                              </p>
                            </div>
                          </div>
                          <div class="text-center m-b30">
                            <a
                              href="javascript:;"
                              data-toggle="modal"
                              data-target="#contactSupplier"
                              class="btn"
                            >
                              <i class="fa fa-envelope-o"></i>
                              <span>Book your place</span>
                            </a>
                          </div>
                        </div>
                        <!-- Reviews End -->
                        <!-- Location -->
                        <h5
                          class="details-title"
                          data-toggle="collapse"
                          data-target="#map"
                          aria-expanded="false"
                          aria-controls="map"
                        >
                          Location & Contact Details
                        </h5>
                        <div class="collapse" id="map">
                          <div class="card card-body m-b30">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219"
                              class="align-self-stretch"
                              style="border: 0; width: 100%; min-height: 350px"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                        <div class="location-details">
                          <ul class="info-bx">
                            <li>
                              <a href=""><i class="la la-laptop"></i>Website</a>
                            </li>
                            <li>
                              <a href=""><i class="la la-envelope"></i>Email</a>
                            </li>
                            <li>
                              <a href=""
                                ><i class="la la-phone"></i>01787374544</a
                              >
                            </li>
                          </ul>
                          <div class="row">
                            <div class="col-lg-6 m-b20">
                              <h5 class="title">Address</h5>
                              <p>
                                Smeetham Hall Lane, Sudbury, Essex, CO10 7EU,
                                England
                              </p>
                            </div>
                            <div class="col-lg-6 m-b20">
                              <h5 class="title">Travel Notes</h5>
                              <p>
                                Please go to the map on our website:
                                info@example.com
                              </p>
                            </div>
                            <div class="col-lg-6 m-b20">
                              <h5 class="title">Nearest Motorway & Junction</h5>
                              <p>M11/A12/A120</p>
                            </div>
                            <div class="col-lg-6 m-b20">
                              <h5 class="title">Nearest Train Station</h5>
                              <p>Sudbury</p>
                            </div>
                            <div class="col-lg-6 m-b20">
                              <h5 class="title">Nearest Town`</h5>
                              <p>Sudbury</p>
                            </div>
                            <div class="col-lg-6 m-b20">
                              <h5 class="title">Nearest Airport</h5>
                              <p>Stansted</p>
                            </div>
                          </div>
                          <div class="follow-supplier">
                            <h5 class="title m-b20">Follow This Supplier On</h5>
                            <ul class="list-inline">
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="btn outline-2 outline facebook circle"
                                  ><i class="fa fa-facebook"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="btn outline-2 outline google-plus circle"
                                  ><i class="fa fa-google-plus"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="btn outline-2 outline linkedin circle"
                                  ><i class="fa fa-linkedin"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="btn outline-2 outline instagram circle"
                                  ><i class="fa fa-instagram"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="text-center m-b30">
                            <a
                              href="javascript:;"
                              data-toggle="modal"
                              data-target="#contactSupplier"
                              class="btn"
                            >
                              <i class="fa fa-envelope-o"></i>
                              <span>Contact venue</span>
                            </a>
                          </div>
                        </div>
                        <h5 class="details-title">Press & Awards(5)</h5>
                        <div class="pressawards">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="press-bx">
                                <h6 class="title">
                                  <i class="fa fa-quote-left"></i> Press &
                                  Awards <span>(1)</span>
                                </h6>
                                <p>Don't Tell the Bride</p>
                                <a href="#"
                                  >Wedding Venue of the Year 2018 - Countryside,
                                  East of England</a
                                >
                                <a href="#"
                                  >Wedding Venue of the Year - Something
                                  Different - Essex Wedding Awards 2017/2018</a
                                >
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="press-bx">
                                <h6 class="title">
                                  <i class="fa fa-trophy"></i> Industry Awards
                                  <span>(4)</span>
                                </h6>
                                <p>Don't Tell the Bride</p>
                                <a href="#"
                                  >Wedding Venue of the Year 2018 - Countryside,
                                  East of England</a
                                >
                                <a href="#"
                                  >Wedding Venue of the Year - Something
                                  Different - Essex Wedding Awards 2017/2018</a
                                >
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="press-bx">
                                <h6 class="title">
                                  <i class="fa fa-quote-left"></i> Press &
                                  Awards <span>(1)</span>
                                </h6>
                                <p>Don't Tell the Bride</p>
                                <a href="#"
                                  >Wedding Venue of the Year 2018 - Countryside,
                                  East of England</a
                                >
                                <a href="#"
                                  >Wedding Venue of the Year - Something
                                  Different - Essex Wedding Awards 2017/2018</a
                                >
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="press-bx">
                                <h6 class="title">
                                  <i class="fa fa-trophy"></i> Industry Awards
                                  <span>(4)</span>
                                </h6>
                                <p>Don't Tell the Bride</p>
                                <a href="#"
                                  >Wedding Venue of the Year 2018 - Countryside,
                                  East of England</a
                                >
                                <a href="#"
                                  >Wedding Venue of the Year - Something
                                  Different - Essex Wedding Awards 2017/2018</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Location END -->
                        <div
                          class="accordion form-accordion details-accordion"
                          id="accordionExample"
                        >
                          <div class="card">
                            <div class="card-header" id="headingOne">
                              <a
                                class="collapsed"
                                href="javascript:;"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                              >
                                Photo (56)
                              </a>
                            </div>
                            <div
                              id="collapseOne"
                              class="collapse"
                              aria-labelledby="headingOne"
                              data-parent="#accordionExample"
                              style=""
                            >
                              <div class="card-body">
                                <div
                                  class="widget widget_gallery mb-0 gallery-grid-8 lightgallery"
                                >
                                  <ul>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic1.jpg"
                                        data-src="images/gallery/pic1.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic1.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic2.jpg"
                                        data-src="images/gallery/pic2.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic2.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic3.jpg"
                                        data-src="images/gallery/pic3.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic3.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic4.jpg"
                                        data-src="images/gallery/pic4.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic4.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic5.jpg"
                                        data-src="images/gallery/pic5.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic5.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic6.jpg"
                                        data-src="images/gallery/pic6.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic6.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic7.jpg"
                                        data-src="images/gallery/pic7.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic7.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic8.jpg"
                                        data-src="images/gallery/pic8.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic8.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic9.jpg"
                                        data-src="images/gallery/pic9.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic9.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic1.jpg"
                                        data-src="images/gallery/pic1.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic1.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic2.jpg"
                                        data-src="images/gallery/pic2.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic2.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic3.jpg"
                                        data-src="images/gallery/pic3.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic3.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic4.jpg"
                                        data-src="images/gallery/pic4.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic4.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic6.jpg"
                                        data-src="images/gallery/pic6.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic6.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic7.jpg"
                                        data-src="images/gallery/pic7.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic7.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                    <li class="img-effect2">
                                      <span
                                        data-exthumbimage="images/gallery/pic8.jpg"
                                        data-src="images/gallery/pic8.jpg"
                                        class="check-km"
                                        title="Title Come Here"
                                      >
                                        <a href="javascript:void(0);"
                                          ><img
                                            src="images/gallery/pic8.jpg"
                                            alt=""
                                        /></a>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card">
                            <div class="card-header" id="headingThree">
                              <a
                                class="collapsed"
                                href="javascript:;"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Videos (2)
                              </a>
                            </div>
                            <div
                              id="collapseThree"
                              class="collapse"
                              aria-labelledby="headingThree"
                              data-parent="#accordionExample"
                            >
                              <div class="card-body">
                                <div
                                  class="widget widget_gallery widget_video mb-0 gallery-grid-4"
                                >
                                  <ul>
                                    <li>
                                      <div class="video-frame">
                                        <img
                                          src="images/gallery/pic1.jpg"
                                          alt=""
                                        />
                                        <a
                                          href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                                          class="popup-youtube video"
                                          ><i class="fa fa-play"></i
                                        ></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="video-frame">
                                        <img
                                          src="images/gallery/pic2.jpg"
                                          alt=""
                                        />
                                        <a
                                          href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                                          class="popup-youtube video"
                                          ><i class="fa fa-play"></i
                                        ></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="video-frame">
                                        <img
                                          src="images/gallery/pic3.jpg"
                                          alt=""
                                        />
                                        <a
                                          href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                                          class="popup-youtube video"
                                          ><i class="fa fa-play"></i
                                        ></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="video-frame">
                                        <img
                                          src="images/gallery/pic4.jpg"
                                          alt=""
                                        />
                                        <a
                                          href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                                          class="popup-youtube video"
                                          ><i class="fa fa-play"></i
                                        ></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="video-frame">
                                        <img
                                          src="images/gallery/pic5.jpg"
                                          alt=""
                                        />
                                        <a
                                          href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                                          class="popup-youtube video"
                                          ><i class="fa fa-play"></i
                                        ></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="video-frame">
                                        <img
                                          src="images/gallery/pic6.jpg"
                                          alt=""
                                        />
                                        <a
                                          href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                                          class="popup-youtube video"
                                          ><i class="fa fa-play"></i
                                        ></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="video-frame">
                                        <img
                                          src="images/gallery/pic7.jpg"
                                          alt=""
                                        />
                                        <a
                                          href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                                          class="popup-youtube video"
                                          ><i class="fa fa-play"></i
                                        ></a>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="video-frame">
                                        <img
                                          src="images/gallery/pic8.jpg"
                                          alt=""
                                        />
                                        <a
                                          href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                                          class="popup-youtube video"
                                          ><i class="fa fa-play"></i
                                        ></a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Faq -->
                        <h5 class="details-title">
                          Preferred Supplier List(23)
                        </h5>
                        <div class="preferred-supplier">
                          <div
                            class="item4 owl-carousel owl-btn-center-lr owl-btn-1"
                          >
                            <div class="item">
                              <div class="listing-bx listing-sm">
                                <div class="listing-media">
                                  <img src="images/listing/pic5.jpg" alt="" />
                                </div>
                                <div class="listing-info">
                                  <h3 class="title">
                                    <a href="listing-details.html"
                                      >Wedding Venue Title Name</a
                                    >
                                  </h3>
                                  <p class="location">
                                    <i class="fa fa-map-marker"></i> Ahmedabad,
                                    Gujarat.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="listing-bx listing-sm">
                                <div class="listing-media">
                                  <img src="images/listing/pic6.jpg" alt="" />
                                </div>
                                <div class="listing-info">
                                  <h3 class="title">
                                    <a href="listing-details.html"
                                      >Wedding Venue Title Name</a
                                    >
                                  </h3>
                                  <p class="location">
                                    <i class="fa fa-map-marker"></i> Ahmedabad,
                                    Gujarat.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="listing-bx listing-sm">
                                <div class="listing-media">
                                  <img src="images/listing/pic7.jpg" alt="" />
                                </div>
                                <div class="listing-info">
                                  <h3 class="title">
                                    <a href="listing-details.html"
                                      >Wedding Venue Title Name</a
                                    >
                                  </h3>
                                  <p class="location">
                                    <i class="fa fa-map-marker"></i> Ahmedabad,
                                    Gujarat.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <h5 class="details-title">FAQ (10)</h5>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                Describe the best wedding that happened at your
                                venue?
                              </h5>
                              <p>
                                It would be impossible to single out one
                                wedding! We work incredibly hard to ensure that
                                every couple feels like the first couple to be
                                wed at the Priory and that it is special and
                                personal to them so they are all different in
                                their own way!
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                What is your No. 1 wedding manager tip for
                                couples?
                              </h5>
                              <p>
                                Get your venue and your date booked first. So
                                many other details will naturally fall into
                                place once this is decided that it will make it
                                a lot easier to make decisions.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                What’s your favourite personal touch you’ve seen
                                at a wedding?
                              </h5>
                              <p>
                                Our couples receive exclusive use of the entire
                                house and it is always lovely when they really
                                take over and make it their home for the day.
                                Family photos on the window sills and mantle
                                piece and guests wandering and relaxing at their
                                leisure throughout the day.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                Describe your venue in 5 adjectives.
                              </h5>
                              <p>
                                Breath taking, Rural, Exclusive, Comfortable,
                                Magical
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                Where’s the best photo spot at your venue?
                              </h5>
                              <p>
                                The Tower is such a photographers favourite!
                                Adjacent to the main house and the inner
                                courtyard, you can capture stunning photos dawn,
                                day, dusk and night!
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                Have you had any celebrity guest or wedding at
                                your venue?
                              </h5>
                              <p>
                                Many a time but sadly we have to keep the who
                                and the when to ourselves!
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                What’s your favourite canapé?
                              </h5>
                              <p>
                                Our office team debate this regularly but as I'm
                                the one on the keyboard it has to be.....
                                chocolate dipped strawberries dressed like mini
                                Brides and Grooms!
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                What’s your favourite midnight treat?
                              </h5>
                              <p>Bacon baps without a doubt.</p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                What is your venue's most unique feature?
                              </h5>
                              <p>
                                Probably the fact that we allow our couples to
                                actually use the house all day and overnight. We
                                don't actually permit a marquee so couples and
                                their guests can enjoy their very own Tudor
                                manor house for a day.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="faq-box">
                              <h5 class="title">
                                What part of your business are you most proud
                                of?
                              </h5>
                              <p>
                                We are all about the weddings. We haven't
                                deviated into events or conferences, for 26
                                years we have 100% focused on making ourselves
                                wedding experts.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="alert alert-info alert-iconbx">
                          <i class="fa fa-star-o alert-icon"></i>
                          <h5 class="title">Wedding Manager Benefits</h5>
                          <p>Insure your ring before you show off the bling!</p>
                        </div>
                        <!-- Faq End -->
                        <div class="dlab-divider bg-gray-dark">
                          <i class="icon-dot c-square"></i>
                        </div>
                        <!-- Up Next Slide -->
                        <h5 class="details-title">Up Next</h5>
                        <div
                          class="item4 owl-carousel owl-btn-center-lr owl-btn-1"
                        >
                          <div class="item">
                            <div class="listing-bx listing-sm">
                              <div class="listing-media">
                                <img src="images/listing/pic3.jpg" alt="" />
                                <div class="media-info">
                                  <ul class="featured-star">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                  </ul>
                                  <a class="like-btn" href="javascript:void(0)"
                                    ><i class="fa fa-heart-o"></i
                                  ></a>
                                </div>
                              </div>
                              <div class="listing-info">
                                <h3 class="title">
                                  <a href="listing-details.html"
                                    >Wedding Venue Title Name</a
                                  >
                                </h3>
                                <p class="location">
                                  <i class="fa fa-map-marker"></i> Ahmedabad,
                                  Gujarat.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="listing-bx listing-sm">
                              <div class="listing-media">
                                <img src="images/listing/pic3.jpg" alt="" />
                                <div class="media-info">
                                  <ul class="featured-star">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                  </ul>
                                  <a class="like-btn" href="javascript:void(0)"
                                    ><i class="fa fa-heart-o"></i
                                  ></a>
                                </div>
                              </div>
                              <div class="listing-info">
                                <h3 class="title">
                                  <a href="listing-details.html"
                                    >Wedding Venue Title Name</a
                                  >
                                </h3>
                                <p class="location">
                                  <i class="fa fa-map-marker"></i> Ahmedabad,
                                  Gujarat.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="listing-bx listing-sm">
                              <div class="listing-media">
                                <img src="images/listing/pic3.jpg" alt="" />
                                <div class="media-info">
                                  <ul class="featured-star">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                  </ul>
                                  <a class="like-btn" href="javascript:void(0)"
                                    ><i class="fa fa-heart-o"></i
                                  ></a>
                                </div>
                              </div>
                              <div class="listing-info">
                                <h3 class="title">
                                  <a href="listing-details.html"
                                    >Wedding Venue Title Name</a
                                  >
                                </h3>
                                <p class="location">
                                  <i class="fa fa-map-marker"></i> Ahmedabad,
                                  Gujarat.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="listing-bx listing-sm">
                              <div class="listing-media">
                                <img src="images/listing/pic3.jpg" alt="" />
                                <div class="media-info">
                                  <ul class="featured-star">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                  </ul>
                                  <a class="like-btn" href="javascript:void(0)"
                                    ><i class="fa fa-heart-o"></i
                                  ></a>
                                </div>
                              </div>
                              <div class="listing-info">
                                <h3 class="title">
                                  <a href="listing-details.html"
                                    >Wedding Venue Title Name</a
                                  >
                                </h3>
                                <p class="location">
                                  <i class="fa fa-map-marker"></i> Ahmedabad,
                                  Gujarat.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Up Next Slide End -->
                      </div>
                      <!-- Left part END -->
                      <!-- Side bar start -->
                      <!-- <div class="col-xl-4 col-lg-5 col-md-12">
                        <aside class="side-bar listing-side-bar">
                          <div class="venues-sidebar-info">
                            <div class="title-head">
                              <h5 class="title">
                                Send a message to Calderfields Golf and Country
                                Club
                              </h5>
                            </div>
                            <small class="small-bx"
                              >We will pass your details to the supplier so they
                              can get back to you with a proposal.</small
                            >
                            <ul class="vender-profile-list">
                              <li>
                                <a
                                  data-toggle="modal"
                                  data-target="#edit-details"
                                  class="btn edit"
                                  href="javascript:;"
                                  >Edit <i class="fa fa-pencil"></i
                                ></a>
                              </li>
                              <li><strong>Email:</strong> example@gmail.com</li>
                              <li><strong>Phone:</strong> +91 123 456 7890</li>
                              <li>
                                <strong>Names:</strong> Deepak Gaur &amp;
                                deepika gaur
                              </li>
                              <li>
                                <strong>Ideal date:</strong
                                >{{
                                  subeventDetails.fromDate &&
                                    formatDate(subeventDetails.fromDate)
                                }}
                              </li>
                              <li>
                                <strong>Estimated guests:</strong>
                                {{ subeventDetails.estimatedGuests }}
                              </li>
                            </ul>
                            <div class="text-message">
                              <form>
                                <textarea class="form-control">
Hi,
											We're interested in your services! Please could you share your availability around our date, plus any additional information?
											Thank you!
										</textarea
                                >
                              </form>
                              <a href="#" class="btn btn-block gradient green"
                                >Request brochure</a
                              >
                            </div>
                          </div>
                        </aside>
                        <aside class="side-bar listing-side-bar sticky-top">
                          <ul class="vender-details-form">
                            <li class="btn-group-toggle" data-toggle="buttons">
                              <label class="btn booked-btn">
                                <i class="icon1 fa fa-thumbs-up"></i>
                                <i class="icon2 fa fa-thumbs-o-up"></i>
                                <input
                                  type="checkbox"
                                  name="options"
                                  id="option1"
                                  checked=""
                                />
                                <span class="show1">Mark as booked</span>
                                <span class="show2">Booked</span>
                              </label>
                            </li>
                            <li class="btn-group-toggle" data-toggle="buttons">
                              <label class="btn shortlist-btn">
                                <i class="icon1 fa fa-heart"></i>
                                <i class="icon2 fa fa-heart-o"></i>
                                <input
                                  type="checkbox"
                                  name="options"
                                  id="option2"
                                />
                                <span class="show1">Shortlisted</span>
                                <span class="show2">Add to shortlist</span>
                              </label>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                data-toggle="modal"
                                data-target="#writeReviews"
                                class="btn reviews-btn"
                              >
                                <i class="fa fa-star-o"></i>
                                <span>Write a Reviews</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                data-toggle="modal"
                                data-target="#exampleModal2"
                                class="btn quote-btn"
                              >
                                <i class="fa fa-eur"></i>
                                <span>Request a quote</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                data-toggle="modal"
                                data-target="#contactSupplier"
                                class="btn"
                              >
                                <i class="fa fa-envelope-o"></i>
                                <span>Contact supplier</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                data-toggle="modal"
                                data-target="#exampleModal2"
                                class="btn showround-btn"
                              >
                                <i class="fa fa-gift"></i>
                                <span>Request showround</span>
                              </a>
                            </li>
                          </ul>
                        </aside>
                      </div> -->
                      <!-- Side bar END -->
                    </div>
                  </div>
                </div>
                <!-- <div class="enquiries-details">
                  <div class="enquiries-box m-b30 ">
                    <h5 class="title">Details</h5>
                    <ul class="enquiries-details-list">
                      <li>
                        {{ subeventDetails.title }}
                      </li>
                      <li>
                        Budget<span
                          >&#36;{{
                            subeventDetails.budget &&
                              addCommas(String(subeventDetails.budget))
                          }}</span
                        >
                      </li>
                      <li>
                        Estimated Guests:<span>{{
                          subeventDetails.estimatedGuests &&
                            addCommas(String(subeventDetails.estimatedGuests))
                        }}</span>
                      </li>
                      <li>
                        Date:<span>{{
                          subeventDetails.fromDate &&
                            formatDate(subeventDetails.fromDate)
                        }}</span>
                      </li>
                      <li>
                        Location:<span>{{
                          subeventDetails.location &&
                            subeventDetails.location.address +
                              ", " +
                              subeventDetails.location.city +
                              ", " +
                              subeventDetails.location.state +
                              ", " +
                              subeventDetails.location.country +
                              ", " +
                              subeventDetails.location.postalCode
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div> -->
              </div>
              <div class="col-lg-3 col-md-4 m-b30">
                <div class="pages-bx">
                  <ul class="side-page-bx">
                    <li class="active"><a>Details</a></li>

                    <li><a @click="editSubevent">Edit Event</a></li>

                    <li>
                      <a @click="openGuestListPage">Guest List</a>
                    </li>
                    <li><a @click="openBudgetPage">Budget</a></li>
                    <li><a @click="addSubevent">Add Event</a></li>
                    <!-- <li><a href="terms.html">Terms</a></li>
                    <li>
                      <a href="wedding-planning-tools.html"
                        >Wedding Manager Tools</a
                      >
                    </li>
                    <li>
                      <a href="wedding-gift-lists.html">Wedding Gift Lists</a>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Manager Tools End -->
        <!-- subevent list area -->
        <!-- <div class="section-full content-inner bg-gray">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="planner-box m-b30">
                  <div class="content-box">
                    <div class="planner-budget-bx">
                      <div class="planner-category">
                        <h3 class="category-title">Choose Sub Events</h3>
                      </div>
                      <div class="row">
                        <div class="col-md-6"></div>
                      </div>
                      <ul id="budget-panel">
                        <li v-if="noData">
                          <div class="budget-bx"><h4>No Data</h4></div>
                        </li>
                        <li
                          v-for="subevent in subeventData"
                          v-bind:key="subevent.eventId"
                          :id="'subevent_panel' + subevent.eventId"
                        >
                          <div class="budget-bx">
                            <div class="event">
                              <h4 class="content">
                                {{
                                  subevent.fromDate &&
                                    formatDate(subevent.fromDate)
                                }}
                              </h4>
                            </div>
                            <div class="event">
                              <h4 class="content">{{ subevent.title }}</h4>
                            </div>
                            <div class="event">
                              <h4 class="content">
                                {{
                                  subevent.budget &&
                                    "Budget- " + addCommas(subevent.budget)
                                }}
                              </h4>
                            </div>

                            <div
                              class="edit-icon row"
                              style="align-items: center;"
                            >
                              <div
                                class="col-3"
                                style="padding-left: 0; margin-left: -10px;"
                              >
                                <a class="btn-link">
                                  <button
                                    @click="editSubevent(subevent)"
                                    class="btn gray toggle_button"
                                  >
                                    Edit
                                  </button>
                                  <i
                                    class="fa fa-pencil toggle_icon"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                              <div class="col-2">
                                
                                <i class="fa fa-trash" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>

                          <div class="budget-bx">
                            <div class="event">
                              <h4 class="content">
                                {{
                                  subevent.estimatedGuests &&
                                    "Guests - " + subevent.estimatedGuests
                                }}
                              </h4>
                            </div>
                            <div class="event">
                              <h4 class="content">
                                {{
                                  subevent.shortDescription &&
                                    "Short Description - " +
                                      subevent.shortDescription
                                }}
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="budget-bx">
                            <a
                              href="javascript:void(0);"
                              class="btn add-budget-list-item gradient"
                              >+ Add new Subevent</a
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <!-- Footer -->
      <Footer />
      <!-- Footer End -->
    </div>
  </div>
</template>

<script>
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";
import moment from "moment";
window.$ = require("jquery");
window.JQuery = require("jquery");

import axios from "axios";
import { format } from "path";
export default {
  beforeRouteEnter(to, from, next) {
    if (to.query.param1 === 'mainEventId') {
      delete to.query.param1
      next({ ...to, replace: true })
    } else {
      next()
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.param1 === 'mainEventId') {
      delete to.query.param1
      next({ ...to, replace: true })
    } else {
      next()
    }
  },
  name: "SubEventList",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      selected: undefined,
      mainEventId: 415,
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
      subeventData: {},
      subeventDetails: {},
      guestCount: {},
    };
  },
  created() {
    this.port = location.port;
    this.mainEventId = this.$route.query.mainEventId
      ? this.$route.query.mainEventId
      : 415;  // TODO
     this.selected = this.$route.query.subEventId
      ? this.$route.query.subEventId
      : null;
    console.log(this.selected);
    this.getData(this.mainEventId);
    this.formatDate();
    this.getGuestCount(this.mainEventId);
  },

  methods: {
    getGuestCount() {
      axios
        .get(
          "http://localhost:" +
            this.port +
            "/guests/subevents/count/" +
            this.selected +
            "/SUBEVENT"
        )
        .then((res) => {
          // console.log(this.preFilledEventData);
          this.guestCount = res.data;
          console.log(this.guestCount);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    openDetails(subEventId) {
      this.selected = subEventId;
      this.getGuestCount();
      this.isActiveClass = true;
      axios
        .get("http://localhost:" + this.port + "/events/sub/" + subEventId)
        .then((res) => {
          // console.log(this.preFilledEventData);
          this.subeventDetails = res.data;
          console.log(this.subeventDetails);
        });
    },
    getData(mainEventId) {
      axios
        .get(
          "http://localhost:" + this.port + "/events/" + mainEventId + "/sub"
        )
        .then((res) => {
          this.subeventData = res.data;
          console.log(this.subeventData);
          if (this.selected) {
            this.openDetails(this.selected);
          } else {
            this.openDetails(this.subeventData[0].eventId);
          }
        })
        .catch(() => {
          this.noData = true;
          console.log(this.noData);
        });
    },
    openBudgetPage() {
      this.$router.push({
        name: "/planner_budget",

        query: {
          mainEventId: this.mainEventId,
        },
      });
    },
    editSubevent() {
      this.$router.push({
        name: "/planner_add_subevent",

        query: {
          mainEventId: this.mainEventId,
          subEventId: this.selected,
        },
      });
    },
    addSubevent() {
      this.$router.push({
        name: "/planner_add_subevent",

        query: {
          mainEventId: this.mainEventId,
        },
      });
    },
    openGuestListPage() {
      this.$router.push({
        name: "/planner_guest_list",

        query: {
          mainEventId: this.mainEventId,
          eventId: this.selected,
        },
      });
    },
    formatDate(date) {
      // let date = new Date("2022-12-02 15:48");
      // console.log(
      //   moment(date, "YYYY-MM-DD HH:mm").format("ddd, DD MMM YY h:mm A")
      // );
      return moment(date, "YYYY-MM-DD HH:mm").format("ddd, DD-MMM-YY h:mm A");
    },
    addCommas(nStr) {
      nStr += "";
      let x = nStr.split(".");
      let x1 = x[0];
      let x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
      }
      return x1 + x2;
    },
  },
};
</script>

<style scoped lang="scss">
.category-title {
  font-size: 25px !important;
}
// .title {
//   // text-align: center;
// }
.content {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
select.add_select {
  padding: 0 !important;
}
select {
  margin-bottom: 10px;
  padding: 0 0 0 5px !important;
}
option {
  width: 100%;
}
.edit-icon a {
  margin: 0 !important;
}
@media only screen and (max-width: 1000px) {
  div.event {
    min-width: 25%;
  }
  div.budget {
    min-width: 20%;
  }
  div.total {
    min-width: 20%;
  }
  div.used {
    min-width: 15%;
  }
  div.edit-icon {
    min-width: 20%;
  }
  .toggle_button {
    display: none;
  }
  .toggle_icon {
    display: block;
  }
}
@media only screen and (max-width: 770px) {
  div.event {
    min-width: 35%;
  }
  div.budget {
    min-width: 20%;
  }
  div.total {
    min-width: 20%;
  }
  div.used {
    min-width: 10%;
  }
  div.edit-icon {
    min-width: 15%;
  }
}
@media only screen and (min-width: 1000px) {
  div.event {
    min-width: 25%;
  }
  div.budget {
    min-width: 10%;
  }
  div.total {
    min-width: 10%;
  }
  div.used {
    min-width: 10%;
  }
  div.edit-icon {
    min-width: 45%;
  }
  .toggle_button {
    display: block;
  }
  .toggle_icon {
    display: none;
  }
}
</style>
