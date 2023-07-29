<template>
  <div>
    <div class="page-wraper">
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
        </div>

        <div class="section-full content-inner bg-gray">
          <div class="container">
            <div class="row column-reverse">
              <div style="width: 100%;">
                <div class="section-full wedding-venues-details bg-gray">
                  <div class="container">
                    <div class="row">
                      <!-- Left part start -->
                      <div v-for="item in eventList" class="mt-2 col-xl-12 col-lg-12 col-md-12 p-b30" style="border-radius: 8px; box-shadow: 5px 5px 30px 0 rgba(0,0,0,0.1);">

                                              
                        <div class="details-media-bx" >
                          <div class="reviews-info">
                              <div class="reviews-user mt-4 ">
                                <h3 class="text-left">{{ item.mainEvent.title }}</h3>
                              </div>
                              <div class="reviews-rating mt-4">
                                <button class="btn blue gradient radius-sm m-l10">Edit Event<i class="la la-pencil"></i></button>
                              </div>
                            </div>
                            <div class="reviews-content">
                              <div class="review-media">
                                <img src="images/review/thum3.jpg" alt="" />
                              </div>

                              <div class="row">
                                <div class="enquiries-box m-b30  col-sm-12 col-md-6">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th class="title-rsvps">Budget</th>
                                        <th class="edit-th">
                                          <div>
                                            <button class="btn blue gradient">Edit<i class="la la-pencil"></i></button>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="table-hr"></tr>
                                      <tr>
                                        <td class="guest-name">Budget</td>
                                        <td class="guest-invites">{{ item.budgetDto.budget.toLocaleString() }}</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Expenses</td>
                                        <td class="guest-invites">{{ item.budgetDto.usedBudget.toLocaleString() }}</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Left</td>
                                        <td class="guest-invites">{{ item.budgetDto.leftBudget.toLocaleString() }}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div class="enquiries-box m-b30  col-sm-12  col-md-6">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th class="title-rsvps">Tasks / Todos</th>
                                        <th class="edit-th">
                                          <button class="btn blue gradient">Edit<i class="la la-pencil"></i></button>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="table-hr"></tr>
                                      <tr>
                                        <td class="guest-name">Total</td>
                                        <td class="guest-invites">{{ item.taskDto.totalTasks }}</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Done</td>
                                        <td class="guest-invites">{{ item.taskDto.doneTasks }}</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">UpComing</td>
                                        <td class="guest-invites">{{ item.taskDto.upcomingTasks }}</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Due</td>
                                        <td class="guest-invites">{{ item.taskDto.dueTasks }}</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">OverDue</td>
                                        <td class="guest-invites">{{ item.taskDto.overDueTasks }}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          
                          <div class="featured-media">
                            
                            <div class="featured-gallery p-4 border mb-2" v-for="subItem in item.subEvents">
                              <div class="row" style="justify-content: space-between;">
                                <h4 class="text-left">{{ subItem.title }}</h4>
                                <button class="btn blue gradient radius-sm m-l10 float-right">Edit Event<i class="la la-pencil"></i></button>
                              </div>

                              <div class="row mt-4">
                                <div class="col-sm-12 col-md-4">
                                  <label><b>From: </b></label><span class="px-2">{{ subItem.fromDate }}</span>
                                </div>

                                <div class="col-sm-12 col-md-4">
                                  <label><b>Until: </b></label><span class="px-2">{{ subItem.toDate }}</span>
                                </div>

                                <div class="col-sm-12 col-md-4">
                                  <label><b>Venue: </b></label><span class="px-2">{{ subItem.location.address }}</span>
                                </div>
                              </div>
                              <div class="row column-reverse">
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th class="title-rsvps">Budget</th>
                                        <th class="edit-th">
                                          <button class="btn blue gradient">Edit<i class="la la-pencil"></i></button>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="table-hr"></tr>
                                      <tr>
                                        <td class="guest-name">Budget</td>
                                        <td class="guest-invites">{{ subItem.budget.toLocaleString() }}</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Expenses</td>
                                        <td class="guest-invites">8,000</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Left</td>
                                        <td class="guest-invites">7,000</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th class="title-rsvps">Guests</th>
                                        <th class="edit-th">
                                          <button class="btn blue gradient">Edit<i class="la la-pencil"></i></button>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="table-hr"></tr>
                                      <tr>
                                        <td class="guest-name">Invited</td>
                                        <td class="guest-invites">60</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Attending</td>
                                        <td class="guest-invites">22</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">May Be</td>
                                        <td class="guest-invites">18</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Not Attending</td>
                                        <td class="guest-invites">18</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Unconfirmed</td>
                                        <td class="guest-invites">18</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th class="title-rsvps">Invites</th>
                                        <th class="edit-th">
                                          <button class="btn blue gradient">Edit<i class="la la-pencil"></i></button>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="table-hr"></tr>
                                      <tr>
                                        <td class="guest-name">Total</td>
                                        <td class="guest-invites">60</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Sent</td>
                                        <td class="guest-invites">22</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">UnSent</td>
                                        <td class="guest-invites">18</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th class="title-rsvps">Tasks / Todos</th>
                                        <th class="edit-th">
                                          <button class="btn blue gradient">Edit<i class="la la-pencil"></i></button>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="table-hr"></tr>
                                      <tr>
                                        <td class="guest-name">Total</td>
                                        <td class="guest-invites">60</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Done</td>
                                        <td class="guest-invites">22</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">UpComing</td>
                                        <td class="guest-invites">18</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">Due</td>
                                        <td class="guest-invites">18</td>
                                      </tr>

                                      <tr>
                                        <td class="guest-name">OverDue</td>
                                        <td class="guest-invites">18</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubEventList",
  components: {
  },
  data() {
    return {
      eventList: [],
      port: null,
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:" +
          this.port +
          "/events/dashboard"
      )
      .then((res) => {
        this.eventList = res.data;
      });
  },
  created() {
    this.port = location.port;
  },

  methods: {
  
  },
};
</script>

<style scoped>
.featured-lists ul {
  border-top: 0px !important;
}

table {
  border: 1px solid lightgray;
}

table th {
  text-align: center;
}

.table td, .table th {
  border: 1px solid lightgray;  
}

.edit-th button {
  width: 100px;
  border-radius: 0px !important;
}

.edit-th {
  padding: 0px;
  width: 100px !important;
}

table {
  width: 100%;
}

.btn {
  padding-left: 15px;
  padding-right: 15px;
}

thead tr {
  background-color: #f8f9fa;
}
</style>
