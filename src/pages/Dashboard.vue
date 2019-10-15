<template>
  <q-page>
    <div class="row q-pa-sm">
      <div class="col-12 q-pb-sm" @click="goProfile()">
        <q-card class="my-card">
          <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 40vh; width: 100%">
            <h1 class="text-white">Perfil</h1>
          </q-parallax>
        </q-card>
      </div>
      <div class="col-6 q-pr-sm q-pb-sm">
        <div class="row">
          <div class="col-12 q-pb-sm">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 19vh; width: 100%">
                <div class="absolute-bottom">
                  <div class="text-h6">Seguidores</div>
                </div>
              </q-img>
            </q-card>
          </div>
          <div class="col-12">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 19vh; width: 100%">
                <div class="absolute-bottom">
                  <div class="text-h6">Downloads</div>
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-6" @click="goRoom()">
        <q-card class="my-card">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 39vh; width: 100%">
            <div class="absolute-bottom">
              <div class="text-h6">Salas</div>
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="col-12" @click="goVideos()">
        <q-card class="my-card">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 20vh; width: 100%">
            <div class="absolute-bottom">
              <div class="text-h6">Videos</div>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    goProfile () {
      this.$router.push('profile')
    },
    goRoom () {
      this.$router.push('room')
    },
    goVideos () {
      this.$router.push('video')
    }
  }
}
</script>
