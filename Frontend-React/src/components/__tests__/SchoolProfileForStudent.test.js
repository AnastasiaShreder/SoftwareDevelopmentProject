import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SchoolProfileForStudent from "../SchoolProfileForStudent";

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
        user_type: "APPLICANT",
        first_name: "Настя",
        second_name: "Шредер",
        description: "Привет",
        third_name: "",
        email: "hh@mail.ru",
        login: "login",
        pswd: "pswd",
        uni: null,
        specialization: null,
        subjects: null,
        services: null,
        isOpenForRequests: true,
        avatar_file: ""
    };

    act(() => {
        render(<SchoolProfileForStudent user={fakeUser} />, container);
    });
    expect(container.querySelector("[data-testid='fio']").innerHTML).toBe("Шредер Настя");
    expect(container.querySelector("[data-testid='type']").innerHTML).toBe("Абитуриент");
    expect(container.querySelector("[data-testid='desc']").innerHTML).toBe("Привет");
    expect(container.querySelector("[data-testid='name']").innerHTML).toBe("Настя интересуется:");
});