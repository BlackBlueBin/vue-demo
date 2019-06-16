<template>
  <div class="row">
    <h2 v-show="firstView">请输入关键字搜索</h2>
    <h2 v-show="loading">Loading....</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="card" v-for="(user, index) in users" :key="index">
      <a :href="user.homeUrl" target="_blank">
        <img :src="user.avatarUrl" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.username}}</p>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

    export default {
       data() {
         return {
          firstView : true,
           loading : false,
           errorMsg : '',
           users : []//user 是一个空的数组
         }
       },
      mounted() {
         //订阅消息
        PubSub.subscribe('search', (msg, searchName) => {
          //更新数据
          this.firstView = false
          this.loading = true
          this.users = []
          this.errorMsg = ''
          //发送ajax请求
          const url = `https://api.github.com/search/users?q=${searchName}`
          axios.get(url).then(response => {
            this.loading = false
            this.users = response.data.items.map(item => ({
              homeUrl : item.html_url,
              avatarUrl: item.avatar_url,
              username : item.login
            }))
          }).catch(error => {
            this.loading = false
            this.errorMsg = '请求失败'
          })

        })


      }
    }
</script>

<style >
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
