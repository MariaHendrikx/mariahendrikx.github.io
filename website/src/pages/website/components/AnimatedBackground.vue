<template>
    <div class="cubes">
        <div class="cube" v-for="(cube, index) in positions.leftPositions" :key="index" :style="calculateCubeStyle(index)"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            positions: {
                "leftPositions": [25, 75, 90, 75, 95, 10, 40, 85, 20, 60, 60, 15, 55, 5, 30, 60, 80, 15, 65, 15, 45, 90, 95, 10, 75, 50],
                "topPositions":  [55, 75, 10, 50, 60 ,85, 60, 5, 35, 95, 45, 45, 70, 30, 50, 80, 20, 65, 40, 90, 25, 70, 50, 5, 25, 10]
            }
        };
    },
    methods: {
        calculateCubeStyle(index) {
            const delayInSeconds = (0.2 * index) + (2* (index%5));
            const color = "#E5E1DA";
            const leftPos = this.positions.leftPositions[index];
            const topPos = this.positions.topPositions[index];

            const animationDelay = `${delayInSeconds}s`;
            const borderColor = color;
            const left = `${leftPos}vw`;
            const top = `${topPos}vh`;

            return {
                animationDelay,
                left,
                top,
                borderColor
            };
        }
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:700");

.cubes {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: "Montserrat", sans-serif;
}

.cube {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px #92C7CF;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    -webkit-animation: cube 12s ease-in forwards infinite;
    animation: cube 12s ease-in forwards infinite;
}

.cube:nth-child(2n) {
    border-color: #E5E1DA;
}


@-webkit-keyframes cube {
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: 1;
    }

    to {
        transform: scale(20) rotate(180deg) translate(-50%, -50%);
        opacity: 0;
    }
}

@keyframes cube {
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: 1;
    }

    to {
        transform: scale(20) rotate(180deg) translate(-50%, -50%);
        opacity: 0;
    }
}
</style>