<script>
import PopupComponent from "../components/PopupComponent.vue";
export default {
  components: {
    PopupComponent,
  },
  data() {
    return {
      isOpenModal: false,
      formDataJSON: "",
    };
  },
  methods: {
    togglePopup() {
      this.isOpenModal = !this.isOpenModal;
    },
    setFormDataJSON(formDataJSON) {
      this.formDataJSON = formDataJSON;
    },
  },
};
</script>

<template>
  <button @click="togglePopup">вызов popup</button>
  <PopupComponent
    v-if="isOpenModal"
    @togglePopup="togglePopup"
    @setFormDataJSON="setFormDataJSON"
  ></PopupComponent>
  <div v-if="formDataJSON">{{ formDataJSON }}</div>
</template>
