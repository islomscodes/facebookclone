/* eslint-disable @next/next/no-img-element */
import React from 'react'
import HeaderIcon from './HeaderIcon';
import Image from "next/image";
import { SearchIcon, HomeIcon, FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon, ViewGridIcon, ChatIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/solid";
const Header = () => {
    return (
      <div className="stickiy top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
        {/* left */}

        <div className=" flex items-center ">
          <img
            className="flex"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            width={40}
            height={40}
            layout="fixed"
          />
          <div className=" flex ml-2 items-center rounded-full bg-gray-100 p-2 ">
            <SearchIcon className="h-6 text-gray-600 " />
            <input
              className="flex-shrink md:inline-flex hidden   ml-2 items-center bg-transparent outline-none  "
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>

        {/*center*/}
        <div className="flex justify-center flex-grow ">
          <div className="flex space-x-6 md:space-x-2 ">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>
        {/* right */}
        <div className="flex item-center sm:space-x-2 justify-end ">
          {/* user name  */}
          <p className="whitespace-nowrap font-semibold pr-3 text-center flex items-center">
            {" "}
            Islom Qodirov{" "}
          </p>
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>
    );
}

export default Header
