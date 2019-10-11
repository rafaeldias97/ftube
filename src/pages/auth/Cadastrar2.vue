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
        <q-input label="Senha" color="cyan-13" standout="bg-blue-grey-9 text-teal" rounded type="password" v-model="form.password"></q-input>
      </div>
      <div class="col-10 q-pb-md">
        <q-input label="Confirmar" color="cyan-13" standout="bg-blue-grey-9 text-teal" rounded type="password" v-model="form.password"></q-input>
      </div>
      <div class="col-10 q-pb-md">
        <q-btn rounded color="cyan-10" label="Finalizar" class="full-width"></q-btn>
      </div>
      <div class="col-10">
        <q-btn to="cadastrar" rounded outline color="cyan-13" label="Voltar" class="full-width"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      form: {
        name: 'Rafael Dias',
        email: 'rafael.dias@gmail.com',
        password: '123456',
        birthday: '1997-03-24',
        sexo: 1,
        description: 'string'
      }
    }
  }
}
</script>
