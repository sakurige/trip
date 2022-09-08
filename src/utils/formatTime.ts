import dayjs from "dayjs";

type DateType = Date | string | number;
// 格式化时间
export const formatMonthDay = (date: DateType, layout = "MM月DD日") => {
  return dayjs(date).format(layout);
};
// 获取时间差
export const getDiffDate = (startTime: DateType, endTime: DateType) => {
  return dayjs(endTime).diff(startTime, "day");
};
