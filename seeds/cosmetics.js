
exports.seed = function(knex, Promise) {
  return knex('basket').del()
    .then(function () {
      return knex('basket').insert([
        {
          id: 1, 
          name: 'Liquid Facial Soap',
          brand: 'Clinique',
          type: 'Cleanser',
          expiration_date: '2018-07-30'
        },
        {
          id: 2, 
          name: 'DiorShow Mascara',
          brand: 'Dior',
          type: 'Makeup',
          expiration_date: '2019-02-16'
        },
        {
          id: 3, 
          name: 'Restore Conditioner',
          brand: 'Living Proof',
          type: 'Haircare',
          expiration_date: '2019-07-01'
        }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE basket_id_seq RESTART with 4')
    })
}
