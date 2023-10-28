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
})