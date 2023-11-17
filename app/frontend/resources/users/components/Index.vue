<template>
  <div class="flex flex-col">
    <div class="flex p-2"><h2>Usuários</h2></div>
    <Modal />
    <DataTable :fields="columns" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';
import DataTable from '../../../components/shared/DataTable.vue';
import Modal from './Modal.vue';

const columns = ref(['Id', 'Nome', 'E-mail', 'Função', 'Criado em', 'Ultima atualização em', 'Link']);

defineEmits(['search', 'reset']);

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
