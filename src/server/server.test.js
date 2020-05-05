import {
    fetchApi
} from "./server"
import { TestScheduler } from "jest"
test("It feth data from the api", async () => {
    expect(fetchApi).toBeDefined();
});
test("it should be a funcion", async () => {
    expect(typeof fetchApi).tobe("function")
})