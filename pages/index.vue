<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { NoteResponse } from '~/types/note'
import { useNuxtApp } from '#app'

const notes = ref<NoteResponse | null>(null)
const error = ref<string | null>(null)

onMounted(async () => {
  const {$api} = useNuxtApp()
  try {
    notes.value = await $api.note.latest(5, 1)
  } catch (err) {
    error.value = (err as Error).message
  }
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
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
