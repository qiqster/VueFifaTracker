import serviceTeam from "@/api/teamService.js";

export const team = {
  state: {
    loadingState: false,
    teamInfo: {
      name: "",
      owner: "",
    },
  },
  actions: {
    async getTeamInfo({ commit }) {
      commit("setLoadingState", true);
      serviceTeam
        .getTI()
        .then((res) => {
          console.log(res.data);
          commit("setTeamInfo", res.data);
          commit("setLoadingState", false);
        })
        .catch((er) => {
          commit("setLoadingState", false);
        });
    },
  },
  mutations: {
    setTeamInfo(state, teamInfo) {
      state.teamInfo = teamInfo;
    },
  },
};
export default team;
