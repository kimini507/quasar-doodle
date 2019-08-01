<template>
  <q-input
    :value="search"

    :placeholder="placeholder"
    @input="emitSearch"
    input-class="search-form__input"
    :debounce="300"
  >
    <template #append>
      <q-btn
        @click="emitSearch(search)"
        class="search-form__submit-button"
      />
    </template>
  </q-input>
</template>

<script>
import { QInput, QBtn } from 'quasar'

export default {
  components: {
    QInput,
    QBtn
  },

  props: {
    placeholder: {
      type: String,
      default: 'Search'
    },

    search: {
      type: String,
      default: ''
    }
  },

  methods: {
    emitSearch (val) {
      this.$emit('search', val)
    }
  }
}
</script>

<style>

</style>
