import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import StudentProfile from "../StudentProfile";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders StudentProfile with currentUser", () => {
    const fakeUser = {
        id: 1,
        user_type: "STUDENT",
        first_name: "Настя",
        second_name: "Шредер",
        description: "Привет",
        third_name: "",
        email: "hh@mail.ru",
        login: "login",
        pswd: "pswd",
        uni: {
            id: 1,
            name: "СПбПУ"
        },
        specialization: {
            id: 1,
            name: "Программная инженерия",
            number: "0904"
        },
        subjects: null,
        services: null,
        isOpenForRequests: true,
        avatar_file: ""
    };

    act(() => {
        render(<StudentProfile currentUser={fakeUser} />, container);
    });
    expect(container.querySelector("[data-testid='desc']").innerHTML).toBe("Привет");
    expect(container.querySelector("[data-testid='uniSpec']").innerHTML).toBe("СПбПУ, Программная инженерия");
});