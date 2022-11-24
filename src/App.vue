<template>
  <div id="app">
    <!-- The site header -->
    <nav
      class="w-full bg-indigo-500 sm:flex sm:justify-between items-center h-20 px-6"
    >
      <!-- Logo  -->
      <a
        href="#"
        class="text-lg text-center mt-1 sm:text-xl font-bold hover:text-blue-800 hover:bg-gray-200 rounded-md hover:rounded-md p-2 transition-all duration-500 ease-in-out text-white font-italic cursor-pointer"
      >
        Vue Component | Test
      </a>

      <div class="hidden sm:block">
        <ul
          class="text-white font-medium text-lg cursor-pointer flex space-x-6 items-center"
        >
          <li
            class="hover:bg-gray-200 rouned-md hover:rounded-md p-2 transition-all duration-500 ease-in-out rounded-md hover:text-blue-800"
          >
            Home
          </li>
          <li
            class="hover:bg-gray-200 rouned-md hover:rounded-md p-2 transition-all duration-500 ease-in-out rounded-md hover:text-blue-800"
          >
            About
          </li>
          <li
            class="hover:bg-gray-200 rouned-md hover:rounded-md p-2 transition-all duration-500 ease-in-out rounded-md hover:text-blue-800"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>

    <!-- The site view pages  -->
    <main>
      <router-view class="mt-10 relative" />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
