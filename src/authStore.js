import { defineStore } from "pinia";
import { ref } from "vue";

const defaultEmail = "example@example.com";
const defaultPassword = "secret";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    email: ref(defaultEmail),
    password: ref(defaultPassword),
  }),
  actions: {
    reset() {
      console.log("reset!");
      this.email = defaultEmail;
      this.password = defaultPassword;
    },
  },
});
