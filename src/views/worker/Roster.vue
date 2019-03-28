<template>
  <div class="search-content">
    <a-select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      style="width: 200px;margin-left: 60px;margin-top: 20px"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :filterOption="filterOption"
    >
      <a-select-option value="jack">水工</a-select-option>
      <a-select-option value="lucy">电工</a-select-option>
      <a-select-option value="tom">风工</a-select-option>
    </a-select>
  </div>

</template>

<style scoped>
.search-content{
  width: 100%;
  height: 300px;
  background-color: white;
}
</style>

<script>
    export default {
        data(){
          return{

          }
        },
      methods:{
        handleChange (value) {
          console.log(`selected ${value}`);
        },
        handleBlur() {
          console.log('blur');
        },
        handleFocus() {
          console.log('focus');
        },
        filterOption(input, option) {
          return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      }
    }
</script>
