<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-v-component
      heading="路由管理"
      link="components/simple-tables"
    />

    <base-material-card
      icon="mdi-clipboard-text"
      title="路由列表"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
        <tr>
          <th class="primary--text">
            序号
          </th>
          <th class="primary--text">
            名称
          </th>
          <th class="primary--text">
            路由
          </th>
          <th class="primary--text">
            请求路径
          </th>
          <th class="text-right primary--text">
            忽略
          </th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="r,index in routeList">
          <td>{{index + 1}}</td>
          <td>{{r.id}}</td>
          <td>{{r.predicates[0].args._genkey_0}}</td>
          <td>{{r.uri}}</td>
          <td class="text-right">
            {{r.filters[0].args._genkey_0}}
          </td>
        </tr>

        </tbody>
      </v-simple-table>
    </base-material-card>
  </v-container>
</template>

<script>
  import {getRouteList} from "@/api/wm/wm_route";

  export default {
    name: "routeList",
    data() {
      return {
        routeList: []
      }
    },
    mounted() {
      this.getRouteList()
    },
    methods: {
      getRouteList() {
        getRouteList().then(res => {
          this.routeList = res.data
        })
      }
    }
  }
</script>

<style scoped>

</style>
