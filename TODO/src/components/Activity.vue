<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="robots" content="" />
    <meta name="description" content="Wedding Manager" />
    <meta property="og:title" content="Wedding Manager" />
    <meta property="og:description" content="Wedding Manager" />
    <meta property="og:image" content="" />
    <meta name="format-detection" content="telephone=no">

    <!-- FAVICONS ICON -->
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />

    <!-- PAGE TITLE HERE -->
    <title>Wedding Manager</title>

    <!-- MOBILE SPECIFIC -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--[if lt IE 9]>
	<script src="js/html5shiv.min.js"></script>
	<script src="js/respond.min.js"></script>
	<![endif]-->

    <!-- STYLESHEETS -->
    <link rel="stylesheet" type="text/css" href="css/plugins.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/templete.css">
    <link rel="stylesheet" type="text/css" href="css/responsive.min.css">
    <link class="skin" rel="stylesheet" type="text/css" href="css/skin/skin-1.css">

  </head>

  <body id="bg">
    <div class="page-wraper">
    <div class="section-full content-inner bg-gray">
      <div class="" style="padding: 0px 30px;">
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
													<a href="javascript:void(0);">Assignment Details</a>
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
                          <a href="javascript:void(0);" class="search-link">{{ scope.assignedToDetails }}</a>
                        </div>
                        <div class="budget-date">
                          <h6 class="title">{{ getDate(scope.taskDate) }}</h6>
                          <a href="javascript:void(0);" class="search-link">{{ getDate(scope.completedOn) }}</a>
                        </div>
                        <div class="budget-estimate">
                          <h6>{{ scope.taskType }}</h6>
                        </div>
                        
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
                              <el-form-item class="col-md-3" prop="title">
                                <el-input placeholder="Title" v-model="selectedItem.title" size="medium">
                                </el-input>
                              </el-form-item>

                              <el-form-item class="col-md-3" prop="taskDate">
                                <el-date-picker v-model="selectedItem.taskDate" type="date" :picker-options="pickerOptions"
                                  placeholder="TaskDate">
                                </el-date-picker>
                              </el-form-item>

                              <el-form-item class="col-md-3" prop="taskType">
                                <el-select v-model="selectedItem.taskType" :multiple="false" placeholder="TaskType">
                                  <el-option v-for="(item, index) in selectOptions" :key="index" :label="item.label"
                                    :value="item.value"></el-option>
                                </el-select>
                              </el-form-item>


                              <el-form-item class="col-md-3" prop="assignedTo1">
                                <el-input placeholder="AssignedTo1" v-model="selectedItem.assignedTo1" size="medium">
                                </el-input>
                              </el-form-item>

                              <el-form-item class="col-md-3" prop="assignedTo2">
                                <el-input placeholder="AssignedTo2" v-model="selectedItem.assignedTo2" size="medium">
                                </el-input>
                              </el-form-item>

                              <el-form-item class="col-md-3" prop="assignedToDetails">
                                <el-input placeholder="AssignedToDetails" v-model="selectedItem.assignedToDetails"
                                  size="medium">
                                </el-input>
                              </el-form-item>

                              <el-form-item class="col-md-3" prop="details">
                                <el-input placeholder="Details" v-model="selectedItem.details" size="medium">
                                </el-input>
                              </el-form-item>

                              <!-- <el-form-item class="col-md-3">
                                <el-date-picker v-model="selectedItem.completionDate" type="date"
                                  :picker-options="pickerOptions" placeholder="CompletionDate">
                                </el-date-picker>
                              </el-form-item> -->

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

    <el-dialog :visible.sync="dialogVisible">
      <h3 style="text-align: center;">Add a new item</h3>
      <el-form :model="activity" ref="form" :rules="formRules" style="margin-top: 30px;">
        <div class="row">
          <el-form-item class="col-md-6" prop="title">
            <label>Title</label>
            <el-input placeholder="Title" v-model="activity.title" size="medium">
            </el-input>
          </el-form-item>

          <el-form-item class="col-md-6" prop="details">
            <el-input placeholder="Details" v-model="activity.details" size="medium">
            </el-input>
          </el-form-item>

          <el-form-item class="col-md-4" prop="taskDate">
            <el-date-picker v-model="activity.taskDate" type="date" :picker-options="pickerOptions"
              placeholder="TaskDate">
            </el-date-picker>
          </el-form-item>

          <el-form-item class="col-md-4" prop="taskType">
            <el-select v-model="activity.taskType" :multiple="false" placeholder="TaskType">
              <el-option v-for="(item, index) in selectOptions" :key="index" :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </el-form-item>


          <el-form-item class="col-md-4" prop="assignedTo1">
            <el-input placeholder="AssignedTo1" v-model="activity.assignedTo1" size="medium">
            </el-input>
          </el-form-item>

          <el-form-item class="col-md-4" prop="assignedTo2">
            <el-input placeholder="AssignedTo2" v-model="activity.assignedTo2" size="medium">
            </el-input>
          </el-form-item>

          <el-form-item class="col-md-8" prop="assignedToDetails">
            <el-input placeholder="AssignedToDetails" v-model="activity.assignedToDetails" size="medium">
            </el-input>
          </el-form-item>

          <!-- <el-form-item class="col-md-3">
            <el-date-picker v-model="activity.completionDate" type="date" :picker-options="pickerOptions"
              placeholder="CompletionDate">
            </el-date-picker>
          </el-form-item> -->

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

    </div>
  </body>

  </html>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import uuid from 'uuid/v4'
import axios from 'axios'

export default {
  name: 'Activity',
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
        assignedToDetails: '',
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
        assignedToDetails: '',
        details: '',
        // completionDate: null,
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
          // { min: 3, max: 30, message: "Name length should be between 3 and 30 characters", trigger: "blur" }
        ],
        taskDate: [
          { required: true, message: "TaskDate is required", trigger: "blur" },
        ],
        taskType: [
          { required: true, message: "TaskType is required", trigger: "change" },
        ],
        assignedToDetails: [
          { min: 0, max: 100, message: "AssignedToDetails length should be less than 100 characters", trigger: "blur" }
        ],
        details: [
          { min: 0, max: 100, message: "Details length should be less than 100 characters", trigger: "blur" }
        ],
        assignedToDetails: [
          { min: 0, max: 100, message: "AssignedToDetails length should be less than 100 characters", trigger: "blur" }
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
    }
  },
  created() {
    this.mainEventId = this.$route.query.mainEventId;
    this.eventId = this.$route.query.eventId;
  },
  mounted() {
    this.getActivities();
  },
  methods: {

    getActivities() {
      if(this.eventId != undefined) {
        axios.get('http://localhost:8080/todos/events/sub/' + this.eventId).then((res) => {
          this.activities = res.data.map((val) => {
            val.edit = false;
            return val;
          })
        }).catch((err) => {
          console.log(err)
        })
      }
      else {
        axios.get('http://localhost:8080/todos/events/' + this.mainEventId).then((res) => {
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
        assignedToDetails: '',
        wrong: false,
      };
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
          assignedToDetails: this.activity.assignedToDetails,
          completed: false,
          edit: false,
          status: "PENDING",
        };

        const data = {
          eventId: this.eventId,
          mainEventId: this.mainEventId,
          status: "PENDING",
          taskDate: this.getDate(this.activity.taskDate),
          taskType: this.activity.taskType,
          title: this.activity.title,
          assignedTo1: this.activity.assignedTo1,
          assignedTo2: this.activity.assignedTo2,
          assignedToDetails: this.activity.assignedToDetails,
          details: this.activity.details,
          // completionDate: this.getDate(this.activity.completionDate),
          completedOn: this.getDate(this.activity.completedOn),
          completed: false,
        }

        axios.post('http://localhost:8080/todos', data).then((res) => {
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
          assignedToDetails: this.selectedItem.assignedToDetails,
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
              val.assignedToDetails = this.selectedItem.assignedToDetails;
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
      axios.delete('http://localhost:8080/todos/' + item.id).then((res) => {
        this.activities = this.activities.filter((val) => val.id !== item.id);
      }).catch((err) => {
        console.log(err)
      })
    },

    completeActivity(item) {
      this.activities = this.activities.map(val => {
        if (val.id == item.id) {

          const data = {
            eventId: this.eventId,
            mainEventId: this.mainEventId,
            status: !val.completed ? 'COMPLETE' : 'PENDING',
            taskDate: item.taskDate,
            taskType: item.taskType,
            title: item.title,
            assignedTo1: item.assignedTo1,
            assignedTo2: item.assignedTo2,
            assignedToDetails: item.assignedToDetails,
            details: item.details,
            completed: !val.completed,
            completedOn: !val.completed ? this.getDate(new Date()) : null,
          };

          axios.put('http://localhost:8080/todos/' + item.id, data).then((res) => {
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
    }
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
  word-wrap: break-word;
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