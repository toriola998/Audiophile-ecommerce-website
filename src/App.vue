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

    body {
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
</style>
