import { configure, defineRule } from "vee-validate";

defineRule('required', value => {
    if (!value || !value.length) {
      return 'El campo no puede estar vacío';
    }
    return true;
  });

//Configuración básica para la validación
configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: false,
})