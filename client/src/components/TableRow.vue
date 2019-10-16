<template lang="html">
  <tr>
    <td>{{booking.guestName}}</td>
    <td>{{booking.guestEmail}}</td>
    <td>{{booking.checkedIn}}</td>
    <td @click="handleDelete(booking._id)">❌</td>
  </tr>
</template>

<script>
import BookingService from '../services/BookingService';
import {eventBus} from '../main.js';

export default {
  name: 'table-row',
  props: ['booking'],
  methods: {
    handleDelete(id){
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
