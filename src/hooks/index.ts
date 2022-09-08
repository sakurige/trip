import { onMounted, onUnmounted, ref } from "vue";

export const useScroll = () => {
  const isScrollBottom = ref(false);
  const scrollTop = ref(0); // 获取一滚动高度
  const scrollHeight = ref(0); // 获取当前可滚动区域
  const clientHeight = ref(0); // 文档本身高度
  const handler = () => {
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    clientHeight.value = document.documentElement.clientHeight;
    if (Math.ceil(scrollTop.value) + clientHeight.value >= scrollHeight.value) {
      //  滚动到了底部
      isScrollBottom.value = true;
    }
  };
  window.addEventListener("scroll", handler);
  onMounted(() => {
    window.addEventListener("scroll", handler);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", handler);
  });
  return {
    isScrollBottom,
    scrollTop,
    scrollHeight,
    clientHeight,
  };
};
