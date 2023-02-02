<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="test">
    <h1 :class="appname">{{app_name}}</h1>
    <section id="todolist">
        <div class="liste">
            <h2>Liste</h2>
            <div class="input">
                <label for="input">
                    <input @keyup.enter="AddTodo()" type="text"
                    v-model="message" name="name" size="30"
                    style="height: 30px; font-size: 20px;"
                    v-bind:placeholder="blablabla">
                    <i class="fa-solid fa-plus" @click="AddTodo()"></i>
                </label>
            </div>
        </div>
        <ul class="matodo">
             <div v-for="(todo, index) in todos" :key="todo.id">
                <div :class="`todo-${index}`">
                    <div class="todo-container" :class="{ done : todos[index].check}">
                        <div @click="indexEdit(index)"
                            v-if="todos[index].edit"
                            id="test" class todo-contenus>
                            {{ todo.contenus }}
                        </div>
                        <input v-else v-on:keyup.enter="saveTask(index)"
                        ref="input" id="input" v-model="editmessage" placeholder="modifie moi" >
                        <div class="objet" >
                            <i class="fa-solid fa-check"
                             @click="checkTask(index)"></i>
                            <i class="fa-solid fa-trash" @click="removeTodo(index)"></i>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
        <div class="check">
        <p>Tâche check : {{ checkTaske }} </p>
        <p>Total des tâches : {{ totalTask }}</p>
        <button @click="focusInput(0)">Test Fonction</button>
        </div>
    </section>
    <button @click="consoleLog">Console log array</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                editmessage: '',
                message: '',
                app_name: 'Todolist',
                appname: 'testo',
                id: 2,
                todos: [
                    {
                        key: 0, contenus: 'test', check: false, edit: true,
                    },
                    {
                        key: 1, contenus: 'tedst', check: false, edit: true,
                    },
                ], // v-for="objet in tableau" // {{objet}} ou {{tableau.contenus}}
            };
        },
        methods: {
            AddTodo() {
                if (this.message !== '') {
                    this.todos.push({ key: this.id, contenus: this.message, edit: true });
                    this.id += 1; // id++
                    this.message = '';
                }
            },
            consoleLog() {
                console.log(this.todos);
            },
            // eslint-disable-next-line func-names, object-shorthand
            removeTodo: function (index) {
                console.log(index);
                this.todos.splice(index, 1);
            },
            saveTask(index) {
                this.todos[index].contenus = this.editmessage;
                this.todos[index].edit = !this.todos[index].edit;
                this.editmessage = '';
            },
            indexEdit(index) {
                this.todos[index].edit = !this.todos[index].edit;
                this.focusInput(index);
            },
            checkTask(index) {
                this.todos[index].check = !this.todos[index].check;
            },
            focusInput() {
                this.$nextTick(() => {
                    this.$refs.input[0].focus();
                    console.log('blabla', this.index);
                });
                // this.$refs.input[index].focus();
            },

        },
        computed: {
            totalTask() {
                return this.todos.length;
            },
            checkTaske() {
                const count = this.todos.filter((word) => word.check === true);
                return count.length;
            },
        },
    };
</script>

<style lang ="scss">
    .liste{ // a changer
        background-image: url(/home/warriopops/todolist/src/assets/fo.jpg);
        background-size:contain;
        background-color: rgb(240, 128, 128);
        color:white;
        width: 500px;
        text-align: center;
        margin-left: auto;
        margin-right:auto;
        height:110px;
        padding-top:5px;
        border-radius: 10px 10px 0px 0px;
        opacity: 0.8;
    }
    #todolist{
        background-image:url(assets/mario-550x365.jpg);
        background-size: cover;
        background-color: rgb(173, 216, 230);
        width:550px;
        height:auto;
        margin-right: auto;
        margin-left:auto;
        padding-top:20px;
        padding-bottom:20px;
        border-radius: 10px 10px 10px 10px;
        background-size:500px 450px;
    }
    .input{
        width:100%;
        size: 100%;
        margin-top:-10px;
        position:relative;
    }
    .matodo{ // a changer
        background-image:url(/home/warriopops/todolist/src/assets/popo.jpg);
        background-size:cover;
        margin-left:auto;
        margin-right: auto;
        background-color: rgb(221, 221, 221);
        width: 460px;
        height:auto;
        border-radius: 0px 0px 10px 10px;
        text-align: justify;
        padding-bottom:10px;
        padding-top:10px;
        font-size:25px;
        opacity:0.8;
        background-size : 500px 250px;
    }
    .todo-container{

        height:40px;
        border-bottom: 2px solid rgb(187, 187, 187);;
        border-width: auto;
        margin-bottom: 20px;
        margin-left:0px;
        margin-right:30px;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }

    .todo-container.done{
        text-decoration : line-through;
        text-decoration-color: rgb(131, 0, 0);
    }
    .objet{
        margin-left:20px;
    }
    .fa-trash{
        font-size:25px;
        color:white;
    }
    .fa-check{
        font-size: 25px;
        margin-right:10px;
        color:white;
    }
    .fa-check done{
        font-size:60px;
    }
    .fa-check:hover{
        color:rgb(0, 92, 0);
    }
    .fa-trash:hover{
        color:rgb(177, 0, 0);
    }
    .fa-plus{
        color:white;
        font-size:25px;
        position:relative;
        margin-right:30px;
    }
    .check{
        color:white;
    }
    html{
        background-image: url(assets/halo.jpg);
        background-size:cover;
        background-size:no-repeat;
        background-size : 2000px 1000px;
    }
    .testo{
        color:white;
        text-shadow: rgb(21, 0, 255) 1px 0 10px;
        font-size:60px;
    }
    .test{
        color:white;
    }
</style>

<!-- Etape 1 : Edit
     Etape 2 : Up and Down Task  -->
