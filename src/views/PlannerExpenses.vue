<template>
  <div>
    <!--<div id="loading-area"></div>-->
    <div class="page-wraper">
      <!-- header -->
      <Header></Header>
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
                <button
                  type="button"
                  class="btn green"
                  id="back_btn"
                  @click="goBudget"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Planner advice End -->
        <!-- contact area -->
        <div class="section-full content-inner bg-gray">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="planner-box m-b30">
                  <div class="content-box">
                    <div class="planner-budget-bx">
                      <div class="planner-category">
                        <h3 class="category-title">Expenses</h3>
                      </div>
                      <div class="row">
                        <div class="col-md-3 col-sm-6">
                          <select
                            v-model="status"
                            class="form-control"
                            style="height: 50px;"
                          >
                            <option value="ALL">ALL</option>
                            <option value="UPCOMING">UPCOMING</option>
                            <option value="UNPAID">UNPAID</option>
                            <option value="PAID">PAID</option>
                          </select>
                        </div>
                        <div class="col-md-3 col-sm-6">
                          <input
                            type="date"
                            class="form-control"
                            v-model="startDate"
                          />
                        </div>
                        <div class="col-md-3 col-sm-6">
                          <input
                            type="date"
                            class="form-control"
                            v-model="endDate"
                          />
                        </div>
                        <div class="col-md-3 col-sm-6">
                          <select
                            v-model="expenseType"
                            class="form-control"
                            style="height: 50px;"
                          >
                            <option value="ALL">ALL</option>
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
                            <div class="date">
                              <h4 class="title">Date</h4>
                            </div>
                            <div class="event">
                              <h4 class="title">Event</h4>
                            </div>
                            <div class="refId">
                              <h4 class="title">refName</h4>
                            </div>
                            <div class="amount">
                              <h4 class="title">Amount</h4>
                            </div>
                            <div class="status">
                              <h4 class="title">Status</h4>
                            </div>
                            <div class="edit-icon">
                              <i
                                class="fa fa-search"
                                @click="searchFunc"
                                id="search_icon"
                                aria-hidden="true"
                              ></i>
                              <button
                                class="btn red pull-right"
                                @click="searchFunc"
                                id="search_btn"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </li>
                        <li
                          v-for="item in expensesData"
                          v-bind:key="item.expenseId"
                        >
                          <div class="budget-bx">
                            <div class="date">
                              <h4 class="content">{{ item.expenseDate }}</h4>
                            </div>
                            <div class="event">
                              <h4 class="content">{{ mainEventName.title }}</h4>
                            </div>
                            <div class="refId">
                              <h4 class="content">{{ item.refName }}</h4>
                            </div>
                            <div class="amount">
                              <h4 class="content">
                                &#36; {{ addCommas(item.amount) }}
                              </h4>
                            </div>
                            <div class="status">
                              <h4 class="content">{{ item.status }}</h4>
                            </div>
                            <div
                              class="edit-icon row"
                              style="margin-top: -13px;"
                            >
                              <div class="col-7" style="padding-left: 0;">
                                <a
                                  class="btn-link"
                                  data-toggle="collapse"
                                  :href="'#edit-notes' + item.expenseId"
                                  role="button"
                                  aria-expanded="false"
                                  :aria-controls="'edit-notes' + item.expenseId"
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
                                class="col-5"
                                style="padding-left: 0; margin-left: -10px;"
                              >
                                <a
                                  class="btn-link"
                                  data-toggle="collapse"
                                  :href="'#edit-suppliers' + item.expenseId"
                                  role="button"
                                  aria-expanded="false"
                                  :aria-controls="
                                    'edit-suppliers' + item.expenseId
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
                            :id="'edit-notes' + item.expenseId"
                          >
                            <div class="input-group mb-1">
                              <div class="row col-12">
                                <div class="col-2" style="text-align: right;">
                                  <label>Expense Type</label>
                                </div>
                                <div class="col-4">
                                  <p style="text-align: left;">
                                    {{
                                      item.expenseType
                                        ? item.expenseType
                                        : "DECOR"
                                    }}
                                  </p>
                                </div>
                                <div class="col-2" style="text-align: right;">
                                  <label>Ref Type</label>
                                </div>
                                <div class="col-4">
                                  <p style="text-align: left;">
                                    {{ item.refType ? item.refType : "VENDOR" }}
                                  </p>
                                </div>
                              </div>
                              <div class="row col-12" style="margin-top: 10px">
                                <div class="col-2" style="text-align: right;">
                                  <label>Notes</label>
                                </div>
                                <div class="col-10">
                                  <p style="text-align: left;">
                                    {{ item.notes }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="edit-notes collapse"
                            :id="'edit-suppliers' + item.expenseId"
                            :class="'edit-suppliers' + item.expenseId"
                          >
                            <form>
                              <div class="input-group mb-1">
                                <div class="row col-md-12">
                                  <div class="col-md-2">
                                    <label>Expense Date</label>
                                  </div>
                                  <div class="col-md-4">
                                    <input
                                      type="date"
                                      class="form-control expenseDate_input editItem"
                                      style="text-align: right;"
                                      :value="item.expenseDate"
                                    />
                                  </div>
                                  <div class="col-md-2">
                                    <label>Vendor</label>
                                  </div>
                                  <div class="col-md-4">
                                    <select
                                      :value="item.refId.toString()"
                                      class="form-control vendor_select"
                                    >
                                      <option value="0">Select Vendor</option>
                                      <option
                                        v-for="option in vendors"
                                        v-bind:key="option.businessId"
                                        v-bind:value="option.businessId"
                                      >
                                        {{ option.title }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div
                                  class="row col-md-12"
                                  style="margin-top: 10px"
                                >
                                  <div class="col-md-2">
                                    <label>Amount</label>
                                  </div>
                                  <div class="col-md-4">
                                    <input
                                      type="number"
                                      class="form-control amount_input editItem"
                                      :value="
                                        parseFloat(item.amount).toFixed(2)
                                      "
                                      @change="formattofixed(item.expenseId)"
                                      step="0.01"
                                      min="0"
                                    />
                                  </div>

                                  <div class="col-md-2">
                                    <label>Status</label>
                                  </div>
                                  <div
                                    class="col-md-4"
                                    style="text-align: left;"
                                  >
                                    <select
                                      :value="item.status"
                                      class="status_input form-control"
                                    >
                                      <option value="UPCOMING">UPCOMING</option>
                                      <option value="PAID">PAID</option>
                                      <option value="UNPAID">UNPAID</option>
                                    </select>
                                  </div>
                                </div>
                                <div
                                  class="row col-12"
                                  style="margin-top: 10px"
                                >
                                  <div class="col-md-2">
                                    <label>Notes</label>
                                  </div>
                                  <div class="col-md-10">
                                    <textarea
                                      class="form-control notes_input editItem"
                                      style="text-align: right;"
                                      :value="item.notes"
                                    ></textarea>
                                  </div>
                                </div>
                                <div
                                  class="row col-12"
                                  style="margin-top: 10px;"
                                >
                                  <div class="col-8"></div>
                                  <div class="col-4">
                                    <button
                                      class="btn red delete m-r10"
                                      type="button"
                                      @click="deleteExpense(item.expenseId)"
                                    >
                                      delete
                                    </button>
                                    <button
                                      class="btn green"
                                      type="button"
                                      @click="changeData(item.expenseId)"
                                    >
                                      Save
                                    </button>
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
                              >+ Add new item</a
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
              <h2 class="title">Add new Expense</h2>
              <form>
                <div class="row" id="addDataModal">
                  <div
                    class="row col-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Event</label>
                    </div>
                    <div class="col-md-9">
                      <h5>{{ eventName }}</h5>
                    </div>
                  </div>
                  <div
                    class="row col-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Expense Date</label>
                    </div>
                    <div class="col-md-9">
                      <input
                        type="date"
                        class="form-control"
                        v-model="newDate"
                      />
                    </div>
                  </div>
                  <div
                    class="row col-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Vendor Name</label>
                    </div>
                    <div class="col-md-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="newVendorName"
                      />
                    </div>
                  </div>
                  <div
                    class="row col-12"
                    style="padding: 0;margin-bottom: 5px; display: none;"
                  >
                    <div class="col-md-3">
                      <label>Vendor</label>
                    </div>
                    <div class="col-md-9">
                      <select
                        v-model="newRefId"
                        class="form-control"
                        style="height: 50px;"
                      >
                        <option value="0">Select Vendor</option>
                        <option
                          v-for="option in vendors"
                          v-bind:key="option.businessId"
                          v-bind:value="option.businessId"
                        >
                          {{ option.title }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="row col-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Budget</label>
                    </div>
                    <div class="col-md-9">
                      <input
                        type="number"
                        class="form-control"
                        v-model="newBudgetAmount"
                        min="0"
                      />
                      <!-- @change="formattofixed1" -->
                    </div>
                  </div>
                  <div
                    class="row col-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Expense Type</label>
                    </div>
                    <div class="col-md-9">
                      <select
                        v-model="newExpenseType"
                        class="form-control"
                        style="height: 50px;"
                      >
                        <option value="">Select Expense Type</option>
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
                    class="row col-12"
                    style="padding: 0;margin-bottom: 5px;"
                  >
                    <div class="col-md-3">
                      <label>Status</label>
                    </div>
                    <div class="col-md-9">
                      <select
                        v-model="newStatus"
                        class="form-control"
                        style="height: 50px;"
                      >
                        <option value="UPCOMING">UPCOMING</option>
                        <option value="UNPAID">UNPAID</option>
                        <option value="PAID">PAID</option>
                      </select>
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
      <Footer></Footer>
      <!-- Footer END-->
      <button class="scroltop fa fa-chevron-up"></button>
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
  name: "PlannerExpenses",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      mainEventName: "",
      mainEventId: 0,
      eventID: 0,
      budgetId: 0,
      expenseDate: "",
      eventName: "",
      refType: "",
      refId: "",
      notes: "",
      expenseAmount: 0,
      status: "ALL",
      startDate: "2020-01-01",
      endDate: "2020-02-15",
      expenseType: "ALL",
      date: "",
      eventNames: [],
      expenseTypes: [
        { text: "Photographer", value: "PHOTO" },
        { text: "Videographer", value: "VIDEO" },
        { text: "Decoration Budget", value: "DECOR" },
        { text: "Clothing Budget", value: "CLOTHING" },
        { text: "VENUE", value: "VENUE" },
        { text: "DJ", value: "DJ" },
        { text: "OTHER", value: "OTHER" },
      ],
      expensesData: [],
      vendors: [],
      port: null,
      newDate: new Date(),
      newBudgetAmount: 0,
      newRefId: 0,
      newRefType: null,
      newExpenseType: "",
      newVendorName: "",
      newStatus: "UPCOMING",
    };
  },
  created() {
    this.port = location.port;
    this.mainEventId = parseInt(
      this.$route.query.mainEventId ? this.$route.query.mainEventId : 0
    );
    this.eventId = parseInt(
      this.$route.query.eventId ? this.$route.query.eventId : 0
    );
    this.budgetId = parseInt(
      this.$route.query.budgetId ? this.$route.query.budgetId : 0
    );
    this.getData(this.mainEventId, this.eventId, this.budgetId);
    // this.formattofixed1();
  },
  methods: {
    getData(mainEventId, eventId, budgetId) {
      axios
        .get("http://localhost:" + this.port + "/expenses/types")
        .then((res) => {
          this.expenseTypes = res.data;
        });
      if (parseInt(budgetId) !== 0) {
        axios
          .get(
            "http://localhost:" + this.port + "/expenses/budgets/" + budgetId
          )
          .then((res) => {
            this.expensesData = res.data;
          })
          .catch(() => {});
      } else {
        if (parseInt(eventId) !== 0) {
          axios
            .get(
              "http://localhost:" +
                this.port +
                "/expenses/events/sub/" +
                eventId
            )
            .then((res) => {
              this.expensesData = res.data;
            })
            .catch(() => {});
        } else {
          axios
            .get(
              "http://localhost:" +
                this.port +
                "/expenses/events/" +
                mainEventId
            )
            .then((res) => {
              this.expensesData = res.data;
            })
            .catch(() => {});
        }
      }
      axios
        .get("http://localhost:" + this.port + "/events/100/filters")
        .then((res) => {
          for (let item of res.data) {
            if (item.eventId === eventId || item.eventId === mainEventId) {
              this.eventName = item.title;
            }
          }
          this.mainEventName = res.data.find((eventName) => {
            if (eventName.mainEventId === null) {
              return eventName;
            }
          });
          console.log(this.mainEventName.title);
        });
      let date = new Date();
      this.newDate =
        date.getFullYear().toString() +
        "-" +
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1).toString()
          : (date.getMonth() + 1).toString()) +
        "-" +
        date.getDate();
      axios
        .get("http://localhost:" + this.port + "/business/VENDOR/all")
        .then((res) => {
          this.vendors = res.data;
        });
    },
    changeData(id) {
      let expenseDate = window
        .$(".edit-suppliers" + id + " .expenseDate_input")
        .val();
      // let refType = window.$('.edit-suppliers'+id+' .refType_input').val()
      // let refId = window.$('.edit-suppliers'+id+' .refId_input').val()
      let refId = window.$(".edit-suppliers" + id + " .vendor_select").val();
      let amount = window.$(".edit-suppliers" + id + " .amount_input").val();
      let notes = window.$(".edit-suppliers" + id + " .notes_input").val();
      let status = window.$(".edit-suppliers" + id + " .status_input").val();
      let refType;
      for (let item of this.vendors) {
        if (item.businessId === refId) {
          refType = item.businessType;
        }
      }
      let requestData = {};
      for (let item of this.expensesData) {
        if (item.expenseId === id) {
          requestData.budgetId = item.budgetId;
          requestData.expenseId = item.expenseId;
          requestData.eventId = item.eventId;
          requestData.mainEventId = item.mainEventId;
          requestData.expenseDate = expenseDate;
          requestData.expenseType = item.expenseType;
          requestData.refType = refType;
          requestData.refId = refId;
          requestData.amount = amount;
          requestData.notes = notes;
          requestData.status = status;
        }
      }
      axios
        .put("http://localhost:" + this.port + "/expenses/" + id, requestData)
        .then(() => {
          this.getData(this.mainEventId, this.eventId, this.budgetId);
        });
    },
    addData() {
      if (this.newVendorName === "") {
        this.$toastr.error("Please add Vendor Name");
        return;
      } else if (this.newBudgetAmount <= 0) {
        this.$toastr.error("Please add budget amount");
        return;
      } else if (this.newExpenseType === "") {
        console.log(typeof this.newBudgetAmount);
        this.$toastr.error("Please select Expense Type");
        return;
      }
      for (let item of this.vendors) {
        if (item.businessId === this.newRefId) {
          this.newRefType = item.businessType;
        }
      }
      let requestData = {
        expenseDate: this.newDate,
        budgetId: this.budgetId,
        mainEventId: this.mainEventId,
        eventId: this.eventId,
        amount: this.newBudgetAmount,
        expenseType: this.newExpenseType,
        refType: this.newRefType,
        refId: this.newRefId,
        status: this.newStatus,
      };
      axios
        .post("http://localhost:" + this.port + "/expenses", requestData)
        .then(() => {
          this.getData(this.mainEventId, this.eventId, this.budgetId);
          window.$("button.close").trigger("click");
        });
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
    goBudget() {
      if (!this.eventId) {
        this.$router.replace({
          path: "planner_budget",
          query: { mainEventId: this.mainEventId, eventId: this.eventId },
        });
      } else {
        this.$router.replace({
          path: "planner_budget",
          query: { mainEventId: this.mainEventId },
        });
      }
    },
    deleteExpense(id) {
      var result = confirm("Want to delete?");
      if (result) {
        axios
          .delete("http://localhost:" + this.port + "/expenses/" + id)
          .then(() => {
            this.getData(this.mainEventId, this.eventId, this.budgetId);
          });
      }
    },
    formattofixed(id) {
      let value = window.$(".edit-suppliers" + id + " .amount_input").val();
      window
        .$(".edit-suppliers" + id + " .amount_input")
        .val(parseFloat(value).toFixed(2));
    },
    formattofixed1() {
      console.log(typeof this.newBudgetAmount);
      this.newBudgetAmount = parseFloat(
        this.newBudgetAmount.toString()
      ).toFixed(2);
      console.log(typeof this.newBudgetAmount);
    },
    scroll2top() {
      window.$("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    },
    searchFunc() {
      axios
        .get(
          "http://localhost:" +
            this.port +
            "/expenses/search?eventId=" +
            this.mainEventId +
            "&status=" +
            this.status +
            "&startDate=" +
            this.startDate +
            "&endDate=" +
            this.endDate +
            "&expenseType=" +
            this.expenseType
        )
        .then((res) => {
          this.expensesData = res.data;
        });
    },
  },
};
</script>

<style scoped lang="scss">
div#dropdown_panel {
  float: right;
}
ul#budget_panel {
  margin-top: 5px;
}
.category-title {
  font-size: 25px !important;
}
div.date {
  min-width: 15%;
}
div.event {
  min-width: 20%;
}
div.refId {
  min-width: 10%;
}
div.amount {
  min-width: 13%;
}
div.status {
  min-width: 12%;
}
div.edit-icon {
  min-width: 30%;
}
.content {
  font-size: 18px;
  font-weight: 500;
}
.editItem {
  text-align: right;
  height: 40px;
  margin-top: -6px;
}
button#back_btn {
  margin-right: 10px;
}
@media only screen and (max-width: 1000px) {
  .toggle_button {
    display: none;
  }
  .toggle_icon {
    display: block;
  }
  div.date {
    min-width: 15%;
  }
  div.event {
    min-width: 25%;
  }
  div.refId {
    min-width: 15%;
  }
  div.amount {
    min-width: 18%;
  }
  div.status {
    min-width: 12%;
  }
  div.edit-icon {
    min-width: 15%;
  }
  #search_btn {
    display: none;
  }
  #search_icon {
    display: block;
  }
}
@media only screen and (min-width: 1000px) {
  .toggle_button {
    display: block;
  }
  .toggle_icon {
    display: none;
  }
  #search_btn {
    display: block;
  }
  #search_icon {
    display: none;
  }
}
</style>
