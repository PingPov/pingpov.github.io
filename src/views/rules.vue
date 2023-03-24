<template>
  <div>
    <vue-markdown v-if="loaded" :source="rules"/>
  </div>
</template>

<script lang="ts" setup>
import VueMarkdown from 'vue-markdown-render';
import { defineComponent, ref } from "vue";

const components = defineComponent({
  components: {
    VueMarkdown
  },
});

const loaded = ref(false);
const rules = ref();
const xhr = new XMLHttpRequest();
xhr.open('GET', '/rules.md');
xhr.onload = function() {
  loaded.value = true;
  if (xhr.status === 200) {
    rules.value = xhr.responseText;
  } else {
    rules.value = "# Error while loading rules.md";
  }
};
xhr.send();

</script>

<style scoped>
* {
  margin:0;
  padding:0;
  font-family:Helvetica, Arial, sans-serif;
}

div {
  width: 70%;
  margin: 0 auto;
}
</style>