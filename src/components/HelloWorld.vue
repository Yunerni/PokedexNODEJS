<template>

<!--Exo 1 

  <div>
   <h1> pokemon</h1>
   <div v-if="isActive" id="hide">
   </div>
   <img src ="../assets/aesop.jpg" id="img1"/>
   <button v-on:click="img">Changer l'image</button>
  </div>-->

<!--Exo 2
<div>
  <button v-on:click="isActive = !isActive">button</button>
<div v-if="isActive" id="hide">
<p>hide me</p>
</div>
</div> -->

<!--Exo 3 <div>
<img src ="../assets/aesop.jpg" id="img1"/>
<button v-on:click="img">Changer l'image</button>
<button v-on:click="text">button 3</button>
</div>-->
<div class="bg">
<div class="container">
   <li><ul> <img src ="../assets/pokelogo.png" id="logo" style="width: 70%"/></ul>
   <ul> <img src ="../assets/pokemonred.gif" id="banner" style="width: 50%"/></ul>
    
</li>

 <p>Rechercher par nom ou ID</p>
 <input type="text" v-on:change="recherchepk">
 </div>
<div class="card">
  <p>{{this.idpk}}</p>
  <img id="picdef">
 <p class="type"> {{this.namepk}}</p>
 <br/>
   
   <ul class="type"> <li v-for="value in this.typepk">
      {{value.type.name}}
    </li></ul>
               
</div>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data () {
    return {
        show: true,
      change: true,
      message:'',
      items: [],
      nextNum: 1,
      info:null,
      idpk: null,
       typepk: null,
      namepk: null,
      imgpk: null
    
    }
  }, methods:{
  recherchepk:function(event){
    var url= "https://pokeapi.co/api/v2/pokemon/" + event.target.value
      console.log(url)
      axios
      .get(url)
      .then(reponse => {
        this.idpk = reponse.data.id
        this.typepk = reponse.data.types
        this.namepk = reponse.data.name
        this.defaultimgpk = reponse.data.sprites.front_default
        document.getElementById("picdef").src =this.defaultimgpk
        this.shinyimgpk = reponse.data.sprites.front_shiny
        document.getElementById("picshin").src =this.shinyimgpk
        })
      }

  },
      mounted(){
         axios
      .get('https://pokeapi.co/api/v2/pokemon/1')
      .then(response => ( this.info = response))

      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg{
  
}
html, body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: 'Open Sans';
 
}


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input{
    width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.container{
	height: 700px;
	background-repeat: no-repeat;
	margin: 0 auto;
}

.card{  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(28, 26, 26, 0.64);
  
}

</style>
