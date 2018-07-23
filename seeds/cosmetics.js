
exports.seed = function(knex, Promise) {
  return knex('basket').del()
    .then(function () {
      return knex('basket').insert([
        {
          id: 1, 
          name: 'Liquid Facial Soap',
          brand: 'Clinique',
          type: 'Cleanser',
          imageURL: 'https://www.clinique.com/media/export/cms/products/402x464/clq_6G0R01_402x464.png',
          expiration_date: '2018-07-30'
        },
        {
          id: 2, 
          name: 'DiorShow Mascara',
          brand: 'Dior',
          type: 'Makeup',
          imageURL: 'https://n.nordstrommedia.com/ImageGallery/store/product/Gigantic/13/_10619533.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
          expiration_date: '2019-02-16'
        },
        {
          id: 3, 
          name: 'Restore Conditioner',
          brand: 'Living Proof',
          type: 'Haircare',
          imageURL: 'https://www.blowoutparlour.com/wp-content/uploads/2017/07/Restore-Shampoo-and-Conditioner.jpg',
          expiration_date: '2019-07-01'
        }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE basket_id_seq RESTART with 4')
    })
}
