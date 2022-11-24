<template>
  <div>
    <h1 class="font-bolf text-md sm:text-xl text-indigo-800">
      Parent to Child Component Demo
    </h1>

    <BaseTable
      :table-data-columns="columns"
      :table-data-rows="rows"
      url="https://jsonplaceholder.typicode.com/users"
    />

    <child-demo-2 @clickToCall="loadData" />
    <h4
      class="bg-gray-200 mx-auto max-w-lg w-full rouned-md p-4 text-black text-lg mt-3"
      v-if="messageFromChild"
    >
      {{ messageFromChild }}
    </h4>

    <button type="button" class="btn-grp mt-6" @click="childToChildMethod">
      Click to show Message
    </button>
  </div>
</template>

<script>
import BaseTable from "../components/BaseTable.vue";
import { mapActions, mapGetters } from "vuex";
import ChildDemo2 from "./ChildDemo2.vue";

export default {
  components: {
    BaseTable,
    ChildDemo2,
  },

  data() {
    return {
      rows: this.getUsers,
      messageFromChild: null,
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Phone",
          field: "phone",
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["getUsers"]),
  },

  created() {
    this.fetchUsersList();
  },
  mounted() {
    setTimeout(() => {
      console.log(this.getUsers, "asdf");
      this.rows = this.getUsers;
    }, 1000);
  },
  methods: {
    ...mapActions(["fetchUsers"]),

    fetchUsersList() {
      this.fetchUsers();
    },
    loadData(value) {
      this.messageFromChild = value;
    },
    childToChildMethod() {
      this.$root.$emit(
        "messageFromChildToChild",
        "This is the example of child to child communication."
      );
    },
  },
};
</script>

<style scoped>
.btn-grp {
  padding: 0.5rem;
  background-color: rgb(153 246 228);
  border-radius: 0.25rem;
  font-size: 1rem;
  color: rgb(6 78 59);
  cursor: pointer;
}
</style>
