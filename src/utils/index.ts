/**
 * 将金额数字按照三位逗号分隔显示
 * @param {Number|String} amount - 金额数值或字符串
 * @returns {String} 格式化后的金额字符串
 */
export function formatAmount(amount: any) {
  if (!amount) {
    return '0.00' // 金额为空时返回默认值
  }
  // 将金额转换为字符串并添加两位小数
  const strAmount = Number(amount).toFixed(2).toString()
  // 将字符串按照小数点分隔为整数部分和小数部分
  const [integerPart, decimalPart] = strAmount.split('.')
  // 将整数部分转换为数组并反转顺序，以便从右到左添加逗号
  const integerArray = integerPart.split('').reverse()
  // 利用 reduce() 方法以及 slice() 方法在每个元素后面添加逗号
  const newIntegerArray = integerArray.reduce((acc: any, num, index) => {
    if (index !== 0 && index % 3 === 0) {
      acc.push(',')
    }
    acc.push(num)
    return acc
  }, [])
  // 反转数组顺序，并将每个元素转换为字符串
  const formattedIntegerPart = newIntegerArray.reverse().join('')
  // 将整数部分和小数部分拼接，以小数点作为分隔符
  return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart
}

// 跳转到 雪球
export function jumpXueQiu(type: any, code: any) {
  const href = `https://xueqiu.com/S/S${type === 1 ? 'H' : 'Z'}${code}`
  const newTab: any = window.open('about:blank')
  newTab.location.href = href
}
