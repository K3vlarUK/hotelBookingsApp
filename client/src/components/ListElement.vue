<template lang="html">
  <li @click="handleClick">{{booking.guestName}}</li>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'list-element',
  props: ['booking'],
  methods: {
    handleClick(){
      eventBus.$emit('booking-clicked', this.booking)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
