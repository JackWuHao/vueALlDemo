<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user/123">User</router-link>  |
      <router-link to="/count">Count</router-link>  |
      <router-link to="/shopCar">实战</router-link> 
    </div>
    <div class="right">
      <router-view/>  
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  width: 100vw;

}

#nav {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.right{
  flex: 1;
  padding: 0;
  margin: 0;
  height: 100%;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
