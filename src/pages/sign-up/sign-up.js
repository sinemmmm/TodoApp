export default {
    data() {
      return {
          email: "",
          password: "",
          fullName: "",
          confirmPassword: "",
          users:[],
          page: true
      };
    },
    methods: {
        signUp(){
        if(this.confirmPassword == this.password)
          {
            this.users= JSON.parse(window.localStorage.getItem("users"));
            this.users.push({userId:2, userName:this.fullName, userEmail: this.email, userPassword: this.password});
            window.localStorage.setItem("users",JSON.stringify(this.users));
            window.localStorage.setItem("userInfo",JSON.stringify([{userId:2, userName:this.fullName, userEmail: this.email, userPassword: this.password}]));
            this.$router.push('/home');
          }
        },
        
    },
    mounted(){
       
    }
  };