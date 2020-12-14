<template>
  <div class="todos">
    <table>
      <tr>
        <td>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </td>
        <td>
          <el-button @click="add(input)" type="primary">添&nbsp;&nbsp;加</el-button>
        </td>
      </tr>
      <tr>
        <td>
          <ul v-if="listType==1">
            <li v-for="(item,index) in list" :key="index">
              <input
                style="margin-right:30px"
                @click="Comp"
                v-model="item.state"
                type="checkbox"
                name
                :id="index"
              />
              {{item.res}}
              <el-button class="deleteBtn" @click="deleteItem(index)" type="danger">删除</el-button>
            </li>
          </ul>

          <ul v-else-if="listType==2">
            <li  v-for="(item,index) in newArr" :key="index">
              <input
                style="margin-right:30px"
                @click="Comp"
                v-model="item.state"
                type="checkbox"
                name
                :id="index"
              />
              {{item.res}}
              <el-button class="deleteBtn" @click="deleteItem(index)" type="danger">删除</el-button>
            </li>
          </ul>

           <ul v-else-if="listType==3">
            <li  v-for="(item,index) in unnewArr" :key="index">
              <input
                style="margin-right:30px"
                @click="Comp"
                v-model="item.state"
                type="checkbox"
                name
                :id="index"
              />
              {{item.res}}
              <el-button class="deleteBtn" @click="deleteItem(index)" type="danger">删除</el-button>
            </li>
          </ul>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <div class="footer">
            <span>{{list.length}}条剩余</span>
            <div class="btnGroup">
              <el-button type="warning" @click='allList' size="medium">全部</el-button>
              <el-button @click="getState" type="warning" size="medium">已完成</el-button>
              <el-button type="warning" @click='UnComp' size="medium">未完成</el-button>
            </div>
            <el-button type="warning" @click="clearList" size="medium">清空已完成</el-button>
          </div>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
      ...mapMutations(['add','deleteItem','Comp','UnComp','getState','allList','clearList']),
  },
  computed: {
    ...mapState(["list","listType",'newArr','unnewArr']),
  },
};
</script>

<style scoped>
.todos {
  width: 60%;
  margin: 0 auto;
  margin-top: 150px;
}
.head {
  width: 100%;
  display: flex;
  align-items: center;
}
input[type="text"] {
  width: 80%;
}

ul li {
  list-style: none;
  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  position: relative;
}
.deleteBtn {
  position: absolute;
  right: 5px;
  top: 2px;
  padding: 5px;
}

tr > td:first-of-type {
  width: 500px;
}
.footer {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
}

</style>