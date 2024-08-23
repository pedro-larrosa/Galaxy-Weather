<template>
    <div id="nuevaCiudad" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white" data-bs-theme="dark">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Añadir ubicación</h1>
                    <button ref="closeButton" type="button" class="btn-close" data-bs-dismiss="modal" @click="cerrarModal()" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body">
                <Form ref="form" @submit.prevent v-slot="{ errors }">
                    <Field
                    type="text"
                    id="ciudad" name="ciudad"
                    :rules="'required'"
                    placeholder="Introduce una ciudad"
                    v-model="ciudad"
                    :class="{ 'is-invalid': formError(errors, 'ciudad'), 'form-control': true}"
                    v-bind:invalid-feedback="errors.ciudad"
                  />
                  <small class="text-danger ml-2" v-if="formError(errors, 'ciudad')">{{ errors.ciudad }}</small>
                </Form>
                </div>
                <div class="modal-footer bg-primary">
                    <button type="button" class="btn btn-link text-white" @click="cerrarModal()" data-bs-dismiss="modal">Volver</button>
                    <button type="button" class="btn btn-success" @click="nuevaCiudad()">Añadir</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Form, Field } from 'vee-validate';
import { formError } from '@/shared/utils/tools';

export default {
    name: 'NuevaCiudadModal',
    components: {
        Form,
        Field
    },
    data() {
        return {
            ciudad: '',
        }
    },
    methods: {
        cerrarModal() {
            this.$refs.form.resetForm();
        },
        nuevaCiudad() {
            this.$refs.form.validate().then(v => {
                if(!v.valid) return

                this.$emit('cambiar', this.ciudad)
                this.$refs.closeButton.click();
            })
        },
        formError(errors, value) {
            return formError(errors, value);
        },
    }
}
</script>