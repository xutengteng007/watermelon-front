<template>
  <v-container id="regular-tables" fluid tag="section">
    <base-v-component heading="路由管理" link="components/simple-tables"/>
    <v-btn color="grey" @click="addRoute">增加</v-btn>
    <base-material-card icon="mdi-clipboard-text" title="路由列表" class="px-5 py-3">
      <v-simple-table>
        <thead>
        <tr>
          <th class="primary--text">序号</th>
          <th class="primary--text">名称</th>
          <th class="primary--text">路由</th>
          <th class="primary--text">请求路径</th>
          <th class="text-right primary--text">忽略</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="r,index in routeList">
          <td>{{index + 1}}</td>
          <td>{{r.id}}</td>
          <td>{{r.predicates[0].args._genkey_0}}</td>
          <td>{{r.uri}}</td>
          <td class="text-right">{{r.filters[0].args._genkey_0}}</td>
        </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
  </v-container>
</template>

<script>
  import {addRoute, getRouteList} from "@/api/wm/wm_route";

  export default {
    name: "routeList",
    data() {
      return {
        route: {
          "id": "360",
          "predicates": [
            {
              "name": "Path",
              "args": {
                "_genkey_0": "/api/360/**"
              }
            }
          ],
          "filters": [
            {
              "name": "StripPrefix",
              "args": {
                "_genkey_0": "2"
              }
            },
            {
              "name": "Retry",
              "args": {
                "_genkey_0": "0"
              }
            }
          ],
          "uri": "http://www.360.com",
          "metadata": {},
          "order": 0
        },
        routeList: []
      }
    },
    mounted() {
      this.getRouteList()
      console.log(JSON.stringify('\ud83d\ude03'))
    },
    methods: {
      getRouteList() {
        getRouteList().then(res => {
          this.routeList = res.data
        })
      },
      addRoute() {
        addRoute(this.route).then(res => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
