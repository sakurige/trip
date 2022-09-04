// 热门城市部分
export interface TagText {
  text: string;
  color: string;
  border?: string;
  tips?: string;
  background: {
    color: string;
    image: string;
    gradientColor?: string;
  };
}

export interface HotSuggest {
  tagText: TagText;
  tagDesc?: string;
  tagCode: number;
  tagLink: string;
  childTags: null;
  checkBubble: boolean;
}

//分类部分
export interface Category {
  pictures: string;
  redPacketConfig: string;
  content: string;
  id: string;
  testBucket: string;
  title: string;
  subTitle: string;
  pictureUrl: string;
  videoUrl: string;
  subPictureUrl: string;
  labels: string;
  navigateUrl: string;
  adCampaign: string;
}

// houseList 部分
export interface HouseListDataPriceTip {
  type: number;
  text: string;
  color: string;
  background: string | null;
  border: string | null;
  orderIndex: number;
  tip: string | null;
  jumpUrl: string | null;
  colorType: number;
  gradient: {
    startColor: string;
    endColor: string;
  };
}

export interface HouseListData {
  iconTag: number;

  productPrice: null;
  priceTipBadge: HouseListDataPriceTip;
  houseAdvert: string;
  activityInfo: string;
  sellingPoint: string;
  guideText: string;
  referencePriceDesc: string;
  poiLocation: string;
  houseId: string;
  houseName: string;
  houseTags: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  commentScore: string;
  extendMap: {
    logicBit: string;
  };
  summaryText: string;
  showHouseVideo: string;
  cityId: string;
  finalPrice: string;
  location: string;
}

export interface HouseList {
  discoveryContentType: number;
  data: HouseListData;
}
