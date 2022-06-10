/// <reference types="react" />
import "./Cursor.scss";
import { hoverStyle } from "./types";
import PropTypes from "prop-types";
interface Props {
    children: JSX.Element;
    borderClassName?: string;
    dotClassName?: string;
    hoverClasses?: hoverStyle[];
    turnOffOnPhone?: boolean;
}
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
declare function Cursor({ children, borderClassName, dotClassName, hoverClasses, turnOffOnPhone, }: Props): JSX.Element;
declare namespace Cursor {
    var propTypes: {
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        borderClassName: PropTypes.Requireable<string>;
        dotClassName: PropTypes.Requireable<string>;
        hoverClasses: PropTypes.Requireable<(PropTypes.InferProps<{
            classNameOfTargetElement: PropTypes.Validator<string>;
            classNameOfStyle: PropTypes.Validator<string>;
            cursorChildren: PropTypes.Requireable<string | number | PropTypes.ReactElementLike>;
        }> | null | undefined)[]>;
        turnOffOnPhone: PropTypes.Requireable<boolean>;
    };
}
export default Cursor;
