<template>
  <div>
    <h1 class="font-bolf mt-12 text-md sm:text-xl text-indigo-800">
      Child to Parent Component Demo
    </h1>
    <button type="button" class="btn-grp mt-4" @click="callMessage">
      Click to show Message
    </button>

    <h1 class="font-bolf mt-12 text-md sm:text-xl text-indigo-800">
      Child to Child Component Demo
    </h1>
    <h4
      class="bg-indigo-200 mx-auto max-w-lg w-full rouned-md p-4 text-black text-lg mt-3"
      v-if="messageFromChildToChild"
    >
      {{ messageFromChildToChild }}
    </h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageFromChildToChild: null,
    };
  },
  mounted() {
    this.$root.$on("messageFromChildToChild", (value) => {
      this.messageFromChildToChild = value;
    });
  },
  methods: {
    callMessage() {
      this.$emit(
        "clickToCall",
        "This is the Example of child to parent communication."
      );
    },
  },
};
</script>

<style scoped>
.btn-grp {
  padding: 0.5rem;
  background-color: rgb(153, 147, 202);
  border-radius: 0.25rem;
  font-size: 1rem;
  color: rgb(6 78 59);
  cursor: pointer;
}
</style>
