<template>
    <h1>Ma todolist</h1>
    <section id="todolist">
        <div class="liste">
            <h2>Liste</h2>
            <div class="input">
                <label for="input">
                    <input type="text" id="input" name="name" size="30"
                    style="height: 30px; font-size: 20px;"
                    placeholder="Ecris ta tâche...">
                    <i class="fa-solid fa-plus"></i>
                    {{ message }}
                </label>
            </div>
        </div>
        <ul class="matodo">
            <div class="todo-2">
                <div class="todo-container">
                    <p>test</p>
                    <div class="objet">
                        <i class="fa-solid fa-check"></i>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            <div class="todo-2">
                <div class="todo-container">
                    <p>test</p>
                    <div class="objet">
                        <i class="fa-solid fa-check"></i>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            <div class="todo-2">
                <div class="todo-container">
                    <p>test</p>
                    <div class="objet" id="app">
                        {{ message }}
                        <i class="fa-solid fa-check"></i>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
        </ul>
    </section>
</template>

<script>
    const vm = Vue.createApp({
        data() {
            return {
                message: 'hello world',
            };
        },
    }).mount('#app');
</script>

<style lang ="scss">
    .liste{
        background-color: rgb(240, 128, 128);
        color:white;
        width: 500px;
        text-align: center;
        margin-left: auto;
        margin-right:auto;
        height:110px;
        padding-top:5px;
        border-radius: 10px 10px 0px 0px;
    }
    #todolist{
        background-color: rgb(173, 216, 230);
        width:550px;
        height:auto;
        margin-right: auto;
        margin-left:auto;
        padding-top:20px;
        padding-bottom:20px;
        border-radius: 10px 10px 10px 10px;
    }
    .input{
        width:100%;
        size: 100%;
        margin-top:-10px;
        position:relative;
    }
    .matodo{
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
    .objet{
        margin-left:20px;
    }
    .fa-trash{
        font-size:25px;
    }
    .fa-check{
        font-size: 25px;
        margin-right:10px;
    }
    .fa-check:hover{
        color:rgb(0, 92, 0);
    }
    .fa-trash:hover{
        color:rgb(177, 0, 0);
    }
    .fa-plus{
        color:black;
        font-size:25px;
        position:relative;
        margin-right:30px;
    }
</style>
