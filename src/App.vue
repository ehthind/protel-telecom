<template>
    <div id="app">
        <router-view name="header"/>
        <div class = "body-div mt-5">
            <router-view/>
        </div>
        <router-view name="footer"/>
    </div>
</template>
<script>
export default {};
</script>
<style>
.body-div {
  font-size: 16px;
}
</style>


