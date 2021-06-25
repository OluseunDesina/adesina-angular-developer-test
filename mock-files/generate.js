const { fake } = require("faker");

module.exports = function () {

  const faker = require("faker");
  const _ = require("lodash");
  let gender = ['Male', 'Female'];
  return {
    patients: _.times(10, function (n) {
      return {
        "id": n, "avatar": faker.internet.avatar(),
        "name": faker.name.findName(), "gender": faker.random.arrayElement(gender), "age": faker.datatype.number(), "phoneNumber": faker.phone.phoneNumber(), "address": faker.address.streetAddress()
      }
    })
  }
}
