<template lang="html">
  <div id="bookingsList">
    <ul>
      <list-element v-for="booking in bookings" :booking="booking"></list-element>
    </ul>
  </div>
</template>

<script>
import ListElement from './ListElement.vue';
import {eventBus} from '../main.js';
import BookingService from '../services/BookingService';

export default {
  name: 'booking-list',
  props: ['bookings'],
  methods: {
    handleDelete(id) {
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }
  },
  components: {
    'list-element': ListElement
  }
}
</script>

<style lang="css" scoped>
</style>
