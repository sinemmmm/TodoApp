export default {
    data() {
      return {
        email: "",
        password: "",
        currentDate: new Date(),
        options : { year: 'numeric', month: 'short', day: 'numeric' },
        createdTime: null,
        userValid:false,
        users:[],
        exampleTodo: [{
          id:0,
          title:"Design Logo", 
          description:"Make logo for the mini project", 
          createdTime: this.createdTime}],
        exampleUser: [{
          userId:0,
          userName:"Sinem Alageyik",
          userEmail:"sinem.alageyik@formsapp.com",
          userPassword:"123456", 
          userTodo: this.exampleTodo}]
  
      };
    },
    methods: {
        signIn(){
         this.valid = this.users.find(user => user.userEmail === this.email && user.userPassword ===this.password);
         if(this.valid){
          if(this.valid.userTodo){
            window.localStorage.setItem(
              "userInfo",JSON.stringify({userId: this.valid.userId, userName: this.valid.userName, userEmail: this.valid.userEmail, userPassword: this.valid.userPassword, userTodo:this.valid.userTodo}));
            this.$router.push('/home')}
          else{
            window.localStorage.setItem(
              "userInfo",JSON.stringify({userId: this.valid.userId, userName: this.valid.userName, userEmail: this.valid.userEmail, userPassword: this.valid.userPassword, userTodo:this.exampleTodo}));
              this.$router.push('/home');
          }
         }
         else{
          alert('This email is not registered or the information was entered incorrectly');
         }
        }, 
    },
    mounted(){
  
        this.createdTime=  (this.currentDate.toLocaleDateString('en-GB', this.options))
        this.users= JSON.parse(window.localStorage.getItem("users"));
        if(this.users == null){
          window.localStorage.setItem(
        "users",JSON.stringify(this.exampleUser));
        this.users= JSON.parse(window.localStorage.getItem("users"));
      }
    }
  };