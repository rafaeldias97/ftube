const CHANGE_FORM_CADASTRO = (state, payload) => {
  if (payload.name) state.formState.name = payload.name
  if (payload.email) state.formState.email = payload.email
  if (payload.password) state.formState.password = payload.password
  if (payload.birthday) state.formState.birthday = payload.birthday
  if (payload.sexo) state.formState.sexo = payload.sexo
  if (payload.description) state.formState.description = payload.description
}

export default {
  CHANGE_FORM_CADASTRO
}
