import { defineStore, acceptHMRUpdate } from 'pinia';

export const useUserStore = defineStore('users', {
  state: () => ({
    errors: [],
    user: {},
    users: [],
    pagination: {}
  }),

  actions: {
    async index() {
      return this.axios.get('/users').then((response) => {
        this.users = response.data.users;
        this.pagination = response.data.pagination;
      });
    },
    async new() {
      this.errors = {};
      this.user = {};
      return this.axios.get('/users/new').then((response) => {
        this.user = response.data.user;
      });
    },
    async create() {
      this.errors = {};
      return this.axios
        .post('/users', this.user, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          this.user = response.data;
          return true;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          return false;
        });
    },
    async edit(id) {
      this.errors = {};
      this.user = {};
      return this.axios.get(`/users/${id}/edit`).then((response) => {
        this.user = response.data.user;
      });
    },
    async update(id) {
      this.errors = {};
      return this.axios
        .put(`/users/${id}`, this.user)
        .then((response) => {
          this.user = response.data;
          return true;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          return false;
        });
    },
    async destroy(id) {
      this.errors = {};
      return this.axios
        .delete(`/users/${id}`)
        .then((response) => true)
        .catch((error) => {
          this.errors = error.response.data.errors;
          return false;
        });
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
