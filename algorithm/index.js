const app = document.getElementById("app");
const fetchMoreTrigger = document.getElementById("fetchMore");

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");

  // await
  target.classList.remove("loading");
};

const onScroll = (e) => {};
document, addEventListener("scroll", onScroll);
fetchMore();
