// mockName
const mockFn = jest.fn().mockName("mockedFunction");

// mockFn();
describe("Testing mockName", () => {
    test("Expect it to call the mock function", () => {
        mockFn()
        expect(mockFn).toHaveBeenCalled();
    });
});
