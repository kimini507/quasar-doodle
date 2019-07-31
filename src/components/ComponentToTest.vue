<template>
  <div>
    <q-input
      v-model="search"
      @input="emitSearch"
      :debounce="debounce"
      placeholder="Search"
    >
    </q-input>
  </div>
</template>

<script>
export default {
  props: {
    search: String,
    debounce: {
      default: 300
    }
  },

  methods: {
    emitSearch () {
      this.$emit('search', this.search)
    }
  }
}
</script>

<style>

</style>
