import { arrayContainer, authUser } from "../app/main";

describe("Testing array", () => {
    it("Expect the same element of the arg", () => {
        // Arrange
        const array = [1, 2, 3];
        // Act
        const actual = arrayContainer(array);

        // assert
        expect(actual).toEqual([1, 2, 3]);
        expect(actual).toBe([1, 2, 3]);
    });

    // Auth test
    it("Testing auth", () => {
        const [username, password] = ["gio2", "pass1234"];

        const actual = authUser(username, password);

        expect(actual.isAuthenticated).toBe(true);
    });
});
