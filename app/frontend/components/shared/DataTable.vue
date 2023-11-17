<template>
  <div class="flex flex-col bg-white h-full dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
    <Toolbar />
    <div class="flex h-full overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4" v-if="selectable">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3" v-for="(field, index) in fields" :key="index">{{ field }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(items, index) in store.users"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="w-4 p-4" v-if="selectable">
              <div class="flex items-center">
                <input
                  :id="`checkbox-table-search-${index}`"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label :for="`checkbox-table-search-${index}`" class="sr-only">checkbox</label>
              </div>
            </td>
            <td class="px-6 py-4" v-for="(value, key) in items" :key="key">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Toolbar from './Toolbar.vue';
import { useUserStore } from '../../resources/users/store.js';

const props = defineProps({
  fields: Array,
  data: Array,
  selectable: Boolean
});

const fields = ref(props.fields);
//const data = ref(props.data);
const selectable = ref(props.selectable);

const store = useUserStore();

async function index() {
  try {
    await store.index('/users');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(async () => {
  await index();
});
</script>
