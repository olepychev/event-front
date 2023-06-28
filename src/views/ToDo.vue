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
        <!-- <div class="section-full bg-white plan-tools-bx">
          <div class="container">
            <ul class="plan-tools-list">
              <li
                v-for="subevent in subeventsHeaderData"
                @click="getSubEventData(subevent.eventId)"
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
        </div> -->
        <!-- Planner advice End -->

        <TopSubEvent :mainEventId="this.mainEventId" :defaultSelect="this.eventId" @click-subevent="getSubEventData"></TopSubEvent>

        <!-- contact area -->
        <div class="section-full content-inner bg-gray">
          <div class="container">
            <div class="row column-reverse">
              <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12">
                <div style="padding: 0px 30px;">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12">
                      <div class="planner-box m-b30">
                        <div class="content-box">
                          <div class="planner-budget-bx" style="width: 100% !important">
                            <div class="planner-category">
                              <h3 class="category-title">Todo</h3>
                            </div>
                            <ul>
                              <li class="main-budget-head">
                                <div class="budget-bx">
                                  
                                  <div class="budget-head">
                                    <h4 class="title">Title</h4>
                                    <a href="javascript:void(0);">Details</a>
                                  </div>
                                  <div class="budget-head">
                                    <h4 class="title">Assigned To</h4>
                                  </div>
                                  <div class="budget-date">
                                    <h4 class="title">Due On</h4>
                                    <a href="javascript:void(0);" class="search-link">Completed On</a>
                                  </div>
                                  <div class="budget-estimate"> 
                                    <h4 class="title">Task Type</h4>
                                  </div>
                                  <div class="budget-actual">
                                    <h4 class="title">Status</h4>
                                  </div>
                                  <div class="edit-icon"></div>
                                </div>
                                <div class="edit-notes collapse" id="budget">
                                  <form>
                                    <div class="input-group mb-1">
                                      <input type="text" class="form-control" placeholder="£10,067">
                                      <div class="input-group-append">
                                        <button class="btn gradient" type="button">Save</button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </li>

                              <li v-for="scope in activities">
                                <div class="budget-bx">
                                  <div class="budget-head">
                                    <h4 class="title">{{ scope.title }}</h4>
                                    <a href="javascript:void(0);" class="search-link">{{ scope.details }}</a>
                                  </div>
                                  <div class="budget-head">
                                    <h4 class="title">{{ scope.assignedTo1 }}{{scope.assignedTo2 !='' ? ' / ' : ''}}{{ scope.assignedTo2 }}</h4>
                                  </div>
                                  <div class="budget-date">
                                    <h6 class="title">{{ getDate(scope.taskDate) }}</h6>
                                    <a href="javascript:void(0);" class="search-link">{{ getDate(scope.completedOn) }}</a>
                                  </div>
                                  
                                  <h6 class="budget-estimate">{{ scope.taskType }}</h6>
                                  <h6 class="budget-actual">{{ scope.status }}</h6>
                                  
                                  <div class="edit-icon">
                                    <el-button type="primary" icon="el-icon-edit" circle @click="editActivity(scope)" size="small">
                                    </el-button>

                                    <el-button type="success" icon="el-icon-check" @click="completeActivity(scope)" circle
                                      size="small" v-if="!scope.completed">
                                    </el-button>

                                    <el-button type="info" icon="el-icon-close" @click="completeActivity(scope)" circle
                                      size="small" v-if="scope.completed">
                                    </el-button>

                                    <el-button type="danger" icon="el-icon-delete" @click="removeActivity(scope)" circle
                                      size="small">
                                    </el-button>
                                  </div>

                                </div>
                                <div class="edit-notes" v-if="scope.edit">
                                  <el-form :model="selectedItem" ref="saveForm" :rules="formRules">
                                    <div style="display: flex;">
                                      <div class="row" style="width: -webkit-fill-available; padding-right:20px; row-gap: 20px">
                                        <el-form-item class="col-md-4" prop="title">
                                          <el-input placeholder="Title" v-model="selectedItem.title" size="medium">
                                          </el-input>
                                        </el-form-item>

                                        <el-form-item class="col-md-4" prop="taskDate">
                                          <el-date-picker v-model="selectedItem.taskDate" type="date" :picker-options="pickerOptions"
                                            placeholder="TaskDate">
                                          </el-date-picker>
                                        </el-form-item>

                                        <el-form-item class="col-md-4" prop="taskType">
                                          <el-select v-model="selectedItem.taskType" :multiple="false" placeholder="TaskType">
                                            <el-option v-for="(item, index) in selectOptions" :key="index" :label="item.label"
                                              :value="item.value"></el-option>
                                          </el-select>
                                        </el-form-item>


                                        <el-form-item class="col-md-4" prop="assignedTo1">
                                          <el-input placeholder="AssignedTo1" v-model="selectedItem.assignedTo1" size="medium" maxlength="20">
                                          </el-input>
                                        </el-form-item>

                                        <el-form-item class="col-md-4" prop="assignedTo2">
                                          <el-input placeholder="AssignedTo2" v-model="selectedItem.assignedTo2" size="medium" maxlength="20">
                                          </el-input>
                                        </el-form-item>


                                        <el-form-item class="col-md-4" prop="details">
                                          <el-input placeholder="Details" v-model="selectedItem.details" size="medium" maxlength="100">
                                          </el-input>
                                        </el-form-item>

                                      </div>

                                      <div class="input-group-append" style="width: 100px; height: 40px;">
                                        <button class="btn green" type="button" @click="updateActivity(false)">Save</button>
                                      </div>
                                    </div>
                                  </el-form>
                                </div>
                              </li>

                              <li>
                                <div class="budget-bx">
                                  <button class="btn add-budget-list-item gradient" @click="showAddDialog()">+ Add new item</button>
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
                    <li><a @click="openBudgetPage">Budget</a></li>
                    <li class="active">
                      <a href="#">ToDo</a>
                    </li>
                    <li>
                      <a href="#" @click="openAddSubeventPage">Add Event</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- contact area end -->

        <el-dialog :visible.sync="dialogVisible">
          <h3 style="text-align: center;">Add a new item</h3>
          <el-form :model="activity" ref="form" :rules="formRules" style="margin-top: 30px;">
            <div class="row">
              <el-form-item class="col-md-6" prop="title">
                <el-input placeholder="Title" v-model="activity.title" size="medium">
                </el-input>
              </el-form-item>

              <el-form-item class="col-md-6" prop="details">
                <el-input placeholder="Details" v-model="activity.details" size="medium" maxlength="100">
                </el-input>
              </el-form-item>

              <el-form-item class="col-md-6" prop="taskDate">
                <el-date-picker v-model="activity.taskDate" type="date" :picker-options="pickerOptions"
                  placeholder="TaskDate">
                </el-date-picker>
              </el-form-item>

              <el-form-item class="col-md-6" prop="taskType">
                <el-select v-model="activity.taskType" :multiple="false" placeholder="TaskType">
                  <el-option v-for="(item, index) in selectOptions" :key="index" :label="item.label"
                    :value="item.value"></el-option>
                </el-select>
              </el-form-item>


              <el-form-item class="col-md-6" prop="assignedTo1">
                <el-input placeholder="AssignedTo1" v-model="activity.assignedTo1" size="medium" maxlength="20">
                </el-input>
              </el-form-item>

              <el-form-item class="col-md-6" prop="assignedTo2">
                <el-input placeholder="AssignedTo2" v-model="activity.assignedTo2" size="medium" maxlength="20">
                </el-input>
              </el-form-item>

            </div>

            <el-row style="justify-content: center; margin: auto; display: flex; gap: 20px;">
              <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addActivityMethod()">
                Add
              </el-button>

              <el-button type="danger" icon="el-icon-circle-plus-outline" @click="showAddDialog()">
                Cancel
              </el-button>
            </el-row>
          </el-form>

        </el-dialog>

        <el-dialog :visible.sync="editConfirmVisible">
          <h3>Save changes</h3>
          
          <el-row style="margin-top: 30px;">
            <el-button type="primary" icon="el-icon-circle-plus-outline" @click="saveEdit()">
              Save
            </el-button>

            <el-button type="danger" icon="el-icon-circle-plus-outline" @click="discardEdit()">
              Discard
            </el-button>
          </el-row>

        </el-dialog>

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
import TopSubEvent from "../components/TopSubEvent.vue";
import moment from 'moment'
window.$ = require("jquery");
window.JQuery = require("jquery");

import axios from "axios";
export default {
  name: 'ToDo',
  components: {
    Header,
    Footer,
    TopSubEvent
  },
  data() {
    return {
      activity: {
        title: '',
        taskDate: null,
        taskType: '',
        assignedTo1: '',
        assignedTo2: '',
        details: '',
        // completionDate: null,
        completedOn: null,
        wrong: false,
        mainEventId: null,
        eventId: null,
      },
      errorMessage: '',
      selectOptions: [
        { label: 'Quote', value: 'Quote' },
        { label: 'Call', value: 'Call' },
        { label: 'Appointment', value: 'Appointment' }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      dialogVisible: false,
      selectedItem: {
        title: '',
        taskDate: '',
        taskType: '',
        assignedTo1: '',
        assignedTo2: '',
        details: '',
        edit: false,
        wrong: false,
        status: '',
        mainEventId: null,
        eventId: null,
      },
      activities: [],
      formRules: {
        title: [
          { required: true, message: "Name is required", trigger: "blur" },
        ],
        taskDate: [
          { required: true, message: "TaskDate is required", trigger: "blur" },
        ],
        taskType: [
          { required: true, message: "TaskType is required", trigger: "change" },
        ],

        details: [
          { min: 0, max: 100, message: "Details length should be less than 100 characters", trigger: "blur" }
        ],

        assignedTo1: [
          { min: 0, max: 20, message: "AssignedTo1 length should be less than 20 characters", trigger: "blur" }
        ],
        assignedTo2: [
          { min: 0, max: 20, message: "AssignedTo2 length should be less than 20 characters", trigger: "blur" }
        ]
      },
      editId: null,
      selectedEditId: null,
      editConfirmVisible: false,
      mainEventId: null,
      eventId: null,
      port: null,
      subeventsHeaderData: {},
      selected: null,
    }
  },
  created() {
    this.mainEventId = this.$route.query.mainEventId;
    this.port = location.port;
    this.eventId = this.$route.query.eventId;
    this.selected = this.eventId;
  },
  mounted() {
    this.getActivities();
  },
  methods: {
    getSubEventData(subId) {
      this.selected = subId;
      this.getActivities();
    },

    getActivities() {
      if(this.selected != null) {
        axios.get("http://localhost:" + this.port + '/todos/events/sub/' + this.selected).then((res) => {
          this.activities = res.data.map((val) => {
            val.edit = false;
            return val;
          })
        }).catch((err) => {
          console.log(err)
        })
      }
      else {
        axios.get("http://localhost:" + this.port + "/todos/events/" + this.mainEventId).then((res) => {
          this.activities = res.data.map((val) => {
            val.edit = false;
            return val;
          })
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    showAddDialog() {
      this.activity = {
        title: '',
        taskDate: null,
        taskType: '',
        assignedTo1: '',
        assignedTo2: '',
        details: '',
        // completionDate: null,
        completedOn: null,
        wrong: false,
      };
      this.$refs.form && this.$refs.form.resetFields();
      this.dialogVisible = !this.dialogVisible;
    },
    async addActivityMethod() {
      try {
        await this.$refs.form.validate();
        const activity = {
          title: this.activity.title,
          taskDate: this.activity.taskDate,
          taskType: this.activity.taskType,
          assignedTo1: this.activity.assignedTo1,
          assignedTo2: this.activity.assignedTo2,
          details: this.activity.details,
          // completionDate: this.getDate(this.activity.completionDate),
          completedOn: this.activity.completedOn,
          completed: false,
          edit: false,
          status: "PENDING",
        };

        const data = {
          eventId: this.selected,
          mainEventId: this.mainEventId,
          status: "PENDING",
          taskDate: this.getDate(this.activity.taskDate),
          taskType: this.activity.taskType,
          title: this.activity.title,
          assignedTo1: this.activity.assignedTo1,
          assignedTo2: this.activity.assignedTo2,
          details: this.activity.details,
          // completionDate: this.getDate(this.activity.completionDate),
          completedOn: this.getDate(this.activity.completedOn),
          completed: false,
        }

        axios.post('http://localhost:' + this.port + '/todos', data).then((res) => {
          activity.id = res.data;
          this.activities.push(activity);
          this.activity.wrong = false;
          this.$refs.form.resetFields();
          this.dialogVisible = false;
        }).catch((err) => {
          console.log(err)
        })
      } catch (error) {
        console.log("Validation Error: ", error);
      }

    },

    async updateActivity(flag) {
      try{
        await this.$refs.saveForm[0].validate();
        const data = {
          eventId: this.selectedItem.eventId,
          mainEventId: this.selectedItem.mainEventId,
          status: this.selectedItem.status,
          taskDate: this.getDate(this.selectedItem.taskDate),
          taskType: this.selectedItem.taskType,
          title: this.selectedItem.title,
          assignedTo1: this.selectedItem.assignedTo1,
          assignedTo2: this.selectedItem.assignedTo2,
          details: this.selectedItem.details,
          // completionDate: this.getDate(this.selectedItem.completionDate),
          completedOn: this.getDate(this.selectedItem.completedOn),
          completed: this.selectedItem.completed
        };
  
        axios.put('http://localhost:8080/todos/' + this.selectedItem.id, data).then((res) => {
          this.activities = this.activities.map(val => {
            if (val.id == this.selectedItem.id) {
              val.status = this.selectedItem.status;
              val.taskDate = this.getDate(this.selectedItem.taskDate);
              val.taskType = this.selectedItem.taskType;
              val.title = this.selectedItem.title;
              val.assignedTo1 = this.selectedItem.assignedTo1;
              val.assignedTo2 = this.selectedItem.assignedTo2;
              val.details = this.selectedItem.details;
              // val.completionDate = this.getDate(this.selectedItem.completionDate);
              val.completedOn = this.getDate(this.selectedItem.completedOn);
              val.completed = this.selectedItem.completed;
              val.eventId = this.selectedItem.eventId;
              val.mainEventId = this.selectedItem.mainEventId;
              val.edit = false;
            }
            return val;
          });
  
          this.dialogVisible = false;
          if(flag) {
            this.activites = this.activities.map(val => {
              if(val.id == this.selectedEditId) {
                val.edit = !val.edit;
                this.editId = val.id;
                Object.assign(this.selectedItem, val);
              }
              return val;
            })      
            this.editConfirmVisible = false;
          } else {
            this.editId = null;
          }
        }).catch((err) => {
          console.log(err)
        })
      }
      catch (error) {
        console.log("Validation Error: ", error);
      }
    },

    closeDialog() {
      this.dialogVisible = false;
    },
    discardEdit() {
      let eId = this.editId;
      this.activites = this.activities.map(val => {
        if(val.id == this.selectedEditId) {
          val.edit = !val.edit;
          this.editId = val.id;
          Object.assign(this.selectedItem, val);
        }
        else if(val.id == eId) {
          val.edit = !val.edit;
        }
        return val;
      })      
      this.editConfirmVisible = false;
    },

    async saveEdit() {
      this.updateActivity(true);
    },
    editActivity(item) {
      this.selectedEditId = item.edit ? null: item.id;
      // console.log(this.selectedEditId, this.editId, item.id)
      if(!item.edit && this.editId != null && this.editId != item.id) {
        this.editConfirmVisible = true;
      }
      else 
      {
        item.edit = !item.edit;
        this.editId = item.edit ? item.id : null;
        Object.assign(this.selectedItem, item);
      }
    },

    removeActivity(item) {
      axios.delete('http://localhost:' + this.port + '/todos/' + item.id).then((res) => {
        this.activities = this.activities.filter((val) => val.id !== item.id);
      }).catch((err) => {
        console.log(err)
      })
    },

    completeActivity(item) {
      this.activities = this.activities.map(val => {
        if (val.id == item.id) {

          const data = {
            eventId: this.selected,
            mainEventId: this.mainEventId,
            status: !val.completed ? 'COMPLETE' : 'PENDING',
            taskDate: item.taskDate,
            taskType: item.taskType,
            title: item.title,
            assignedTo1: item.assignedTo1,
            assignedTo2: item.assignedTo2,
            details: item.details,
            completed: !val.completed,
            completedOn: !val.completed ? this.getDate(new Date()) : null,
          };

          axios.put('http://localhost:' + this.port + '/todos/' + item.id, data).then((res) => {
            val.completed = !val.completed;
            item.completedOn = val.completed ? this.getDate(new Date()) : null;
            item.status = val.completed ? 'COMPLETE' : 'PENDING';
          }).catch((err) => {
            console.log(err)
          })
        }
        return val;
      })
    },

    tableRowColor({ row, rowIndex }) {
      if (row.completed === true) {
        return 'success-row';
      } else {
        return 'warning-row'
      }
    },

    getDate(item) {
      return item ? moment(item).format('YYYY-MM-DD') : item;
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

    scroll2top() {
      window.$("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    },
  }
}
</script>


<style>
.main {
  text-align: center;
}

.wrongNotification {
  margin-bottom: 0.2rem;
  width: 80%;
  margin-left: 10%;
  text-align: center
}

div.cell {
  text-align: center;
}

.counterSection {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.budget-estimate {
  word-break: break-all;
  width: 9% !important;
}

.budget-date {
  word-wrap: break-word;
  width: 20% !important;
}

.el-dialog {
  border-radius: 8px !important;
  /* height: 350px; */
}

.el-date-editor.el-input {
  width: 100% !important;
}

.el-input__inner {
  height: 40px !important;
}

.el-dialog__body .row {
  row-gap: 20px;
}

.el-select {
  width: 100%;
}
</style>