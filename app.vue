<template>
  <div>
    <header>
      <h1>My Note App</h1>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <!-- Add other navigation links if needed -->
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2024 My Note App</p>
    </footer>
  </div>
</template>

<script setup>
// You can include global script logic here if needed
</script>

<style>
/* Add global styles here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  background: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}
footer {
  background: #f8f9fa;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  text-align: center;
}
main {
  padding: 1rem;
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
nav li {
  display: inline;
  margin-right: 1rem;
}
</style>
