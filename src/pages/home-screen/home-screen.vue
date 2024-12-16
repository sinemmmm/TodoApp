<template>
  <div class="removeItem" v-if="removeTodoItem">
    <button @click="deleteTodo" class="removeButton" id="deleteTodo">DELETE TODO</button>
    <button @click="removeTodoItem = !removeTodoItem" class="removeButton">
      Cancel
    </button>
  </div>
  <div class="home" v-if="!detailOfTodo">
    <div class="headerContainer">
      <div class="header" v-if="!editTodo">
        <div class="title" id="appHeader">TO DO LIST</div>
        <router-link to="/profile-screen">
          <img src="../../assets/icons/settings.png" id="profileSettings"/>
        </router-link>
      </div>
      <h5 class="error" v-if="errorMesage">Title is Required</h5>
      <div v-if="editTodo">
        <div class="detailHeader">
          <div>
            <img src="../../assets/icons/chevron-left.png" @click="backHome" id="backButton"/>
      </div>
      <div class="icons">
        <img src="../../assets/icons/clock.png" id="clockButton" />
        <img src="../../assets/icons/edit.png" @click="openEditTodo" id="editButton"/>
        <img
        id="trashButton"
          src="../../assets/icons/trash.png"
          @click="removeTodoItem = !removeTodoItem"
        />
          </div>
        </div>
      </div>
      <div class="body">
        <div class="todoList">
          <img src="../../assets/icons/to-do.png" class="todoIcon" id="todoicon" />
          <div class="todoText" id="listoftodo">LIST OF TODO</div>
        </div>
        <div class="sort" id="sort"><Dropdown @veri-gonder="getSortedData" /></div>
      </div>
      <div class="todoContainer">
        <div
          class="to-do"
          v-for="todo in todoList"
          v-if="!addTodo"
          @click="changeItem(todo.id)"
          id="todo"
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
        id="plusCircle"
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
          id="addTodoTitle"
        />
        <textarea
          placeholder="Description *"
          class="addTodoDescription"
          v-model="userObj.description"
          id="addTodoDescription"
        />
        <div class="addImage" id="addTodoImage">
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
          id="addTodoButton"
        >
          {{ addTodo ? "Add Todo" : "Edit Todo" }}
        </button>
      </div>
    </div>
  </div>

  <div class="detail" v-if="detailOfTodo">
    <div class="detailHeader">
      <div>
        <img src="../../assets/icons/chevron-left.png" @click="backHome" id="backButton"/>
      </div>
      <div class="icons">
        <img src="../../assets/icons/clock.png" id="clockButton" />
        <img src="../../assets/icons/edit.png" @click="openEditTodo" id="editButton"/>
        <img
        id="trashButton"
          src="../../assets/icons/trash.png"
          @click="removeTodoItem = !removeTodoItem"
        />
      </div>
    </div>
    <div class="detailContainer">
      <div class="detailTitle" id="detailTitle">
        {{ userObj.title }}
      </div>
      <p class="detailDescription" id="detailDescription">
        {{ userObj.description }}
      </p>

      <img :src="userObj.image" class="detailImage" id="detailImage" />
      <div class="detailCreatedTime" id="detailCreatedTime">
        <p>{{ "Created at" + " " + userObj.createdTime }}</p>
      </div>
    </div>
  </div>
</template>
<script src="./home-screen.js" />
<style scoped src="./home-screen.css" />
