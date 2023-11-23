import { defineStore, acceptHMRUpdate } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    errors: [],
    resource: {},
    currentUser: {},
    collection: [],
    pagination: {}
  }),

  actions: {
    async index(path) {
      return this.axios.get(path).then((response) => {
        this.collection = response.data.data;
        this.pagination = response.data.pagination;
      });
    },
    async destroySession() {
      this.errors = {};
      return this.axios
        .delete(`/users/sign_out`)
        .then((response) => true)
        .catch((error) => {
          this.errors = error.response.data.errors;
          return false;
        });
    },
    async getCurrentUser() {
      this.errors = {};
      return this.axios
        .get(`/users/current`)
        .then((response) => (this.currentUser = response.data.current))
        .catch((error) => {
          this.errors = error.response.data.errors;
          return false;
        });
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
