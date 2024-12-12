export default {
    data() {
      return {
        password: "",
        confirmPassword: "",
        userInfo:{},
        wrongPassword: false,
      };
    },
    methods: {
      changePassword(){
          console.log(this.userInfo.userPassword);
          if(this.userInfo.userPassword == this.password){
          this.$router.push('/home');
            console.log("password changed");
          }
          else{
          this.wrongPassword=true;
            console.log(" wrong password ");
          }
      }
    },
    mounted(){
        const userInfo= (JSON.parse(window.localStorage.getItem("userInfo")));
        this.userInfo=userInfo[0];
        console.log(userInfo[0]);
  },
  };