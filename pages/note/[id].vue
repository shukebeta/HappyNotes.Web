<!-- pages/note/[id].vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtApp, useRoute } from '#app'
import type { Note } from '~/types/note'

const route = useRoute()
const note = ref<Note | null>(null)
const error = ref<string | null>(null)

const fetchNote = async (id: number) => {
  const { $api } = useNuxtApp()
  try {
    const response = await $api.note.getById(id)
    note.value = response.data
  } catch (err) {
    error.value = (err as Error).message
  }
}

onMounted(() => {
  const noteId = Number(route.params.id)
  if (noteId) {
    fetchNote(noteId as number)
  }
})
</script>

<template>
  <div>
    <h1>Note Detail</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="note">
      <p>{{ note.content }}</p>
      <p>Created at: {{ new Date(note.createdAt * 1000).toLocaleString() }}</p>
      <!-- Add more details as needed -->
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
