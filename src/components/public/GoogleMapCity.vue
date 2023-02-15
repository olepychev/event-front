<template>
  <div>
    <div>
      <h2>Search and add a city</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace"
          :options="autocompleteOptions"
          style="width: 400px; font-size: 20px"
        >
        </gmap-autocomplete>
        <!-- <button @click="addMarker" type="button">Add</button> -->
      </label>
      <br />
    </div>
    <br />
    <gmap-map
      :center="center"
      :zoom="15"
      style="width: 100%; height: 400px; display: none"
    >
      <gmap-marker
        :key="index"
        v-on:submit.prevent
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMapCity",

  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      containerIntialised: false,
      autocompleteOptions: {
        componentRestrictions: {
          country: ["us", "ca", "ind"],
        },
        types: ["(cities)"],
      },
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
      this.addMarker();
    },
    addMarker() {
      if (this.currentPlace) {
        console.log("currentPlace: ", this.currentPlace);
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.$emit("added-address", this.currentPlace);
        this.currentPlace = null;
      }
    },
    updateMarker(latitude, longitude) {
      const marker = {
        lat: latitude,
        lng: longitude,
      };
      this.markers.push({ position: marker });
      this.center = marker;
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
<style>
.pac-container {
  position: absolute;
  z-index: 1000000;
}
</style>
