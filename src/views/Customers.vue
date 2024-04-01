<template>
  <div class="container mx-auto p-4 min-h-screen">
    <!-- Button to open AddContact pop-up -->
    <button
      @click="openAddContactModal"
      class="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full"
    >
      Add Contact
    </button>

    <!-- AddContact pop-up -->
    <div
      v-if="showAddContactModal"
      class="fixed inset-0 flex items-center justify-center"
    >
      <div class="bg-black opacity-50 absolute inset-0 z-50"></div>
      <AddContact
        @add="addContact"
        @cancel="closeAddContactModal"
        class="z-50"
      />
    </div>

    <!-- ContactList component -->
    <ContactList
      :contacts="contacts"
      @edit="editContact"
      @delete="deleteContact"
    />
  </div>
</template>

<script>
import ContactList from "../components/contact/ContactList.vue";
import AddContact from "../components/contact/AddContact.vue";
import EditContact from "../components/contact/EditContact.vue";

// apiService.js
import { apiService } from "../apiService";

export default {
  data() {
    return {
      contacts: [],
      selectedContact: null,
      showAddContactModal: false,
      showDeleteConfirmation: false,
      contactToDeleteId: null,
    };
  },
  methods: {
    async addContact(newContact) {
      const respone = await apiService.customRequest(
        "POST",
        "http://localhost:8888/project_shortlink_api/public/contact",
        newContact
      );
      if (respone.code !== 200) {
        alert("Error adding contact");
        return;
      }
      this.contacts.push({ id: this.contacts.length + 1, ...newContact });
      this.closeAddContactModal();
    },
    editContact(contact) {
      this.selectedContact = contact;
    },
    updateContact(editedContact) {
      const index = this.contacts.findIndex((c) => c.id === editedContact.id);
      if (index !== -1) {
        this.contacts[index] = editedContact;
        this.selectedContact = null;
      }
    },
    deleteContact(contactId) {
      this.contacts = this.contacts.filter((c) => c.id !== contactId);
      this.selectedContact = null;
    },
    openAddContactModal() {
      this.showAddContactModal = true;
    },
    closeAddContactModal() {
      this.showAddContactModal = false;
    },
  },
  async mounted() {
    // const data = await apiService.customRequest(
    //   "GET",
    //   "http://localhost:8888/project_shortlink_api/public/contact",
    //   null
    // );
    const data = await apiService.getData(
      "/?inc=id,gender,phone,name&results=11"
    );
    this.contacts = data.results.map((contact, index) => ({
      id: index + 1,
      name: `${contact.name.first} ${contact.name.last}`,
      phone: contact.phone,
    }));
  },
  components: {
    ContactList,
    AddContact,
    EditContact,
  },
};
</script>
