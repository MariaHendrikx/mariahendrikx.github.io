<template>
  <div class="cup-container wrapper">
      <img
        src="Animations/CoffeeWithSmoke/CoffeeCup.svg"
        alt="coffeecup"
        class="coffeecup"
      />
      <div class="smoke-wrapper">
        <span class="smoke smoke1"></span>
        <span class="smoke smoke2"></span>
        <span class="smoke smoke3"></span>
      </div>
  </div>
</template>


<style scoped>
.wrapper {
  position: absolute;
}
.cup-container{
  width: 200px;
  height: auto;
}

.coffeecup {
  width: 100%;
  height: auto;
}

.smoke-wrapper{
  position: absolute;
  width: 100%;
  height: 200px;
  top: -210px;
}

.smoke {
  position: absolute;
  z-index: 10;
  width: 40px;
  height: 60px;
  bottom: 0;
  border-radius: 50%;
  background: radial-gradient(circle, #d0c9bc 15%, rgba(255,0,0,0) 100%);
  opacity: 0.5;
  animation: rise 5s infinite ease-in-out;
}

.smoke1 {
  right: 12%;
}

.smoke2 {
  right: 36%;
}

.smoke3 {
  right: 60%;
}


.smoke1 {
  animation-delay: 0s;
}

.smoke2 {
  animation-delay: 2s;
}

.smoke3 {
  animation-delay: 4s;
}

@keyframes rise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: translateY(-200%) scale(2);
    opacity: 0;
  }
}



</style>
