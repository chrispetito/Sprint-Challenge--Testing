const db = require('../data/dbConfig')
const server = require('../api/server')
const supertest = require('supertest')
const { getAll, insert } = require('./games-model')

describe('Games Model', () => {
    beforeEach(async () => {
        await db('games').truncate()
    })
    it('should be running on the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})