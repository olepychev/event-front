<template>
  <form class="vue-form" v-on:submit.prevent>
    <fieldset>
      <div class="row col-md-12">
        <h2>Add Event</h2>
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
          <span class="block text-gray-600 text-sm text-left font-bold mb-2"
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
            <template v-slot="{ inputValue, inputEvents, isDragging }">
              <div class="flex flex-col sm:flex-row justify-start items-center">
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
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
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
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                  />
                </div>
              </div>
            </template>
          </v-date-picker>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <label class="label" for="eventType">Event Type</label>
          <select
            id="eventType"
            v-model="eventData.type"
            @change="(ev) => getSubEventTypes(ev.target.value)"
          >
            <option
              v-for="eventType in eventTypes"
              :key="eventType.type"
              :value="eventType.type"
            >
              {{ eventType.description }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="label" for="subEventType">Sub Event Type</label>
          <select id="subEventType" v-model="eventData.subType">
            <option
              v-for="eventType in subEventTypes"
              :key="eventType.type"
              :value="eventType.type"
            >
              {{ eventType.description }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label class="label" for="budget">Estimated Budget</label>
          <input
            type="text"
            class="form-control"
            id="budget"
            v-model="eventData.budget"
            @keydown="EstimatedBudgetKeyDown"
            min="0"
            required
          />
        </div>
        <div class="col-md-6">
          <label class="label" for="estimatedGuests">Estimated Guests</label>
          <input
            type="text"
            class="form-control"
            id="estimatedGuests"
            v-model="eventData.estimatedGuests"
            @keydown="GuestsKeyDown"
            min="0"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label class="label" for="description">Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="eventData.description"
            min="0"
            @keydown="Descriptionchange"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <vue-dropzone id="drop1" :options="dropOptions"></vue-dropzone>
        </div>
      </div>
      <div class="row col-md-12">
        <h3>Venue Address</h3>
      </div>
      <div class="row col-md-12">
        <google-map style="width: 100%" @added-address="updateAddress" />
      </div>

      <div class="row">
        <div class="col-md-6">
          <label class="label" for="address">Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            v-model="eventData.address.address"
            required
          />
        </div>
        <div class="col-md-6">
          <label class="label" for="city">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            v-model="eventData.address.city"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label class="label" for="state">State</label>
          <input
            type="text"
            class="form-control"
            id="state"
            v-model="eventData.address.state"
            required
          />
        </div>
        <div class="col-md-3">
          <label class="label" for="country">Country</label>
          <input
            type="text"
            class="form-control"
            id="country"
            v-model="eventData.address.country"
            required
          />
        </div>
        <div class="col-md-3">
          <label class="label" for="postalCode">Postal Code</label>
          <input
            type="text"
            class="form-control"
            id="postalCode"
            v-model="eventData.address.postalCode"
            required
          />
        </div>
      </div>
      <button class="btn btn-success" @click="onSubmit">
        Add Event
      </button>
    </fieldset>
  </form>
</template>

<script>
import axios from "axios";
import vueDropzone from "vue2-dropzone";
import GoogleMap from "@/components/GoogleMap";
import moment from "moment";

import Vue from "vue";
import VCalendar from "v-calendar";
Vue.use(VCalendar);

window.toastr = require("toastr");

export default {
  name: "AddEditEventForm",
  props: {
    eventData: {
      type: Object,
    },
  },
  components: {
    vueDropzone,
    GoogleMap,
  },
  data() {
    return {
      TimeFormat: {
        input: "YYYY-MM-DD hh:mm A",
      },
      dropOptions: {
        url: "https://httpbin.org/post",
      },
    };
  },

  created() {
    console.log(this.eventData);
  },
  methods: {
    getSubEventTypes() {
      this.emit("getSubEventTypes");
    },
  },
};
</script>

<style scoped>
@import url("../../assets/mycss.css");
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
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}

.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus,
.vue-form select:focus {
  outline: none;
  border-color: #2c3e50;
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
</style>
