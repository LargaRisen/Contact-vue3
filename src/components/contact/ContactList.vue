<!-- ContactList.vue -->
<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Contact List</h2>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <li
        v-for="contact in contacts"
        :key="contact.id"
        class="bg-white p-4 rounded shadow-md"
      >
        <span class="block text-xl font-semibold mb-2">{{ contact.name }}</span>
        <div class="flex justify-end space-x-2">
          <button
            @click="editContact(contact)"
            class="px-2 py-1 rounded-md border text-blue-500"
          >
            Edit
          </button>
          <button
            @click="confirmDeleteContact(contact.id)"
            class="px-2 py-1 rounded-md border text-red-500"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>

    <!-- EditContact modal -->
    <div
      v-if="selectedContact"
      class="fixed inset-0 flex items-center justify-center"
    >
      <div class="bg-black opacity-50 absolute inset-0"></div>
      <EditContact
        :contact="selectedContact"
        @update="updateContact"
        @cancel="cancelEditContact"
      />
    </div>

    <!-- DeleteContact modal -->
    <div
      v-if="showDeleteConfirmation"
      class="fixed inset-0 flex items-center justify-center"
    >
      <div class="bg-black opacity-50 absolute inset-0"></div>
      <div class="bg-white p-4 rounded shadow-lg z-50">
        <p>Are you sure you want to delete this contact?</p>
        <div class="mt-4 flex justify-end space-x-2">
          <button
            @click="deleteContact"
            class="bg-blue-500 text-white px-2 py-1 rounded-md"
          >
            Yes
          </button>
          <button
            @click="cancelDeleteContact"
            class="bg-red-500 text-white px-2 py-1 rounded-md"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditContact from "./EditContact.vue";

export default {
  props: ["contacts"],
  data() {
    return {
      selectedContact: null,
      showDeleteConfirmation: false,
      contactToDeleteId: null,
    };
  },
  methods: {
    editContact(contact) {
      this.selectedContact = contact;
    },
    cancelEditContact() {
      this.selectedContact = null;
    },
    confirmDeleteContact(contactId) {
      this.showDeleteConfirmation = true;
      this.contactToDeleteId = contactId;
    },
    cancelDeleteContact() {
      this.showDeleteConfirmation = false;
      this.contactToDeleteId = null;
    },
    deleteContact() {
      this.$emit("delete", this.contactToDeleteId);
      this.showDeleteConfirmation = false;
      this.contactToDeleteId = null;
    },
    updateContact(editedContact) {
      const index = this.contacts.findIndex((c) => c.id === editedContact.id);
      if (index !== -1) {
        this.contacts[index] = editedContact;
        this.selectedContact = null;
      }
    },
  },
  components: {
    EditContact,
  },
};
</script>
