<script>
export default {
  data() {
    return {
      name: 'DB',
      currencyFrom: [
        {name: "USD", desc: "US Dollar"},
        {name: "EUR", desc: "Euro"},
        {name: "INR", desc: "Indian Rupee"},
        {name: "BHD", desc: "Bahraini Dinar"}
      ],
      convertfrom: "INR",
      converto: "USD",
      amount: ""
    }
  },
  computed :{
    finalamount:function() {
      var to = this.convertto;
      var from = this.convertfrom;
      var final;
      switch(from) {
        case "INR"
          if (to == "USD") {
            final = this.amount * 0.016;
          }
          if (to == "EUR") {
            final = this.amount * 0.013;
          }
          if (to == "INR") {
            final = this.amount;
          }
          if (to == "BHD") {
            final = this.amount * 0.0059;
          }
          break;
        case "USD"
          if (to == "USD") {
            final = this.amount * 0.016;
          }
          if (to == "EUR") {
            final = this.amount * 0.013;
          }
          if (to == "INR") {
            final = this.amount;
          }
          if (to == "BHD") {
            final = this.amount * 0.0059;
          }
          break;
        case "EUR"
          if (to == "USD") {
            final = this.amount * 0.016;
          }
          if (to == "EUR") {
            final = this.amount * 0.013;
          }
          if (to == "INR") {
            final = this.amount;
          }
          if (to == "BHD") {
            final = this.amount * 0.0059;
          }
          break;
        case "BDH"
          if (to == "USD") {
            final = this.amount * 0.016;
          }
          if (to == "EUR") {
            final = this.amount * 0.013;
          }
          if (to == "INR") {
            final = this.amount;
          }
          if (to == "BHD") {
            final = this.amount * 0.0059;
          }
          break;
      }
      return final;
    },
    methods: {
      swap() {
        let s = this.convertfrom;
        this.convertfrom = this.converto;
        this.converto = s;
      }
    }
  }
</script>
<template>
  <div id= "databinding" style ="">
    <h1>
      Currency Converter
    </h1>
    <span
  </div>
</template>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  