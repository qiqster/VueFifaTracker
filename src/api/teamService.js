import Api from "@/api/api";

export default {
  getTI() {
    return Api().get("/5ed95962310000f6dec4ed29?mocky-delay=1000ms");
  },
};
