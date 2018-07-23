import { Meteor } from 'meteor/meteor'
import Parts from '/imports/api/parts/schema'
import log from '/imports/lib/server/log'

const debug = require('debug')('b2b:parts')
// Meteor.methods({
//   'parts.insert'(part) {
//     try {
//       return Parts.insert(part)
//     } catch (e) {
//       log.error({ e })
//       throw new Meteor.Error(500, e.sanitizedError.reason)
//     }
//   },
// })

Meteor.methods({
  'parts.insert'(part) {
    function calculateRetailPrice(part) {
      let wholesalePrice = part.wholesalePrice
      if (wholesalePrice <= 6000) {
        // let retailPrice = parseInt((wholesalePrice * 2).toFixed(2))
        let retailPrice = parseInt(wholesalePrice * 2)
        part.retailPrice = retailPrice

        console.log(part.retailPrice);

        log.info(part)

        return Parts.insert(part)
      }
      else if (wholesalePrice > 6000 && wholesalePrice <= 10000) {
        let retailPrice = parseInt(wholesalePrice * 1.5)
        part.retailPrice = retailPrice
        log.info(part)

        return Parts.insert(part)
      }
      else if (wholesalePrice > 10000) {
        let retailPrice = parseInt(wholesalePrice * 1.3)
        part.retailPrice = retailPrice

        log.info(part)

        return Parts.insert(part)
      }
      else {
        return console.error('Error, not a number')
      }
    }
    try {
      calculateRetailPrice(part)
    } catch (e) {
      log.error({ e })
      throw new Meteor.Error(500, e.sanitizedError.reason)
    }
  }
  // 'price.mk'(part) {

  //   let wholesalePrice = part.wholesalePrice
  //   if (wholesalePrice <= 6000) {
  //     // let retailPrice = parseInt((wholesalePrice * 2).toFixed(2))
  //     let retailPrice = parseInt(wholesalePrice * 2)
  //     return part.retailPrice = retailPrice

  //   }
  //   else if (wholesalePrice > 6000 && wholesalePrice <= 10000) {
  //     let retailPrice = parseInt(wholesalePrice * 1.5)
  //     return part.retailPrice = retailPrice

  //   }
  //   else if (wholesalePrice > 10000) {
  //     let retailPrice = parseInt(wholesalePrice * 1.3)
  //     return part.retailPrice = retailPrice

  //   }
  //   else {
  //     return console.error('Error, not a number')
  //   }

  // }
})
