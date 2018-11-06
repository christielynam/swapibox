import { cleanVehicles, cleanResidents } from '../cleaners'
import * as MD from '../mockData';




describe('cleanResidents', () => {
  it('should return an array of resident names', () => {
    const result = cleanResidents(MD.uncleanResidents)

    expect(result).toEqual(MD.cleanedResidents)
  })
})

describe('cleanVehicles', () => {
  it('should return an array of clean vehicles', () => {
    const result = cleanVehicles(MD.uncleanVehicles)

    expect(result).toEqual(MD.cleanedVehicles)
  })
})