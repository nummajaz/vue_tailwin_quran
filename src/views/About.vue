<template>
    <div class="mb-20 mt-10">
        <div class="text-center ">
            <h1 class="text-3xl font-bold text-teal-500">{{keterangan.name}} 
                <!-- <span class="text-gray-500 text-xl">({{keterangan.name_translations.ar}})</span> -->
            </h1>
            <!-- <h3 class="text-gray-500">{{keterangan.name_translations.en}} - {{keterangan.name_translations.id}}</h3>  -->
            <!-- <p class="text-gray-400">{{keterangan.number_of_ayah}} Ayat</p> -->
        </div>
        <div class="mr-36 mt-8 ml-8 border-b border-slate-200" v-for="quran in alquran" :key="quran.number_of_surah">
            <h1>{{quran.name}}</h1>
            <p class="surat text-right">{{quran.text}}</p>
            <p class="text-right pb-5">{{quran.translation_id}}</p>
        </div>
        
    </div>

</template>

<script>
    import axios from 'axios';
     import { ref, onMounted } from 'vue'
export default {
    
    props: [
        "userId"
    ], 
    setup(props){
        const alquran = ref([])
        const keterangan = ref([])
        // onMounted(async() => {
        //     const surah = props.userId
        //     const res = axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${surah}.json`)
        //     alquran.value = res.data
        //     // keterangan.value = res.data
        //     console.log(res.data)
        // })
        onMounted(() =>{
            
            const surah = props.userId
            axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${surah}.json`)
            .then(response => {
                alquran.value = response.data.verses
                // keterangan.value = response.data
                console.log(response.data)
            
            }).catch(err => {
            console.log(err.response.data)
            })
            })

        return{
            alquran, keterangan
        }    

    }

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Open+Sans&family=Raleway:wght@500;700&display=swap');
.surat{
    font-family: 'Raleway', serif;
    font-weight: bold;
    font-size: xx-large;

}

</style>