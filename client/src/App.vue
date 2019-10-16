<template lang="html">
  <div id="app">
    <booking-form/>
  </div>
</template>

<script>
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
    'booking-form': BookingForm
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
