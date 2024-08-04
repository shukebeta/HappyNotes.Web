<template>
  <div class="pager">
    <button @click="prevPage" :disabled="page === 1">Previous</button>
    <span>Page {{ page }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="page === totalPages">Next</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 5
  },
  currentPage: {
    type: Number,
    default: 1
  }
})

const emits = defineEmits(['update:currentPage'])

const page = ref(props.currentPage)
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

const nextPage = () => {
  if (page.value < totalPages.value) {
    page.value++
    emits('update:currentPage', page.value)
  }
}

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    emits('update:currentPage', page.value)
  }
}

watch(() => props.currentPage, (newVal) => {
  page.value = newVal
})
</script>

<style scoped>
.pager {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
