<script>
export default {
  data() {
    return {
      formData: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
      },
    };
  },
  methods: {
    togglePopup() {
      this.$emit("togglePopup");
    },
	submitForm() {
		const formDataJSON = JSON.stringify(this.formData)
		this.$emit('setFormDataJSON', formDataJSON)
		this.togglePopup();
	}
  },
  mounted() {
	document.body.style.overflow = 'hidden';
  },
  unmounted() {
	document.body.style.overflow = 'auto';
  }
};
</script>

<template>
  <div @click.self="togglePopup" class="backdrop">
    <form class="popup" @submit.prevent="submitForm">
      <h2>Заголовок</h2>
      <div class="inputs-block">
		<!-- все инпуты завязаны на переменных с помощью v-model -->
		<!-- т.к семантически это не список, необходимости в v-for нет -->
        <input v-model="formData.input1" :placeholder="'input1'"/>
		<input v-model="formData.input2" :placeholder="'input2'"/>
		<input v-model="formData.input3" :placeholder="'input3'"/>
		<input v-model="formData.input4" :placeholder="'input4'"/>
		<input v-model="formData.input5" :placeholder="'input5'"/>
      </div>
      <button>Отправить</button>
    </form>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 2;
}
.popup {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
}

.inputs-block {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.inputs-block input {
  flex-grow: 1;
}
</style>
