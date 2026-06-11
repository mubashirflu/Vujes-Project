<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page nahi mila!</p>
    <RouterLink to="/">Home Jao</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 100px;
}

h1 {
  font-size: 80px;
  color: #4f46e5;
}

p {
  font-size: 20px;
  color: #888;
  margin: 16px 0;
}

a {
  color: #4f46e5;
  font-size: 16px;
}
</style>