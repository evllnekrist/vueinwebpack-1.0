<template>
  <div class="p-20">
    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th v-for="(field, index) in datas" :style="'width: ' + 80 / datas.length + '%'">{{field.title}}</th>
        <th>
          <button type="button" class="btn btn-success btn-sm waves-effect waves-light" style="visibility: hidden">
            Detail
          </button>
          <button v-show="show_delete_btn" type="button" class="btn btn-success btn-sm waves-effect waves-light" style="visibility: hidden">
            Delete
          </button>
        </th>
      </tr>
      <tr>
        <th></th>
        <th v-for="(field, index) in datas">
          <input v-if="field.type === 'text'" v-model.lazy="search[index]" v-debounce="300" type="text" class="form-control search-table" :placeholder="'Search ' + field.title"/>
          <component v-if="field.type === 'select'" v-bind:is="field.component" v-model="search[index]"/>
        </th>
        <th>
            <button type="button" @click="clearFilter" class="btn btn-dark btn-sm" style="font-size:12px">
                    <i class="fas fa-eraser"/> &nbsp; Filter
            </button>
        </th>
      </tr>
      <tr v-show="loading">
        <th :colspan="datas.length + 2"> __ </th>
      </tr>
      </thead>
      <tbody>
      <!-- <tr colspan='9'>{{list_data}}</tr> -->
      <tr v-for="(item, idx) in list_data">
        <td>{{(idx + 1) + (current_page - 1) * limit_data}}</td>
        <td v-for="(field, index) in datas">
          {{item[field.name]}}
        </td>
        <td>
          <div class="btn-group">
            <router-link :to="getRoute(item[detailIdentifier])">
              <strong type="button" class="btn btn-success btn-sm">
                {{text_action}}
              </strong>
            </router-link>
            <strong v-show="show_delete_btn" type="button" class="btn btn-danger btn-sm" @click="deleteItem(idx)">
              Delete
            </strong>
          </div>

        </td>
      </tr>
      </tbody>
    </table>
    <div class="m-t-50">
      <div class="float-right">
        <paginate
          :pageCount="last_page"
          :containerClass="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-class="'page-item'"
          :prev-link-class="'page-link'"
          :next-class="'page-item'"
          :next-link-class="'page-link'"
          :clickHandler="clickCallback">
        </paginate>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'default-table',
    components: {
    },
    props: {
      isLoading: {
        type: Boolean,
        default: false
      },
      entity: {},
      lastPage: {
        type: Number,
        default: 0.
      },
      listData: {},
      limitData: {
        type: Number,
        default: 0.
      },
      detailRoute: {
        type: String,
        default: ''
      },
      detailIdentifier: {
        type: String,
        default: ''
      },
      detailRouteType: {
        type: String,
        default: ''
      },
      detailParams:{},
      showDelete: {
        type: Boolean,
        default: true
      },
      textAction: {
        type: String,
        default: 'Details'
      }
    },
    data() {
      return {
        loading: this.isLoading,
        datas: this.entity,
        last_page: this.lastPage,
        current_page: 1,
        search: [],
        list_data: this.listData,
        limit_data: this.limitData,
        detail_route: this.detailRoute,
        detail_identifier: this.detailIdentifier,
        detail_route_type: this.detailRouteType,
        show_delete_btn: this.showDelete,
        text_action: this.textAction
      }
    },
    methods: {
      clickCallback: function(page) {
        this.current_page = page
        this.$emit('changePage', page)
      },
      getQueryParams(value){
        let obj = {}
        obj[this.detail_identifier] = value
        return obj
      },
      getExtendedParams(params, extra){
        params[this.detail_identifier] = extra
        return params
      },
      getRoute(value){
        let obj = {}
        obj.name = this.detail_route
        if (this.detail_route_type === 'query'){
          if (this.detail_identifier !== '')
            obj.query = this.getQueryParams(value)
          obj.params = this.detailParams
        } else {
          obj.params = this.getQueryParams(value)
        }
        return obj
      },
      deleteItem(id){
        this.$emit("delete", id)
      },
      clearFilter(){
        this.search = []
        console.log("clearing")
      }
    },
    watch: {
      lastPage(newValue, oldValue){
        this.last_page = newValue
      },
      isLoading(newValue, oldValue) {
        this.loading = newValue
      },
      listData(newValue, oldValue) {
        this.list_data = newValue
      },
      search: {
        handler: function (val, oldVal) {
          var searchParams = new URLSearchParams()
          for (var key in val) {
            if (val[key] !== '')
              if (this.datas[key].type === 'select'){
                searchParams.append('select-'+ this.datas[key].selector, val[key])
              } else {
                searchParams.append('where-'+ this.datas[key].name, val[key])
              }
          }
          let search_query = searchParams.toString() === '' ? '' : '&' + searchParams.toString()
          this.$emit('changePageSearch', search_query)
        },
        deep: true
      },
    },
  };
</script>

<style scoped>
  .search-table {
    font-size: 11px;
  }
</style>
