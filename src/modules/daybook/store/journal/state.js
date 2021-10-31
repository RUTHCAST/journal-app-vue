export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod porro quis repudiandae, molestias, optio hic excepturi incidunt consequatur unde asperiores placeat necessitatibus minima, repellendus voluptates soluta delectus velit culpa minus.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod porro quis repudiandae, molestias, optio hic excepturi incidunt consequatur unde asperiores placeat necessitatibus minima, repellendus voluptates soluta delectus velit culpa minus.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod porro quis repudiandae, molestias, optio hic excepturi incidunt consequatur unde asperiores placeat necessitatibus minima, repellendus voluptates soluta delectus velit culpa minus.",
      picture: null,
    },
  ],
});
