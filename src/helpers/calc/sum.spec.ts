import faker from "faker"
import sum from "./sum"

describe("Sum", () => {
  it("should return a sum of 2 values", () => {
    const a = faker.random.number(),
      b = faker.random.number()
    const result = sum(a, b)
    expect(result).toBe(a + b)
  })
})
