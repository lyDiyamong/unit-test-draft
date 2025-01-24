import {
    arrayContainer,
    authUser,
    add,
    divide,
    Calculator,
} from "../app/BasicFn";

describe("BasicFn suite", () => {
    describe("Math", () => {
        test("Add function ", () => {
            const [a, b] = [2, 3];

            const actual = add(a, b);

            expect(actual).toBe(5);
            expect(actual).toEqual(5);
        });
        test("Divide function ", () => {
            const [a, b] = [6, 3];

            const actual = divide(a, b);

            expect(actual).toBe(2);
            expect(actual).toEqual(2);
        });

        // Fast: Quick test execution
        test("add numbers quickly", () => {
            expect(add(2, 3)).toBe(5);
        });

        // Isolated: Each test is independent
        test("add positive numbers", () => {
            expect(add(1, 2)).toBe(3);
        });

        test("add negative numbers", () => {
            expect(add(-1, -2)).toBe(-3);
        });

        // Repeatable: Consistent results
        test("divide numbers", () => {
            expect(divide(6, 2)).toBe(3);
            expect(divide(6, 2)).toBe(3);
        });

        // Self-validating: Automatic pass/fail detection
        test("throw error on division by zero", () => {
            expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
        });

        // Timely: Written alongside implementation
        // Understandable: Clear, descriptive test names
        test("handles mixed number addition", () => {
            expect(add(-5, 5)).toBe(0);
        });
    });

    describe("Math class", () => {
        // Setup suite to test each method
        let calculator: Calculator;
        // Create a fresh instance for each test
        beforeEach(() => {
            calculator = new Calculator();
        });

        it("Add should return the result and save to history", () => {
            const actual = calculator.add(2, 3);

            expect(actual).toBe(5);
            expect(calculator.getHistory()).toContain("2 + 3 = 5");
        });
        it("Divide should return the result and save to history", () => {
            const actual = calculator.divide(6, 3);

            expect(actual).toBe(2);
            expect(calculator.getHistory()).toContain("6 / 3 = 2");
        });
        it("Divide should throw the error", () => {
            // Pass a function reference to expect().toThrow

            expect(() => calculator.divide(6, 0)).toThrow();
            // expect(() => calculator.divide(6, 0)).toThrow(
            //     "Cannot divide by zero"
            // );
        });

        // ! Each test case
        it.each([
            [2, 3, 5],
            [1, 3, 4],
            [0, 9, 9],
            [1, 9, 10],
            [7, 9, 13],
        ])("Add %i and %i to return %i", (a, b, result) => {
            const actual = calculator.add(a, b);
            expect(actual).toBe(result);
        });
    });

    describe("Testing array", () => {
        it("Expect the same element of the arg", () => {
            // Arrange
            const array = [1, 2, 3];
            // Act
            const actual = arrayContainer(array);

            // assert
            expect(actual).toEqual([1, 2, 3]);
            // expect(actual).toBe([1, 2, 3]);
        });
    });

    describe("Testing auth function", () => {
        // Auth test
        it("Testing auth", () => {
            const [username, password] = ["gio2", "pass1234"];

            const actual = authUser(username, password);

            expect(actual.isAuthenticated).toBe(true);
        });
    });
});
