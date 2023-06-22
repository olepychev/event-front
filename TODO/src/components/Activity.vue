<template>
  <div class="main">
    <h1>ToDo APP</h1>
    <div v-if="isEmpty">
      <el-alert
        title="There are not activities at this moment"
        type="info"
        :center="true"
        show-icon
        :closable="false">
      </el-alert>
      </div>
      <div v-else>
        <el-table
          :data="activities"
          :row-class-name="tableRowColor">

            <el-table-column
              prop="title"
              label="Title">
            </el-table-column>

            <el-table-column
              label="TaskDate">
              <template slot-scope="scope" v-if="scope.row.taskDate != ''">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{getDate(scope.row.taskDate)}}</span>
              </template>
            </el-table-column>

            <el-table-column
              prop="taskType"
              label="TaskType">
            </el-table-column>

            <el-table-column
              prop="assignedTo1"
              label="AssignedTo1">
            </el-table-column>

            <el-table-column
              prop="assignedTo2"
              label="AssignedTo2">
            </el-table-column>

            <el-table-column
              prop="assignedToDetails"
              label="AssignedToDetails">
            </el-table-column>

            <el-table-column
              prop="details"
              label="Details">
            </el-table-column>

            <el-table-column
              label="DeferredUntil">
              <template slot-scope="scope" v-if="scope.row.deferredUntil != null">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{getDate(scope.row.deferredUntil)}}</span>
              </template>
            </el-table-column>

            <el-table-column
              label="CompletedOn">
              <template slot-scope="scope" v-if="scope.row.completedOn != null">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{getDate(scope.row.completedOn)}}</span>
              </template>
            </el-table-column>

            <el-table-column
              prop="status"
              label="Status">
            </el-table-column>

            <el-table-column
            label="Actions">
              <template slot-scope="scope">
                <el-button type="primary"
                  icon="el-icon-edit"
                  @click="editActivity(scope.row)" 
                  circle
                  size="small">
                </el-button>

                <el-button type="danger"
                  icon="el-icon-delete"
                  @click="removeActivity(scope.row)" 
                  circle
                  size="small">
                </el-button>

                <el-button
                  type="success"
                  icon="el-icon-check"
                  circle @click="completeActivity(scope.row)"
                  size="small">
                </el-button>
              </template>
            </el-table-column>

        </el-table>
      </div>

      <div>
        <el-row type="flex" justify="center" class="counterSection">
          <el-col :span="4">
            Completed :
          </el-col>
          <el-col :span="2">
            {{completed}}
          </el-col>
          <el-col :span="3">
            Total :
          </el-col>
          <el-col :span="2">
            {{total}}
          </el-col>
        </el-row>
      </div>
    <div v-if="isWrongActivity" class="wrongNotification">
      <el-alert
        :title="errorMessage"
        type="error"
        :center="true"
        show-icon
        :closable="false">
      </el-alert>
    </div>

    <!-- ///////////////////// Insert //////////////////////////////// -->
    
    <div>
      <el-row>
        <el-col :span="3">
          Title:
        </el-col>

        <el-col :span="4">
          <el-input 
            placeholder="Please input the Title"
            v-model="activity.title" 
            size="medium">
          </el-input>
        </el-col>
        <el-col :span="3">
          TaskDate:
        </el-col>
        <el-col :span="4">
          <el-date-picker
            v-model="activity.taskDate"
            type="date"
            :picker-options="pickerOptions"
            placeholder="Pick a day">
          </el-date-picker>
        </el-col>

        <el-col :span="3">
          TaskType:
        </el-col>
        <el-col :span="4">
          <el-select v-model="activity.taskType" :multiple="false">
            <el-option v-for="(item, index) in selectOptions" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-col>

      </el-row>

      <el-row>
        <el-col :span="3">
          AssignedTo1:
        </el-col>

        <el-col :span="4">
          <el-input 
            placeholder="Please input the assignedTo1"
            v-model="activity.assignedTo1" 
            size="medium">
          </el-input>
        </el-col>
        <el-col :span="3">
          AssignedTo2:
        </el-col>
        <el-col :span="4">
          <el-input 
            placeholder="Please input the assignedTo2"
            v-model="activity.assignedTo2" 
            size="medium">
          </el-input>
        </el-col>

        <el-col :span="3">
          AssignedToDetails:
        </el-col>

        <el-col :span="4">
          <el-input 
            placeholder="Please input the assignedToDetails"
            v-model="activity.assignedToDetails" 
            size="medium">
          </el-input>
        </el-col>
      </el-row>

      <el-row>

        <el-col :span="3">
          Details:
        </el-col>
        <el-col :span="4">
          <el-input 
            placeholder="Please input the details"
            v-model="activity.details" 
            size="medium">
          </el-input>
        </el-col>

        <el-col :span="3">
          DeferredUntil:
        </el-col>

        <el-col :span="4">
          <el-date-picker
            v-model="activity.deferredUntil"
            type="date"
            :picker-options="pickerOptions"
            placeholder="Pick a day">
          </el-date-picker>
        </el-col>
        
      </el-row>

      <el-row>
      <el-button 
        type="primary"
        icon="el-icon-circle-plus-outline"
        circle
        @click="addActivityMethod()">
      </el-button>
      </el-row>
    </div>

    <el-dialog :visible.sync="dialogVisible">
      <div>
        <el-row>
          <el-col :span="3">
            Title:
          </el-col>

          <el-col :span="4">
            <el-input 
              placeholder="Please input the Title"
              v-model="selectedItem.title" 
              size="medium">
            </el-input>
          </el-col>
          <el-col :span="3">
            TaskDate:
          </el-col>
          <el-col :span="4">
            <el-date-picker
              v-model="selectedItem.taskDate"
              type="date"
              :picker-options="pickerOptions"
              placeholder="Pick a day">
            </el-date-picker>
          </el-col>
        
        </el-row>
        
        <el-row>
          <el-col :span="3">
            TaskType:
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectedItem.taskType" :multiple="false">
              <el-option v-for="(item, index) in selectOptions" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>

          <el-col :span="3">
            AssignedTo1:
          </el-col>

          <el-col :span="4">
            <el-input 
              placeholder="Please input the assignedTo1"
              v-model="selectedItem.assignedTo1" 
              size="medium">
            </el-input>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="3">
            AssignedTo2:
          </el-col>
          <el-col :span="4">
            <el-input 
              placeholder="Please input the assignedTo2"
              v-model="selectedItem.assignedTo2" 
              size="medium">
            </el-input>
          </el-col>

          <el-col :span="3">
            AssignedToDetails:
          </el-col>

          <el-col :span="4">
            <el-input 
              placeholder="Please input the assignedToDetails"
              v-model="selectedItem.assignedToDetails" 
              size="medium">
            </el-input>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="3">
            Details:
          </el-col>
          <el-col :span="4">
            <el-input 
              placeholder="Please input the details"
              v-model="selectedItem.details" 
              size="medium">
            </el-input>
          </el-col>

          <el-col :span="3">
            DeferredUntil:
          </el-col>

          <el-col :span="4">
            <el-date-picker
              v-model="selectedItem.deferredUntil"
              type="date"
              :picker-options="pickerOptions"
              placeholder="Pick a day">
            </el-date-picker>
          </el-col>

        </el-row>

        <el-row>
          <el-button 
            type="primary"
            icon="el-icon-circle-plus-outline"
            @click="updateActivity()">
            Save
          </el-button>

            <el-button 
              type="danger"
              icon="el-icon-circle-plus-outline"
              @click="closeActivity()">
              Cancel
            </el-button>
        </el-row>
      </div>

    </el-dialog>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
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
          deferredUntil: null,
          completedOn: null,
          assignedToDetails: '',
          wrong: false,
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
          deferredUntil: '',
          edit: false,
          wrong: false,
          status: '',
        },
        activities: [],
        eventId: 101,
        mainEventId: 100,
      }
    },
    computed: {
      isWrongActivity() {
        return this.activity.wrong
      },
      completed() {
        return this.activities.filter((val) => val.completed === true).length;
      },
      total() {
        return this.activities.length;
      },
      isEmpty() {
        return this.activities.length === 0;
      }
    },
    mounted() {
      this.getActivities();
    },
    methods: {

      getActivities() {
        axios.get('http://localhost:8080/todos/events/sub/' + this.eventId).then((res) => {
          this.activities = res.data
        }).catch((err) => {
          console.log(err)
        })
      },
      addActivityMethod() {
        if (this.validateData() === true) {
          const activity = {
            title: this.activity.title,
            taskDate: this.activity.taskDate,
            taskType: this.activity.taskType,
            assignedTo1: this.activity.assignedTo1,
            assignedTo2: this.activity.assignedTo2,
            details: this.activity.details,
            deferredUntil: this.activity.deferredUntil,
            completedOn: this.activity.completedOn,
            assignedToDetails: this.activity.assignedToDetails,
            completed: false,
            edit: false,
            id: null
          };

          const data = {
            eventId: this.eventId,
            mainEventId: this.mainEventId,
            status: "PENDING",
            taskDate: this.activity.taskDate,
            taskType: this.activity.taskType,
            title: this.activity.title,
            assignedTo1: this.activity.assignedTo1,
            assignedTo2: this.activity.assignedTo2,
            assignedToDetails: this.activity.assignedToDetails,
            details: this.activity.details,
            deferredUntil: this.activity.deferredUntil,
            completedOn: this.activity.completedOn
          }

          axios.post('http://localhost:8080/todos', data).then((res) => {
            activity.id = res.data;
            this.activities.push(activity);
            this.activity.wrong = false;

          }).catch((err) => {
            console.log(err)
          })
          
          
        } else {
          this.activity.wrong = true;
          this.setMessageError();
        }
      },
      
      updateActivity() {
        this.dialogVisible = false;

        const data = {
          eventId: this.eventId,
          mainEventId: this.mainEventId,
          status: this.selectedItem.status,
          taskDate: this.selectedItem.taskDate,
          taskType: this.selectedItem.taskType,
          title: this.selectedItem.title,
          assignedTo1: this.selectedItem.assignedTo1,
          assignedTo2: this.selectedItem.assignedTo2,
          assignedToDetails: this.selectedItem.assignedToDetails,
          details: this.selectedItem.details,
          completedOn: this.selectedItem.completedOn,
        };

        axios.put('http://localhost:8080/todos/' + this.selectedItem.id).then((res) => {
          // this.activities = res.data
        }).catch((err) => {
          console.log(err)
        })
      },

      closeActivity() {
        this.dialogVisible = false;
      },
      editActivity(item) {
        this.dialogVisible = true;
        this.selectedItem = item;
      },

      removeActivity(item) {
        axios.delete('http://localhost:8080/todos/'+item.id, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        }).then((res) => {
          this.activities = this.activities.filter((val) => val.id !== item.id);
        }).catch((err) => {
          console.log(err)
        })
      },

      completeActivity(item) {
        this.activities = this.activities.map(val => {
          if(val.id == item.id) {
            val.completed = !val.completed;
            item.completedOn = val.completed ? new Date() : null;
            item.status = val.completed ? 'COMPLETE' : 'PENDING';
            const data = {
              eventId: this.eventId,
              mainEventId: this.mainEventId,
              status: item.status,
              taskDate: item.taskDate,
              taskType: item.taskType,
              title: item.title,
              assignedTo1: item.assignedTo1,
              assignedTo2: item.assignedTo2,
              assignedToDetails: item.assignedToDetails,
              details: item.details,
              completedOn: item.completedOn,
            };

            axios.put('http://localhost:8080/todos/' + item.id).then((res) => {
              // this.activities = res.data
            }).catch((err) => {
              console.log(err)
            })
          }
          return val;
        })
      },

      tableRowColor({row, rowIndex}) {
        if (row.completed === true) {
          return 'success-row';
        } else {
          return 'warning-row'
        }
      },
      validateData() {
        if (this.activity.title !== '' && this.activity.taskDate !== null && this.activity.taskType != '') {
          return true;
        } else {
          return false;
        }
      },

      setMessageError() {
        // if (this.title === '' && this.taskDate === '') {
        //   this.errorMessage = 'The activity && the date are empty';
        // } else {
          if (this.activity.title === '') {
            this.errorMessage = 'The activity is empty';
          } else if(this.activity.taskDate == null) {
            this.errorMessage = 'The taskDate is empty';
          } else if(this.activity.taskType == '') {
            this.errorMessage = 'The taskType is empty';
          }
        // }
      },

      getDate (item) {
        return moment(item).format('DD/MM/YYYY')
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
</style>