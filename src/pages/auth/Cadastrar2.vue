<template>
  <q-page class="flex flex-center">
    <div class="row justify-center">
      <div class="col-10 q-pb-xl text-center">
        <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="play_arrow" />
      </div>
      <div class="col-10 q-pb-md text-center text-white">
        <q-radio keep-color v-model="form.sexo" val="1" label="Masculino" color="teal" />
        <q-radio keep-color v-model="form.sexo" val="2" label="Feminino" color="red" />
        <q-radio keep-color v-model="form.sexo" val="3" label="Outro" color="orange" />
      </div>
      <div class="col-10 q-pb-md">
        <q-input label="Senha" color="cyan-13" standout="bg-blue-grey-9 text-teal" rounded type="password" v-model="form.password"></q-input>
      </div>
      <div class="col-10 q-pb-md">
        <q-input label="Confirmar" color="cyan-13" standout="bg-blue-grey-9 text-teal" rounded type="password" v-model="form.password"></q-input>
      </div>
      <div class="col-10 q-pb-md">
        <q-btn @click="create()" rounded color="cyan-10" label="Finalizar" class="full-width"></q-btn>
      </div>
      <div class="col-10">
        <q-btn @click="previous()" rounded outline color="cyan-13" label="Voltar" class="full-width"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        password: '',
        confirmPassword: '',
        sexo: ''
      }
    }
  },
  mounted () {
    this.form = Object.assign({}, this.formState)
  },
  computed: {
    ...mapState('auth', ['formState'])
  },
  methods: {
    ...mapMutations('auth', ['CHANGE_FORM_CADASTRO']),
    ...mapActions('auth', ['createUser']),
    previous () {
      this.CHANGE_FORM_CADASTRO(this.form)
      this.$router.go(-1)
    },
    async create () {
      this.$q.loading.show()
      await this.createUser(this.form)
      this.$q.loading.hide()
    }
  }
}
</script>
