<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
<script>
  export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      /*getApplication(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })*/
      this.$http.get("/api/app/getApps").then(function(res){
        console.log("sidebar:"+res.body.code)
        /*this.loading = false*/
        if (res.body.code == 401) {
          console.log("login")
          this.$router.push("/login")
        }else{
          this.hideLoading = false;
          this.appList = res.body.list;
          this.appList.forEach((i)=>{
          this.$set(i,'img','static/img/application2.png')
        })
        }
      })
    },
    getApplication:function(){
      
    },
  }
}
</script>
