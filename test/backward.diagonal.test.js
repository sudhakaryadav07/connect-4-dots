var assert = require('assert');
var gameLogic = require('./../src/util/gameLogic');

describe('Check WIN for backward diagonal', function () {
    it('should return true for 4 zeros, starting with (3,2) with index(3,0)', function () {
        let grid = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [2, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 1, 1, 1, 1, 1, 1],
            [1, 1, 2, 1, 1, 1, 1, 1],
            [1, 1, 1, 2, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ]


        gameLogic(grid, 2, 3, 0).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })

    });

    it('should return true for 4 zeros, starting with (4,2) with index(4,1)', function () {
        let grid = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [2, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 1, 1, 1, 1, 1, 1],
            [1, 1, 2, 1, 1, 1, 1, 1],
            [1, 1, 1, 2, 1, 1, 1, 1],
        ]

        gameLogic(grid, 2, 4, 1).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })

    });

    it('should return true for 4 zeros, starting with (2,2) with index(2,2)', function () {
        let grid = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 2, 1, 1, 1, 1, 1],
            [1, 1, 1, 2, 1, 1, 1, 1],
            [1, 1, 1, 1, 2, 1, 1, 1],
            [1, 1, 1, 1, 1, 2, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ]


        gameLogic(grid, 2, 2, 2).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })

    });

    it('should return true for 4 zeros, starting with (2,4) with index(1,5)', function () {
        var grid =
            [
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 1, 5).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })

    });

    it('should return true for 4 zeros, starting with (2,4) with index(3,7)', function () {
        var grid =
            [
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 3, 7).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })

    });

    it('should return true for 4 zeros, starting with (3,2) with index(3,2)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 3, 2).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (3,2) with index(4,3)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 4, 3).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (3,2) with index(5,4)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 5, 4).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (3,2) with index(6,5)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 6, 5).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return false for 4 zeros, starting with (3,2) with index(7,6)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 7, 6).then(d => {
            console.log("win ", d)
            assert.equal(d, false)
        })
    });

    it('should return true for 4 zeros, starting with (4,2) with index(4,2)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [2, 1, 1, 1, 1, 1, 1, 1],
                [1, 2, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 4, 2).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,2) with index(5,1)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [2, 1, 1, 1, 1, 1, 1, 1],
                [1, 2, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 5, 1).then(d => {
            console.log("win ", d)
            assert.equal(d, true)
        })
    });

    it('should return true for 4 zeros, starting with (4,2) with index(7,3)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [2, 1, 1, 1, 1, 1, 1, 1],
                [1, 2, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 1, 1, 1, 1, 1],
                [1, 1, 1, 2, 1, 1, 1, 1],
            ]
        gameLogic(grid, 2, 7, 3).then(d => {
            console.log("win ", d)
            assert.equal(d, false)
        })
    });

    it('should return false for 4 zeros, starting with (4,3) with index(6,5)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 2, 1],
            ]
        gameLogic(grid, 2, 6, 5).then(d => {
            console.log("win ", d)
            assert.equal(d, false)
        }, e => console.log(e))
    });

    it('should return true for 4 zeros, starting with (7,7) with index(7,7)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 1, 1, 2],
            ]
        gameLogic(grid, 2, 7, 7).then(d => {
            console.log("win ", d)
            assert.equal(d, false)
        }, e => console.log(e))
    });
    
    it('should return true for 4 zeros, starting with (7,7) with index(6,6)', function () {
        var grid =
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 2, 1],
                [1, 1, 1, 1, 1, 1, 1, 2],
            ]
        gameLogic(grid, 2, 6, 6).then(d => {
            console.log("win ", d)
            assert.equal(d, false)
        }, e => console.log(e))
    });
});