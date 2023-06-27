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
                class="wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <a href="my-account.html" class="list-box home-list">
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
              </li>
            </ul>
          </div>
        </div>
        <!-- Manager Tools End -->
        <!-- Planner advice -->
        <div class="wedding-filter-search wedding-filter-advice">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 d-flex">
                <h2 class="title align-self-center">Our wedding budget</h2>
              </div>
              <div class="col-lg-6 col-md-6 text-right">
                <a
                  href="javascript:void(0);"
                  class="btn green "
                  style="margin-right: 10px;"
                  >Back to dashboard</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Planner advice End -->
        <!-- contact area -->
        <div class="section-full content-inner bg-gray">
          <div class="container">
            <div class="row column-reverse">
              <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12">
                <div class="planner-box m-b30">
                  <div class="content-box">
                    <div class="planner-budget-bx" style="width:auto">
                      <div class="planner-category">
                        <h3 class="category-title">Budgets</h3>
                      </div>
                      <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-3">
                          <select
                            style="display:none"
                            v-model="eventId"
                            class="form-control filter_select"
                            @change="eventChanged($event)"
                          >
                            <option value="0">All</option>
                            <option
                              v-for="option in eventNames"
                              v-bind:key="option.eventId"
                              v-bind:value="option.eventId"
                            >
                              {{ option.title }}
                            </option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <select
                            v-model="expenseType"
                            @change="getData(mainEventId, eventId, expenseType)"
                            class="form-control filter_select"
                          >
                            <option value="">All</option>
                            <option
                              v-for="option in expenseTypes"
                              v-bind:key="option.expenseType"
                              v-bind:value="option.expenseType"
                            >
                              {{ option.title }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <ul id="budget_panel">
                        <li class="main-budget-head">
                          <div class="budget-bx">
                            <div class="event">
                              <h4 class="title">Event</h4>
                            </div>
                            <div class="budget">
                              <h4 class="title">Budget</h4>
                            </div>
                            <div class="total">
                              <h4 class="title">Total</h4>
                            </div>
                            <div class="used">
                              <h4 class="title">Used</h4>
                            </div>
                            <!--<div class="left">-->
                            <!--<h4 class="title">Left</h4>-->
                            <!--</div>-->
                            <div class="edit-icon"></div>
                          </div>
                        </li>
                        <li v-if="noData">
                          <div class="budget-bx"><h4>No Data</h4></div>
                        </li>
                        <li
                          v-for="item in budgetData"
                          v-bind:key="item.budgetId"
                          :id="'budget_panel' + item.budgetId"
                        >
                          <div class="budget-bx">
                            <div class="event">
                              <h4 class="content">
                                {{ mainEventName.title }}
                              </h4>
                            </div>
                            <div class="budget">
                              <h4 class="content">{{ item.expenseType }}</h4>
                            </div>
                            <div class="total">
                              <h4 class="content">
                                &#36;
                                {{
                                  item.expenseAmount
                                    ? addCommas(item.expenseAmount)
                                    : 0
                                }}
                              </h4>
                            </div>
                            <div class="used">
                              <h4 class="content">
                                &#36;
                                {{
                                  item.usedBudget
                                    ? addCommas(item.usedBudget)
                                    : 0
                                }}
                              </h4>
                            </div>
                            <div
                              class="edit-icon row"
                              style="margin-top: -13px;"
                            >
                              <div class="col-5">
                                <button
                                  class="btn red toggle_button"
                                  @click="
                                    goExpense(
                                      item.mainEventId,
                                      item.eventId,
                                      item.budgetId
                                    )
                                  "
                                >
                                  Expenses
                                </button>
                                <i
                                  class="fa fa-floppy-o toggle_icon"
                                  aria-hidden="true"
                                  @click="
                                    goExpense(
                                      item.mainEventId,
                                      item.eventId,
                                      item.budgetId
                                    )
                                  "
                                ></i>
                              </div>

                              <div class="col-4" style="padding-left: 0;">
                                <a
                                  class="edit"
                                  data-toggle="collapse"
                                  :href="'#edit-notes' + item.budgetId"
                                  role="button"
                                  aria-expanded="false"
                                  :aria-controls="'edit-notes' + item.budgetId"
                                >
                                  <button class="btn green toggle_button">
                                    Details
                                  </button>
                                  <i
                                    class="fa fa-file-text-o toggle_icon"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>

                              <div
                                class="col-3"
                                style="padding-left: 0; margin-left: -10px;"
                              >
                                <a
                                  class="btn-link"
                                  data-toggle="collapse"
                                  :href="'#edit-suppliers' + item.budgetId"
                                  role="button"
                                  aria-expanded="false"
                                  :aria-controls="
                                    'edit-suppliers' + item.budgetId
                                  "
                                >
                                  <button class="btn gray toggle_button">
                                    Edit
                                  </button>
                                  <i
                                    class="fa fa-pencil toggle_icon"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <!--<button :id="'edit_button'+item.budgetId" @click="editAmount(item.budgetId,item.expenseAmount)" style="margin-left: 10px;">Edit</button>-->
                              </div>
                            </div>
                          </div>
                          <div
                            class="edit-notes collapse"
                            :id="'edit-notes' + item.budgetId"
                          >
                            <div class="input-group mb-1">
                              <div class="row col-md-12">
                                <div
                                  class="col-md-2"
                                  style="text-align: right;"
                                >
                                  <label>Left</label>
                                </div>
                                <div class="col-md-10">
                                  <p style="text-align: left;">
                                    &#36;
                                    {{ item.expenseAmount - item.usedBudget }}
                                  </p>
                                </div>
                              </div>
                              <div class="row col-md-12">
                                <div
                                  class="col-md-2"
                                  style="text-align: right;"
                                >
                                  <label>Status</label>
                                </div>
                                <div class="col-md-10">
                                  <p style="text-align: left;">
                                    {{ item.status ? item.status : "INACTIVE" }}
                                  </p>
                                </div>
                              </div>
                              <div
                                class="row col-md-12"
                                style="margin-top: 10px"
                              >
                                <div
                                  class="col-md-2"
                                  style="text-align: right;"
                                >
                                  <label>Notes</label>
                                </div>
                                <div class="col-md-10">
                                  <p style="text-align: left;">
                                    {{ item.notes }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="edit-notes collapse"
                            :id="'edit-suppliers' + item.budgetId"
                            :class="'edit-suppliers' + item.budgetId"
                          >
                            <form>
                              <div class="input-group mb-1 row">
                                <div class="col-md-12 row">
                                  <div
                                    class="col-md-2"
                                    style="text-align: right;"
                                  >
                                    <label>Budget Amount</label>
                                  </div>
                                  <div
                                    class="col-md-4"
                                    style="text-align: left;"
                                  >
                                    <input
                                      type="number"
                                      class="form-control total_input"
                                      style="text-align: right;height: 40px;"
                                      :value="
                                        parseFloat(item.expenseAmount).toFixed(
                                          2
                                        )
                                      "
                                      @change="formattofixed(item.budgetId)"
                                      step="0.01"
                                    />
                                  </div>
                                  <div
                                    class="col-md-2"
                                    style="text-align: right;"
                                  >
                                    <label>Status</label>
                                  </div>
                                  <div class="col-md-4">
                                    <select
                                      v-model="item.status"
                                      class="status_edit form-control"
                                    >
                                      <option value="ACTIVE">ACTIVE</option>
                                      <option value="INACTIVE">INACTIVE</option>
                                    </select>
                                  </div>
                                </div>
                                <div
                                  class="col-md-12 row"
                                  style="margin-top: 10px;"
                                >
                                  <div
                                    class="col-md-2"
                                    style="text-align: right;"
                                  >
                                    <label>Notes</label>
                                  </div>
                                  <div
                                    class="col-md-10"
                                    style="text-align: left;"
                                  >
                                    <textarea
                                      class="form-control notes_edit"
                                      :value="item.notes"
                                    ></textarea>
                                  </div>
                                </div>
                                <div class="col-md-12 row">
                                  <div class="col-md-8"></div>
                                  <div class="col-md-4">
                                    <div class="input-group-append">
                                      <!--<button class="btn red delete m-r10" type="button" @click="deleteData(i)">delete</button>-->
                                      <button
                                        class="btn green"
                                        type="button"
                                        @click="changeData(item.budgetId)"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>
                        <li>
                          <div class="budget-bx">
                            <a
                              href="javascript:void(0);"
                              class="btn add-budget-list-item gradient"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              >+ Add new budget</a
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-4 m-b30">
                <div class="pages-bx">
                  <ul class="side-page-bx">
                    <li><a href="#" @click="openDetailsPage">Details</a></li>
                    <li>
                      <a href="#" @click="openEditSubeventPage">Edit Event</a>
                    </li>
                    <li>
                      <a href="#" @click="openGuestListPage">Guest List</a>
                    </li>
                    <li class="active"><a href="#">Budget</a></li>
                    <li>
                    <li><a @click="openToDoPage">ToDo</a></li>
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
        <!-- Modal -->
        <div
          class="modal fade planner-modal-bx"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModal"
          aria-hidden="true"
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
            <div class="modal-content">
              <h2 class="title">Add new Budget</h2>
              <form>
                <div class="row" id="addDataModal">
                  <div
                    class="row col-md-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Event</label>
                    </div>
                    <div class="col-md-9">
                      <label>{{ mainEventName.title }}</label>
                    </div>
                    <div style="display:none" class="col-md-9">
                      <select
                        style="display:none"
                        v-model="addEventID"
                        class="form-control"
                      >
                        <option
                          v-for="option in eventNames"
                          v-bind:key="option.eventId"
                          v-bind:value="option.eventId"
                        >
                          {{ option.title }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="row col-md-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Budget Type</label>
                    </div>
                    <div class="col-md-9">
                      <select v-model="addExpenseType" class="form-control">
                        <option
                          v-for="option in expenseTypes"
                          v-bind:key="option.expenseType"
                          v-bind:value="option.expenseType"
                        >
                          {{ option.title }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="row col-md-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Budget Amount</label>
                    </div>
                    <div class="col-md-9">
                      <input
                        type="number"
                        class="form-control budget_amount"
                        id="budget_amount"
                        :value="addAmount"
                      />
                    </div>
                  </div>
                  <div
                    class="row col-md-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Status</label>
                    </div>
                    <div class="col-md-9">
                      <select id="add_budget_status" class="form-control">
                        <option value="INACTIVE">INACTIVE</option>
                        <option value="ACTIVE">ACTIVE</option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="row col-md-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Notes</label>
                    </div>
                    <div class="col-md-9">
                      <textarea
                        type="text"
                        class="form-control notes"
                        id="add_notes"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <a class="btn green" @click="addData">Save</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Modal End -->
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
window.$ = require("jquery");
window.JQuery = require("jquery");

import axios from "axios";
export default {
  name: "PlannerBudget",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
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
    this.mainEventId = this.$route.query.mainEventId
      ? this.$route.query.mainEventId
      : 0;
    this.eventId = this.$route.query.eventId ? this.$route.query.eventId : 0;
    this.getData(this.mainEventId, this.eventId);
  },
  methods: {
    getData(mainEventId, eventId, expenseType = "") {
      axios
        .get("http://localhost:" + this.port + "/expenses/types")
        .then((res) => {
          this.expenseTypes = res.data;
        });
      if (parseInt(eventId) === 0) {
        if (expenseType === "") {
          axios
            .get(
              "http://localhost:" + this.port + "/budgets/events/" + mainEventId
            )
            .then((res) => {
              this.budgetData = res.data;
              this.eventTitle = res.data[0].eventTitle;
              this.noData = false;
            })
            .catch(() => {
              this.noData = true;
            });
        } else {
          axios
            .get(
              "http://localhost:" +
                this.port +
                "/budgets/events/" +
                mainEventId +
                "?expenseType=" +
                expenseType
            )
            .then((res) => {
              this.budgetData = res.data;
              this.eventTitle = res.data[0].eventTitle;
              this.noData = false;
            })
            .catch(() => {
              this.noData = true;
            });
        }
        axios
          .get("http://localhost:" + this.port + "/events/100/filters")
          .then((res) => {
            this.eventNames = res.data;
            this.mainEventName = this.eventNames.find((eventName) => {
              if (eventName.mainEventId === null) {
                return eventName;
              }
            });
            console.log(this.mainEventName.title);
          });
      } else {
        if (expenseType === "") {
          axios
            .get(
              "http://localhost:" + this.port + "/budgets/events/sub/" + eventId
            )
            .then((res) => {
              this.budgetData = res.data;
              this.eventTitle = res.data[0].eventTitle;
              this.eventNames = [{ eventId: eventId, title: this.eventTitle }];
              this.noData = false;
            })
            .catch(() => {
              this.noData = true;
            });
        } else {
          axios
            .get(
              "http://localhost:" +
                this.port +
                "/budgets/events/sub/" +
                eventId +
                "?expenseType=" +
                expenseType
            )
            .then((res) => {
              this.budgetData = res.data;
              this.eventTitle = res.data[0].eventTitle;
              this.eventNames = [{ eventId: eventId, title: this.eventTitle }];
              this.noData = false;
            })
            .catch(() => {
              this.noData = true;
            });
        }
      }
    },
    changeData(id) {
      let total = window.$(".edit-suppliers" + id + " .total_input").val();
      let status = window.$(".edit-suppliers" + id + " .status_edit").val();
      let notes = window.$(".edit-suppliers" + id + " .notes_edit").val();
      // console.log(event,budget,total,used,left)
      let requestData = {};
      for (let item of this.budgetData) {
        if (item.budgetId === id) {
          requestData = {
            eventId: item.eventId,
            mainEventId: item.mainEventId,
            expenseAmount: total,
            expenseType: item.expenseType,
            notes: notes,
            title: item.title,
            status: status,
          };
        }
      }
      // console.log(total,status,notes,requestData)

      axios
        .put("http://localhost:" + this.port + "/budgets/" + id, requestData)
        .then(() => {
          this.getData(this.mainEventId, this.eventId, this.expenseType);
          this.$toastr.success("The budget has been updated successfully");
        });
    },
    addData() {
      let amount = window.$("#budget_amount").val();
      let notes = window.$("#add_notes").val();
      if (parseFloat(amount) === 0) {
        this.$toastr.error("Please add budget amount");
        return;
      } else if (notes === "") {
        this.$toastr.error("Please add notes");
        return;
      }
      let requestData = {
        eventId: this.addEventID,
        // eventTitle: this.eventTitle,
        eventTitle: this.mainEventName.title,
        expenseAmount: parseFloat(amount),
        expenseType: this.addExpenseType,
        mainEventId: this.mainEventId,
        notes: notes,
        status: window.$("#add_budget_status").val(),
      };
      console.log(requestData);
      axios
        .post("http://localhost:" + this.port + "/budgets", requestData)
        .then(() => {
          this.getData(this.mainEventId, this.eventId, this.expenseType);
          window.$("button.close").trigger("click");
          this.$toastr.success("The budget has been added");
        });
    },
    goExpense(mainEventId, eventId, budgetId) {
      this.$router.replace({
        path: "planner_expense",
        query: {
          mainEventId: mainEventId,
          eventId: eventId,
          budgetId: budgetId,
        },
      });
      // this.$router.push({path: 'planner_expense'});
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
    formattofixed(id) {
      let value = window.$(".edit-suppliers" + id + " .total_input").val();
      window
        .$(".edit-suppliers" + id + " .total_input")
        .val(parseFloat(value).toFixed(2));
    },
    scroll2top() {
      window.$("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    },
    eventChanged(ev) {
      console.log(ev.target.value);
      this.getData(this.mainEventId, ev.target.value, this.expenseType);
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
    openEditSubeventPage() {
      this.$router.push({
        name: "/planner_add_subevent",

        query: {
          mainEventId: this.mainEventId,
          subEventId: this.selected,
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

<style scoped lang="scss">
.category-title {
  font-size: 25px !important;
}
.title {
  text-align: center;
}
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
