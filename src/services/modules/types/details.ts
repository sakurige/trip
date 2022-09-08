export interface Root {
  houseId: number;
  canSale: boolean;
  unitInstanceCount: number;
  mainPart: MainPart;
  pricePart: PricePart;
  popupUpJson: string;
  currentHouse: CurrentHouse;
  floatingBall: any;
  debugInfo: string;
}

export interface MainPart {
  topModule: TopModule;
  shareModule: ShareModule;
  introductionModule: IntroductionModule;
  ensureModule: EnsureModule;
  businessLicenseModule: string[];
  dynamicModule: DynamicModule;
  businessLicenseModuleTitle: string;
}

export interface TopModule {
  favoriteCount: number;
  housePicture: HousePicture;
  promotionPic: any;
  houseName: string;
  houseTags: HouseTag[];
  commentBrief: CommentBrief;
  nearByPosition: NearByPosition;
  urgencyPromotion: any;
  redPacketTagData: RedPacketTagData;
  atmosphereVo: any;
  checkInDate: string;
  checkOutDate: string;
  boardRanks: any;
  loginGuidance: any;
  diamondLevel: DiamondLevel;
  headTag: HeadTag;
  businessDistrictConfig: any;
  briefComments: any[];
}

export interface HousePicture {
  housePics: HousePic[];
  preferredProPics: any[];
  housePictureGroup: any[];
  houseVRURL: any;
  houseVideoURL: string;
  houseVideoTimeSpan: number;
  defaultPictureURL: string;
  picCount: number;
  houseVideos: HouseVideo[];
}

export interface HousePic {
  title: string;
  url: string;
  albumUrl: string;
  orderIndex: number;
  pictureExplain: any;
  enumPictureCategory: number;
}

export interface HouseVideo {
  defaultPictureURL: string;
  houseVideoURL: string;
  houseVideoTimeSpan: number;
}

export interface HouseTag {
  tagText?: TagText;
  tagPic?: string;
  tagDesc: string;
  tagCode: number;
  tagLink: any;
  aloneLine: boolean;
  childTags: any;
}

export interface TagText {
  text: string;
  color: string;
  border: any;
  tips: any;
  background: Background;
}

export interface Background {
  color: string;
  image: any;
  gradientColor: any;
}

export interface CommentBrief {
  overall: number;
  scoreTitle: string;
  commentBrief: string;
  commentBriefV2: any;
  userAvatars: UserAvatar[];
  userAvatar: string;
  totalCount: number;
  commentTabType: number;
  veryGoodNewHouse: string;
  veryGoodNewHouseIcon: string;
  totalCountStr: string;
  healthText: string;
  healthFlag: number;
  sort: string;
}

export interface UserAvatar {
  userAvatars: string;
}

export interface NearByPosition {
  address: string;
  nearByPosition: any;
  areaName: string;
  tradeArea: string;
}

export interface RedPacketTagData {
  icon: string;
  backgroundPicUrl: string;
  text: string[];
  fontColor: string;
  borderColor: string;
  partake: boolean;
  redPacketTip: RedPacketTip;
  partakeText: string;
  partakeTextColor: string;
  partakeArrowColor: string;
  arrowRed: boolean;
  condition: string;
}

export interface RedPacketTip {
  title: string;
  icon: string;
  receive: boolean;
  countdown: number;
}

export interface DiamondLevel {
  icon: string;
  level: number;
  title: string;
  desc: string;
}

export interface HeadTag {
  headTagName: string;
  headTagStyle: HeadTagStyle;
}

export interface HeadTagStyle {
  colors: string[];
  locations: number[];
  vertical: boolean;
  textColor: string;
  textLightColor: string;
  textLightLineColors: string[];
  imgUrl: string;
}

export interface ShareModule {
  items: Item[];
  shareTags: string[];
}

export interface Item {
  enumAppShareChannel: number;
  enumShareType: number;
  shareTitle?: string;
  shareImageUrl: string;
  shareDescription: string;
  shareUrl: string;
  shareTip: any;
  bakUrl?: string;
}

export interface IntroductionModule {
  title: string;
  introduction: string;
  focus: any;
  blod: boolean;
  icon: any;
  color: any;
  tip: any;
  highLight: any;
  memberTitle: any;
  memberLevelStyle: any;
  maskTagText: string;
  titleType: number;
  marketActivityId: number;
}

export interface EnsureModule {
  icon: string;
  title: string;
  text: any;
  subIcon: string;
  titleTips: TitleTip[];
}

export interface TitleTip {
  title: string;
  introduction: string;
  focus: any;
}

export interface DynamicModule {
  moduleSort: string[];
  facilityModule: FacilityModule;
  landlordModule: LandlordModule;
  commentModule: CommentModule;
  positionModule: PositionModule;
  rulesModule: RulesModule;
  featureModule: any;
  landlordRecommendModule: LandlordRecommendModule;
  bannerModule: any;
}

export interface FacilityModule {
  topScroll: TopScroll;
  houseContent: string;
  houseSummary: HouseSummary[];
  houseFacility: HouseFacility;
}

export interface TopScroll {
  icon: string;
  title: string;
  text: string;
  tips: any[];
  aloneLine: boolean;
  jumpUrl: any;
  timeStamp: number;
  titleTips: TitleTip2[];
  color: string;
  type: number;
}

export interface TitleTip2 {
  title: string;
  introduction: string;
  focus: any;
}

export interface HouseSummary {
  icon: string;
  title: string;
  text: string;
  tips: string[];
  aloneLine: boolean;
  jumpUrl: any;
  timeStamp: number;
  titleTips?: TitleTip3[];
  color: string;
  type: number;
}

export interface TitleTip3 {
  title: string;
  introduction: string;
  focus: string;
}

export interface HouseFacility {
  specialFacilitys: SpecialFacility[];
  houseFacilitys: HouseFacility2[];
  facilitySort: number[];
  bedSizeDetailInfo: BedSizeDetailInfo;
}

export interface SpecialFacility {
  isDeleted: boolean;
  orderIndex: number;
  name: string;
  icon: string;
  deleted: boolean;
  tip: any;
}

export interface HouseFacility2 {
  facilitys: Facility[];
  groupId: number;
  groupName: string;
  icon: string;
}

export interface Facility {
  isDeleted: boolean;
  orderIndex: number;
  name: string;
  icon: any;
  deleted: boolean;
  tip: any;
}

export interface BedSizeDetailInfo {
  houseTips: string[];
  houseIntroduction: string;
}

export interface LandlordModule {
  hotelId: number;
  topScroll: string;
  hotelLogo: string;
  hotelName: string;
  landlordLevelUrl: any;
  hotelTags: HotelTag[];
  landlordTag: any;
  hotelSummary: HotelSummary[];
  businessType: number;
  landlordLevel: number;
  isReplyTimeMoreThan5Min: boolean;
}

export interface HotelTag {
  tagText: TagText2;
  tagPic: any;
  tagDesc: any;
  tagCode: number;
  tagLink: any;
  aloneLine: boolean;
  childTags: any;
}

export interface TagText2 {
  text: string;
  color: string;
  border: any;
  tips: any;
  background: any;
}

export interface HotelSummary {
  title: string;
  introduction: string;
  focus: any;
  blod: boolean;
  icon: any;
  color: any;
  tip: string;
  highLight: string;
  memberTitle: any;
  memberLevelStyle: any;
  maskTagText: string;
  titleType: number;
  marketActivityId: number;
}

export interface CommentModule {
  overall: number;
  scoreTitle: string;
  totalCount: number;
  subScores: string[];
  subScoresFocus: SubScoresFocu[];
  commentTagVo: CommentTagVo[];
  comment: Comment;
  commentTabType: number;
  commentAvatarsLimit: string[];
  totalCountStr: string;
  evaluationModule: EvaluationModule;
}

export interface SubScoresFocu {
  text: string;
  focusText: string;
}

export interface CommentTagVo {
  color: string;
  backgroundColor: string;
  text: string;
  selected: boolean;
  selectParam: string;
  focusColor: string;
  borderColor: string;
  texts: string[];
}

export interface Comment {
  userAvatars: string;
  userName: string;
  checkInDate: string;
  memberLevelIcon: string;
  overall: number;
  commentDetail: string;
  scoreTags: any;
  pictureList: PictureList[];
  goodCommentUrl: any;
  commentTopicList: any;
  commentTrySleepIconUrl: any;
  commentTrySleepText: any;
  houseName: string;
  location: string;
}

export interface PictureList {
  title: any;
  url: string;
  albumUrl: string;
  orderIndex: number;
  pictureExplain: any;
  enumPictureCategory: number;
}

export interface EvaluationModule {
  data: any[];
  totalCount: number;
  moreNavigateUrl: string;
}

export interface PositionModule {
  cityId: number;
  cityName: string;
  cityTerritoryType: number;
  longitude: number;
  latitude: number;
  geoCoordSysType: string;
  address: string;
  ctripCityId: number;
  tips: string;
  topScroll: TopScroll2;
  mapUrl: string;
  unitGeoPositions: any;
  communityInfo: any;
  areaName: string;
  tradeArea: string;
  poi: string;
}

export interface TopScroll2 {
  icon: string;
  title: string;
  text: string;
  tips: any[];
  aloneLine: boolean;
  jumpUrl: any;
  timeStamp: number;
  titleTips: TitleTip4[];
  color: string;
  type: number;
}

export interface TitleTip4 {
  title: string;
  introduction: string;
  focus: any;
}

export interface RulesModule {
  cancelRules: CancelRule[];
  orderRules: OrderRule[];
  checkInRules: CheckInRule[];
  checkinOtherInfo: CheckinOtherInfo[];
}

export interface CancelRule {
  backColor: string;
  tipColor: string;
  tip?: string;
  strDate: any;
  strTime: any;
  introduction: string;
  isDeleted: boolean;
}

export interface OrderRule {
  title: string;
  introduction?: string;
  link?: Link;
  icon?: string;
  tips?: string[];
  deleted: boolean;
  loginFlag: boolean;
  color?: string;
}

export interface Link {
  enabled: boolean;
  title: any;
  text: any;
  navigateUrl: string;
  imageUrl: any;
}

export interface CheckInRule {
  title: string;
  checkInRuleFloat: any;
  items: Item2[];
}

export interface Item2 {
  introduction: string;
  tip?: string;
  isDeleted: boolean;
  textLink: any;
}

export interface CheckinOtherInfo {
  title: any;
  checkInRuleFloat: any;
  items: Item3[];
}

export interface Item3 {
  introduction: string;
  tip: any;
  isDeleted: any;
  textLink: any;
}

export interface LandlordRecommendModule {
  iconPictures: IconPicture[];
  banner: string;
}

export interface IconPicture {
  icon: any;
  title: string;
  text: any;
  titleTips: TitleTip5[];
  pictures: any;
  autoPictures: any;
}

export interface TitleTip5 {
  title: string;
  introduction: string;
  focus: any;
}

export interface PricePart {
  priceModule: PriceModule;
  contractModule: ContractModule;
}

export interface PriceModule {
  product: Product;
}

export interface Product {
  minRequireNights: number;
  productId: number;
  productNumber: string;
  productName: string;
  productPrice: string;
  finalPrice: string;
  markLine: boolean;
  activityInfo: string;
  allowBooking: boolean;
  disallowBookingReason: string;
  newPrices: any[];
  defaultPromotionTips: any;
  defaultProductTip: any;
  defaultProductStatus: number;
  promotionTags: PromotionTag[];
  priceDetails: PriceDetail[];
  expressBooking: boolean;
  quickBooking: boolean;
  creditButton: boolean;
  userCreditLevel: any;
  activityTips: any[];
  redPacketPromoTip: string;
  displayOrigionPrice: boolean;
}

export interface PromotionTag {
  tagText: TagText3;
  tagPic: any;
  tagDesc: string;
  tagCode: number;
  tagLink: any;
  aloneLine: boolean;
  childTags: any;
}

export interface TagText3 {
  text: string;
  color: string;
  border: any;
  tips: any;
  background: Background2;
}

export interface Background2 {
  color: string;
  image: any;
  gradientColor: any;
}

export interface PriceDetail {
  title: string;
  introduction: string;
  focus: any;
  blod: boolean;
  icon: any;
  color: any;
  tip: string;
  highLight: any;
  memberTitle: string;
  memberLevelStyle: any;
  maskTagText: string;
  titleType: number;
  marketActivityId: number;
}

export interface ContractModule {
  contactFlag: number;
  imSummary: ImSummary;
  realTimeServiceHotlinePattern: any;
  phone400: any;
}

export interface ImSummary {
  chatID: number;
  chatTeamId: any;
  chatSesstionType: number;
  chatType: number;
  chatName: string;
  houseSummary: HouseSummary2;
  landlordAccountId: number;
  hotelLogo: string;
  newChatId: string;
  ctripCityId: number;
  ctripHotel: boolean;
  tripHotelId: any;
  enableIm: boolean;
}

export interface HouseSummary2 {
  houseName: string;
  defaultPictureURL: string;
  recommendedGuests: number;
  roomCountSummary: string;
  unitDetailURL: string;
  houseTypeName: string;
}

export interface CurrentHouse {
  markLine: boolean;
  allowBooking: boolean;
  rankDiffDisplay: boolean;
  gamingDisplay: boolean;
  displayDiscount: boolean;
  houseId: number;
  defaultPictureURL: string;
  houseName: string;
  houseSummary: string;
  houseRules: any;
  houseTags: any[];
  promoTags: any[];
  promoTitle: string;
  rules: Rule[];
  productPrice: any;
  finalPrice: string;
  priceMark: string;
  activityInfo: string;
  disallowBookingReason: DisallowBookingReason;
  certificateInfo: CertificateInfo;
  prices: any;
  sourceChannelDesc: any;
  sourceChannel: number;
  isNewGuestPrice: boolean;
  showNewGuestPriceBubble: boolean;
  displayOrigionPrice: boolean;
}

export interface Rule {
  icon: string;
  title: string;
  text: any;
  tips: any[];
  aloneLine: boolean;
  jumpUrl: any;
  timeStamp: number;
  titleTips: any;
  color: string;
  type: number;
}

export interface DisallowBookingReason {
  icon: string;
  title: string;
  text: any;
  tips: any[];
  aloneLine: boolean;
  jumpUrl: any;
  timeStamp: number;
  titleTips: any;
  color: string;
  type: number;
}

export interface CertificateInfo {
  licenseCode: any;
  tradeCode: any;
  managerName: any;
}
