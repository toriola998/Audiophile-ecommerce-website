<template>
    <div>
        <router-view />
    </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    p {
        font-weight: 400;
    }

    body,
    input::placeholder{
        font-family: 'Manrope', sans-serif;
        font-style: normal;
    }

    .flex{
        display: flex;
        align-items: center;
    }

    a {
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
    }

    button {
        background-color: transparent;
    }

    button, input {
        outline: none;
        border: none;
    }

    h1, h2, h3, h4 {
        font-weight: 700;
    }
    
    h3 { 
        font-size: 1.7rem;
    }

    ul {
        list-style-type: none;
    }

     .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0, 0.55)  
    }

    @media screen and (min-width: 700px) {
 
    }

    @media screen and (min-width: 1000px) {
        .reverse-flex {
            flex-direction: row-reverse;
        }
    }
</style>
