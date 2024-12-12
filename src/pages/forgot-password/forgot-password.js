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
          if(this.confirmPassword == this.password){
            const users= (JSON.parse(window.localStorage.getItem("users")));
            const userId=((users.find(user => user.userId == this.userInfo.userId).userId));
            users[userId]={userId: this.userInfo.userId, userName: this.userInfo.userName, userEmail: this.userInfo.userEmail, userPassword:  this.password}
            window.localStorage.setItem("users",JSON.stringify(users));
            window.localStorage.setItem(
              "userInfo",JSON.stringify([{userId: this.userInfo.userId, userName: this.userInfo.userName, userEmail: this.userInfo.userEmail, userPassword:  this.password}]));
          this.$router.push('/home');
          }
          else{
          this.wrongPassword=true;
          }
      }
    },
    mounted(){
        const userInfo= (JSON.parse(window.localStorage.getItem("userInfo")));
        if(!userInfo){
          alert('email bilgisi henüz alınmadı önce giriş yapın yada üye olun');
        }
        else{
          this.userInfo=userInfo[0];
        }
      
  },
  };