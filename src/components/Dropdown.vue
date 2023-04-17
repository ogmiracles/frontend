<script setup> 
const props = defineProps(['title', 'items']) 
</script> 
 
<template> 
  <div class="dropdown"> 
    <button 
      class="btn btn-secondary dropdown-toggle" 
      type="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false" 
    > 
      {{ title }} 
    </button> 
    <ul class="dropdown-menu"> 
      <!-- <li><a class="dropdown-item" href="#">Action</a></li> 
      <li><a class="dropdown-item" href="#">Another action</a></li> 
      <li><a class="dropdown-item" href="#">Something else here</a></li> --> 
      <li v-for="(item, idx) in items" :key="idx"><a class="dropdown-item" href="#">{{ item }}</a></li> 
    </ul> 
  </div> 
</template>