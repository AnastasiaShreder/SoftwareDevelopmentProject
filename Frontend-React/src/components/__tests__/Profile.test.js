import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ProfileHeader from "../ProfileHeader";

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

it("renders ProfileHeader with currentUser", () => {
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
        render(<ProfileHeader currentUser={fakeUser} />, container);
    });
    expect(container.querySelector("[data-testid='fio']").innerHTML).toBe("Настя Шредер");
    expect(container.querySelector("[data-testid='type']").innerHTML).toBe("Студент");
});