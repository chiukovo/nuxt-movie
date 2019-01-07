<template>
<div class="sub-menu wow flipInX">
    <div class="content-title">
        <ul class="list-menu">
            <li :class="pName == 'movie' ? 'current' : ''"><a href="/movie">电影</a></li>
            <li :class="pName == 'episode' ? 'current' : ''"><a href="/episode">剧集</a></li>
            <li :class="pName == 'anime' ? 'current' : ''"><a href="/anime">动漫</a></li>
        </ul>
        <span class="tips">以下资源均以 <em>[ 最近更新 ]</em> 排序</span>
    </div>
    <div class="sub-menu-content">
        <dl>
            <dt>地区</dt>
            <dd>
                <a :href="pType + '-0'" :class="checkSubMenuActive(pArea, 0)">全部</a>
                <a :href="'/' + pName + '/' + getHrefIds('area', info.id)" v-for="info in area" :class="checkSubMenuActive(pArea, info.id)">{{ info.name }}</a>
            </dd>
        </dl>
        <p class="line"></p>
        <dl>
            <dt>类型</dt>
            <dd>
              <a :href="'0-' + pArea" :class="checkSubMenuActive(pType, 0)">全部</a>
              <a :href="'/' + pName + '/' + getHrefIds('type', info.id)" v-for="info in type" :class="checkSubMenuActive(pType, info.id)">{{ info.name }}</a>
            </dd>
        </dl>
    </div>
</div>
</template>

<script>
export default {
  name: "SubMenu",
  data () {
    return {
      area: [],
      type: []
    }
  },
  props:['pName', 'pType', 'pArea'],
  updated () {

  },
  computed: {
    doneTodosApiData () {
      return this.$store.state.listData;
    }
  },
  watch:{
      doneTodosApiData (value) {
        this.area = value.area_list;
        this.type = value.type_list;
      }
  },
  methods: {
    checkSubMenuActive (target, id) {
      if ( target == id ) {
        return 'current';
      }
    },
    getHrefIds (target, id) {
      if ( target == 'area' ) {
        return this.pType + '-' + id
      } else if ( target == 'type' ) {
        return id + '-' + this.pArea
      }
    }
  }
};
</script>
