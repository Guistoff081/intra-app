<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <Navbar />
    <Sidebar />
    <main class="p-4 md:ml-64 h-auto pt-20">
      <div class="border-2 border-dashed bg-white rounded-lg border-gray-300 dark:border-gray-600 h-full p-2 mb-4">
        <RouterView></RouterView>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import Sidebar from '@/components/shared/Sidebar.vue';
import Navbar from '@/components/shared/Navbar.vue';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
