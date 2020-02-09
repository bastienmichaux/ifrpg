import { StoreService } from "./service.store";

export interface PlayerLocation {
  region: string;
  place: string;
  room: string;
}

export class LocationService {
  static getPlayerLocation(): PlayerLocation {
    return StoreService.loadPlayerLocation();
  }
}
