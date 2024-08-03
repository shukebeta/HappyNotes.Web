<template>
  <div>
    <h1>Latest Notes</h1>
    <ul>
      <li v-for="note in notes.data.dataList" :key="note.id">
        <h2>{{ note.content.slice(0, 50) }}...</h2>
        <p>Created at: {{ new Date(note.createdAt * 1000).toLocaleDateString() }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAsyncData } from '#app'

const config = useRuntimeConfig()
const { data: notes, error } = await useAsyncData('latestNotes', () =>
    $fetch(`${config.public.apiBaseUrl}/notes/latest/5/1`)
)
console.log('Notes:', notes.value) // Add this line to debug
console.error('Error:', error.value) // A

if (error.value) {
  console.error('Error fetching latest notes:', error.value)
}
</script>

<style>
/* Add any styles you want here */
</style>
