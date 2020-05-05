import {
    getData
} from "./app"
import { TestScheduler } from "jest"

test("It should return data from the server", async () => {
    expect(getData).toBeDefined();
});

test("it should be a funcion", async () => {
    expect(typeof getData).tobe("function")
})