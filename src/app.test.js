const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/hello endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/hello")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello World!");
    })
})
