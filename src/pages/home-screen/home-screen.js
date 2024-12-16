import Dropdown from '../../components/Dropdown.vue';  


export default{
        data(){
            return{
                userObj : {
                    id:"",
                    title : "",
                    description: "",
                    image:"",
                    createdTime: ""
                },
                currentDate: new Date(),
                createdTime: "",
                errorMesage: false,
                detailOfTodo: false,
                clickedTodo:0,
                addTodo: false,
                editTodo:false,
                todoList:[],
                removeTodoItem: false,
                user:null,
                users: null,
                mouseY:null,
                todoId:0
            }
        },
        components: {
            Dropdown
        },
        mounted(){
            this.user= JSON.parse(window.localStorage.getItem("userInfo"))
            this.users= JSON.parse(window.localStorage.getItem("users"))
            this.todoList = this.user.userTodo
            this.todoId= this.user.userTodo.length + 1 
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            this.createdTime= this.currentDate.toLocaleDateString('en-GB', options)
        },
      watch: {
        mouseY() {
            
            if(this.mouseY >700 ){
                this.editTodo=false;
                this.addTodo=false;
                this.mouseY=null;
            }
           
          },
        },
        computed: {
            addTodoStyle() {
                return {
                  top: `${this.mouseY}px`,
                  transition: 'all 0.1s ease', 
                };}
          },
        methods: {
            handleTouchMove(event) {
                this.mouseY = event.touches[0].clientY;

              },
        getTime(){
            return this.currentDate.getDate() + ' ' + (this.currentDate.getMonth() + 1) + ' ' +this.currentDate.getFullYear();
        },
         onFileChange(event) {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              this.userObj.image = reader.result;  
            };
            reader.readAsDataURL(file); 
          }
        } ,
            getSortedData(data) {
                this.todoList = data;
            },
            backHome(){
                this.detailOfTodo=false;
                this.editTodo=false;
            },
            addTodoItem(){

            if(this.userObj.title !=="" && this.userObj.description !=="" ) 
                {
                this.todoList.push({id:this.todoId, title:this.userObj.title, description:this.userObj.description, createdTime:this.userObj.createdTime, image:this.userObj.image})
                this.todoId++
                this.user.userTodo=this.todoList  
                window.localStorage.setItem("userInfo", JSON.stringify(this.user));
                this.users=this.users.filter(user => user.userId !== this.user.userId);
                this.users.push(this.user)
                window.localStorage.setItem("users", JSON.stringify(this.users));
                this.closePanel();
                this.errorMesage=false;
                }
            else{
                this.errorMesage=true;
            }
            },
            openAddNewItem(){
                this.userObj.title="";
                this.userObj.description="";
                this.userObj.image=null;
                this.userObj.createdTime= this.createdTime
                this.addTodo = !this.addTodo;
            },
            editTodoItem(){
                this.todoList.forEach(todo => {
                if (todo.id === this.clickedTodo) {
                    todo.title = this.userObj.title; 
                    todo.description = this.userObj.description;
                    todo.image=this.userObj.image;
                    todo.createdTime= this.createdTime
                }
                });
                this.user.todo=this.todoList  
                window.localStorage.setItem("userInfo", JSON.stringify(this.user));
                this.users=this.users.filter(user => user.userId !== this.user.userId);
                this.users.push(this.user)
                window.localStorage.setItem("users", JSON.stringify(this.users));
                this.closePanel();
            },
            closePanel(){
                this.addTodo= false;
                this.editTodo=  false;
            },
            changeItem(id){
                this.clickedTodo=id;
                this.detailOfTodo= true;
                let result=(this.todoList.filter(item => item.id ==id)[0]);
                this.userObj.title=result.title;
                this.userObj.description=result.description;
                this.userObj.image=result.image;
                this.userObj.createdTime=result.createdTime;
            },
            openEditTodo(){
                this.editTodo= true;
                this.detailOfTodo = false;
            },
            deleteTodo(){
                this.removeTodoItem= false;
                this.user.userTodo=this.todoList.filter(todo => todo.id !== this.clickedTodo); 
                window.localStorage.setItem("userInfo", JSON.stringify(this.user));
                this.users=this.users.filter(user => user.userId !== this.user.userId);
                this.users.push(this.user)
                window.localStorage.setItem("users", JSON.stringify(this.users));     
                this.todoList=this.user.userTodo         
                this.backHome();
            }
        },
    }