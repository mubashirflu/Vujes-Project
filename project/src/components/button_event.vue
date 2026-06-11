<!-- <template>
    <div>
        <h1>{{ name }}</h1>
        <p>Age {{ age }}</p>
    </div>
</template>
<script> -->

// ref only use to get the single value // import { ref } from 'vue'; // const
name=ref("Ali"); // const age=ref(20); // const isage=ref(true); //
name.value="Ahmed"; // but reactive only use to get the object // Example
<!-- <template>
    <h1>{{ user.name }}</h1>
    <p>{{ user.age }}</p>
    <p>{{ user.islogin }}</p>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
const user=reactive({
    name:"Muhammad",
    age:20,
    islogin:true
})
user.name="Mubashir",
user.age=20
</script> -->

<!-- Counter App using Vuejs -->
<!-- <template>
    <div>
        <h1>{{ counter }}</h1>
        <button @click="inc">Increment</button>
                <button @click="dec">Decrement</button>
                <button @click="reset">Reset</button>
    </div>
 </template>
 <script setup lang="ts">
 import { ref } from 'vue';
 const counter=ref(0);
 const inc=()=>{
    counter.value++;
 }
 const dec=()=>{
    if(counter.value==0){
        alert("Already Zero!");
    }else{
            counter.value--;
    }
 }
 const reset=()=>{
    if(counter.value==0){
        alert("value already zero!");
    }else{
            counter.value=0;
    }
 }
</script>
<style>
button{
    border: 2px solid black;
    color: black;
    border-radius: 20px;
    padding: 20px;
    margin-right: 10px;
}
h1{
    text-align: center;
    color: red;
    font-weight: 600;
    font-style: italic;

}

</style> -->

<!-- Text Changing App -->
<!-- <template>
    <div>
        <h1>{{ name }}</h1>
        <p>{{ age }}</p>
        <button @click="changename"></button>
    </div>
 </template>
 <script setup lang="ts">
 import { ref } from 'vue';
 const name=ref("Muhammad");
const age=ref(20);
const changename=()=>{
    const name="ALi";
}
    </script>
    <style>
button{
    padding: 20px;
}
</style> -->

<!-- ========================X=================================X -->
<!-- For Loop -->
<!-- <template>
  <div>
    <h1>Pakistani Resturant</h1>
    <ul>
      <li v-for="food  in foods" :key="food">
        " {{ food.name }}
        {{ food.price }}"
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foods: [
        { id: 100, name: "Biryani", price: 100 },
        { id: 4566, name: "Pizza", price: 2300 },
        { id: 243, name: "Burger", price: 4500 },
        { id: 1320, name: "Pasta", price: 300 },
      ],
    };
  },
};
</script> -->

<!-- ============================X=========================== -->
<!-- <template>
  <div>
    <h1>Getting the DATA:</h1>
    <input v-model="additem" placeholder="Enter Food Item:" />
    <button @click="addfood">Add</button>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      additem: "",
      items: [
        { name: "Biryani", price: 2000 },
        { name: "Pizza", price: 4500 },
        { name: "Burger", price: 100 },
        { name: "Zinger", price: 200 },
      ],
    };
  },
  methods:{
    addfood(){
        if(this.additem!==""){
            this.items.push(this.additem);
            this.additem="";
        }
    }
  }
};
</script> -->




<!-- =================X======================= -->
 <!-- dynamic class chnage the UI accoridng to data on Screen -->
<template>
    <div>
        <h1>Dynamic Class </h1>
        <p :class="{done :isDone}">
            MyTask
        </p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            isDone:false,
        }
    }
}
</script>
<style>
.done{
    color:green;
    text-decoration: line-through;
}
</style>