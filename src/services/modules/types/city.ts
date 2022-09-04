// 位置信息
interface Position {
  latitude: string;
  longitude: string;
}

// 单个城市信息
export interface City {
  cityId: number;
  cityName: string;
  gangAotai: boolean;
  hot: boolean;
  position: Position;
  pinYin: string;
}

// 具有编号的城市信息
export interface Cities {
  group: string;
  cities: Array<City>;
}

// 城市组信息
export interface CityGroup {
  cities: Array<Cities>;
  hotCities: Array<City>;
  title: string;
}

//全部城市信息
export interface AllCities {
  cityGroup: CityGroup;
  cityGroupOverSea: CityGroup;
}
