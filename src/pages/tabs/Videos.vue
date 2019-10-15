<template>
  <q-page class="q-pa-sm">
    <div class="row items-center">
      <div class="col-2">
        <q-btn round outline class="text-white" icon="chevron_left" @click="$router.go('-1')"></q-btn>
      </div>
      <div class="col-10">
        <q-input label="Pesquise" dark standout="bg-blue-grey-9 text-teal" rounded v-model="search">
          <template v-slot:append>
            <q-icon name="search" @click="searchV()"/>
          </template>
        </q-input>
      </div>
    </div>
    <div class="row q-pt-md">
      <div class="col-12 q-pb-md" v-for="(video, index) in videos" :key="index">
        <q-card class="my-card">
          <q-img :src="video.thumbnails.high.url" style="height: 35vh; width: 100%">
            <div class="absolute-bottom">
              <div class="text-h6">{{ video.title }}</div>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState('video', ['videos'])
  },
  methods: {
    ...mapActions('video', ['searchVideo']),
    async searchV () {
      this.$q.loading.show()
      await this.searchVideo(this.search)
      this.$q.loading.hide()
    }
  }
}
</script>
