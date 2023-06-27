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
                v-for="subevent in subeventData"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
                data-toggle="modal" data-target="#confirmDialog"
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
              <!-- <div class="col-lg-5">
                <h2 class="title">Our wedding guest list</h2>
                <div class="guests-tag">
                  <span>All guests: 2</span>
                  <a href="#"><i class="fa fa-check"></i>Full invite: 7</a>
                  <a href="#"><i class="fa fa-moon-o"></i>Evening: 5 </a>
                  <a href="#"><i class="fa fa-question"></i>Waitlist: 2 </a>
                </div>
                <div class="guests-tag">
                  <span>RSVP total:</span>
                  <a href="#"><i class="fa fa-check"></i>Yes : 0</a>
                  <a href="#"><i class="fa fa-times"></i>No: 0 </a>
                  <a href="#"><i class="fa fa-clock-o"></i>No reply : 2 </a>
                </div>
              </div> -->
              <div class="col-lg-7">
                <div class="guest-filter float-right nav">
                  <a
                    class="nav-link btn gray btn-sm"
                    id="go-back"
                    :href="backURL"
                    >Go Back</a
                  >

                </div>
              </div>
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
        <div class="container">
          <div class="row column-reverse">
            <div class="col-lg-9 col-md-8 col-sm-12">
              <form
                class="gray-input"
                v-on:submit.prevent="addNewGuest"
                id="new_form"
                v-if="newIf"
              >
                <div class="form-group row" style="text-align: center;">
                  <button
                    type="button"
                    class="btn btn-block gradient text-uppercase"
                    id="new_img_btn"
                    @click="editImg('new')"
                  >
                    Upload Image
                  </button>
                  <input
                    type="file"
                    id="new_img_input"
                    @change="onFileChange($event)"
                    hidden
                  />
                  <img
                    id="img_preview"
                    v-if="url"
                    :src="url"
                    @click="editImg('new')"
                  />
                </div>
                <div class="form-group row" style="margin-top: 30px;">
                  <div class="col-md-3">
                    <label class="label-title">First Name *</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      ref="new_first_name"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="label-title">Last Name *</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      ref="new_last_name"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <input
                    type="hidden"
                    class="form-control"
                    placeholder="Username"
                  />
                  <div class="col-md-3">
                    <label class="label-title">Email *</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      ref="new_email"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="label-title">Phone Number </label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Phone Number"
                      ref="new_phone_number"
                      pattern="[0-9]{10}"
                    />
                  </div>
                  <input
                    type="hidden"
                    class="form-control"
                    placeholder="Address Id"
                    ref="new_address_id"
                  />
                </div>
                <div class="form-group row" style="margin-top: 30px;">
                  <input
                    type="hidden"
                    class="form-control"
                    placeholder="Address"
                    ref="new_address"
                  />
                  <div class="col-md-3">
                    <label class="label-title">City</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="City"
                      ref="new_city"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-3">
                    <label class="label-title">State</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="State"
                      ref="new_state"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="label-title">Country</label>
                  </div>
                  <div class="col-md-3">
                    <!--<input type="text" class="form-control" placeholder="Country" ref="new_country" required>-->
                    <select
                      class="form-control"
                      ref="new_country"
                      style="height: 50px;"
                    >
                      <option
                        v-for="country in coutries"
                        v-bind:key="country.value"
                        v-bind:value="country.value"
                      >
                        {{ country.text }}
                      </option>
                    </select>
                  </div>
                </div>
                <input
                  type="hidden"
                  class="form-control"
                  placeholder="Postal Code"
                  ref="new_postal_code"
                  required
                />
                <div class="form-group row">
                  <div class="col-md-3">
                    <label class="label-title">Gift Received</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Gift Received"
                      min="0"
                      ref="new_gift_received"
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="label-title">Cash Received</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Cash Received"
                      min="0"
                      ref="new_cash_received"
                    />
                  </div>
                </div>
                <div class="row">
                  <vue-tabs
                    active-tab-color="rgb(89, 70, 243)"
                    active-text-color="white"
                    id="invite_tab"
                  >
                    <v-tab
                      v-for="(invite, index) of invites"
                      v-bind:key="invite.eventId"
                      :title="invite.title"
                      icon="ti-user"
                      style="padding-top: 30px;"
                    >
                      <div class="form-group row">
                        <div class="col-md-3">
                          <label class="label-title">Estimated Guests</label>
                        </div>
                        <div class="col-md-3">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Estimated Guests"
                            min="0"
                            v-model="invite.estimatedGuests"
                          />
                        </div>
                        <div class="col-md-3">
                          <label class="label-title">Confirmed Guests</label>
                        </div>
                        <div class="col-md-3">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Confirmed Guests"
                            min="0"
                            v-model="invite.actualGuests"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-md-2">
                          <label>Details</label>
                        </div>
                        <div class="col-md-4">
                          <form>
                            <textarea
                              v-model="invite.notes"
                              class="form-control"
                              >{{ invite.notes }}
										</textarea
                            >
                          </form>
                        </div>
                        <div class="col-md-3">
                          <label class="label-title">Invite</label>
                        </div>
                        <div class="col-md-3">
                          <div
                            class="btn-group-toggle btn-select"
                            data-toggle="buttons"
                          >
                            <label
                              :class="invite.invited ? 'btn active' : 'btn'"
                              @click="changeInviteStatus(index, true)"
                            >
                              <input
                                type="radio"
                                value="1"
                                autocomplete="off"
                                checked=""
                              /><i class="fa fa-check"></i> Yes
                            </label>
                            <label
                              :class="!invite.invited ? 'btn active' : 'btn'"
                              @click="changeInviteStatus(index, false)"
                            >
                              <input
                                type="radio"
                                value="0"
                                autocomplete="off"
                              /><i class="fa fa-close"></i>
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </v-tab>
                  </vue-tabs>
                </div>
                <div class="row">
                  <div class="col-md-6"></div>
                  <div class="col-md-2 text-center m-b30"></div>
                  <div class="col-md-2">
                    <button type="submit" class="btn green">Save</button>
                  </div>
                </div>
              </form>

              <form
                class="gray-input"
                v-on:submit.prevent="editGuest"
                id="edit_form"
                v-if="!newIf"
              >
                <div class="form-group row">
                  <img
                    id="profile_img_edit"
                    v-if="url"
                    :src="url"
                    @click="editImg('edit')"
                  />
                  <input
                    type="file"
                    id="edit_img_input"
                    @change="onFileChange($event)"
                    hidden
                  />
                </div>
                <!--<div class="form-group row">-->
                <!--<div class="col-md-3">-->
                <!--<label class="label-title">Guest ID</label>-->
                <!--</div>-->
                <!--<div class="col-md-3">-->
                <!--<input type="number" class="form-control" placeholder="Guest ID" ref="edit_guest_id" v-model="guestData.appUser.id" disabled>-->
                <!--</div>-->
                <!--</div>-->
                <div class="form-group row">
                  <div class="col-md-3">
                    <label class="label-title">First Name *</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      ref="edit_first_name"
                      v-model="guestData.appUser.firstName"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="label-title">Last Name *</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      ref="edit_last_name"
                      v-model="guestData.appUser.lastName"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    ref="edit_username"
                    v-model="guestData.appUser.username"
                    hidden
                  />
                  <div class="col-md-3">
                    <label class="label-title">Email *</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      ref="edit_email"
                      v-model="guestData.appUser.email"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="label-title">Phone Number </label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Phone Number"
                      ref="edit_phone_number"
                      v-model="guestData.appUser.phone"
                      pattern="[0-9]{10}"
                    />
                  </div>
                  <!--<input type="number" class="form-control" placeholder="Address Id" ref="edit_address_id" v-model="guestData.appUser.addressId" disabled>-->
                </div>
                <div class="form-group row">
                  <input
                    type="hidden"
                    class="form-control"
                    placeholder="Address"
                    ref="edit_address"
                    v-model="guestData.appUser.address.address"
                  />
                  <div class="col-md-3">
                    <label class="label-title">City</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="City"
                      ref="edit_city"
                      v-model="guestData.appUser.address.city"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-3">
                    <label class="label-title">State</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="State"
                      ref="edit_state"
                      v-model="guestData.appUser.address.state"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="label-title">Country</label>
                  </div>
                  <div class="col-md-3">
                    <!--<input type="text" class="form-control" placeholder="Country" ref="edit_country" v-model="guestData.appUser.address.country" required>-->
                    <select
                      class="form-control"
                      ref="edit_country"
                      style="height: 50px;"
                      v-model="guestData.appUser.address.country"
                    >
                      <option
                        v-for="country in coutries"
                        v-bind:key="country.value"
                        v-bind:value="country.value"
                      >
                        {{ country.text }}
                      </option>
                    </select>
                  </div>
                  <input
                    type="hidden"
                    class="form-control"
                    placeholder="Postal Code"
                    ref="edit_postal_code"
                    v-model="guestData.appUser.address.postalCode"
                  />
                </div>
                <!--
                        <div class="form-group row">
                            <div class="col-md-3">
                                <label class="label-title">Estimated Guests</label>
                            </div>
                            <div class="col-md-3">
                                <input type="number" class="form-control" placeholder="Estimated Guests" min="0" ref="edit_estimated_guests" v-model="guestData.invites[0].estimatedGuests" required>
                            </div>
                            <div class="col-md-3">
                                <label class="label-title">Confirmed Guests</label>
                            </div>
                            <div class="col-md-3">
                                <input type="number" class="form-control" placeholder="Confirmed Guests" min="0" ref="edit_confirmed_guests" v-model="guestData.invites[0].confirmedGuests" required>
                            </div>
                        </div>
 
                        -->
                <div class="form-group row">
                  <div class="col-md-3">
                    <label class="label-title">Gift Received</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Gift Received"
                      min="0"
                      ref="edit_gift_received"
                      v-model="guestData.appUser.giftAmount"
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="label-title">Cash Received</label>
                  </div>
                  <div class="col-md-3">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Cash Received"
                      min="0"
                      ref="edit_cash_received"
                      v-model="guestData.appUser.cashAmount"
                    />
                  </div>
                </div>

                <div class="row">
                  <vue-tabs
                    active-tab-color="rgb(89, 70, 243)"
                    active-text-color="white"
                    id="invite_edit_tab"
                  >
                    <v-tab
                      v-for="(invite, index) of invites"
                      v-bind:key="invite.eventId"
                      :title="invite.title"
                      icon="ti-user"
                      style="padding-top: 30px;"
                    >
                      <div class="form-group row">
                        <div class="col-md-3">
                          <label class="label-title">Estimated Guests</label>
                        </div>
                        <div class="col-md-3">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Estimated Guests"
                            min="0"
                            v-model="invite.estimatedGuests"
                          />
                        </div>
                        <div class="col-md-3">
                          <label class="label-title">Confirmed Guests</label>
                        </div>
                        <div class="col-md-3">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Confirmed Guests"
                            min="0"
                            v-model="invite.actualGuests"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-md-3">
                          <label class="label-title">Deatils</label>
                        </div>
                        <div class="col-md-9">
                          <textarea v-model="invite.notes" class="form-control"
                            >{{ invite.notes }}
										        </textarea
                          >
                        </div>
                        <!-- <div class="col-md-3">
                          <label class="label-title">Details</label>
                        </div>
                        <div class="col-md-9">
                          <form>
                            <textarea
                              v-model="invite.notes"
                              class="form-control"
                              >{{ invite.notes }}
										        </textarea
                            >
                          </form>
                        </div> -->
                      </div>
                      <div class="form-group row">
                        <div
                          v-if="invite.inviteStatus != 'INVITED'"
                          class="col-md-3"
                        >
                          <label class="label-title">Invite</label>
                        </div>
                        <div
                          v-if="invite.inviteStatus != 'INVITED'"
                          class="col-md-3"
                        >
                          <div
                            class="btn-group-toggle btn-select"
                            data-toggle="buttons"
                          >
                            <label
                              :class="invite.invited ? 'btn active' : 'btn'"
                              @click="changeInviteStatus(index, true)"
                            >
                              <input
                                type="radio"
                                value="1"
                                autocomplete="off"
                                checked=""
                              /><i class="fa fa-check"></i> Yes
                            </label>
                            <label
                              :class="!invite.invited ? 'btn active' : 'btn'"
                              @click="changeInviteStatus(index, false)"
                            >
                              <input
                                type="radio"
                                value="0"
                                autocomplete="off"
                              /><i class="fa fa-close"></i>
                              No
                            </label>
                          </div>
                        </div>
                        <!-- <div class="col-md-6">
                          <label class="label-title"
                            ></label
                          >
                        </div>
                        <div class="col-md-6">
                          <label class="label-title"
                            ></label
                          >
                        </div> -->
                      </div>
                      <div class="form-group row">
                        <div class="row inner-content-bx list-check-bx">
                          <ul class="list-check primary">
                            <li>
                              {{
                                invite.inviteStatus === "INVITED"
                                  ? "You have already Invited " +
                                    guestData.appUser.firstName +
                                    " " +
                                    guestData.appUser.lastName
                                  : "You are yet to invite " +
                                    guestData.appUser.firstName +
                                    " " +
                                    guestData.appUser.lastName
                              }}
                            </li>
                            <li v-if="invite.rsvpStatus != 'UNCONFIRMED'">
                              {{ rsvpStatusOutput(index, invite) }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </v-tab>
                  </vue-tabs>
                </div>
                <div class="row" style="margin-top: 20px;">
                  <button type="submit" class="btn green" style="margin: auto;">
                    Save
                  </button>
                </div>
                <div class="row"></div>
              </form>
            </div>
            <div class="col-lg-3 col-md-4 m-b30">
              <div class="pages-bx">
                <ul class="side-page-bx">
                  <li><a href="#" @click="openDetailsPage">Details</a></li>
                  <li>
                    <a href="#" @click="openEditSubeventPage">Edit Event</a>
                  </li>
                  <li>
                    <a href="#" @click="openGuestListPage">Guest List</a>
                  </li>
                  <li><a href="privacy-policy.html">Budget</a></li>
                  <li><a @click="openToDoPage">ToDo</a></li>
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

        <div class="modal fade" id="confirmDialog" role="dialog">
          <div class="modal-dialog">
          
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header" style="justify-content: center;">
                <h4 style="color: white; text-align: center;">Save Changes</h4>
                <button type="button" style="background-color: #EFBB20; position: absolute; right: 10px; top:0px; color: white; border: 0px; font-size: 40px;" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-footer" style="justify-content: space-around;">
                <button type="button" class="btn btn-primary" style="width: 150px;" data-dismiss="modal" @click="saveChanges">Save</button>
                <button type="button" class="btn btn-default" style="width: 150px;" data-dismiss="modal" @click="openGuestListPage">Discard</button>
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
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
window.$ = require("jquery");
window.JQuery = require("jquery");
window.toastr = require("toastr");
import axios from "axios";
export default {
  name: "PlannerGuest",
  components: {
    Header,
    Footer,
    VueTabs,
    VTab,
  },
  data() {
    return {
      selected: null,
      mainEventId: null,
      eventId: null,
      username: null,
      invites: [],
      port: null,
      type: null,
      guestId: null,
      events: [],
      guestData: {
        appUser: {
          id: 1,
          username: "",
          email: "",
          firstName: "",
          lastName: "",
          phone: 0,
          userType: "",
          accountType: "",
          addressId: null,
          profileImage: "",
          giftAmount: 0,
          cashAmount: 0,
          address: {
            locationId: 0,
            locationType: "",
            address: "",
            city: "",
            state: "",
            country: "",
            postalCode: "",
            latitude: "",
            longitude: "",
          },
          activeStatus: "",
        },
        invites: [
          {
            inviteId: 1,
            mainEventId: 100,
            eventId: 101,
            invited: true,
            estimatedGuests: 4,
            actualGuests: 0,
            notes: "string",
            inviteStatus: "INVITED",
            activeStatus: "ACTIVE",
          },
        ],
      },
      locationType: "location_business",
      invited: null,
      newIf: null,
      backURL: null,
      coutries: [
        { value: "AUS", text: "AUSTRALIA" },
        { value: "CAN", text: "CANADA" },
        { value: "CHN", text: "CHINA" },
        { value: "FRA", text: "FRANCE" },
        { value: "IND", text: "INDIA" },
        { value: "NZL", text: "NEW ZEALAND" },
        { value: "PAK", text: "PAKISTAN" },
        { value: "ESP", text: "SPAIN" },
        { value: "GBR", text: "UNITED KINGDOM" },
        { value: "USA", text: "UNITED STATES" },
      ],
      url: null,
      subeventData: {},
      noData: false,
    };
  },
  created() {
    this.port = location.port;
    this.eventId = this.$route.query.eventId ? this.$route.query.eventId : 101;
    this.mainEventId = this.$route.query.mainEventId
      ? this.$route.query.mainEventId
      : 101;
    this.type = this.$route.query.type ? this.$route.query.type : "new";
    this.username = this.$route.query.username
      ? this.$route.query.username
      : "";
    this.selected = this.eventId;
    this.newIf = this.type === "new";
    this.backURL =
      "http://localhost:" +
      this.port +
      "/planner_guest_list?mainEventId=" +
      this.mainEventId +
      "&eventId=" +
      this.eventId;
    this.getSubeventHeaderData();
    this.getData();
  },
  methods: {
    showDialog() {

    },
    getSubeventHeaderData() {
      axios
        .get(
          "http://localhost:" +
            this.port +
            "/events/" +
            this.mainEventId +
            "/sub"
        )
        .then((res) => {
          this.subeventData = res.data;
          console.log(this.subeventData);
        })
        .catch(() => {
          this.noData = true;
          console.log(this.noData);
        });
    },
    getData() {
      if (this.type === "edit") {
        axios
          .get(
            "http://localhost:" +
              this.port +
              "/expenses/guestworkaround/guests/events/" +
              this.mainEventId +
              "/users/" +
              this.username
          )
          .then((res) => {
            this.guestData = res.data[0];
            console.log(this.guestData);
            this.url = this.guestData.appUser.profileImage;
            this.setTypes();
            axios
              .get(
                "http://localhost:" +
                  this.port +
                  "/events/" +
                  this.mainEventId +
                  "/filters"
              )
              .then((res) => {
                this.events = res.data;

                this.invites = [];
                for (let item of this.guestData.invites) {
                  console.log("guestdata invites" + item);
                  for (let event of this.events) {
                    if (item.eventId === event.eventId) {
                      this.invites.push({
                        inviteId: item.inviteId,
                        title: event.title,
                        mainEventId: item.mainEventId,
                        eventId: item.eventId,
                        estimatedGuests: item.estimatedGuests,
                        actualGuests: item.actualGuests,
                        notes: item.notes,
                        invited: item.invited,
                        inviteStatus: item.inviteStatus,
                        activeStatus: item.activeStatus,
                        rsvpStatus: item.rsvpStatus,
                      });
                    }
                  }
                }
                console.log(this.invites);
              });
          });
      } else {
        this.invites = [];
        axios
          .get(
            "http://localhost:" +
              this.port +
              "/events/" +
              this.mainEventId +
              "/filters"
          )
          .then((res) => {
            for (let item of res.data) {
              if (item.mainEventId !== null) {
                this.invites.push({
                  title: item.title,
                  mainEventId: this.mainEventId,
                  eventId: item.eventId,
                  estimatedGuests: 0,
                  actualGuests: 0,
                  notes: "",
                  invited: false,
                });
              }
            }
          });
      }
    },
    setTypes() {
      let guestData = this.guestData;
      window
        .$("#locationTypeSelect_edit")
        .children("label")
        .each(function() {
          window.$(this).removeClass("active");
          if (
            window
              .$(this)
              .children("input")
              .val() === guestData.appUser.address.locationType
          ) {
            window.$(this).addClass("active");
          }
        });
    },
    scroll2top() {
      window.$("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    },
    changeEvent() {
      console.log("here");
    },

    saveChanges() {
      if(this.newIf)
        this.addNewGuestAndList();
      else
        this.editGuestAndList();
    },

    addNewGuest() {
      this.locationType = window
        .$("#locationTypeSelect")
        .children("label.active")
        .children("input")
        .val();

      this.guestData = {
        appUser: {
          username: this.$refs.new_email.value,
          email: this.$refs.new_email.value,
          firstName: this.$refs.new_first_name.value,
          lastName: this.$refs.new_last_name.value,
          phone: this.$refs.new_phone_number.value,
          userType: "GUEST",
          accountType: "NEW",
          addressId: this.$refs.new_address_id.value,
          giftAmount: this.$refs.new_gift_received.value,
          cashAmount: this.$refs.new_cash_received.value,
          address: {
            locationType: "GUEST",
            address: this.$refs.new_address.value,
            city: this.$refs.new_city.value,
            state: this.$refs.new_state.value,
            country: this.$refs.new_country.value,
            postalCode: this.$refs.new_postal_code.value,
            latitude: null,
            longitude: null,
          },
          activeStatus: "ACTIVE",
        },
        invites: this.invites,
      };
      console.log("invites: ", this.invites);
      axios
        .post("http://localhost:" + this.port + "/guests", this.guestData)
        .then(() => {
          window.toastr.success("Successfully Added!");
        })
        .catch(() => {
          window.toastr.error("Add Failed!");
        });
    },

    addNewGuestAndList() {
      this.locationType = window
        .$("#locationTypeSelect")
        .children("label.active")
        .children("input")
        .val();

      this.guestData = {
        appUser: {
          username: this.$refs.new_email.value,
          email: this.$refs.new_email.value,
          firstName: this.$refs.new_first_name.value,
          lastName: this.$refs.new_last_name.value,
          phone: this.$refs.new_phone_number.value,
          userType: "GUEST",
          accountType: "NEW",
          addressId: this.$refs.new_address_id.value,
          giftAmount: this.$refs.new_gift_received.value,
          cashAmount: this.$refs.new_cash_received.value,
          address: {
            locationType: "GUEST",
            address: this.$refs.new_address.value,
            city: this.$refs.new_city.value,
            state: this.$refs.new_state.value,
            country: this.$refs.new_country.value,
            postalCode: this.$refs.new_postal_code.value,
            latitude: null,
            longitude: null,
          },
          activeStatus: "ACTIVE",
        },
        invites: this.invites,
      };
      console.log("invites: ", this.invites);
      axios
        .post("http://localhost:" + this.port + "/guests", this.guestData)
        .then(() => {
          window.toastr.success("Successfully Added!");
          this.openGuestListPage();
        })
        .catch(() => {
          window.toastr.error("Add Failed!");
        });
    },
    editGuest() {
      this.locationType = window
        .$("#locationTypeSelect_edit")
        .children("label.active")
        .children("input")
        .val();

      // this.guestData = {
      //   appUser: {
      //     id: this.guestData.appUser.id,
      //     username: this.$refs.edit_email.value,
      //     email: this.$refs.edit_email.value,
      //     firstName: this.$refs.edit_first_name.value,
      //     lastName: this.$refs.edit_last_name.value,
      //     phone: this.$refs.edit_phone_number.value,
      //     userType: "GUEST",
      //     accountType: "NEW",
      //     addressId: this.guestData.appUser.addressId,
      //     giftAmount: this.$refs.edit_gift_received.value,
      //     cashAmount: this.$refs.edit_cash_received.value,
      //     address: {
      //       locationId: this.guestData.appUser.address.locationId,
      //       locationType: "GUEST",
      //       address: this.$refs.edit_address.value,
      //       city: this.$refs.edit_city.value,
      //       state: this.$refs.edit_state.value,
      //       country: this.$refs.edit_country.value,
      //       postalCode: this.$refs.edit_postal_code.value,
      //       latitude: null,
      //       longitude: null,
      //     },
      //     activeStatus: "ACTIVE",
      //   },
      // };
      this.invites.forEach((invite) => {
        if (invite.invited) {
          invite.inviteStatus = "INVITED";
        }
      });
      this.guestData.invites = this.invites;
      console.log("guestData; ", this.guestData);
      axios
        .put(
          "http://localhost:" +
            this.port +
            "/guests/" +
            this.guestData.appUser.id,
          this.guestData
        )
        .then(() => {
          window.toastr.success("Successfully Updated!");
          return false;
        })
        .catch(() => {
          window.toastr.error("Update Failed!");
        });
    },
    editGuestAndList() {
      this.locationType = window
        .$("#locationTypeSelect_edit")
        .children("label.active")
        .children("input")
        .val();
        
      this.invites.forEach((invite) => {
        if (invite.invited) {
          invite.inviteStatus = "INVITED";
        }
      });
      this.guestData.invites = this.invites;
      console.log("guestData; ", this.guestData);
      axios
        .put(
          "http://localhost:" +
            this.port +
            "/guests/" +
            this.guestData.appUser.id,
          this.guestData
        )
        .then(() => {
          window.toastr.success("Successfully Updated!");

          this.openGuestListPage();
          return false;
        })
        .catch(() => {
          window.toastr.error("Update Failed!");
        });
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      if (this.type === "new") {
        window.$("#new_img_btn").hide();
      }
    },
    editImg(type) {
      if (type === "new") {
        window.$("#new_img_input").trigger("click");
      } else {
        window.$("#edit_img_input").trigger("click");
      }
    },
    changeInviteStatus(index, status) {
      this.invites[index].invited = status;
    },
    rsvpStatusOutput(index, invite) {
      if (invite.rsvpStatus === "ATTENDING") {
        return (
          this.guestData.appUser.firstName +
          " " +
          this.guestData.appUser.lastName +
          " will be attending " +
          invite.title +
          " with " +
          invite.actualGuests +
          " guests"
        );
      } else if (invite.rsvpStatus === "MAYBE") {
        return (
          this.guestData.appUser.firstName +
          " " +
          this.guestData.appUser.lastName +
          " maybe attend " +
          invite.title +
          " with " +
          invite.actualGuests +
          " guests"
        );
      } else {
        return (
          this.guestData.appUser.firstName +
          " " +
          this.guestData.appUser.lastName +
          " will not attend " +
          invite.title
        );
      }
    },
    setSelectedEvent(eventId) {
      if (eventId) {
        this.selected = eventId;
      }
      this.openDetailsPage();
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
    openGuestListPage() {
      this.$router.push({
        name: "/planner_guest_list",

        query: {
          mainEventId: this.mainEventId,
          eventId: this.selected,
        },
      });
    },
    openToDoPage() {
      this.$router.push({
        name: "/todo",

        query: {
          mainEventId: this.mainEventId,
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
  },
};
</script>

<style scoped>
form {
  margin-top: 30px !important;
}
div.form-group {
  line-height: 50px;
  margin-bottom: 0 !important;
}
#profile_img_edit {
  width: 10vw;
  margin: auto;
  border-radius: 50%;
  margin-bottom: 30px;
}
#profile_img_edit:hover {
  cursor: pointer;
}

#img_preview {
  width: 10vw;
  margin: auto;
  border-radius: 50%;
  margin-bottom: 30px;
}
#img_preview:hover {
  cursor: pointer;
}
#invite_tab,
#invite_edit_tab {
  margin: auto;
}
</style>
