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
@import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Manrope', sans-serif;
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
</style>
