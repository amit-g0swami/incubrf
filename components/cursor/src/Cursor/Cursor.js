import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useCallback, useEffect, useMemo, useRef, useState, } from "react";
import classNames from "classnames";
// import "./Cursor.scss";
import useFollowCursor from "../hooks/useFollowCursor";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import IsDevice from "../helpers/isDevice";
/**
 *
 * @author AmirHossein Salighedar (https://github.com/amirho1)
 * @component Customable cursor
 *
 * @param  props
 * @param  props.children elements that you want to get the cursor shape usually at top level
 * @param  props.hoverClasses an array of objects that accept 2 property on the name of class that you want while hovering having an action an another the style class name that you want to set on dotElement
 * @param  props.borderClassName this class name will pass to cursor-border
 * @param  props.dotClassName this class name will pass to cursor-dot
 * @param  props.turnOffOnPhone boolean that makes it off on phone by default true
 * @returns  JSX.Element
 *
 * @example <Cursor>{restOfYourSite}</Cursor>
 */
function Cursor({ children, borderClassName, dotClassName, hoverClasses = [], turnOffOnPhone = true, }) {
    // remove default cursor
    useEffect(() => {
        if (!turnOffOnPhone || !(IsDevice === null || IsDevice === void 0 ? void 0 : IsDevice.any())) {
            console.log("testing");
            document.body.classList.add("cursor-none");
        }
        else {
            document.body.classList.add("initial-body");
        }
    }, [turnOffOnPhone]);
    // if device is phone and turnOffOnPhone is true return only children
    if ((IsDevice === null || IsDevice === void 0 ? void 0 : IsDevice.any()) && turnOffOnPhone)
        return _jsx(React.Fragment, { children: children }, void 0);
    const [classes, setClasses] = useState([]);
    // get The cursor wrapper also cursorDotElement
    const cursorWrapperElement = useRef(null);
    const cursorDotElement = useRef(null);
    const cursorBorderElement = useRef(null);
    useEffect(() => {
        if (hoverClasses.length) {
            hoverClasses.forEach(hoverClass => {
                const elements = document.querySelectorAll(`.${hoverClass.classNameOfTargetElement}`);
                setClasses(current => {
                    const cl = {
                        elements,
                        className: hoverClass.classNameOfStyle,
                        cursorChildren: hoverClass.cursorChildren,
                    };
                    return [...current, cl];
                });
            });
        }
        // redo on changing hoverClasses
    }, [hoverClasses]);
    // get mouse x and y coordinate
    const { mouseX, mouseY } = useFollowCursor();
    // styles
    const styles = useMemo(() => ({
        cursorBorder: {
            top: mouseY,
            left: mouseX,
        },
        innerDot: {
            top: mouseY,
            left: mouseX,
        },
    }), [mouseX, mouseY]);
    // mousedown handler
    const mouseDownHandler = useCallback(() => {
        if (cursorBorderElement.current && cursorBorderElement.current.classList)
            cursorBorderElement.current.classList.add("smaller-cursor-border");
    }, []);
    //mouseup handler
    const mouseUpHandler = useCallback(() => {
        if (cursorBorderElement.current && cursorBorderElement.current.classList)
            cursorBorderElement.current.classList.remove("smaller-cursor-border");
    }, []);
    // mouseup handler
    const mouseOverHandler = useCallback(() => {
        if (classes.length) {
            classes.forEach(className => {
                for (let i = 0; i < className.elements.length; i++) {
                    className.elements[i].addEventListener("mouseover", () => {
                        var _a, _b;
                        (_a = cursorWrapperElement.current) === null || _a === void 0 ? void 0 : _a.classList.add(className.className);
                        if (className === null || className === void 0 ? void 0 : className.cursorChildren) {
                            (_b = cursorDotElement.current) === null || _b === void 0 ? void 0 : _b.classList.add("transition-none");
                            if ((typeof className.cursorChildren === "string" ||
                                typeof className.cursorChildren === "number") &&
                                cursorDotElement.current) {
                                ReactDOM.render(_jsx("p", { children: className === null || className === void 0 ? void 0 : className.cursorChildren }, void 0), cursorDotElement.current);
                            }
                            else if (typeof (className === null || className === void 0 ? void 0 : className.cursorChildren) !== "string" &&
                                cursorDotElement &&
                                typeof (className === null || className === void 0 ? void 0 : className.cursorChildren) !== "number") {
                                ReactDOM.render(className === null || className === void 0 ? void 0 : className.cursorChildren, cursorDotElement.current);
                            }
                        }
                    });
                }
            });
        }
    }, [classes, hoverClasses]);
    // mouse out handler
    const mouseOutHandler = useCallback(() => {
        if (classes.length)
            classes.forEach(className => {
                for (let i = 0; i < className.elements.length; i++) {
                    className.elements[i].addEventListener("mouseout", () => {
                        var _a, _b;
                        (_a = cursorWrapperElement.current) === null || _a === void 0 ? void 0 : _a.classList.remove(className.className);
                        if (className.cursorChildren && cursorDotElement.current) {
                            (_b = cursorDotElement.current) === null || _b === void 0 ? void 0 : _b.classList.remove("transition-none");
                            ReactDOM.unmountComponentAtNode(cursorDotElement.current);
                        }
                    });
                }
            });
    }, [classes, hoverClasses]);
    // add event listeners
    useEffect(() => {
        window.addEventListener("mousedown", mouseDownHandler);
        window.addEventListener("mouseup", mouseUpHandler);
        window.addEventListener("mouseover", mouseOverHandler);
        window.addEventListener("mouseout", mouseOutHandler);
        return () => {
            window.removeEventListener("mousedown", mouseDownHandler);
            window.removeEventListener("mouseup", mouseUpHandler);
            window.removeEventListener("mouseover", mouseOverHandler);
            window.removeEventListener("mouseout", mouseOutHandler);
        };
        // function again only when hoverClasses has changed
    }, [classes, hoverClasses]);
    return (_jsxs("div", Object.assign({ ref: cursorWrapperElement, className: "cursor-wrapper", "data-testid": "cursor" }, { children: [_jsx("div", { className: classNames("cursor-border", borderClassName), style: styles.cursorBorder, ref: cursorBorderElement }, void 0), _jsx("div", { style: styles.innerDot, ref: cursorDotElement, className: classNames("cursor-dot", dotClassName) }, void 0), children] }), void 0));
}
Cursor.propTypes = {
    children: PropTypes.element.isRequired,
    borderClassName: PropTypes.string,
    dotClassName: PropTypes.string,
    hoverClasses: PropTypes.arrayOf(PropTypes.shape({
        classNameOfTargetElement: PropTypes.string.isRequired,
        classNameOfStyle: PropTypes.string.isRequired,
        cursorChildren: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.element,
        ]),
    })),
    turnOffOnPhone: PropTypes.bool,
};
export default Cursor;
//# sourceMappingURL=Cursor.js.map