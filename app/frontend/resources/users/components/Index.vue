<template>
  <div class="flex flex-col">
    <div class="flex p-2"><h2>Usuários</h2></div>
    <Modal />
    <DataTable id="users-datatable" :fields="columns" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store.js';
import { initFlowbite } from 'flowbite';
import DataTable from '../../../components/shared/DataTable.vue';
import Modal from './Modal.vue';

const store = useUserStore();

const { users } = storeToRefs(store);

const columns = ref([
  { label: 'Id', key: 'id' },
  { label: 'Nome', key: 'name' },
  { label: 'E-mail', key: 'email' },
  { label: 'Função', key: 'role' },
  { label: 'Criado em', key: 'created_at' },
  { label: 'Ultima atualização em', key: 'updated_at' },
  { label: 'Ações', key: 'actions' }
]);

onMounted(() => {
  initFlowbite();
});
</script>
