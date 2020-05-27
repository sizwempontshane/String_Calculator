const {add} = require("../src/string_calculator")

describe('add', function(){
    it('should return 0 for an empty string',function(){
        expect(add("")).toBe(0)
    })
    it('should add a single number',function(){
        expect(add("1")).toBe(1)
    })
    it('should add numbers',function(){
        expect(add("1,1")).toBe(2)
    })
    it('should add multiple numbers',function(){
        expect(add("1,2,3,4")).toBe(10)
    })
    it('should allow newlines',function(){
        expect(add("1\n2,3")).toBe(6)
    })
    it('should allow a delimiter and a newline',function(){
        expect(add("//;\n1;2")).toBe(3)
    })
    it('should allow delimiter and newlines',function(){
        expect(add("//4\n142")).toBe(3)
    })
    it('should check if string has negative values',function(){
        expect(function(){add("-1,-2,3,4")}).toThrow(new Error("negatives not allowed -1,-2"))
    })
    it('should ignore numbers that are greater than 1000',function(){
        expect(add("//;\n1000;1;2")).toBe(3)
    })
    it('should check if it can support delimiters of any length',function(){
        expect(add("//***\n1***2***3")).toBe(6)
    })
    it('should check if it can support delimiters of any length',function(){
        expect(add("//[:D][%]\n1:D2%3")).toBe(6)
    })
    it('should check if it can support delimiters of any length',function(){
        expect(add("//[***][%%%]\n1***2%%%3")).toBe(6)
    })
    it('should check if it can support delimiters of any length',function(){
        expect(add("//[(-_-')][%]\n1(-_-')2%3")).toBe(0)
    })
    it('should check if it can support delimiters of any length',function(){
        expect(add("//[abc][777][:(]\n1abc27773:(1")).toBe(7)
    })
    it('should check if input is valid',function(){
        expect(function(){add("//;\n1000;1;2;")}).toThrow(new Error("invalid input"))
    })
    // it('should check if input is valid',function(){
    //     expect(function(){add("   //;\n1000,1;2")}).toThrow(new Error("invalid input"))
    // })
    // it('should check if inputs is valid',function(){
    //     expect(function(){add("1,2,3//;\n1000,1;2")}).toThrow(new Error("invalid input"))
    // })
  



    



})
