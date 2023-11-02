const { Square, Triangle, Circle } = require('./shapes')
describe('shape class', () => {
    describe('Square', () => {
        it('should create a Square svg', () => {
            const square = new Square('blue', 'llldd', 'green')
            const rendered = square.create()
            expect(rendered).toContain('<rect width="100" height="100" fill="blue" />')
            expect(rendered).toContain(' <text x="50" y="60" text-anchor="middle" font-size="12" fill="green">llldd</text>')
        })
    })

    describe('circle class', () => {
        describe('Circle', () => {
            it('should create a Circle svg', () => {
                const circle = new Circle('blue', 'llldd', 'green')
                const rendered = circle.create()
                expect(rendered).toContain('<rect width="100" height="100" fill="blue" />')
                expect(rendered).toContain(' <text x="50" y="60" text-anchor="middle" font-size="12" fill="green">llldd</text>')
            })
        })
    })


    describe('trianle class', () => {
        describe('Triangle', () => {
            it('should create a Triangle svg', () => {
                const Triangle = new Triangle('blue', 'llldd', 'green')
                const rendered = triangle.create()
                expect(rendered).toContain('<rect width="100" height="100" fill="blue" />')
                expect(rendered).toContain(' <text x="50" y="60" text-anchor="middle" font-size="12" fill="green">llldd</text>')
            })
        })
    })


    //add more describe test 
})


