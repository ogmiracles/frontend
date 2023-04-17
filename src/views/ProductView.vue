<script setup>
  import {useRoute} from "vue-router";
  import axios from "axios";
  import {onMounted, ref} from "vue";

  const route = useRoute()
  const isLoaded = ref(false)
  const product = ref({})
  const fetchProduct = async () => {
      isLoaded.value = false
      const product_req = await axios.get(`http://localhost:8000/api/products/${route.params.id}`)
      product.value = product_req.data
      isLoaded.value = true
  }
  onMounted(async () => {
      await fetchProduct()
  })
</script>

<template>
            <div class="card-body">
                <h5 class="display-4 fw-bold text-body-emphasis">{{ product.title }}</h5>
                <div class="container-sm sticky-sm-top" style="width: 17%"><img :src="product.image" class="card-img-top" :alt="product.title"></div>
                <p class="text-center"> {{ product.price }} $</p> 
            </div>
  <div>
      <h1>Сharacteristics</h1>
      <p> {{ product.description }}</p> 
      

      <div v-if="isLoaded">
     <button type="button" class="btn btn-outline-success">В наличие</button>
     <RouterLink to="/pricing"></RouterLink>
      </div>
      <div v-else>
          ...loading
      </div>
  </div>
</template>
