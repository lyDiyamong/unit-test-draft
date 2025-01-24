import { expect, test } from "@jest/globals";
import { add } from "../app/BasicFn";

// test("Expect 1 + 2 to be 3", () => expect(sum(1, 2)).not.toBe(4));
// test("resolves to lemon", () => {
//     // make sure to add a return statement
//     return expect(Promise.resolve("lemon")).resolves.toBe("lemonn");
// });

// test("resolves to lemon", async () => {
//     await expect(Promise.resolve("lemon")).resolves.toBe("lemon");
//     await expect(Promise.resolve("lemon")).resolves.not.toBe("octopus");
// });

// Matcher
// .toBe(value)
// test("Expect 1 + 2 to be 3", () => expect(sum(1, 2)).not.toBe(4));

// .toHaveBeenCalled()
// function drinkAll(cb: CallableFunction, flavor: string) {
//     if (flavor === "strawberry") cb(flavor);
// }

// describe("drinkSome", () => {
//     test("Expect to get the flavor", () => {
//         // mock function to test with expect if it call or not
//         const drink = jest.fn();

//         drinkAll(drink, "strawberry");
//         expect(drink).not.toBeCalled();
//     });
// });
// describe("drinkSome", () => {
//     test("Expect to get the flavor", () => {
//         // mock function to test with expect if it call or not
//         const drink = jest.fn();

//         drinkAll(drink, "strawberry");
//         expect(drink).toBeCalled();
//     });
// });

// // .toHaveBeenCalledTimes(number)
// function drinkEach(cb: CallableFunction, flavors: string[]) {
//     flavors.forEach((flavor) => cb(flavor));
// }

// describe("CallBackTimes", () => {
//     test("Expect to see the time of the callback", () => {
//         const mockCb = jest.fn();
//         drinkEach(mockCb, ["helo", "hi", "bye"]);
//         // Expect to see how the result of the callback
//         expect(mockCb).toBeCalledTimes(5);
//     });
// });
