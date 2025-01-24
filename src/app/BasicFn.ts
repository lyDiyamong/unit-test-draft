import userData from "./data/user.json";
import { IAuthData } from "./interface/authData";

export function add(a: number, b: number) {
    return a + b;
}

export function divide(a: number, b: number) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export const arrayContainer = (arrayNumber: number[]) => {
    return arrayNumber;
};

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

// class to test

export class Calculator {
    private history: string[] = [];

    public add(a: number, b: number) {
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }
    public divide(a: number, b: number) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        const result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }

    public getHistory() {
        return this.history;
    }
}
