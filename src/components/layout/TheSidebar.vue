<template>
    <div class="sidebar">
        <div class="login">
            <div class="logo">
                logo
            </div>
        </div>
        <div class="sheets"></div>
    </div>
  </template>


<style scoped>
.sidebar {
    position: fixed;
    right: 0px;
    top:0px;
    background-color: #ec3705;
    width: 10%;
    height: 100vh
}
.login {
    background-color: #dd3405;
    width: 100vh;
    height: 4rem;
}

.logo {
    background-color: orange;
    width: 3rem;
    height:3rem;
    position: absolute;
    right: 0px;
    margin-right: 1rem;
    margin-top: 0.25rem;
    text-align: center;
    padding-top: 12px;
}

.sheets {
    background-color: #ec3705;
    height:100vh;
}



</style>