export default{
    data(){
        return{
            userObj:[]
        }
    },
    mounted(){
        this.userObj = JSON.parse(window.localStorage.getItem("userInfo"))[0];
    }
}