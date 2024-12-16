<template>

        <img src="../assets/icons/filter.png" @click="sortTodosByTitle" />
        <div class="dropdownItem" v-if="showSort">
            <h5 class="dropdownOptions" @click="sortItems('date')">By Date</h5>
            <h5 class="dropdownOptions" @click="sortItems('title')">By Title</h5>
            <h5 class="dropdownOptions" @click="sortItems('description')">By Desc.</h5>
        </div>
</template>
<style>
    .dropdownItem{
        background: #F2F2F2;
        position: absolute;
        right: 0;
        top: 160px;
        width: 126px;
        height: 108px;
        border-radius:12px;
        gap: 8px;
        display: flex;
        flex-direction:column;
        padding-left:9px;
    }

    .dropdownOptions:hover {
        color: red;
}
</style>
<script>
    export default {
        data(){
            return{
                showSort:false,
                selectedOption:"id",
                todoList:[],
                user:null,
            }
        },
        emits: ["veri-gonder"],
        methods:{
            sortTodosByTitle(){
                this.showSort= !this.showSort;
            },
            sortItems(option){
            this.user=JSON.parse(window.localStorage.getItem("userInfo"))
            this.todoList= this.user.userTodo
                const sortedItems = this.todoList.sort((a, b) => {
                    if(option == 'date')
                        {return a.createdTime.localeCompare(b.createdTime);
                    }
                    else if(option == 'title'){
                        return a.title.localeCompare(b.title);
                    }
                    else if(option == 'description'){
                        return a.description.localeCompare(b.description);
                    }
                    else{
                        return a.id.localeCompare(b.id);
                    }
                });
            this.showSort= !this.showSort;
               this.user={userId: this.user.userId, userName: this.user.userName, userEmail: this.user.userEmail, userPassword: this.user.userPassword, userTodo: sortedItems}
               window.localStorage.setItem("userInfo",JSON.stringify(this.user)) 
                this.$emit('veri-gonder', this.user.userTodo)
            },
          
            
        },
          mounted(){
            this.user=JSON.parse(window.localStorage.getItem("userInfo"))
            this.todoList= this.user.userTodo
             
            
        },
    }
</script>
