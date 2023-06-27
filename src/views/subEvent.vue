<template>
  <div>
    <div class="page-wraper">
      <!-- header -->
      <Header />
      <!-- header END -->
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
                    <select class="form-control">
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
                @click="getSubEventData(subevent.eventId)"
              >
                <div
                  :class="
                    selected === subevent.eventId
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
        <!-- contact area -->
        <div class="section-full content-inner bg-gray">
          <div class="container">
            <div class="row column-reverse">
              <div class="col-lg-9 col-md-8 col-sm-12 inner-content-bx">
                <form class="vue-form" @submit.prevent="onSubmit">
                  <fieldset>
                    <div class="row col-md-12">
                      <h2>Add/Edit SubEvent</h2>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label class="label" for="title"
                          >Event Title(Max 150 characters)*</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="title"
                          v-model="eventData.title"
                          @input="TitleChange"
                          required
                        />
                      </div>
                    </div>

                    <div class="row mb-4">
                      <div class="col-md-12">
                        <span
                          class="block text-gray-600 text-sm text-left font-bold mb-2"
                          >Event time</span
                        >
                      </div>
                      <div class="col-md-12">
                        <v-date-picker
                          v-model="eventData.Time"
                          mode="dateTime"
                          :masks="TimeFormat"
                          is-range
                        >
                          <template
                            v-slot="{ inputValue, inputEvents, isDragging }"
                          >
                            <div
                              class="flex flex-col sm:flex-row justify-start items-center"
                            >
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
                                  <path
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  ></path>
                                </svg>
                                <input
                                  ref="startInput"
                                  class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                                  :class="
                                    isDragging
                                      ? 'text-gray-600'
                                      : 'text-gray-900'
                                  "
                                  :value="inputValue.start"
                                  v-on="inputEvents.start"
                                />
                              </div>
                              <span class="flex-shrink-0 m-2">
                                <svg
                                  class="w-4 h-4 stroke-current text-gray-600"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  />
                                </svg>
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
                                  <path
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  ></path>
                                </svg>
                                <input
                                  class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                                  :class="
                                    isDragging
                                      ? 'text-gray-600'
                                      : 'text-gray-900'
                                  "
                                  :value="inputValue.end"
                                  v-on="inputEvents.end"
                                />
                              </div>
                            </div>
                          </template>
                        </v-date-picker>
                      </div>
                    </div>
                    <div v-if="!subEventId" class="row">
                      <div class="col-md-12">
                        <label class="label" for="subEventType"
                          >Sub Event Type</label
                        >
                        <select id="subEventType" v-model="eventData.subType">
                          <option>OTHER</option>
                        </select>
                      </div>
                    </div>

                    <div class="row"></div>
                    <div class="row">
                      <div class="col-md-6">
                        <label class="label" for="budget"
                          >Estimated Budget</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          :class="{'is-invalid': parseInt(eventData.budget.replaceAll(' ', '').replaceAll(',', '')) > 1000000000}"
                          id="budget"
                          v-model="eventData.budget"
                          @keydown="EstimatedBudgetKeyDown"
                          min="0"
                          required
                        />

                        <div v-if="parseInt(eventData.budget.replaceAll(' ', '').replaceAll(',', '')) > 1000000000" class="mytooltip">
                          The maximum buget is 1 ,000 ,000 ,000
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label class="label" for="estimatedGuests"
                          >Estimated Guests</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          :class="{'is-invalid': parseInt(eventData.estimatedGuests.replaceAll(' ', '').replaceAll(',', '')) > 100000}"
                          id="estimatedGuests"
                          v-model="eventData.estimatedGuests"
                          @keydown="GuestsKeyDown"
                          min="0"
                          required
                        />

                        <div v-if="parseInt(eventData.estimatedGuests.replaceAll(' ', '').replaceAll(',', '')) > 100000" class="mytooltip">
                          The maximum number of guests is 100 ,000 
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label class="label" for="description"
                          >Description</label
                        >
                        <textarea
                          type="text"
                          class="form-control"
                          id="description"
                          style="height: 120px;"
                          v-model="eventData.description"
                          min="0"
                          @keydown="Descriptionchange"
                          required
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <vue-dropzone
                          id="drop1"
                          :options="dropOptions"
                        ></vue-dropzone>
                      </div>
                    </div>
                    <div class="row col-md-12">
                      <h3>Venue Address</h3>
                    </div>

                    <div class="row col-md-12">
                      <google-map
                        ref="update"
                        style="width: 100%"
                        @added-address="updateAddress"
                        :isMap="true"
                        @input-address="onAddressChange"
                        :defaultAddress="{'lat': parseFloat(this.subeventDetails.location?.latitude), 'lng': parseFloat(this.subeventDetails.location?.longitude)}"
                        :isSearchType="true"
                        :key="mapKey"
                      />
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label class="label" for="address">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          id="address"
                          @input="(e) => isInValidAddress(e.target.value)"
                          :class="{'is-invalid': isInvalidAdd}"
                          v-model="eventData.address.address"
                          required
                        />

                        <div v-if="isInvalidAdd" class="mytooltip">
                          The address must be valid
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label class="label" for="address"
                          >Unit No./ Name</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="eventData.address.address2"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">
                        <label class="label" for="city">City</label>
                        <input
                          type="text"
                          class="form-control"
                          id="city"
                          v-model="eventData.address.city"
                        />
                      </div>
                      <div class="col-md-3">
                        <label class="label" for="state">State</label>
                        <input
                          type="text"
                          class="form-control"
                          id="state"
                          v-model="eventData.address.state"
                        />
                      </div>
                      <div class="col-md-3">
                        <label class="label" for="country">Country</label>
                        <input
                          type="text"
                          class="form-control"
                          id="country"
                          v-model="eventData.address.country"
                        />
                      </div>
                      <div class="col-md-3">
                        <label class="label" for="postalCode"
                          >Postal Code</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="postalCode"
                          v-model="eventData.address.postalCode"
                        />
                      </div>
                    </div>
                    <button class="btn btn-success">Save</button>
                  </fieldset>
                </form>
              </div>
              <div class="col-lg-3 col-md-4 m-b30">
                <div class="pages-bx">
                  <ul class="side-page-bx">
                    <li><a href="#" @click="openDetailsPage">Details</a></li>
                    <li :class="subEventId ? 'active' : ''">
                      <a href="#">Edit Event</a>
                    </li>
                    <li>
                      <a href="#" @click="openGuestListPage">Guest List</a>
                    </li>
                    <li><a href="#" @click="openBudgetPage">Budget</a></li>
                    <li><a @click="openToDoPage">ToDo</a></li>
                    <li :class="!subEventId ? 'active' : ''">
                      <a href="#">Add Event</a>
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
        <div class="container"></div>

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
import vueDropzone from "vue2-dropzone";
import GoogleMap from "@/components/GoogleMap";
import moment from "moment";
import Vue from "vue";
import VCalendar from "v-calendar";
import { setTransitionHooks } from "@vue/runtime-core";


Vue.use(VCalendar);

window.toastr = require("toastr");
export default {
  name: "subEvent",

  components: {
    Header,
    Footer,
    vueDropzone,
    GoogleMap,
  },
  data() {
    return {
      selected: undefined,
      DateInput: {
        start: new Date(),
        end: new Date(),
      },
      mainEventId: 0,
      subEventId: 0,
      subeventDetails: {},
      preFilledEventData: [],
      eventData: {
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
          address2: "",
          city: "",
          state: "",
          country: "",
          postalCode: "",
          latitude: "",
          longitude: "",
        },
      },
      dropOptions: {
        url: "https://httpbin.org/post",
      },
      subEvents: [
        { id: "HINDUWED", value: "HINDUWED" },
        { id: "CHRISTWED", value: "CHRISTWED" },
        { id: "MUSLIMWED", value: "MUSLIMWED" },
      ],
      port: null,
      TimeFormat: {
        input: "YYYY-MM-DD hh:mm A",
      },
      noData: false,
      subeventsHeaderData: {},
      subEventTypes: [],
      eventType: "",
      isInvalidAdd: false,
      mapKey: 0,
    };
  },

  created() {
    this.port = location.port;

    // this.mainEventId = this.$route.query.mainEventId
    //   ? this.$route.query.mainEventId
    //   : 0;

    // if(this.$route.query.mainEventId == undefined || this.$route.query.mainEventId == null) {
    //   this.mainEventId = this.$route.params.mainEventId
    //   this.selected = this.$route.params.subEventId
    // }
    // else {
      this.mainEventId = this.$route.query.mainEventId;
      this.selected = this.$route.query.subEventId;
    // }
    
    // this.mainEventId = this.$route.params.mainEventId
    //   ? this.$route.params.mainEventId
    //   : 0;
    // this.subEventId = this.$route.params.subEventId
    //   ? this.$route.params.subEventId
    //   : null;
    // this.selected = this.subEventId;

    if (this.mainEventId) {
      this.getSubeventsHeaderData(this.mainEventId);
    }
    if (this.subEventId) {
      this.getSubEventData(this.subEventId);
    }
  },

  methods: {
    onAddressChange(current) {
      // console.log(current)
    },

    getSubeventsHeaderData(mainEventId) {
      axios
        .get(
          "http://localhost:" + this.port + "/events/" + mainEventId + "/sub"
        )
        .then((res) => {
          this.subeventsHeaderData = res.data;
          this.openDetails(this.selected);
        })
        .catch(() => {
          this.noData = true;
        });
    },

    openDetails(subEventId) {
      this.selected = subEventId;
      axios
        .get("http://localhost:" + this.port + "/events/sub/" + subEventId)
        .then((res) => {
          // console.log(this.preFilledEventData);
          this.subeventDetails = res.data;
          this.eventData.address = this.subeventDetails.location;
          this.mapKey++;
      });
    },
    
    async  isInValidAddress(placeName) {
      if(window.google == undefined) return false;
      const geocoder = new window.google.maps.Geocoder();

      let isAddress = false;
      const results = await geocoder.geocode({ address: placeName }).then(res => {
        isAddress = false;
      }).catch(err => {
        isAddress = true;
      });
      this.isInvalidAdd = isAddress;
    },

    updateAddress(currentPlace) {
      this.eventData.address.address = currentPlace.name;
      this.isInValidAddress(currentPlace.name);
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
    getSubEventData(subEventId) {
      this.selected = subEventId;
      axios
        .get("http://localhost:" + this.port + "/events/sub/" + subEventId)
        .then((res) => {
          // console.log(this.preFilledEventData);
          this.preFilledEventData = res.data;
          console.log(this.preFilledEventData.mainEventId == this.mainEventId);
          if (this.preFilledEventData.mainEventId == this.mainEventId) {
            this.eventData.title = this.preFilledEventData.title;
            this.eventData.budget = this.addCommas(
              this.preFilledEventData.budget
            );
            this.eventData.estimatedGuests = this.addCommas(
              this.preFilledEventData.estimatedGuests
            );
            this.eventData.description =
              this.preFilledEventData.shortDescription;
            this.startDateInput = this.preFilledEventData.fromDate;
            let time = {
              start: new Date(this.preFilledEventData.fromDate),
              end: new Date(this.preFilledEventData.toDate),
            };
            this.eventData.Time = time;
            console.log(this.preFilledEventData);
            this.$refs.update.updateMarker(
              Number(this.preFilledEventData.location.latitude),
              Number(this.preFilledEventData.location.longitude)
            );
            let address = {
              address: this.preFilledEventData.location.address,
              address2: this.preFilledEventData.location.address2,
              city: this.preFilledEventData.location.city,
              state: this.preFilledEventData.location.state,
              country: this.preFilledEventData.location.country,
              postalCode: this.preFilledEventData.location.postalCode,
              latitude: this.preFilledEventData.location.latitude,
              longitude: this.preFilledEventData.location.longitude,
            };

            this.eventData.address = address;

            console.log(this.mainEventId);
          }
        });
    },

    isInValidGuestsBuget() {
      return parseInt(this.eventData.budget.replaceAll(' ', '').replaceAll(',', '')) > 1000000000 || parseInt(this.eventData.estimatedGuests.replaceAll(' ', '').replaceAll(',', '')) > 100000 
    },

    onSubmit() {

    if(this.isInValidGuestsBuget() == true) {
      $('.is-invalid:not(#address)').focus();
      return;
    };
    if(this.isInvalidAdd) {
      $('#address').focus();
      return;
    }

    const startFormattedTime = this.formattedDateTime(
      this.eventData.Time.start
    );
    const endFormattedTime = this.formattedDateTime(
      this.eventData.Time.end
    );
    let locationData = {
      address: this.eventData.address.address,
      // address2: this.eventData.address.address2,
      city: this.eventData.address.city,
      state: this.eventData.address.state,
      country: this.eventData.address.country,
      postalCode: this.eventData.address.postalCode,
      longitude: this.eventData.address.longitude,
      latitude: this.eventData.address.latitude,
      locationId: this.preFilledEventData.location
        ? this.preFilledEventData.location.locationId
        : 0,
    };
    let requestData = {
      mainEventId: Number(this.mainEventId),
      eventDetailType: this.preFilledEventData.eventDetailType
        ? this.preFilledEventData.eventDetailType
        : this.eventData.subType,
      title: this.eventData.title,
      eventOrder: this.preFilledEventData.eventOrder
        ? this.preFilledEventData.eventOrder
        : 1,
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
    if (this.subEventId) {
      axios
        .put(
          "http://localhost:" + this.port + "/events/sub/" + this.selected,
          requestData
        )
        .then((res) => {
          console.log(res);
          if (res.statusText === "OK") {
            window.toastr.success("Event Successfully Edited");
          }
          else {
            window.toastr.error("Failed to edit");
          }
          
        }).catch((err) => {
          window.toastr.error("Failed to edit");
        });
    } else {
      axios
        .post("http://localhost:" + this.port + "/events/sub", requestData)
        .then((res) => {
          if (res.statusText === "Created") {
            window.toastr.success("New Event Successfully Added");
            this.$forceUpdate();
          }
          else {
            window.toastr.error("Failed to Create");
          }
        })
        .catch((e) => {
          window.toastr.error(e.response.data.message);
          console.log(e.response.data);
        });
      }
    },
    openDetailsPage() {
      this.$router.push({
        name: "/sub_dashboard",

        query: {
          mainEventId: this.mainEventId,
          subEventId: this.selected,
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
    openBudgetPage() {
      this.$router.push({
        name: "/planner_budget",

        query: {
          mainEventId: this.mainEventId,
        },
      });
    },
    openToDoPage() {
      this.$router.push({
        name: "/planner_budget",

        query: {
          mainEventId: this.mainEventId,
        },
      });
    },
    formattedDateTime(date) {
      return moment(date.toISOString(), "YYYY-MM-DDTHH:mm:ss.sssZ").format(
        "YYYY-MM-DD HH:mm"
      );
    },

    scroll2top() {
      window.$("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    },
    TitleChange(e) {
      let value = e.target.value;
      if (value.length > 150) this.eventData.title = value.slice(0, 150);
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
    Descriptionchange(e) {
      let value = e.target.value;
      if (value.length >= 2000)
        this.eventData.description = value.slice(0, 2000);
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

<style scoped>
@import url("../assets/mycss.css");

.vue-form {
  font-size: 16px;
  width: 60vw;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 50px auto;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.vue-form fieldset {
  margin: 24px 0 0 0;
}

.vue-form legend {
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
}

.vue-form div {
  position: relative;
  margin: 20px 0;
}

.vue-form h4,
.vue-form .label {
  color: #94aab0;
  margin-bottom: 10px;
  text-align: left;
}

.vue-form .label {
  display: block;
}

.vue-form input,
.vue-form textarea,
.vue-form select,
.vue-form label {
  color: #2b3e51;
}

.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select,
.vue-form legend {
  display: block;
  width: 100%;
  appearance: none;
}

.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select {
  padding: 12px;
  /* border: 1px solid #cfd9db; */
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}

.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus,
.vue-form select:focus {
  outline: none;
  /* border-color: #2c3e50; */
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}

div.row div {
  margin: 0 auto;
}

div.row {
  margin-top: 0;
}

div.row h2,
h3 {
  margin-bottom: 0;
}

.mytooltip {
  text-align: left;
  margin: unset !important;
  color: red;
  padding-left: 10px;
}

</style>
