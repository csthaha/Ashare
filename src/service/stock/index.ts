import axios from '../index'

const baseUrl = import.meta.env.VITE_API_BASE_URL

namespace Base {
  export interface Common {
    fields: string
    export: number
    token: string
  }
  export interface RangeDate {
    startDate: string
    endDate: string
  }
  export interface Date {}
}

namespace Company {
  export interface Info {
    code: string // 股票代码
  }
}

const baseValue = {
  fields: 'all',
  export: 1,
  token: '48d65f6b63d944790886d8b184dc6e5b'
}

// namespace Stock {
//   export interface Pool {}
// }

// 涨停股池
function getUpTop(params: Base.Date) {
  const p = {
    ...params,
    ...baseValue
  }
  console.log(baseUrl, '--', import.meta, import.meta.env.DEV, `${baseUrl}/doc/getPoolZT`)
  return axios.get(`${baseUrl}/doc/getPoolZT`, p) // 涨停股池
}

// 跌停股池
function getDownPool(params: Base.Date) {
  const p = {
    ...params,
    ...baseValue
  }
  return axios.get(`${baseUrl}/doc/getPoolDT`, p) //  跌停股池
}

// 炸板股池
function getPoolZB(params: Base.Date) {
  const p = {
    ...params,
    ...baseValue
  }
  return axios.get(`${baseUrl}/doc/getPoolZB`, p)
}

// 强势股池
function getPoolQS(params: Base.Date) {
  const p = {
    ...params,
    ...baseValue
  }
  return axios.get(`${baseUrl}/doc/getPoolQS`, p)
}

// 公司信息
function getCompnayInfo(params: Company.Info) {
  const p = {
    ...params,
    ...baseValue
  }
  return axios.get(`${baseUrl}/doc/getCompanyInfo`, p)
}

// 个股研报
function getYanBaoStock(params: Base.Common & Base.Date & Company.Info) {
  return axios.get(`${baseUrl}/doc/getYanBaoStock`, params)
}

// 龙虎榜每日活跃营业部。
function getLonghbActive(params: Base.Common & Base.Date) {
  return axios.get(`${baseUrl}/doc/getLonghbActive`, params)
}

// 查看个股龙虎榜
function getLonghbDetail(params: Base.Date | Company.Info) {
  const p = {
    ...params,
    ...baseValue
  }
  return axios.get(`${baseUrl}/doc/getLonghbDetail`, p)
}

// 龙虎榜机构每日统计
function getLonghbJigou(params: Company.Info & Base.Date & Base.Common) {
  return axios.get(`${baseUrl}/doc/getLonghbJigou`, params)
}

// 概念板块
function getStockGnBKBaseInfo(params: Company.Info) {
  const p = {
    ...params,
    ...baseValue
  }
  return axios.get(`${baseUrl}/doc/getStockGnBKBaseInfo`, p)
}

// A股列表  code: 'all' / '50'
function getStockHSABaseInfo(params: Company.Info) {
  const p = {
    ...params,
    ...baseValue
  }
  return axios.get(`${baseUrl}/doc/getStockHSABaseInfo`, p)
}

export {
  getUpTop,
  getPoolZB,
  getDownPool,
  getCompnayInfo,
  getLonghbActive,
  getLonghbDetail,
  getPoolQS,
  getYanBaoStock,
  getLonghbJigou,
  getStockGnBKBaseInfo,
  getStockHSABaseInfo
}
