export default {
    data() {
      return {
        email: "",
        password: "",
        page: true,
        currentDate: new Date(),
        createdTime: "",
        userValid:false,
        users:[],
  
      };
    },
    methods: {
        signIn(){
         this.valid = this.users.find(user => user.userEmail === this.email && user.userPassword ===this.password);
         if(this.valid){
            window.localStorage.setItem(
            "userInfo",JSON.stringify({userId: this.valid.userId, userName: this.valid.userName, userEmail: this.valid.userEmail, userPassword:  this.valid.userPassword}));
            this.$router.push('/home');
         }
         else{
          alert('Bu email kayıtlı değil veya bilgileri yanlış girildi');
         }
        }, 
    },
    mounted(){
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
        this.createdTime=  (this.currentDate.toLocaleDateString('en-GB', options));
        this.users= JSON.parse(window.localStorage.getItem("users"));
        if(this.users == null){
          window.localStorage.setItem(
        "users",JSON.stringify([{userId:0,userName:"Sinem Alageyik",userEmail:"sinem.alageyik@formsapp.com",userPassword:"123456"},{userId:1,userName:"User 1",userEmail:"user1@formsapp.com",userPassword:"123456"}]));
        this.users= JSON.parse(window.localStorage.getItem("users"));
      }
        window.localStorage.setItem("todoListObject", JSON.stringify([{id:0,title:"Design Logo", description:"Make logo for the mini project", createdTime:this.createdTime}]));
    }
  };