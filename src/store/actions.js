
import axios from 'axios'
import router from '../router'

export default {
	CALL_API_EXAMPLE: (context, {vm}) => {   //context為action的obj，可使用其功能
		axios.get("/data", {
      	params: {
        	token: vm.apiEncrypt()
      	}
    })
    .then(response => {
      	context.commit('setApiExample', response.data);
    })
	},
  CALL_API_HOME: (context, {vm}) => {
    axios.get("/data/getHomeData", {
        params: {
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setHome', response.data);
    })
  },
  CALL_API_TOP_TEN: (context, {vm}) => {
    axios.get("/data/getRankingData", {
        params: {
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setTopTen', response.data);
    })
  },
  CALL_API_GET_LIST: (context, {vm}) => {
    var checkData = [
      vm.type,
      vm.area,
      vm.page,
    ];
    var allInt = vm.isPositiveInt(checkData);

    if ( ! allInt) {
      vm.type = 0;
      vm.area = 0;
      vm.page = 1;
    }

    axios.get("/data/getInfoData", {
        params: {
          name: vm.name,
          type: vm.type,
          area: vm.area,
          page: vm.page,
          token: vm.apiEncrypt(),
        }
    })
    .then(response => {
        context.commit('setListData', response.data);
    })
  },
  CALL_API_GET_DETAILS: (context, {vm}) => {
    var checkData = [
      vm.id,
      vm.cid,
    ];
    var allInt = vm.isPositiveInt(checkData);

    if ( ! allInt) {
      vm.id = 1;
      vm.cid = 3;
    }

    axios.get("/data/getDetails", {
        params: {
          id: vm.id,
          cid: vm.cid,
          token: vm.apiEncrypt(),
        }
    })
    .then(response => {
      //null
      if ( response.data.length == 0 ) {
        location.href = "/";
      }

      context.commit('setDetails', response.data);
    })
  },
  GET_MENU: (context, {vm}) => {
    axios.get("/data/getMenu", {
        params: {
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setMenu', response.data);
    })
  },
  CALL_API_GET_RECOMMEND_DATA: (context, {vm}) => {
    var checkData = [
      vm.cid,
    ];
    var allInt = vm.isPositiveInt(checkData);

    if ( ! allInt) {
      vm.cid = 3;
    }

    axios.get("/data/getRecommendDataByCategory", {
        params: {
          cid: vm.cid,
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setRecommendData', response.data);
    })
  },
  CALL_API_GET_SEARCH_DATA: (context, {vm}) => {
    axios.get("/data/getDataBySearch", {
        params: {
          search: vm.search,
          page: vm.page,
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setSearchData', response.data);
    })
  },
  CALL_API_GET_SEARCH_TAG_DATA: (context, {vm}) => {
    var checkData = [
      vm.cid,
      vm.page,
    ];
    var allInt = vm.isPositiveInt(checkData);

    if ( ! allInt) {
      vm.cid = 3;
      vm.page = 1;
    }

    axios.get("/data/getDataByTag", {
        params: {
          search: vm.search,
          type: vm.type,
          cid: vm.cid,
          page: vm.page,
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setSearchData', response.data);
    })
  }
}