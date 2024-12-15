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
        if(this.confirmPassword == this.password && this.email && this.password && this.fullName && this.confirmPassword)
          {
            this.users= JSON.parse(window.localStorage.getItem("users"));
            const userExist = this.users.find(user => user.userEmail == this.email);
            if(userExist)
            { alert('Bu email daha önce kullanılmış');}
            else{
            this.users.push({userId:2, userName:this.fullName, userEmail: this.email, userPassword: this.password});
            window.localStorage.setItem("users",JSON.stringify(this.users));
            window.localStorage.setItem("userInfo",JSON.stringify({userId:2, userName:this.fullName, userEmail: this.email, userPassword: this.password}));
            this.$router.push('/home');
            }
          }
          else if(this.email || this.password || this.fullName || this.confirmPassword){
            alert('Lütfen alanları eksiksiz doldurun');
          }
        },
        
    },
    mounted(){
       
    }
  };