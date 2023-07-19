<template>
  <div>
    <div v-if="!isHiddenAutoComplete">
      <h2>Search and add a city</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace"
          :options="autocompleteOptions"
          style="width: 400px; font-size: 20px"
          @input="onInput"
          :ref="'autocomplete'"
        >
        </gmap-autocomplete>
        <!-- <button @click="addMarker" type="button" v-if="isMap">Add</button> -->
      </label>
      <br />
    </div>
    <br />
    <gmap-map
      :center="center"
      :zoom="15"
      style="width: 100%; height: 400px;"
      :style="isMap ? 'display: block': 'display: none'"
      @center_changed="onCenterChanged"
    >
      <gmap-marker
        :key="index"
        v-on:submit.prevent
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
        @dragend="onMarkerDragEnd"
        :draggable="true"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { stringify } from 'querystring';

export default {
  name: "GoogleMap",

  props: {
    isMap: Boolean,
    isSearchType: Boolean,
    isHiddenAutoComplete: Boolean,
    defaultAddress: Object,
  },

  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: {lat: 0, lng: 0},
      markers: [{
          position: this.defaultAddress, // San Francisco
          draggable: true // make the marker draggable
        }],
      places: [],
      currentPlace: null,
      containerIntialised: false,
      autocompleteOptions: {
        componentRestrictions: {
          country: ["us", "ca", "ind"],
        },
        types: this.isSearchType ? ["address"] : ["(cities)"],
      },
    };
  },

  mounted() {
    if(this.defaultAddress == null)
      this.geolocate();
    else {
      this.center = this.defaultAddress;
    }
  },
  
  created() {
    if(this.defaultAddress != null) {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: this.defaultAddress }, (results, status) => {
        if (status === 'OK') {
          console.log('Location:', results[0]);
          // Assuming you have the address data stored in a variable called 'place'
          // let compound_code = place.plus_code.compound_code;
          // const data = compound_code.substring(compound_code.indexOf(' ') + 1);
          let city, area, country;
          for (let i = 0; i < results[0].address_components.length; i++) {
            const component = results[0].address_components[i];
            if (component.types.includes('locality')) {
              city = component.long_name;
            }
            if (component.types.includes('administrative_area_level_1')) {
              area = component.short_name;
            }
            if (component.types.includes('country')) {
              country = component.long_name;
            }
          }
          this.$refs.autocomplete.$refs.input.value = `${city}, ${area}, ${country}`;
        }
      })
    }
  },

  methods: {
    onCenterChanged() {
    },
    
    onInput(event) {
      this.$emit("input-address", event.target.value);
    },

    onMarkerDragEnd(event) {

      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: event.latLng }, (results, status) => {
        if (status === 'OK') {
          let place = results[0];
          let city, address;
          for (let i = 0; i < results[0].address_components.length; i++) {
            const component = results[0].address_components[i];
            if (component.types.includes('locality')) {
              city = component.long_name;
            }
            if (component.types.includes('route')) {
              address = component.long_name;
            }
          }

          let placeData;
          if(this.isSearchType) {
            let streetNumber = place.address_components.find(ac => ac.types.includes('street_number'))?.long_name;
            let route = place.address_components.find(ac => ac.types.includes('route'))?.long_name;
            
            placeData = {
              formatted_address: place.formatted_address,
              address_components: place.address_components,
              geometry: place.geometry,
              name: streetNumber == undefined ? route : streetNumber + ' ' + route,
              vicinity: city,
            };
          }
          else {
            placeData = {
              formatted_address: place.formatted_address,
              address_components: place.address_components,
              geometry: place.geometry,
              name: address,
              vicinity: city,
            };
          }
          
          this.currentPlace = placeData;
          this.$emit("added-address", placeData);
          // Do something with the place object, e.g. update the place_changed data format.
        }
      });
    },
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
      this.addMarker();
    },

    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        if(this.isSearchType) {
          let streetNumber = this.currentPlace.address_components.find(ac => ac.types.includes('street_number'))?.long_name;
          let route = this.currentPlace.address_components.find(ac => ac.types.includes('route'))?.long_name;
          let placeData = {
            formatted_address: this.currentPlace.formatted_address,
            address_components: this.currentPlace.address_components,
            geometry: this.currentPlace.geometry,
            name: streetNumber == undefined ? route : streetNumber + ' ' + route,
            vicinity: this.currentPlace.vicinity
          };
          this.$emit("added-address", placeData);
        }
        else {
          this.$emit("added-address", this.currentPlace);
        }
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
