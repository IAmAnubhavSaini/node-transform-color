"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicColors = exports.Color = void 0;
var BasicColors;
(function (BasicColors) {
    BasicColors["Aqua"] = "#00FFFF";
    BasicColors["Black"] = "#000000";
    BasicColors["Blue"] = "#0000FF";
    BasicColors["Fuchsia"] = "#FF00FF";
    BasicColors["Gray"] = "#808080";
    BasicColors["Green"] = "#008000";
    BasicColors["Lime"] = "#00FF00";
    BasicColors["Maroon"] = "#800000";
    BasicColors["Navy"] = "#000080";
    BasicColors["Olive"] = "#808000";
    BasicColors["Purple"] = "#800080";
    BasicColors["Red"] = "#FF0000";
    BasicColors["Silver"] = "#C0C0C0";
    BasicColors["Teal"] = "#008080";
    BasicColors["White"] = "#FFFFFF";
    BasicColors["Yellow"] = "#FFFF00";
})(BasicColors || (BasicColors = {}));
exports.BasicColors = BasicColors;
class Color {
    static rgb2hex(r, g, b) {
        return [r, g, b]
            .map(c => parseInt(c))
            .map(c => c >= 0 && c <= 255 ? c : 0)
            .map((c) => c.toString(16))
            .map(c => c.toUpperCase())
            .map(c => c.padStart(2, '0'))
            .reduce((a, c) => a + c, '#');
    }
    static hex2rgb(hex) {
        return [hex || '#000']
            .map(h => h.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_matches, r, g, b) => '' + r + r + g + g + b + b))
            .map(h => /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h))
            .map(mrgb => (mrgb || [0, 0, 0, 0]).slice(1))
            .map((rgb) => rgb.map(c => parseInt(c.toString(), 16)))
            .map(rgb => ({
            r: rgb[0],
            g: rgb[1],
            b: rgb[2],
            rgb: `rgb(${rgb.join(', ')})`,
            rgba: `rgba(${rgb.join(', ')}, 1)`
        }))
            .pop();
    }
}
exports.Color = Color;
//# sourceMappingURL=color.js.map