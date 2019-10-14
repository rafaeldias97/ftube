<template>
  <q-page class="flex flex-center">
    <div class="row justify-center">
      <div class="col-10 q-pb-xl text-center">
        <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="play_arrow" />
      </div>
      <div class="col-10 q-pb-md">
        <q-input label="Nome" standout="bg-blue-grey-9 text-teal" rounded v-model="form.name"></q-input>
      </div>
      <div class="col-10 q-pb-md">
        <q-input type="email" label="Email" standout="bg-blue-grey-9 text-teal" rounded v-model="form.email"></q-input>
      </div>
      <div class="col-10 q-pb-md">
        <q-input standout="bg-blue-grey-9 text-teal" rounded label="Data de Nascimento" mask="##/##/####" v-model="form.birthday">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale" :breakpoint="600">
                <q-date v-model="form.birthday" @input="() => $refs.qDateProxy.hide()" mask="DD/MM/YYYY"/>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-10 q-pb-md">
        <q-btn rounded @click="next()" color="cyan-10" label="Continuar" class="full-width"></q-btn>
      </div>
      <div class="col-10">
        <q-btn to="/" rounded outline color="cyan-13" label="Voltar" class="full-width"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        birthday: ''
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
    next () {
      this.CHANGE_FORM_CADASTRO(this.form)
      this.$router.push('cadastrar2')
    }
  }
}
</script>
