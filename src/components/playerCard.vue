<template>
  <div class="card">
    <div class="card-content">
      <div class="progress" v-if="loading">
        <div class="indeterminate"></div>
      </div>
      <div v-else>{{ teamName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      teamInfo: {},
    };
  },
  created() {
    this.$store.dispatch("getTeamInfo");
  },
  computed: {
    loading() {
      return this.$store.state.loadingState;
    },
    teamName() {
      return `${this.$store.state.team.teamInfo.name} (${this.$store.state.team.teamInfo.owner}) `;
    },
  },
};
</script>

<style></style>
