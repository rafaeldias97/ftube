<template>
  <q-page class="flex flex-center">
    <div class="row justify-center">
      <div class="col-10 q-pb-xl text-center">
        <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="play_arrow" />
      </div>
      <div class="col-10 q-pb-md">
        <q-input type="email" label="Email" standout="bg-blue-grey-9 text-teal" rounded v-model="form.email"></q-input>
      </div>
      <div class="col-10 q-pb-md">
        <q-input label="Senha" color="cyan-13" standout="bg-blue-grey-9 text-teal" rounded type="password" v-model="form.password"></q-input>
      </div>
      <div class="col-10 q-pb-md">
        <q-btn @click="autenticar()" rounded color="cyan-10" label="Autenticar" class="full-width"></q-btn>
      </div>
      <div class="col-10">
        <q-btn rounded outline color="cyan-13" label="Cadastrar" class="full-width"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: 'rafael.dias@gmail.com',
        password: '123456'
      }
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async autenticar () {
      this.$q.loading.show()
      let res = await this.login(this.form)
      this.$q.loading.hide()
      console.log('res => ', res)
    }
  }
}
</script>
