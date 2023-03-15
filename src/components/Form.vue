<style scoped></style>

<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Nome do aluno"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Numero para contato"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="Turma"
    ></v-select>

    
    <v-btn class="me-4" type="submit"> enviar </v-btn>

    <v-btn @click="handleReset"> limpar </v-btn>
  </form>
</template>

<script>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

export default {
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true;

          return "Adicione um nome.";
        },
        phone(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

          return "Adicione um contato valido.";
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

          return "Adicione um email valido.";
        },
        select(value) {
          if (value) return true;

          return "Selecione um item.";
        },
        
      },
    });
    const name = useField("name");
    const phone = useField("phone");
    const email = useField("email");
    const select = useField("select");
    const checkbox = useField("checkbox");

    const items = ref(["Maternal", "Infantil", "Ensino Fundamental", "Ensino Medio", "Formandos"]);

    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    return { name, phone, email, select, checkbox, items, submit, handleReset };
  },
};
</script>
