<template>
  <main class="vue-container">
    <h1>Hello {{ name || 'beautiful' }}!</h1>
    <p>I am a <b>Vue app</b> created with <code>vite-app</code></p>
    <button @click="count++">
      <b>Like count: {{ count }}</b>
    </button>
  </main>
</template>

<script>
export default {
  name: "App",
  props: {
    name: String
  },
  data() {
    return {
      count: 0
    }
  }
};
</script>
