<template>
    <div id="app">
        <h1>Registration Form</h1>

        <form @submit.prevent="submitForm">
            <label for="name">Name: </label>
            <input type="text" id="name" placeholder="Enter Your Name" v-model="formData.name" required><br>

            <label for="email">Email Address: </label>
            <input type="email" id="email" placeholder="Enter Email Adress" v-model="formData.email" required><br>

            <label for="user">Mobile No.: </label>
            <input type="tel" id="mobile" placeholder="Enter Phone No." v-model="formData.mobile" required><br>


            <button type="submit">Submit</button><br>
        </form>

        <div v-if="formSubmitted">
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in userList" :key="index">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.mobile }}</td>
                    </tr>
                </tbody>
            </table>
            <button @click="resetForm">Reset Form</button>
        </div>
    </div>
</template>
  
<script>
export default {
    // Data for handling form data
    data() {
        return {
            formData: {
                name: '',
                email: '',
                mobile: '',
            },
            formSubmitted: false,
            userList: []
        };
    },
    // Methods for handling form submission and reset
    methods: {
        submitForm() {
            // Email validation check
            if (!this.isValidEmail(this.formData.email)) {
                alert("Please enter a valid email address.");
                return;
            }

            this.userList.push({ ...this.formData });
            this.resetForm();
            this.formSubmitted = true;
        },
        resetForm() {
            // Clear form fields and keep user list
            this.formData = { name: '', email: '', mobile: '' };
            // Reset form submission state
            this.formSubmitted = false;
        },
        isValidEmail(email) {
            // Basic email validation check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }
};
</script>