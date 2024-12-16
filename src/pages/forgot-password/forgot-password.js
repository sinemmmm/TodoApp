export default {
    data() {
      return {
        password: "",
        confirmPassword: "",
        user:{},
        users:null,
        wrongPassword: false,
      };
    },
    methods: {
      changePassword(){
          if(this.confirmPassword == this.password){
            this.users=this.users.filter(user => user.userId !== this.user.userId); 
            this.user={userId: this.user.userId, userName: this.user.userName, userEmail: this.user.userEmail, userPassword: this.password, userTodo: this.user.userTodo}
            this.users.push(this.user)
            window.localStorage.setItem("users",JSON.stringify(this.users));
            window.localStorage.setItem("userInfo",JSON.stringify(this.user));
            this.$router.push('/home');
          }
          else{
          this.wrongPassword=true;
          }
      }
    },
    mounted(){
        this.user= (JSON.parse(window.localStorage.getItem("userInfo")));
        this.users= (JSON.parse(window.localStorage.getItem("users")));
        if(!this.user){
          alert('Email information is not available yet, log in or sign up first.');
        }
  },
  };