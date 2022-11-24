<template>
  <div class="" style="background-color: ">
    <!-- Search Input -->
    <input type="text" class="form-input" v-model="searchTerm" />

    <!-- Table content -->
    <vue-good-table
      :columns="tableDataColumns"
      :rows="tableDataRows"
      style="margin-top: 20px; padding: 20px"
      @on-column-filter="onColumnFilter"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm,
      }"
      :pagination-options="paginationOptions"
    >
    </vue-good-table>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
export default {
  components: {
    VueGoodTable,
  },

  props: {
    tableDataColumns: {
      type: [Array, Number, String],
      default: null,
    },
    tableDataRows: {
      type: [Array, Number, String],
      default: null,
    },
  },

  data() {
    return {
      searchTerm: '',
      paginationOptions: {
        enabled: true,
        mode: 'records',
        perPage: 3,
        perPageDropdown: [3, 5, 10, 200, 300, 500, 1000],
        perPageDropdownEnabled: true,
        jumpFirstOrLast: true,
      },
    }
  },
  mounted() {
    console.log(this.tableDataRows)
  },
  methods: {
    onColumnFilter(params) {
      console.log('on-column-filters:')
      console.log(params)
    },
    onSearch(params) {
      console.log('on-search:')
      console.log(params)
    },
    autofilter(type) {
      if (type === 'name') {
        this.columns[0].filterOptions.filterValue = 'John'
      }
      if (type === 'age') {
        this.columns[1].filterOptions.filterValue = '>30'
      }
      if (type === 'reset') {
        this.columns[0].filterOptions.filterValue = ''
        this.columns[1].filterOptions.filterValue = ''
      }
    },
    filterAge(data, filterString) {
      if (filterString === '>30' && parseInt(data, 10) > 30) {
        return true
      }
      if (filterString === '<=30' && parseInt(data, 10) <= 30) {
        return true
      }
      return false
    },
  },
}
</script>
<style scoped>
.form-input {
  border: 1px solid blue;
  border-radius: 10px;
  padding: 10px;
  width: 400px;
}
.row-style {
  background-color: red;
}
* {
  font-family: 'Open Sans';
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
/* .vgt-selection-info-row.info-custom{
    background: red;
  } */
</style>
