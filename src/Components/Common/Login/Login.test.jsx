import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";

import Login from "./Login";

expect.extend(matchers);

describe("Login test", () => {
  afterEach(cleanup);
  it("espero que se renderice el titulo", () => {
    render(<Login />);
    screen.getByText("Este es el formulario de login");
  });

  it("espero funcione onChange", () => {
    render(<Login />);
    let inputName = screen.getByPlaceholderText("ingresa tu nombre");
    expect(inputName).toHaveValue(""); //espero input vacio
    fireEvent.change(inputName, { target: { value: "pepito" } }); //simulamos el onChange
    expect(inputName).toHaveValue("pepito");
  });
});