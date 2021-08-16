import emitter from 'tiny-emitter/instance'

export default function (to, from, savedPosition): any {
  return new Promise((resolve) => {
    if (savedPosition) {
      emitter.once('pageTransition:finished', () => {
        console.log('catched')
        console.log(savedPosition)

        resolve(savedPosition)
      })
    } else {
      emitter.once('pageTransition:finished', () => {
        resolve({ top: 0, left: 0 })
      })
    }
  })
}
