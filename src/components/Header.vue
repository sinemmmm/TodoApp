<template>
    <div class="detailHeader">
        <div>
             <img src="../assets/icons/chevron-left.png"  @click="backHome"/>
        </div>
        <div>
            <img src="../assets/icons/clock.png" />
            <img src="../assets/icons/edit.png" @click="openEditTodo"/>
            <img src="../assets/icons/trash.png" click="removeTodoItem = !removeTodoItem"/>
        </div>
    </div>
</template>
<style>
    .detailHeader{
    width: 100%;
    display: flex;
    margin-top: 25px;
    margin-bottom: 25px;
    justify-content: space-between;
}
</style>
<script>
    export default {
        name: 'Header',
        data(){
            return{
             removeTodoItem: false,
                editTodo: true,
                detailOfTodo: false,
            }
        }
    }
</script>
