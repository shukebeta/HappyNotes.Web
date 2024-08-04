<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { NoteResponse } from '~/types/note'
import { useNuxtApp } from '#app'
import Pager from '~/components/pager.vue'

const notes = ref<NoteResponse | null>(null)
const error = ref<string | null>(null)
const currentPage = ref(1)
const itemsPerPage = ref(5)
const totalItems = ref(0) // Assuming you'll get this from your API

const fetchNotes = async (page: number, size: number) => {
  const { $api } = useNuxtApp()
  try {
    const response = await $api.note.latest(size, page)
    notes.value = response
    totalItems.value = response.data.totalCount
  } catch (err) {
    error.value = (err as Error).message
  }
}

onMounted(() => {
  fetchNotes(currentPage.value, itemsPerPage.value)
})

watch(currentPage, (newPage) => {
  fetchNotes(newPage, itemsPerPage.value)
})
</script>

<template>
  <div>
    <h1>Latest Notes</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="notes">
      <ul>
        <li v-for="note in notes.data.dataList" :key="note.id">
          {{ note.content.substring(0, 20) }}...
          <br />
          Created at: {{ new Date(note.createdAt * 1000).toLocaleDateString() }}
        </li>
      </ul>
      <Pager
          :totalItems="totalItems"
          :itemsPerPage="itemsPerPage"
          :currentPage.sync="currentPage"
          @update:currentPage="currentPage = $event"
      />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
