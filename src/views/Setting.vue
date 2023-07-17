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
}
</script>