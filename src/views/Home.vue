
<template>
  

  <!-- blog section start -->
  <section id="blog" class="pt-20 pb-32 bg-slate-100">
    <div class="container">
      <div class="w-full px-4 ">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h2 class="font-semibold text-xl mb-2 text-teal-400">Al Qur'an Digital</h2>

        </div>
      </div>

      <div class="flex flex-wrap px-36">
        <div class="w-full px-2 lg:w-1/4 xl:1/6 md:w-1/2 cursor-pointer" v-for="quran in alquran" :key="quran.number_of_surah" >
          <div class="bg-white rounded-xl shadow-lg mb-4 hover:bg-teal-400 hover:text-white hover:-translate-y-1 duration-300 first-letter:">
            <router-link :to="{name: 'about', params: {userId : quran.number_of_surah}}">
              <div class="py-6 px-6">
                <h3 class="block mb-1 font-semibold text-md">{{quran.number_of_surah}}. {{quran.name}} ( {{quran.name_translations.ar}} )</h3>
                <p class="text-sm indent-4">{{quran.name_translations.en}}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- blog section end -->
  <router-view/>
</template>

<script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue'
  export default {

  setup(props){

    const alquran = ref([])

    // function listitem(item){

    //   console.log(item)
    // }

    onMounted(() =>{

      axios.get('https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json')
      .then(response => {
        alquran.value = response.data
        
      }).catch(err => {
        console.log(err.response.data)
      })
    })

    return{
      alquran
      // , listitem
    }
  }

}
</script>

<style>

</style>

