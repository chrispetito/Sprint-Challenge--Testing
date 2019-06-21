const db = require('../data/dbConfig')
const server = require('../api/server')
const supertest = require('supertest')
const { insert } = require('./games-model')

describe('Games Model', () => {
    beforeEach(async () => {
        await db('games').truncate()
    })
    it('should be running on the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('GET /', () => {
        it('should respond with a 200 status code', () => {
            return supertest(server).get('/api/games').expect(200)
        })
        it('should return JSON', () => {
            return supertest(server).get('/api/games').expect('content-type', /json/i)
        })
    })
    describe('POST /', () => {
        it('should return a 201 status code when added succesfully', async () => {
            const game = { title: 'titleExample', genre: 'genreExample', releaseYear: 1980 }
            const res = await supertest(server).post('/api/games').send(game)
            expect(res.status).toBe(201)
        })
        it('should return a 422 if input is incomplete', async () => {
            const game = { title: '', genre: 'genreExample', releaseYear: 1980 }
            const res = await supertest(server).post('/api/games').send(game)
            expect(res.status).toBe(422)
        })
        it('should insert provided multiple games', async () => {
            await insert({ title: 'titleExample', genre: 'genreExample', releaseYear: 1980 })
            await insert({ title: 'titleExample2', genre: 'genreExample2', releaseYear: 1980 })
            const games = await db('games')
            expect(games).toHaveLength(2)
        })
    })
})