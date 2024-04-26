<template>
  <div>
    <h2>Contact Page</h2>
    <p>This is the Contact Page!!</p>
    <p v-html="rawHtml"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rawHtml: '<span style="color: red">This should be red.</span>',
    };
  },
};
</script>
