<template>
    <div class="wrapper contact-page">
        <div class="page-header page-header-small">
            <parallax class="page-header-image"
                 style="background-image: url('img/contactUs.jpg')">
            </parallax>
        </div>

        <div class="main">
            <div class="contact-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 ml-auto mr-auto">
                            <h1 class="title">GET A QUOTE</h1><br/><br/>                               <br>
                            <form role="form" id="get-a-quote-form" method="post">
                                <!-- Name input -->
                                <label for = "clientName">Your Name</label>
                                <fg-input
                                  id = "clientName"
                                  placeholder="Your Name..."
                                  v-model="form.name"
                                  addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>
                                <div class="errorMsgDiv">
                                  <span v-if = "!validName" class="errorMessage nameError text-danger">Your name is required</span>
                                </div>
                                <br>
                                <!--Email Address input-->
                                <label for = "email">Email Address</label>
                                <fg-input
                                  id = "email"
                                  placeholder="eg: example@demo.com"
                                  v-model="form.email"
                                  addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>
                                <div class="errorMsgDiv">
                                  <span v-if = "!validEmail" class="errorMessage emailError text-danger">Email Address is Not Valid</span>
                                </div>
                                <br>
                                <!-- Company Name input -->
                                <label for = "companyName">Company Name</label>
                                <fg-input
                                  id = "companyName"
                                  placeholder="eg: ABC.Inc"
                                  v-model="form.companyName"
                                  addon-left-icon="now-ui-icons business_bank">
                                </fg-input>
                                <div class="errorMsgDiv">
                                  <span v-if = "!validCompany" class="errorMessage companyNameError text-danger">Company Name is Required</span>
                                </div>
                                <br>
                                <!-- phone number input -->
                                <label for = "phoneNumber">Phone Number</label>
                                <fg-input
                                  id = "phoneNumber"
                                  placeholder="eg: 123 456 7890"
                                  v-model="form.phoneNumber"
                                  addon-left-icon="now-ui-icons tech_mobile">
                                </fg-input>
                                <div class="errorMsgDiv">
                                  <span v-if = "!validPhone" class="errorMessage phoneNumberError text-danger">Phone Number is Not Valid</span>
                                </div>
                                <br>
                                <!-- user selector -->
                                <label for="numOfUsers">Number of Users</label>
                                <div class="num-of-user">
                                  <el-input-number id = "numOfUsers" v-model="form.numOfUsers" size = "medium" @change="handleChange" :min="1"></el-input-number>
                                </div>
                                <br>
                                <!-- comment section -->
                                <div class="form-group">
                                    <label for = "comment">Comments</label>
                                    <textarea name="message" v-model="form.comments" class="form-control" id="comment" rows="6"></textarea>
                                </div>
                                <div class="section-space"></div>
                                <div class="form-group">
                                    <label for="verificationCode">Enter the Letters Below</label><br/>
                                    <span>place holder for code</span>
                                    <fg-input
                                        id = "verificationCode"
                                        placeholder = "Enter the letters on the picture"
                                        v-model = "verificationCode"
                                    ></fg-input>
                                </div>
                                <div class="submit text-center">
                                    <h4 ><n-button type="primary" round @click.native = "checkAll">Send</n-button></h4>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import Vue from "vue";
import { InputNumber } from "element-ui";

export default {
  // bodyClass: "contact-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [InputNumber.name]: InputNumber
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        numOfUsers: 1
      },
      validName: true,
      validEmail: true,
      validCompany: true,
      validPhone: true,
      userInfoJson: "",
      verificationCode: ""
    };
  },
  methods: {
    handleChange: function(value) {
      this.numOfUsers = value;
    },
    isNameValid: function() {
      this.validName = this.form.name.length != 0;
    },
    isEmailValid: function() {
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      this.validEmail = emailRegex.test(this.form.email);
    },
    isCompanyNameValid: function() {
      this.validCompany = this.form.companyName.length != 0;
    },
    isPhoneValid: function() {
      let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      this.validPhone = phoneRegex.test(this.form.phoneNumber);
    },
    normalizeStr: function(str) {
      let str0 = str.toLowerCase();
      return str0.replace(/\b\w/g, function(l) {
        return l.toUpperCase();
      });
    },
    checkAll: function() {
      this.isNameValid();
      this.isEmailValid();
      this.isCompanyNameValid();
      this.isPhoneValid();

      /*
      *if all needed info is correct
      *store as a JSON object
      */
      if (
        this.validName &&
        this.validEmail &&
        this.validCompany &&
        this.validPhone
      ) {
        const userJSObj = {
          userName: this.normalizeStr(this.form.name),
          emailAddress: this.form.emailAddress,
          phoneNumber: this.form.phoneNumber,
          companyName: this.form.companyName
        };
        this.userInfoJson = JSON.stringify(userJSObj);
      }
    }
  }
};
</script>
<style scoped>
.wrapper {
  font-size: 20px;
}
</style>
