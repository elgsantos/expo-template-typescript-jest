import sum from './sum'

describe('Sum',()=>{
  it('should return a sum of 2 values', ()=> {
    const a = 10, b=20
    const result = sum(a,b)
    expect(result).toBe(a+b)
  })
})