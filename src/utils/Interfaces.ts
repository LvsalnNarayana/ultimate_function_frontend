import type { ElementType } from "react";

export interface NavMenu {
    id: string,
    title: string,
    route: string,
    component?: ElementType<{ title: string }>
}

export interface validationInput {
    username: string,
    email: string,
    password: string,
    minInput: number,
    maxInput: number,
    dob: string
}