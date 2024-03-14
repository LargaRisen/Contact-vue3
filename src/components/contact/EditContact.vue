<!-- EditContact.vue -->
<template>
  <div class="bg-white p-8 rounded shadow-md max-w-md mx-auto mt-24 z-50">
    <h2 class="text-2xl font-semibold mb-4">Edit Contact</h2>
    <form @submit.prevent="updateContact">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-600"
          >Name:</label
        >
        <input
          v-model="editedContact.name"
          type="text"
          class="mt-1 p-2 block w-full border rounded-md bg-white border-gray-300 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-600"
          >Phone:</label
        >
        <input
          v-model="editedContact.phone"
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
          Update Contact
        </button>
        <button
          type="button"
          @click="cancelUpdate"
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
  props: ["contact"],
  data() {
    return {
      editedContact: { ...this.contact },
    };
  },
  methods: {
    updateContact() {
      this.$emit("update", this.editedContact);
    },
    cancelUpdate() {
      this.$emit("cancel");
    },
  },
};
</script>
