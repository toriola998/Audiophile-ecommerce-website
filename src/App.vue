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
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    .flex{
        display: flex;
        align-items: center;
    }
</style>
