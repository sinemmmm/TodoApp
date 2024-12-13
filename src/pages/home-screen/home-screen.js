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
                errorMesage: false,
                detailOfTodo: false,
                clickedTodo:0,
                addTodo: false,
                editTodo:false,
                todoList:[],
                removeTodoItem: false,
                imageUrl: JSON.parse(window.localStorage.getItem("imgUrl")),
                mouseY:null,
            }
        },
        components: {
            Dropdown
        },
        mounted(){
            const value = (JSON.parse(window.localStorage.getItem("todoListObject")));
            this.todoList = value;
           
        },
      watch: {
        mouseY(newValue, oldValue) {
            
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
              window.localStorage.setItem("imgUrl", JSON.stringify(reader.result));
              this.imageUrl=reader.result;
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

            if(this.userObj.title !=="") 
                {
                this.todoList.push({id:this.todoList.length, title:this.userObj.title, description:this.userObj.description, createdTime:this.userObj.createdTime});           
                window.localStorage.setItem("todoListObject", JSON.stringify(this.todoList));
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
                 const options = { year: 'numeric', month: 'short', day: 'numeric' };
                this.userObj.createdTime= (this.currentDate.toLocaleDateString('en-GB', options));
                this.addTodo = !this.addTodo;
            },
            editTodoItem(){
                this.todoList.forEach(todo => {
                if (todo.id === this.clickedTodo) {
                    todo.title = this.userObj.title; 
                    todo.description = this.userObj.description;
                     const options = { year: 'numeric', month: 'short', day: 'numeric' };
                    todo.createdTime= (this.currentDate.toLocaleDateString('en-GB', options));
                }
                });
                window.localStorage.setItem("todoListObject", JSON.stringify(this.todoList));
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
                this.userObj.createdTime=result.createdTime;
            },
            openEditTodo(){
                this.editTodo= true;
                this.detailOfTodo = false;
            },
            openProfileScreen(){
                this.editTodo= false;
                this.detailOfTodo = false;
            },
            deleteTodo(){
                this.removeTodoItem= false;
                this.todoList=this.todoList.filter(todo => todo.id !== this.clickedTodo);
                window.localStorage.setItem("todoListObject", JSON.stringify(this.todoList));
                this.backHome();
            }
        },
    }