export interface AircraftRoute {
  routeName: string;
  route: string;
  totalDuration: string;
  experienceType: string;
  highlights: string[];
  idealFor: string[];
  travelType: string[];
  timeInAir: {
    firstPeriod: string;
    secondPeriod: string;
    thirdPeriod: string;
    fourthPeriod: string;
    return: string;
  };
  timeOnLand: {
    firstPeriod: string;
    secondPeriod: string;
    thirdPeriod: string;
  };
}

export interface YachtRoute {
  route: string;
  totalDuration: string;
  timeAtSea: { firstPeriod: string; secondPeriod: string; return: string };
  timeOnLand: { firstPeriod: string; secondPeriod: string };
  highlight: string[];
}

export interface GroundTransportationRoute {
  route: string;
  totalDuration: string;
  timeOnRoad: string;
  timeAtSite: string;
  highlight: string;
}
