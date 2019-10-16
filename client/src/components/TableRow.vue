<template lang="html">
  <tr>
    <td>{{booking.guestName}}</td>
    <td>{{booking.guestEmail}}</td>
    <td @click="toggleUpdate(booking._id, booking)">{{booking.checkedIn}}</td>
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
    },
    toggleUpdate(id, payload){
      BookingService.updateBooking(id, payload)
      .then(response => eventBus.$emit('booking-updated', id));
    }
  }
}
</script>

<style lang="css" scoped>
td {
  padding: 0.5rem;
  background-color: ghostwhite;
  border: 1px solid black;
}
</style>
