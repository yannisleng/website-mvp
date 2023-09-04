import React from "react";
import Album from "~/components/Album/Album";
import VideoPnW from "~/components/VideoPnW/VideoPnW";

export default function music() {
  const albums = [
    {
      title: "昼夜",
      imgPath: "ZhouYe",
    },
    {
      title: "盼望 Hope",
      imgPath: "Hope",
    },
    {
      title: "昼夜",
      imgPath: "ZhouYe",
    },
    {
      title: "盼望 Hope",
      imgPath: "Hope",
    },
    {
      title: "昼夜",
      imgPath: "ZhouYe",
    },
    {
      title: "盼望 Hope",
      imgPath: "Hope",
    },
  ];
  return (
    <>
      <div>
        <VideoPnW />
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="w-4/5">
          <div className="flex justify-center text-4xl underline">
            PRAISE & WORSHIP STREAMING NOW!
          </div>
          <div className="mt-6 flex justify-center">
            FGA Worship
            是马来西亚吉隆坡全备福音堂的中文敬拜团，他们以火热渴慕爱神的敬拜把神的爱和同在带到世界每个角落，让更多人在敬拜音乐中认识上帝。兴起敬拜神、敬畏神、热爱神的世代是他们不变的核心价值和异象。
            他们创作中英文诗歌之外，也翻译过不少印尼和英文诗歌。2015年，FGA CYC
            Worship与印尼GMS Live一起推出《I Believe in Miracles
            我相信神迹》专辑；隔年2017年，他们也一起推出《Immerse
            沉浸》敬拜专辑。
          </div>
        </div>
      </div>

      <div className="mt-9 flex flex-col items-center">
        <div className="grid w-4/5 grid-cols-4 gap-2">
          {albums.map((album, index) => {
            return (
              <Album key={index} title={album.title} imgPath={album.imgPath} />
            );
          })}
        </div>
      </div>
    </>
  );
}
