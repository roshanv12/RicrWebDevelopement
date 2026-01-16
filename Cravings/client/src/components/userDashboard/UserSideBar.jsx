import React from "react";
import { CgProfile } from "react-icons/cg";

const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold">user Dashboard</div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className={`flex gap-3 items-center hover:bg-gray-100/70 p-3 rounded-xl
              ${
                active === "overview"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              `}
            onClick={() => setActive("overview")}
          >
            Overview
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-gray-100/70 p-3 rounded-xl
              ${
                active === "overview"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              `}
            onClick={() => setActive("profile")}
          >
            Profile
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-gray-100/70 p-3 rounded-xl
              ${
                active === "overview"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              `}
            onClick={() => setActive("orders")}
          >
            Orders
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-gray-100/70 p-3 rounded-xl
              ${
                active === "overview"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              `}
            onClick={() => setActive("transactions")}
          >
            Transactions
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-gray-100/70 p-3 rounded-xl
              ${
                active === "overview"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              `}
            onClick={() => setActive("helpdesk")}
          >
            Help Dask
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
