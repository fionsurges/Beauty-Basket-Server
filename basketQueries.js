const database = require('./database-connection')

module.exports = {
    list() {
        return database('basket').select()
    },
    read(id) {
        return database('basket')
            .where("id", id)
            .first()
    },
    create(cosmetic) {
        return database('basket')
            .insert(cosmetic)
            .returning('*')
            .then(record => record[0])
    },
    update(id, cosmetic) {
        return database('basket')
            .where('id', id)
            .update(cosmetic)
            .returning('*')
            .then(record => record[0])
    },
    delete(id) {
        return database('basket')
            .where('id', id)
            .delete()
    }
}