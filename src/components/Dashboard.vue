<template>
  <div class="container">
    <div class="wrapper">
      <div class="item item-dashboard">Hello</div>
      <div class="item">World</div>
      <div class="item">!!!</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px 10%;
}

.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: minmax(100px, auto);
}

.item {
  background-color: #edf0f1;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 1px rgba(140, 140, 153, 0.6);
  margin: 0px 0px 15px 0px;
}

.item:not(:first-child) {
  margin: 0px 0px 15px 15px;
}

.item-dashboard {
  grid-row-start: 1;
  grid-row-end: 3;
}
</style>
