import userData from "./data/user.json";
import { IAuthData } from "./interface/authData";

export const sum = (a: number, b: number) => {
    return a + b;
};

export const arrayContainer = (arrayNumber: number[]) => {
    return arrayNumber;
};
console.log(userData);
export function authUser(username: string, password: string): IAuthData {
    const isUserExisted = userData.some(
        (user) => user.username === username && user.password === password
    );

    return {
        usernameToLower: username.toLowerCase(),
        userNameChar: username.split(""),
        userDetail: {},
        isAuthenticated: isUserExisted,
    };
}

authUser("gio1", "pass1234");
