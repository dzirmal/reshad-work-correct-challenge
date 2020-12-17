import styled from 'styled-components'

export const PlanetContainer = styled.div`
  width: 100%;
  display: flex;
`

export const PlanetContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PlanetName = styled.span`
  border: 1px solid green;
  display: flex;
  width: 120px;
  height: 30px;
  align-items: center;
  padding: 5px;
`

export const PlanetRotationPeriod = styled.span`
  border: 1px solid orange;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`

export const PlanetOrbitalPeriod = styled.span`
  border: 1px solid green;
`

export const PlanetDimeter = styled.span`
  border: 1px solid blue;
  display: flex;
  padding: 5px;
  width: 65px;
  height: 30px;
  justify-content: flex-end;
  align-items: center;
  margin-right: -120px;
`

export const PlanetClimate = styled.span`
  border: 1px solid pink;
  width: 90px;
  height: 50px;
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const PlanetSurfaceWater = styled.span`
  border: 1px solid orange;
  display: flex;
  width: 80px;
  height: 30px;
  padding: 5px;
  justify-content: flex-end;
  align-items: center;
  margin-right: -60px;
`

export const PlanetPopulation = styled.span`
  border: 1px solid red;
  display: flex;
  width: 135px;
  height: 30px;
  justify-content: flex-end;
  padding: 5px;
  align-items: center;
`
