<template lang="html">
  <div id="app">
    <booking-form/>
    <booking-table :bookings="bookings"/>
  </div>
</template>

<script>
import BookingTable from './components/BookingTable.vue';
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
    'booking-table': BookingTable
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => {
      this.bookings.push(booking)
    });

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })
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
