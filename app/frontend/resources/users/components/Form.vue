<template>
  <form @submit.prevent="handleSubmit">
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
        <input
          id="first_name"
          v-model="user.first_name"
          type="text"
          name="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Nome do usuário"
          :required="isCreating"
        />
      </div>
      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobrenome</label>
        <input
          id="last_name"
          v-model="user.last_name"
          type="text"
          name="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Sobrenome do usuário"
          :required="isCreating"
        />
      </div>
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
        <input
          id="brand"
          type="text"
          name="brand"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="example@mail.com"
          :required="isCreating"
        />
      </div>
      <div>
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefone/Celular</label>
        <input
          id="phone"
          type="number"
          name="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="(99) 9 9999-9999"
          :required="isCreating"
        />
      </div>
      <div>
        <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Função</label
        ><select
          id="role"
          :required="isCreating"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        >
          <option selected="">Selecionar</option>
          <option value="operator">Operador</option>
          <option value="consultant">Consultor</option>
          <option value="administrator">Administrador</option>
        </select>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            id="password"
            type="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            :required="isCreating"
          />
        </div>
        <div>
          <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
          <input
            id="confirm_password"
            type="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            :required="isCreating"
          />
        </div>
      </div>
    </div>
    <button
      type="submit"
      class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
      Cadastrar
    </button>
  </form>
</template>
<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store';
const props = defineProps({
  isCreating: Boolean
});
const store = useUserStore();
const { user } = storeToRefs(store);

const isCreating = ref(props.isCreating);

async function handleSubmit() {
  if (isCreating.value) {
    await store.create(user);
  }
}

async function newUser() {
  try {
    await store.new(url);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
</script>
