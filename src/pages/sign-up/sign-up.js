export default {
    data() {
      return {
          email: "",
          password: "",
          fullName: "",
          confirmPassword: "",
          users:[],
          userId:null,
          exampleTodo: [{
            id:0,
            title:"Design Logo", 
            description:"Make logo for the mini project", 
            createdTime:"16 Dec 2024"}]
      };
    },
    methods: {
        signUp(){
        if(this.confirmPassword == this.password && this.email && this.password && this.fullName && this.confirmPassword)
          {
            this.users= JSON.parse(window.localStorage.getItem("users"));
            const userExist = this.users.find(user => user.userEmail == this.email);
            if(userExist)
            { alert('This email used before');}
            else{
            this.users.push({userId: this.userId + 1, userName:this.fullName, userEmail: this.email, userPassword: this.password});
            window.localStorage.setItem("users",JSON.stringify(this.users));
            window.localStorage.setItem("userInfo",JSON.stringify({userId:this.userId + 1, userName:this.fullName, userEmail: this.email, userPassword: this.password, userTodo: this.exampleTodo}));
            this.$router.push('/home');
            }
          }
          else if(this.email || this.password || this.fullName || this.confirmPassword){
            alert('Please fill in the fields completely');
          }
        },
        
    },
    mounted(){
      this.userId=(JSON.parse(window.localStorage.getItem("users")).length)
    }
  };