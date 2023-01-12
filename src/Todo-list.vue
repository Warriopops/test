<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
                </label>
            </div>
        </div>
        <ul class="matodo">
            <div class="todo-2">
                <div class="todo-container">
                    <p>test</p>
                    <img src="add.png" alt="check">
                </div>
            </div>
            <div class="todo-2">
                <div class="todo-container">
                    <p>test</p>
                </div>
            </div>
            <div class="todo-2">
                <div class="todo-container">
                    <p>test</p>
                    <font-awesome-icon icon="fa-solid fa-Trash-Alt" />
                    <font-awesome-icon icon="fa-solid fa-trash" />
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <i class="fa-solid fa-trash"></i>
            <font-awesome-icon icon="fa-solid fa-trash" />
        </ul>
    </section>
</template>

<script>
export default {

};
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
        height: 30px;
        border-bottom: 2px solid rgb(187, 187, 187);;
        border-width: auto;
        text-align: left;
        margin-bottom: 0px;
        margin-left:0px;
        margin-right:30px;
    }
</style>
