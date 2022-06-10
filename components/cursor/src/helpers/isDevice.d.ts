/**
 * This module comes from react-animated-cursor (https://github.com/stephenscaff/react-animated-cursor)
 * @function IsDevice
 */
declare const IsDevice: {
    info: string;
    Android(): RegExpMatchArray | null;
    BlackBerry(): RegExpMatchArray | null;
    IEMobile(): RegExpMatchArray | null;
    iOS(): RegExpMatchArray | null;
    OperaMini(): RegExpMatchArray | null;
    /**
     * Any Device
     */
    any(): RegExpMatchArray | null | undefined;
} | undefined;
export default IsDevice;
