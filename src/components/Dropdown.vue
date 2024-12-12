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
                todoList:[]
            }
        },
        emits: ["veri-gonder"],
        methods:{
            sortTodosByTitle(){
                this.showSort= !this.showSort;
            },
            sortItems(option){
                this.todoList= (JSON.parse(window.localStorage.getItem("todoListObject")));
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
                console.log(JSON.stringify(sortedItems));
                window.localStorage.setItem("todoListObject", JSON.stringify(sortedItems));
                this.showSort= !this.showSort;
                this.$emit('veri-gonder', (JSON.parse(window.localStorage.getItem("todoListObject"))));
            },
          
            
        },
          mounted(){
            this.todoList= (JSON.parse(window.localStorage.getItem("todoListObject")));
             
            
        },
    }
</script>
