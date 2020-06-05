<template>
  <div>
    <div class="row">
      <div class="col l12 m12 s12">
        <a class="waves-effect right waves-light btn-small">
          <i class="material-icons">add</i>
        </a>
        <a class="waves-effect right waves-light btn-small">
          <i class="material-icons">edit</i>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col l12 m12 s12" v-for="player in teamList" v-bind:key="player.name">
        <TeamPlayer />
      </div>
    </div>
  </div>
</template>

<script>
import TeamPlayer from "@/components/TeamPlayer";
export default {
  components: {
    TeamPlayer
  },
  data: function() {
    return {
      teamList: [
        { name: "Adam" },
        { name: "Adam2" },
        { name: "Adam3" },
        { name: "Adam4" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  margin-right: 10px;
  background-color: $bg-box;
}
</style>>
 