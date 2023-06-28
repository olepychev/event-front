<template>
  <div class="section-full bg-white plan-tools-bx">
    <div class="container">
      <ul class="plan-tools-list">
        <li
          v-for="subevent in subeventsHeaderData"
          @click="clickSubEvent(subevent.eventId)"
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
</template>
<script>
import axios from 'axios';

export default {
  name: 'TopSubEvent',

  props: {
    mainEventId: Number | String | null,
    defaultSelect: Number | String | null,
  },

  data() {
    return {
      subeventsHeaderData: null,
      port: null,
      selected: null,
    };
  },

  watch: {
    defaultSelect(newValue, oldValue) {
      this.selected = newValue
    }
  },

  created() {
    this.port = location.port;
    this.selected = this.defaultSelect;
    this.getSubeventsHeaderData(this.mainEventId);
  },

  methods: {
    getSubeventsHeaderData(mainEventId) {
      axios
        .get(
          "http://localhost:" + this.port + "/events/" + mainEventId + "/sub"
        )
        .then((res) => {
          this.subeventsHeaderData = res.data;
        })
        .catch(() => {
          this.noData = true;
        });
    },

    clickSubEvent(subId) {
      this.selected = subId;
      this.$emit("click-subevent", subId);
    },
  }
}
</script>