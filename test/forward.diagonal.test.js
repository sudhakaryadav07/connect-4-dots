var assert = require('assert');
var  gameLogic  = require('./../src/util/gameLogic');

describe('Check WIN for forward diagonal', function () {
    it('should return true for 4 zeros, starting with (2,3) with index(2,3)', function () {
        var grid =
            [
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 2, 1, 1, 1, 1, 1, 1],
                [2, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 2, 3).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (2,3) with index(1,2)', function () {
        var grid =
            [
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 2, 1, 1, 1, 1, 1, 1],
                [2, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 1, 2).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (2,3) with index(3,2)', function () {
        var grid =
            [
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 2, 1, 1, 1, 1, 1, 1],
                [2, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 3, 2).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,3) with index(4,3)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 2, 1, 1, 1, 1, 1, 1],
                [2, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 4, 3).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,3) with index(7,2)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 2, 1, 1, 1, 1, 1, 1],
                [2, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 7, 2).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,3) with index(2,7)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 2, 7).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,3) with index(3,4)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 3, 4).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,3) with index(1,6)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 1, 6).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,7) with index(4,7)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
            ]
        gameLogic(grid, 2, 4, 7).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,7) with index(7,4)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
            ]
        gameLogic(grid, 2, 7, 4).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,7) with index(6,5)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
            ]
        gameLogic(grid, 2, 6, 5).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return false for 4 zeros, starting with (2,7) with index(2,7)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 2, 7).then(d => {
            console.log("win ", d)
            assert.equal(d, false)
        })
    });

    it('should return true for 4 zeros, starting with (2,7) with index(1,6)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 1, 6).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (2,7) with index(3,4)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 3, 4).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });
});