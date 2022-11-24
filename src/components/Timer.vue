<template>
  <div class="container center" id="app">
    <div class="center padding-4">
      <h2 class="title">{{ message }}</h2>
      <div id="timer2" v-html="time"></div>
      <div class="buttons">
        <button @click="timerRun" v-if="!timerRunning">Start</button>
        <button @click="timerPause" v-if="timerRunning">Pause</button>
        <button @click="timerReset" v-if="timerRunning">Restart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Let the countdown begin!!",
      totalTime: 25 * 60,
      timerRunning: false,
      timerPaused: false,
      interval: null,
    };
  },

  computed: {
    time: function () {
      return this.minutes + " : " + this.seconds;
    },
    minutes: function () {
      var min = Math.floor(this.totalTime / 60);
      return min >= 10 ? min : "0" + min;
    },
    seconds: function () {
      var sec = this.totalTime - this.minutes * 60;
      return sec >= 10 ? sec : "0" + sec;
    },
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    timerRun() {
      this.timerRunning = true;
      this.message = "Greatness is within sight!!!";
      this.interval = setInterval(this.countdownTimer, 1000);
      console.log(this.totalTime);
    },
    timerPause() {
      this.message = "Never quit, keep going!!";
      this.timerRunning = false;
      clearInterval(this.interval);
    },
    timerReset() {
      this.message = "Let the countdown begin!!";
      this.timerRunning = false;
      clearInterval(() => {
        this.interval;
      });
      this.totalTime = 25 * 60;
    },
    timerCountdown() {
      console.log("Working");
      this.timerRunning = true;
      this.interval = setInterval(this.updateCurrentTime, 1000);
      // Counts down from 60 seconds times 1000.
      setInterval(() => {
        this.timerMinutes--;
      }, 60 * 1000);

      // Check if seconds at double zero and then make it a 59 to countdown from.
      // need another method of checking the number while in the loop and then adding a zero on the number under 10
      if (this.timerSeconds === "00") {
        this.timerSeconds = 59;
        setInterval(() => {
          this.timerSeconds--;
        }, 1000);
      } else {
        setInterval(() => {
          this.timerSeconds--;
        }, 1000);
      }
    },
    countdownTimer() {
      if (this.timerRunning == true) {
        this.totalTime--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-image: linear-gradient(
    141deg,
    #04a6d7 0,
    #209cee 71%,
    #3287f5 100%
  );
  min-height: 100vh;
  color: #ffffff;
}
.padding-4 {
  padding: 40px;
}
.center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

#timer,
#timer2 {
  font-size: 200px;
  line-height: 1;
  margin-bottom: 40px;
}
.title {
  text-align: center;
  font-size: 1.4em;
}
.buttons {
  text-align: center;
}

.buttons button {
  background-color: #363636;
  color: #f5f5f5;
  border: none;
  padding: 12px;
}
</style>
