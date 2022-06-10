/// <reference types="react" />
export interface IStyles {
    [element: string]: React.CSSProperties;
}
export declare type CursorChildrenType = JSX.Element | string | undefined | number;
export interface hoverStyle {
    classNameOfTargetElement: string;
    classNameOfStyle: string;
    cursorChildren?: CursorChildrenType;
}
