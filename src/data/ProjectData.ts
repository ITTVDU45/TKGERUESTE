
// Use images from public/assets/imgs/project (projektbild1.jpeg ... projektbild78.jpeg)

interface DataType {
   id: number;
   page: string;
   thumb: string;
   sub_title: string;
   title: string;
}

const makeThumb = (num: number) => `/assets/imgs/project/projektbild${num}.jpeg`;

const project_data: DataType[] = Array.from({ length: 78 }).map((_, idx) => ({
   id: idx + 1,
   page: "home_1",
   thumb: makeThumb(idx + 1),
   sub_title: "Projekt",
   title: `Projekt ${idx + 1}`,
}));

export default project_data;