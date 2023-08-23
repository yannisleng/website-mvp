import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Navigation from "../Navigation/Navigation";

const CYCLogo: React.FC = () => {
  return (
    <Link href="/">
      <img src="/images/cyc_logo_white.png" alt="CYC Logo" className="mr-20" />
    </Link>
  );
};

const SearchBar: React.FC = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleElements = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          className="h-7 w-full cursor-pointer border-none 
          bg-transparent pl-2 outline-none"
          onBlur={toggleElements}
          autoFocus
        />
      ) : (
        <img
          src="/icons/search.svg"
          alt="Search Icon"
          className="h-7 w-7 cursor-pointer"
          onClick={toggleElements}
        />
      )}
    </div>
  );
};

const LoginButton: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <img
      src={sessionData?.user?.image ?? "/icons/user.svg"}
      alt={sessionData ? "Profile Picture" : "Login Icon"}
      className="ml-5 h-8 w-8 cursor-pointer rounded-full md:hidden"
      onClick={sessionData ? () => void signOut() : () => void signIn()}
    />
  );
};

const SideNavigation: React.FC = () => {
  const [isCrossIcon, setIsCrossIcon] = useState(false);

  const toggleIcon = () => {
    setIsCrossIcon((prevIsCrossIcon) => !prevIsCrossIcon);
  };

  return (
    <>
      <img
        src={isCrossIcon ? "/icons/cross.svg" : "/icons/navigation.svg"}
        alt={isCrossIcon ? "Close Icon" : "Navigation Icon"}
        className="ml-5 hidden h-7 w-7 cursor-pointer md:block"
        onClick={toggleIcon}
      />
      {isCrossIcon && (
        <div
          className="glass absolute left-0 top-[90px] flex w-screen
          items-center justify-center bg-white"
          style={{ height: "calc(100vh - 90px)" }}
        >
          <Navigation handleClose={toggleIcon} />
        </div>
      )}
    </>
  );
};

export default function Intro() {
  return (
    <>
      <div className="mt-8 w-4/5 border border-solid border-white bg-white p-4 text-black">
        <div className="flex justify-center text-4xl underline">关于我们</div>
        <div className="mt-8 flex justify-center text-lg">
          1 那 時 ， 門 徒 增 多 ， 有 說 希 利 尼 話 的 猶 太 人 向 希 伯 來 人
          發 怨 言 ， 因 為 在 天 天 的 供 給 上 忽 略 了 他 們 的 寡 婦 。 2 十
          二 使 徒 叫 眾 門 徒 來 ， 對 他 們 說 ： 我 們 撇 下 神 的 道 去 管
          理 飯 食 ， 原 是 不 合 宜 的 。 3 所 以 弟 兄 們 ， 當 從 你 們 中 間
          選 出 七 個 有 好 名 聲 、 被 聖 靈 充 滿 、 智 慧 充 足 的 人 ， 我
          們 就 派 他 們 管 理 這 事 。 4 但 我 們 要 專 心 以 祈 禱 、 傳 道 為
          事 。 5 大 眾 都 喜 悅 這 話 ， 就 揀 選 了 司 提 反 ， 乃 是 大 有 信
          心 、 聖 靈 充 滿 的 人 ， 又 揀 選 腓 利 、 伯 羅 哥 羅 、 尼 迦 挪
          、 提 門 、 巴 米 拿 ， 並 進 猶 太 教 的 安 提 阿 人 尼 哥 拉 ， 6 叫
          他 們 站 在 使 徒 面 前 。 使 徒 禱 告 了 ， 就 按 手 在 他 們 頭 上
          。 7 神 的 道 興 旺 起 來 ； 在 耶 路 撒 冷 門 徒 數 目 加 增 的 甚 多
          ， 也 有 許 多 祭 司 信 從 了 這 道 。 8 司 提 反 滿 得 恩 惠 、 能 力
          ， 在 民 間 行 了 大 奇 事 和 神 蹟 。
        </div>
      </div>
    </>
  );
}

export function Vision() {
  return (
    <>
      <div className="mt-8 w-4/5 border border-solid border-white bg-white p-4 text-black">
        <div className="flex justify-center text-4xl underline">异象</div>
        <div className="mt-8 flex justify-center text-lg">安提亚小组教会</div>
      </div>
    </>
  );
}

export function Mission() {
  return (
    <>
      <div className="mt-8 w-4/5 border border-solid border-white bg-white p-4 text-black">
        <div className="flex justify-center text-4xl underline">使命</div>
        <div className="mt-8 flex justify-center text-lg">
          百间教会 十万门徒
        </div>
      </div>
    </>
  );
}

export function Slogan() {
  return (
    <>
      <div className="mt-8 w-4/5 border border-solid border-white bg-white p-4 text-black">
        <div className="flex justify-center text-4xl underline">口号</div>
        <div className="mt-8 flex justify-center text-lg">
          带动复兴，领导潮流，写造历史，影响世界
        </div>
      </div>
    </>
  );
}
