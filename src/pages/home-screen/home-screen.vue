<template>
  <div class="removeItem" v-if="removeTodoItem">
    <button @click="deleteTodo" class="removeButton">DELETE TODO</button>
    <button @click="removeTodoItem = !removeTodoItem" class="removeButton">
      Cancel
    </button>
  </div>
  <div class="home" v-if="!detailOfTodo">
    <div class="headerContainer">
      <div class="header" v-if="!editTodo">
        <div class="title">TO DO LIST</div>
        <router-link to="/profile-screen">
          <img src="../../assets/icons/settings.png" />
        </router-link>
      </div>
      <h5 class="error" v-if="errorMesage">Title is Required</h5>
      <div v-if="editTodo">
        <div class="detailHeader">
          <div>
            <img src="../../assets/icons/chevron-left.png" @click="backHome" />
          </div>
          <div class="icons">
            <img src="../../assets/icons/clock.png" />
            <img src="../../assets/icons/edit.png" @click="openEditTodo" />
            <img
              src="../../assets/icons/trash.png"
              @click="removeTodoItem = true"
            />
          </div>
        </div>
      </div>
      <div class="body">
        <div class="todoList">
          <img src="../../assets/icons/to-do.png" class="todoIcon" />
          <div class="todoText">LIST OF TODO</div>
        </div>
        <div class="sort"><Dropdown @veri-gonder="getSortedData" /></div>
      </div>
      <div class="todoContainer">
        <div
          class="to-do"
          v-for="todo in todoList"
          v-if="!addTodo"
          @click="changeItem(todo.id)"
        >
          <h5 class="to-do-title">
            {{ todo.title }}
          </h5>
          <p class="to-do-content">{{ todo.description }}</p>
          <div class="to-do-createdTime">{{'Created at ' + todo.createdTime }}</div>
        </div>
      </div>
    </div>
    <div class="plus-circle">
      <img
        src="../../assets/icons/plus-circle.png"
        @click="openAddNewItem"
        v-if="!addTodo"
      />
    </div>
    <div v-if="addTodo | editTodo" class="addTodo" :style="addTodoStyle">
      <img
        src="../../assets/icons/rectangle.png"
        class="rectangleButton"
          @touchmove="handleTouchMove"
      />
      <div class="addTodoArea">
        <input
          type="text"
          placeholder="Title *"
          class="addTodoTitle"
          v-model="userObj.title"
        />
        <textarea
          placeholder="Description *"
          class="addTodoDescription"
          v-model="userObj.description"
        />
        <div class="addImage">
          <label for="fileInput" class="custom-file-button">
            <p>Add Image (Optional)</p>
            <img src="../../assets/icons/image.png"
          /></label>
          <input
            type="file"
            id="fileInput"
            class="file-input"
            @change="onFileChange"
          />
        </div>
        <button
          class="addTodoButton"
          @click="addTodo ? addTodoItem() : editTodoItem()"
        >
          {{ addTodo ? "Add Todo" : "Edit Todo" }}
        </button>
      </div>
    </div>
  </div>

  <div class="detail" v-if="detailOfTodo">
    <div class="detailHeader">
      <div>
        <img src="../../assets/icons/chevron-left.png" @click="backHome" />
      </div>
      <div class="icons">
        <img src="../../assets/icons/clock.png" />
        <img src="../../assets/icons/edit.png" @click="openEditTodo" />
        <img
          src="../../assets/icons/trash.png"
          @click="removeTodoItem = !removeTodoItem"
        />
      </div>
    </div>
    <div class="detailContainer">
      <div class="detailTitle">
        {{ userObj.title }}
      </div>
      <p class="detailDescription">
        {{ userObj.description }}
      </p>

      <img :src="this.imageUrl" class="detailImage" />
      <div class="detailCreatedTime">
        <p>{{ "Created at" + " " + userObj.createdTime }}</p>
      </div>
    </div>
  </div>
</template>
<script src="./home-screen.js" />
<style scoped src="./home-screen.css" />
