const now = new Date();

const year = now.getFullYear(); // 2026
const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed; adds leading zero
const day = String(now.getDate()).padStart(2, "0"); // Adds leading zero

const formattedDate = `${year}-${month}-${day}`;

const NewsArr = [
  {
    id: 1,
    img: "/Home/News/news_1.jpg",
    text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    data: formattedDate,
  },
  {
    id: 2,
    img: "/Home/News/news_2.jpg",
    text: "As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task...",
    data: formattedDate,
  },
  {
    id: 3,
    img: "/Home/News/news_3.jpg",
    text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    data: formattedDate,
  },
  {
    id: 4,
    img: "/Home/News/news_4.jpg",
    text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    data: formattedDate,
  },
  {
    id: 5,
    img: "/Home/News/news_5.jpg",
    text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    data: formattedDate,
  },
  {
    id: 6,
    img: "/Home/News/news_6.jpg",
    text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    data: formattedDate,
  },
  {
    id: 7,
    img: "/Home/News/news_7.jpg",
    text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    data: formattedDate,
  },
  {
    id: 8,
    img: "/Home/News/news_8.jpg",
    text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    data: formattedDate,
  },
  {
    id: 9,
    img: "/Home/News/news_9.jpg",
    text: "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    data: formattedDate,
  },
];

export default function NewsBlock() {
  return (
    <div className="max-w-350 m-auto mb-14 mt-16">
      <div className="mb-3">
        <p className="text-xl font-semibold">
          Follow us on Instagram for News, Offers & More
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {NewsArr.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img src={item.img} alt="news_img" />
            <p className="max-w-46 text-xs text-center pt-2 pb-2.5">
              {item.text}
            </p>
            <p className="flex text-[10px] text-gray-400 font-bold">
              {item.data}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
