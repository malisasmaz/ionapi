import { expect } from "chai";
import app from "../app";
import { agent as request } from "supertest";

describe("Index Test", () => {
    it('should always pass', function () {
        expect(true).to.equal(true);
    });
});

it('should POST /api/login', async function () {
    this.timeout(5000);
    const res = await request(app)
        .post('/api/login').send({
            "userName": "mali",
            "password": "mali"
        });
     expect(res.status).to.equal(200);
     expect(res.body).not.to.be.empty;
     console.log(res.body);
     expect(res.body).to.be.an("object");
     expect(res.body.errorMessage).to.be.null;
     expect(res.body.success).is.equal(true);
});
it('should POST /api/logout', async function () {
    this.timeout(5000);
    const res = await request(app)
        .post('/api/logout').send({
            "userName": "mali"
        });
        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        console.log(res.body);
        expect(res.body).to.be.an("object");
        expect(res.body.errorMessage).to.be.null;
        expect(res.body.success).is.equal(true);
});