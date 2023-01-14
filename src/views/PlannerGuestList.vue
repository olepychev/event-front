<template>
  <div>
    <!--<div id="loading-area"></div>-->
    <div class="page-wraper">
      <!-- header -->
      <Header />
      <!-- header END -->
      <!-- Content -->
      <div class="page-content bg-white">
        <!-- Section Banner -->
        <div
          class="dlab-bnr-inr text-center dlab-bnr-inr-sm overlay-black-dark"
          style="background-image:url(images/main-slider/slide1.jpg); background-size: cover;"
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
                    <select class="form-control" style="height: 100%;">
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
                      class="form-control"
                      id="search"
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
                v-for="subevent in subeventsHeaderData"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
                @click="getData(subevent.eventId)"
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
            </ul>
          </div>
        </div>
        <!-- Manager Tools End -->
        <div class="wedding-filter-search planner-filter-advice">
          <div class="container">
            <div class="row">
              <div class="col-lg-10">
                <h2 class="title">Our wedding guest list</h2>
                <div class="guests-tag">
                  <span
                    >All guests:
                    {{ guestCount.inviteCountDto.expectedAttendees }}</span
                  >
                  <a href="#"
                    ><i class="fa fa-check"></i>Total invites Created:
                    {{ guestCount.inviteCountDto.total }}</a
                  >
                  <a href="#"
                    ><i class="fa fa-moon-o"></i>Invites Sent Sucessfully:
                    {{ guestCount.inviteCountDto.invited }}
                  </a>
                  <a href="#"
                    ><i class="fa fa-question"></i>Pending Invites:
                    {{ guestCount.inviteCountDto.pending }}
                  </a>
                  <a href="#"
                    ><i class="fa fa-question"></i>Expected guests Coming:
                    {{ guestCount.inviteCountDto.expectedAttendees }}
                  </a>
                  <a href="#"
                    ><i class="fa fa-question"></i>Actual Guests Coming:
                    {{ guestCount.inviteCountDto.invitedAttendees }}
                  </a>
                </div>
                <div class="guests-tag">
                  <span>RSVP total:</span>
                  <a href="#"><i class="fa fa-check"></i>Yes : 0</a>
                  <a href="#"><i class="fa fa-times"></i>No: 0 </a>
                  <a href="#"><i class="fa fa-clock-o"></i>No reply : 2 </a>
                </div>
              </div>
              <div class="col-lg-7"></div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="tab-content guest-filter-bx" id="myTabContent">
                  <div
                    class="tab-pane fade"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label class="label-title">Guest name*</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Guest name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="label-title">Invitation type</label>
                          <select>
                            <option>Filter invites by...</option>
                            <option>Filter invites by...</option>
                            <option>Filter invites by...</option>
                            <option>Filter invites by...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="label-title">RSVPs</label>
                          <select>
                            <option>Filter invites by...</option>
                            <option>Filter invites by...</option>
                            <option>Filter invites by...</option>
                            <option>Filter invites by...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="label-title">Addresses</label>
                          <select>
                            <option>Filter invites by...</option>
                            <option>Filter invites by...</option>
                            <option>Filter invites by...</option>
                            <option>Filter invites by...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- contact area -->
        <div class="section-full content-inner bg-gray">
          <div class="container">
            <div class="row column-reverse">
              <div class="col-lg-9 col-md-8 col-sm-12 inner-content-bx">
                <div
                  class="col-md-3 col-lg-3"
                  style="padding-left: 0;margin-bottom: 10px;"
                >
                  <select
                    v-model="eventId"
                    class="form-control filter_select"
                    style="height: auto; width: auto;"
                    @change="eventChanged($event)"
                  >
                    <option value="0">Select Event</option>
                    <option
                      v-for="option in eventNames"
                      v-bind:key="option.eventId"
                      v-bind:value="option.eventId"
                    >
                      {{ option.title }}
                    </option>
                  </select>
                </div>
                <div class="planner-box m-b30">
                  <div class="content-box">
                    <div class="planner-guest-bx">
                      <table class="table">
                        <thead>
                          <tr>
                            <th class="title-firstName">First Name</th>
                            <th class="title-lastName">Last Name</th>
                            <th class="title-city">City</th>
                            <th class="title-estimated">Estimated Guests</th>
                            <th class="title-confirmed">Confirmed Guests</th>
                            <th class="title-edit">*</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="table-hr"></tr>
                          <tr
                            v-for="invite in guestList"
                            v-bind:key="invite.appUser.id"
                          >
                            <td class="guest-firstName">
                              {{ invite.appUser.firstName }}
                            </td>
                            <td class="guest-lastName">
                              {{ invite.appUser.lastName }}
                            </td>
                            <td class="guest-city">
                              {{ invite.appUser.address.city }}
                            </td>
                            <td class="guest-estimated">
                              {{ invite.invites[0].estimatedGuests }}
                            </td>
                            <td class="guest-confirmed">
                              {{ invite.invites[0].actualGuests }}
                            </td>
                            <td class="guest-edit">
                              <button
                                class="btn btn-success"
                                @click="goToGuest(invite.appUser.username)"
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                          <tr class="table-hr"></tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td class="guest-edit" colspan="6">
                              <button
                                class="btn gradient"
                                @click="goToGuest('')"
                              >
                                <i class="fa fa-plus m-r10"></i>Add New Guest
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 m-b30">
                <div class="pages-bx">
                  <ul class="side-page-bx">
                    <li><a href="#" @click="openDetailsPage">Details</a></li>
                    <li>
                      <a href="#" @click="openEditSubeventPage">Edit Event</a>
                    </li>
                    <li class="active">
                      <a href="#">Guest List</a>
                    </li>
                    <li><a href="#" @click="openBudgetPage">Budget</a></li>
                    <li>
                      <a href="#" @click="openAddSubeventPage">Add Event</a>
                    </li>
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
        <!-- contact area end -->
      </div>
      <!-- Content END-->
      <!-- Footer -->
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
export default {
  name: "PlannerGuestList",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      mainEventId: null,
      subEventId: null,
      selected: null,
      eventId: null,
      subeventsHeaderData: {},
      guestList: [],
      port: null,
      sampleData: {},
      eventNames: [],
      guestCount: {},
    };
  },
  created() {
    this.port = location.port;
    this.mainEventId = this.$route.query.mainEventId
      ? this.$route.query.mainEventId
      : 0;
    this.eventId = this.$route.query.eventId ? this.$route.query.eventId : 0;
    this.selected = this.eventId;

    this.getData(this.eventId);
    this.getEventNames(this.mainEventId);
    this.getGuestCount();
    if (this.mainEventId) {
      this.getSubeventsHeaderData(this.mainEventId);
    }
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
    openDetailsPage() {
      this.$router.push({
        name: "/subevent_list",

        query: {
          mainEventId: this.mainEventId,
          subEventId: this.selected,
        },
      });
    },
    openEditSubeventPage() {
      this.$router.push({
        name: "/planner_add_subevent",

        query: {
          mainEventId: this.mainEventId,
          subEventId: this.selected,
        },
      });
    },
    openAddSubeventPage() {
      this.$router.push({
        name: "/planner_add_subevent",

        query: {
          mainEventId: this.mainEventId,
        },
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
    getSubeventsHeaderData(mainEventId) {
      axios
        .get(
          "http://localhost:" + this.port + "/events/" + mainEventId + "/sub"
        )
        .then((res) => {
          this.subeventsHeaderData = res.data;
          console.log(this.subeventsHeaderData);
        })
        .catch(() => {
          this.noData = true;
          console.log(this.noData);
        });
    },
    getData(eventId) {
      this.selected = eventId;
      this.guestList = [];

      axios
        .get(
          "http://localhost:" +
            this.port +
            "/expenses/guestworkaround/SUB/" +
            eventId
        )
        .then((res) => {
          for (let item of res.data) {
            if (item.appUser.activeStatus === "ACTIVE") {
              this.guestList.push(item);
            }
          }
          console.log(this.guestList);
        });
      this.getGuestCount();
    },
    getEventNames(mainEventId) {
      axios
        .get(
          "http://localhost:" +
            this.port +
            "/events/" +
            mainEventId +
            "/filters"
        )
        .then((res) => {
          for (let item of res.data) {
            this.eventNames.push({ eventId: item.eventId, title: item.title });
          }
          console.log(this.eventNames);
        });
    },
    scroll2top() {
      window.$("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    },
    goToGuest(username) {
      if (username === "") {
        this.$router.replace({
          path: "planner_guest",
          query: {
            mainEventId: this.mainEventId,
            eventId: this.selected,
            type: "new",
          },
        });
      } else {
        this.$router.replace({
          path: "planner_guest",
          query: {
            mainEventId: this.mainEventId,
            eventId: this.selected,
            type: "edit",
            username: username,
          },
        });
      }
    },
    eventChanged(ev) {
      console.log(ev.target.value);
      this.getData(ev.target.value);
    },
  },
};
</script>

<style scoped></style>
