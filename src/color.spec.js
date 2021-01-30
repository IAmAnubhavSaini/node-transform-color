var Color = require('./color').Color;
describe('Color', function () {
    describe('has', function () {
        it('rgb2hex as a function', function () {
            expect(typeof Color.rgb2hex).toEqual('function');
            expect(Color.rgb2hex.length).toEqual(3);
        });
        it('hex2rgb as a function', function () {
            expect(typeof Color.hex2rgb).toEqual('function');
            expect(Color.hex2rgb.length).toEqual(1);
        });
    });
    describe('.rgb2hex(r, g, b)', function () {
        it('returns hex representation of rgb', function () {
            var rgb = [255, 0, 255];
            var actual = Color.rgb2hex.apply(null, rgb);
            var expected = '#FF00FF';
            expect(actual).toEqual(expected);
        });
        it('returns black for invalid input: -1, -1, -1', function () {
            var rgb = [-1, -1, -1];
            var actual = Color.rgb2hex.apply(null, rgb);
            var expected = '#000000';
            expect(actual).toEqual(expected);
        });
        it('returns black for invalid input: -Infinity, -Infinity, -Infinity', function () {
            var rgb = [-Infinity, -Infinity, -Infinity];
            var actual = Color.rgb2hex.apply(null, rgb);
            var expected = '#000000';
            expect(actual).toEqual(expected);
        });
        it('returns black for invalid input: +Infinity, +Infinity, +Infinity', function () {
            var rgb = [+Infinity, +Infinity, +Infinity];
            var actual = Color.rgb2hex.apply(null, rgb);
            var expected = '#000000';
            expect(actual).toEqual(expected);
        });
    });
    describe('hex2rgb', function () {
        it('should return rgb values for a full 6 letter hex value', function () {
            var hex = '#FF00FF';
            var actual = Color.hex2rgb(hex);
            var expected = { r: 255, g: 0, b: 255, rgb: "rgb(255, 0, 255)", rgba: "rgba(255, 0, 255, 1)" };
            expect(actual.rgb).toEqual(expected.rgb);
            expect(actual.rgba).toEqual(expected.rgba);
            expect(Object.keys(actual)).toEqual(Object.keys(expected));
        });
        it('should return black for undefined input', function () {
            var actual = Color.hex2rgb();
            var expected = { r: 0, g: 0, b: 0, rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 1)" };
            expect(actual.rgb).toEqual(expected.rgb);
            expect(actual.rgba).toEqual(expected.rgba);
            expect(Object.keys(actual)).toEqual(Object.keys(expected));
        });
        it('should return black for bad input', function () {
            var actual = Color.hex2rgb('#a');
            var expected = { r: 0, g: 0, b: 0, rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 1)" };
            expect(actual.rgb).toEqual(expected.rgb);
            expect(actual.rgba).toEqual(expected.rgba);
            expect(Object.keys(actual)).toEqual(Object.keys(expected));
        });
        it('should return black for long, bad input', function () {
            var actual = Color.hex2rgb('#abcdefghijklmnop');
            var expected = { r: 0, g: 0, b: 0, rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 1)" };
            expect(actual.rgb).toEqual(expected.rgb);
            expect(actual.rgba).toEqual(expected.rgba);
            expect(Object.keys(actual)).toEqual(Object.keys(expected));
        });
        it('should return black for non-hex, bad input', function () {
            var actual = Color.hex2rgb('#zzyyxx');
            var expected = { r: 0, g: 0, b: 0, rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 1)" };
            expect(actual.rgb).toEqual(expected.rgb);
            expect(actual.rgba).toEqual(expected.rgba);
            expect(Object.keys(actual)).toEqual(Object.keys(expected));
        });
    });
});
