// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('checks if 4087148131 is a valid phone number', () => {
    expect(functions.isPhoneNumber("4087148131")).toBe(false);
});

test('checks if 123456 is a valid phone number', () => {
    expect(functions.isPhoneNumber("123456")).toBe(false);
});

test('checks if 408-714-8131 is a valid phone number', () => {
    expect(functions.isPhoneNumber("408-714-8131")).toBe(true);
});

test('checks if 408-714-8131 is a valid phone number', () => {
    expect(functions.isPhoneNumber("916-298-3922")).toBe(true);
});

test('checks if likithpala7@gmail.com is a valid email address', () => {
    expect(functions.isEmail("likithpala7@gmail.com")).toBe(true);
});

test('checks if lpalabin@ucsd.edu is a valid email address', () => {
    expect(functions.isEmail("lpalabin@ucsd.edu")).toBe(true);
});

test('checks if john@john@john is a valid email address', () => {
    expect(functions.isEmail("john@john@john")).toBe(false);
});

test('checks if uscd.edu is a valid email address', () => {
    expect(functions.isEmail("ucsd.edu")).toBe(false);
});

test('checks if password is a valid strong password', () => {
    expect(functions.isStrongPassword("password")).toBe(true);
});

test('checks if Xx_likith_xX is a valid strong password', () => {
    expect(functions.isStrongPassword("Xx_likith_xX")).toBe(true);
});

test('checks if 123456 is a valid strong password', () => {
    expect(functions.isStrongPassword("123456")).toBe(false);
});

test('checks if carrot^ is a valid strong password', () => {
    expect(functions.isStrongPassword("carrot^")).toBe(false);
});

test('checks if 04/08/2001 is a valid date', () => {
    expect(functions.isDate("04/08/2001")).toBe(true);
});

test('checks if 1/1/1997 is a valid date', () => {
    expect(functions.isDate("1/1/1997")).toBe(true);
});

test('checks if 4/8/01 is a valid date', () => {
    expect(functions.isDate("4/8/01")).toBe(false);
});

test('checks if 1-1-2001 is a valid date', () => {
    expect(functions.isDate("1-1-2001")).toBe(false);
});

test('checks if #33FFF0 is a valid hex color', () => {
    expect(functions.isHexColor("#33FFF0")).toBe(true);
});

test('checks if #f0f is a valid hex color', () => {
    expect(functions.isHexColor("#f0f")).toBe(true);
});

test('checks if 2999 is a valid hex color', () => {
    expect(functions.isHexColor("2999")).toBe(false);
});

test('checks if 2999 is a valid hex color', () => {
    expect(functions.isHexColor("orange")).toBe(false);
});