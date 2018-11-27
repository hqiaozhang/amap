const state = {
  caseType: 0,
}

// getters
const getters = {
  caseType: state => state.caseType,
}
 
// 登录mutations
const mutations = {
  /**
   * @description 设置登录状态
   * @param {object} state 状态
   * @param {array} data 数据
   */
  setCaseType (state, caseType) {
    state.caseType = caseType
  },
}

export default {
  state,
  getters,
  mutations
}