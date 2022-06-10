import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cursor from "./Cursor";
import userEvent from "@testing-library/user-event";
describe("Dot", () => {
    let element;
    let childrenTextContext = "Hello world";
    let children = (_jsxs("p", Object.assign({ className: "children" }, { children: [childrenTextContext, _jsx("button", Object.assign({ className: "btn" }, { children: "button" }), void 0)] }), void 0));
    let cursorTestClassName = "cursor-test-class-name";
    let dotTestClassName = "dot-test-class-name";
    // do some initialization before each test
    beforeEach(() => {
        // clean the dom
        cleanup();
        //render the Component
        render(_jsx(Cursor, { children: children, borderClassName: cursorTestClassName, dotClassName: dotTestClassName, hoverClasses: [
                {
                    cursorChildren: _jsx("p", Object.assign({ className: "child" }, { children: "child" }), void 0),
                    classNameOfTargetElement: "btn",
                    classNameOfStyle: "btn-hover",
                },
            ] }, void 0));
        // get the element
        element = screen.getByTestId("cursor");
    });
    it("should mount on document", () => {
        expect(element).toBeInTheDocument();
    });
    it("render the given children", () => {
        var _a, _b;
        expect(element.querySelector(".children")).toBeInTheDocument();
        expect((_a = element.querySelector(".children")) === null || _a === void 0 ? void 0 : _a.textContent).toMatch(childrenTextContext);
        expect((_b = element.querySelector(".children")) === null || _b === void 0 ? void 0 : _b.children.length).toBe(1);
        expect(element === null || element === void 0 ? void 0 : element.querySelector(".btn")).toBeInTheDocument();
    });
    it("cursor-border should be in dom", () => {
        const cursorBorder = element.querySelector(".cursor-border");
        expect(cursorBorder).toBeInTheDocument();
    });
    it("should use given borderClassName from properties", () => {
        const cursorBorder = element.querySelector(`.${cursorTestClassName}`);
        expect(cursorBorder).toBeInTheDocument();
        expect(cursorBorder === null || cursorBorder === void 0 ? void 0 : cursorBorder.className).toMatch("cursor-border");
    });
    it("cursor-dot should be in the dom", () => {
        const cursorDot = element.querySelector(`.cursor-dot`);
        expect(cursorDot).toBeInTheDocument();
    });
    it("should use given dotClassName from properties", () => {
        const cursorDot = element.querySelector(`.${dotTestClassName}`);
        expect(cursorDot).toBeInTheDocument();
        expect(cursorDot === null || cursorDot === void 0 ? void 0 : cursorDot.className).toMatch("cursor-dot");
    });
    it("should render given cursorChild while hovering on target element in to cursorDot", () => {
        const btn = element.querySelector(".btn");
        const cursorDot = element.querySelector(".cursor-dot");
        expect(btn).toBeInTheDocument();
        expect(cursorDot).toBeInTheDocument();
        if (btn) {
            fireEvent.mouseOver(btn);
            userEvent.hover(btn);
        }
        expect(element.className).toMatch("btn-hover");
        expect(cursorDot === null || cursorDot === void 0 ? void 0 : cursorDot.children.length).toBe(1);
        expect(cursorDot === null || cursorDot === void 0 ? void 0 : cursorDot.querySelector(".child")).toBeInTheDocument();
        if (btn) {
            fireEvent.mouseOut(btn);
            userEvent.unhover(btn);
        }
        expect(element.className).not.toMatch("btn-hover");
        expect(cursorDot === null || cursorDot === void 0 ? void 0 : cursorDot.children.length).not.toBe(1);
        expect(cursorDot === null || cursorDot === void 0 ? void 0 : cursorDot.querySelector(".child")).not.toBeInTheDocument();
    });
});
//# sourceMappingURL=Cursor.test.js.map