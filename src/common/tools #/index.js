import 'core-js'
import 'regenerator-runtime'

export const fn1 = () => {
  console.log('common fn1')
}

export const fn2 = () => {
  console.log('common fn2')
}

export const fn3 = () => {
  console.log('common fn3')
}

// function Instantiate(Class, opt) {
//   return new Class(opt)
// }

// const delay = time => new Promise(resolve => setTimeout(resolve, time))

// @Instantiate
// export class Test {
//   async test() {
//     await delay(2000)
//     console.log('common Test class')
//   }
// }