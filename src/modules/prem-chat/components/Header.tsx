import clsx from "clsx";
import setting from "assets/images/setting.svg";
import hamburgerMenu from "assets/images/hamburger-menu.svg";
import { HeaderProps } from "../types";
import WarningModal from "modules/service/components/WarningModal";
import { useState } from "react";
import WarningIcon from "shared/components/WarningIcon";
import { useLockedBody } from "usehooks-ts";

const Header = ({
  setRightSidebar,
  rightSidebar,
  hamburgerMenuOpen,
  setHamburgerMenu,
  title,
}: HeaderProps) => {
  const [open, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [locked, setLocked] = useLockedBody(false, "root");
  const hamburgerMenuToggle = () => {
    setLocked(!locked);
    setHamburgerMenu(!hamburgerMenuOpen);
  };

  return (
    <>
      <div className="md:border-b border-light w-full h-[77px] py-3 flex sticky bg-darkjunglegreen z-[11] top-0">
        <div className="max-md:w-full flex md:justify-center header__center max-md:items-center">
          <button
            onClick={hamburgerMenuToggle}
            className="md:hidden ml-5 w-10 h-10"
          >
            <img src={hamburgerMenu} alt="msg" width={22} height={22} className="mx-auto" />
          </button>
          <h1 className="flex items-center text-white md:text-xl text-md font-proximaNova-regular mx-[18px]">
            {title}
          </h1>
        </div>
        <div className="md:border-l border-light md:pl-6 flex items-center ml-auto max-w-max w-full md:absolute md:right-0">
          <button
            type="button"
            onClick={openModal}
            className={clsx("share-chat__btn", rightSidebar && "mr-6")}
          >
            Share Chat
          </button>
          <button
            onClick={() => setRightSidebar(true)}
            className={clsx(rightSidebar && "hidden", "setting__btn")}
            type="button"
          >
            <img src={setting} alt="msg" width={22} height={22} />
          </button>
        </div>
      </div>
      <WarningModal
        description="Share Chat is not available yet"
        title="Coming Soon"
        isOpen={open}
        onCancel={closeModal}
        onOk={closeModal}
        icon={<WarningIcon />}
      />
    </>
  );
};

export default Header;
