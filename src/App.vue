<template>
  <div id="app">
    <ListWrap 
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter"
      />
    <CityList :cities="cities" @change="changeCity"/>
  </div>
</template>

<script>
import ListWrap from './components/HelloWorld.vue'
import CityList from './components/list'
import  axios  from  "axios"
export default {
  name: 'app',
  data (){
    return {
      hotCities:[],
      cities:{},
      letter:""
    }
  },
  components: {
    ListWrap,
    CityList
  },
  mounted () {
    this.getInfo()
  },
  methods:{
    getInfo () {
      axios.get("api/city.json")
        .then(this.handleCityInfo)
    },
    handleCityInfo(res){
      res=res.data.data;
      this.hotCities=res.hotCities;
      this.cities=res.cities;
    },
    changeCity(letter){
      this.letter = letter
    }
  }
}
</script>

<style>

</style>
