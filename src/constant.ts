// 涨停板菜单
const dailyMenuList = [
  {
    title: '涨停股池',
    key: 'up',
    name: 'zhangting',
    index: '1-1'
  },
  {
    title: '跌停股池',
    key: 'down',
    name: 'dieting',
    index: '1-2'
  },
  {
    title: '强势股池',
    key: 'strong',
    name: 'qiangshi',
    index: '1-3'
  },
  {
    title: '次新股池',
    key: 'secondNew',
    name: 'cixin',
    index: '1-4'
  },
  {
    title: '炸板股池',
    key: 'friedBord',
    name: 'zhaban',
    index: '1-5'
  }
]

// 个股菜单
const personShare = [
  {
    title: '公司详情',
    key: 'detail',
    name: 'detail',
    index: '2-1'
  },
  {
    title: '个股研报',
    key: 'report',
    name: 'yanbao',
    index: '2-2'
  },
  {
    title: '个股龙虎榜',
    key: 'list',
    name: 'longhubang',
    index: '2-3'
  }
]

// path 路径映射
const pathMap = dailyMenuList.concat(personShare).reduce(
  (pre: any, next) => {
    pre[`/${next.name}`] = next.index
    return pre
  },
  { '/': '3' }
)
export { dailyMenuList, personShare, pathMap }
