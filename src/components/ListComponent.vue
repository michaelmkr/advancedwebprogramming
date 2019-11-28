<template>
  <div id="app">
    <h2>Todos:</h2>
    <div class="toDos">
      <div v-for="toDo in allToDos" :key="toDo.id" class="toDo">
        {{ toDo.text }}

      </div>
    </div>
   <!-- <ol>
      <li v-for="todo in todos">
        <label>
          <input type="checkbox"
                 v-bind:checked="todo.done"
                 v-on:change="toggle(todo)">
          <del v-if="todo.done">
            {{ todo.text }}
          </del>
          <span v-else>
          {{ todo.text }}
        </span>
        </label>
      </li>
    </ol>-->
  </div>
</template>

<script>

  //import '@/store/getters.js';
  import { mapGetters } from 'vuex';

    export default {
        name: 'ListComponent',
        computed: mapGetters([ 'allToDos' ]),
        /*data() {
            return {
                todos: [
                    {text: "Create Button Component", done: true},
                    {text: "Finish all tasks for Excercise 1 and Preparation Phase", done: false},
                    {text: "Create List View", done: true},
                    {text: "Create Map View", done: true},
                    {text: "Create List Component", done: true},
                    {text: "Get List Component to work", done: true},
                    {text: "Create Map Component", done: true},
                    {text: "Get Map Component to work", done: true},
                    {text: "Debounce % Throttle", done: false},
                    {text: "API Specs", done: true},
                    {text: "Dev Diary", done: true}
                ]
            }
        },*/
        /*methods: {
            toggle: function(todo){
                todo.done = !todo.done
            }
        }*/
    }

</script>

<style scoped>
  body {
    background: #20262E;
    padding: 20px;
  }

  li {
    margin: 8px 0;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 15px;
  }

  del {
    color: rgba(0, 0, 0, 0.3);
  }
</style>
