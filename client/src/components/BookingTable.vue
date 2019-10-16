<template lang="html">
  <div id="bookingsList">
    <table>
      <tr>
        <th>Guest Name</th>
        <th>Guest Email</th>
        <th>Checked In</th>
        <th>Delete?</th>
      </tr>
      <table-row v-for="booking in bookings" :booking="booking"></table-row>
    </table>
  </div>
</template>

<script>
import TableRow from './TableRow.vue';
import {eventBus} from '../main.js';
import BookingService from '../services/BookingService';

export default {
  name: 'booking-table',
  props: ['bookings'],
  methods: {
    handleDelete(id) {
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }
  },
  components: {
    'table-row': TableRow
  }
}
</script>

<style lang="css" scoped>
</style>
