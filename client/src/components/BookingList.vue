<template lang="html">
  <div id="bookingsList">
    <ul>
      
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService';

export default {
  name: 'booking-list',
  props: ['bookings'],
  methods: {
    handleDelete(id) {
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
