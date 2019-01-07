
export default {
	setApiExample(state, data) {
		state.apiExampleData = data
	},
  setHome(state, data) {
      state.homeData = data
  },
  setTopTen(state, data) {
      state.topTen = data
  },
  setDetails(state, data) {
    if ( data.status == 'error' ) {
      return;
    }

    if (Object.keys(data).length > 0) {
      var params = [];
      data.param = Object.values(data.param);
      data.param.forEach(function(val) {
        params.push(val);
      })
      data.param = params
    }
    state.detailsData = data
  },
  setRecommendData(state, data) {
      state.recommendData = data
  },
  setListData(state, data) {
      var datum = 20
      var recommendCount = 30
      data.sources = [];
      data.recommend = [];

      if ( data.status == 'error' ) {
        return;
      }

      if ( data.total <= datum) {
          data.totalPage = 1;
      } else {
          data.totalPage = Math.floor(data.total / datum)
      }

      if ( data.total > 0 ) {
          data.data.forEach(function (value, key) {
              if ( key <= datum - 1) {
                  data.sources.push(value);
              }
          });
      }

      data.data.sort(function(a,b) {
        return 0.5 - Math.random()
      })

      data.data.forEach(function (value, key) {
          if ( key <= recommendCount - 1) {
              data.recommend.push(value);
          }
      });

      state.recommendData = data.recommend
      state.listData = data
  },
  setMenu(state, data) {
      state.menu = data
  },
  setSearchData(state, data) {
      state.searchData = data
  }
}
