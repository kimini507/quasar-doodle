<template>
  <q-layout
    view="lhh Lpr lFf"
    ref="qlayout"
  >
    <q-header
      id="AppHeader"
      style="height: 56px"
      reveal
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleSidebar"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-input
          borderless
          input-class="text-white"
          placeholder="Search"
          class="q-ml-lg"
        >
          <template #prepend>
            <q-icon
              name="eva-search-outline"
              color="white"
            />
          </template>
        </q-input>

        <q-space />

        <q-btn
          flat
          icon="message"
          stretch
        />
        <q-btn
          flat
          icon="today"
          stretch
        />
        <q-btn
          flat
          icon="settings"
          stretch
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="isDrawerOpen"
      content-class="bg-sidebar"
      :mini="isDrawerMini"
      mini-to-overlay
      class="app-drawer"
    >
      <q-list
        dark
      >
        <q-item
          clickable
          class="app-drawer_banner"
          :style="bannerStyle"
        >
          <q-item-section avatar>
            <q-avatar  color="white" text-color="primary" class="text-header">
              <b>B</b>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>BroCRM</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item
          clickable
        >
          <q-item-section avatar>
            <q-icon name="eva-search-outline" />
          </q-item-section>
          <q-item-section>
            <q-input
              placeholder="Search"
              class="col-12"
              dense
            >
              <template #append>
                <q-icon
                  name="eva-search-outline"
                />
              </template>
            </q-input>
          </q-item-section>
        </q-item> -->
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container
    >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',

  data () {
    return {
      isDrawerOpen: this.$q.platform.is.desktop,
      isDrawerMini: this.$q.platform.is.desktop,

      isMounted: false
    }
  },

  computed: {
    qlayout () {
      return this.isMounted && this.$refs.qlayout
    },

    bannerStyle () {
      let headerOffset = this.qlayout ? this.qlayout.header.size : 50

      return {
        height: `${headerOffset}px`
      }
    }
  },

  mounted () {
    this.isMounted = true
  },

  methods: {
    openURL,

    toggleSidebar () {
      this.isDrawerOpen = !this.isDrawerOpen
    }
  }
}
</script>

<style lang="stylus" scoped>
#AppHeader
  background-image linear-gradient(90deg, $primary, lighten($primary, 35%))

.app-drawer_banner
  background-color lighten($primary, 35%)
</style>
