import React from "react";
import useUserList from "../hooks/useUserList";
import UserItem from "../components/Users/UserItem";

const Users = () => {
  const { userList ,updateUserData} = useUserList();

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
        👤 User List
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">Change Status</th>
            </tr>
          </thead>
          <tbody>
            {userList?.length ?
            userList.map((user, index)=>{
              return (
                <UserItem  key={"user_item_"+index} user={user} updateUserData={updateUserData}/>
              )
            })
            : "Loading"}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
