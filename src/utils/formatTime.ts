import dayjs from "dayjs";

type DateType = Date | string | number;
// 格式化时间
export const formatMonthDay = (date: DateType) => {
  return dayjs(date).format("MM月DD日");
};
// 获取时间差
export const getDiffDate = (startTime: DateType, endTime: DateType) => {
  return dayjs(endTime).diff(startTime, "day");
};
