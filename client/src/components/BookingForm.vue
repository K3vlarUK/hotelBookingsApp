<template lang="html">
  <form id="booking-form" @submit="handleSubmit">
    <h2>Add a Booking:</h2>
    <div class="form-wrap">
      <label for="guest-name">Guest Name:</label>
      <input type="text" id="guest-name" v-model="guestName">
    </div>
    <div class="form-wrap">
      <label for="guest-email">Guest Email:</label>
      <input type="text" id="guest-email" v-model="guestEmail">
    </div>
    <div class="form-wrap">
      <input type="checkbox" v-model="checkedIn"> Checked in?<br>
    </div>
    <input type="submit" id="save" value="Save">
  </form>
</template>

<script>
import { eventBus } from '../main.js';
import BookingService from '../services/BookingService';

export default {
  name: 'bookings-form',
  data(){
    return{
      guestName: '',
      guestEmail: '',
      checkedIn: false
    }
  },
  methods:{
    handleSubmit(event) {
      event.preventDefault();

      const payload = {
        guestName: this.guestName,
        guestEmail: this.guestEmail,
        checkedIn: this.checkedIn
      };

      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
