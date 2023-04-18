<template>
    <div class="container d-flex align-items-center flex-column mt-5">
        <h2>Войти</h2>
        <form class="row g-3 w-50" ref="form" @submit.prevent="send">
            <div class="col-md-12">
                <label for="validationServerUsername" class="form-label">Номер или E-mail</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validationServerUsername"
                           aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" v-model="form.phone_or_email" required>
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <label for="validationServer03" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="validationServer03"
                       aria-describedby="validationServer03Feedback" v-model="form.password"
                       required>
                <div class="invalid-feedback">

                </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <button class="btn btn-primary" type="submit">Войти</button>
            </div>
        </form>
    </div>

</template>

<script>
import {api} from "@/api/InctanceAxios";
import axios from "axios";
import router from "@/router";

export default {
    name: "LoginView",
    data() {
        return {
            form: {
                phone_or_email: '',
                password: ''
            },
            errors: {}
        }
    },
    methods: {
        async send() {
            const form = new FormData(this.$refs.form)

            try {
                const {data} = await axios.post('http://taapi/api/login', this.form)
                if (data.message.toLowerCase() === 'success') {
                    localStorage.token = data.token
                    console.log(data)
                    router.push({name: 'profile'})
                }
            } catch (e) {
                this.errors = e.response.data
                console.log(this.errors)
            }

        }
    }
}
</script>

<style scoped>

</style>