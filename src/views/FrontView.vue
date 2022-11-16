<script setup>
import Front_header from "../components/Front_header.vue";
import Front_main from "../components/Front_main.vue";
import Front_footer from "../components/Front_footer.vue";
</script>
<template>
  <div class="Front">
    <header>
      <Front_header />
    </header>
    <main>
      <Front_main />
    </main>
    <footer>
      <Front_footer />
    </footer>
  </div>
</template>
<style scoped lang="scss">
.Front {
  position: relative;
  overflow: hidden;
}
</style>
