<!-- AddContact.vue -->
<template>
  <div class="bg-white p-8 rounded shadow-md max-w-md mx-auto mt-24">
    <h2 class="text-2xl font-semibold mb-4">Add Contact</h2>
    <form @submit.prevent="addContact">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-600"
          >Name:</label
        >
        <input
          v-model="newContact.name"
          type="text"
          class="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>
      <div class="flex justify-end space-x-2">
        <button
          type="submit"
          class="bg-blue-500 text-white px-2 py-1 rounded-md"
        >
          Add Contact
        </button>
        <button
          type="button"
          @click="cancelAddContact"
          class="bg-red-500 text-white px-2 py-1 rounded-md"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContact: {
        name: "",
      },
    };
  },
  methods: {
    addContact() {
      this.$emit("add", this.newContact);
      this.newContact.name = "";
    },
    cancelAddContact() {
      this.$emit("cancel");
    },
  },
};
</script>
