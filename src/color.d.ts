declare enum BasicColors {
    Aqua = "#00FFFF",
    Black = "#000000",
    Blue = "#0000FF",
    Fuchsia = "#FF00FF",
    Gray = "#808080",
    Green = "#008000",
    Lime = "#00FF00",
    Maroon = "#800000",
    Navy = "#000080",
    Olive = "#808000",
    Purple = "#800080",
    Red = "#FF0000",
    Silver = "#C0C0C0",
    Teal = "#008080",
    White = "#FFFFFF",
    Yellow = "#FFFF00"
}
declare class Color {
    private static get hexDefault();
    static rgb2hex(r: string, g: string, b: string): string;
    static hex2rgb(hex: string): {
        r: number;
        g: number;
        b: number;
        rgb: string;
        rgba: string;
    };
    private static get rgbDefault();
}
export { Color, BasicColors };
//# sourceMappingURL=color.d.ts.map