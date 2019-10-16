<template lang="html">
  <div id="app">
    <booking-form/>
    <booking-list :bookings="bookings"/>
  </div>
</template>

<script>
import BookingList from './components/BookingList.vue';
import {eventBus} from './main.js';
import BookingForm from './components/BookingForm.vue';
import BookingService from './services/BookingService.js';

export default {
  name: 'app',
  data(){
    return {
      bookings: []
    }
  },
  components: {
    'booking-form': BookingForm,
    'booking-list': BookingList
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => {
      this.bookings.push(booking)
    });
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
