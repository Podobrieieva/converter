<template>
  <div class="notification-bar">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    timeout: null
  }),

  mounted() {
    this.timeout = setTimeout(() => this.deleteError(this.notification), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  methods: {
    ...mapMutations(["deleteError"])
  }
};
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
  color: red;
}
</style>
