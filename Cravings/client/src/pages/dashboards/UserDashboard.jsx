import React from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserSideBar from "../../components/userDashboard/UserSideBar";

const UserDashboard = () => {
  const [active, setActive] = userState("overview");
  return (
    <>
      <div className="w-full flex h-[90vh]">
        <div className="bg-(--color-backround) w-2/10">
          <UserSideBar active={active} setActive={setActive} />
        </div>
        <div className="border border-amber-700 w-8/10">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transaction" && <UserTransaction />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
