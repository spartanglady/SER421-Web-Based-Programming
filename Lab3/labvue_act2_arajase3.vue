<script>
export default {
  data() {
    return {
      qno: 1,
      questions: ['6 * 7 =', '23 + 10 =', 'The answer to everything is '],
      qanswers: ['42','33', '42'],
      choices: ['0','1','13','33','42'],
      cAnswer: 0,
      chosenAnswer: false,
      display: true
    }
  },
  methods: {
    doAction() {
      if (this.chosenAnswer === this.qanswers[this.qno-1]) {
        this.cAnswer++
      }
      this.qno++
      this.chosenAnswer=false

      if( this.qno > 3) {
        this.display=false
      }
    }
  }
}
</script>

<template>
  <div v-if=!display class="answers">
    You have completed the quiz! <i>Your score was {{cAnswer}} out of 3</i>
  </div>
  <div v-if=display class="first">
    Your current Score: {{cAnswer}} out of 3
    <br>
    Question {{qno}}: {{questions[qno-1]}}
  </div>
  <div v-if=display class="radios">
    <input type="radio" value="0" id="0" v-model="chosenAnswer"/>
    <label for="0">0</label>
  </div>
  <div v-if=display class="radios">
    <input type="radio" value="1" id="1" v-model="chosenAnswer"/>
    <label for="1">1</label>
  </div>
  <div v-if=display class="radios">
    <input type="radio" value="13" id="13" v-model="chosenAnswer"/>
    <label for="13">13</label>
  </div>
  <div v-if=display class="radios">
    <input type="radio" value="33" id="33" v-model="chosenAnswer"/>
    <label for="33">33</label>
  </div>
  <div v-if=display class="radios">
    <input type="radio" value="42" id="42" v-model="chosenAnswer"/>
    <label for="42">42</label>
  </div>
  <br>
  <button v-if=display @click="doAction">
    OK
  </button>
</template>

<style>
.first {
  font-weight: bold;
  font-size: 120%;
}

.radios {
  font-family: courier;
}

.answers {
  color: green;
  font-family: 'Times New-Roman';
  font-size: 150%
}

</style>