import React from "react";

const UserItem = (props) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3 font-medium">{props?.user?.name}</td>
      <td className="px-4 py-3">{props?.user?.email}</td>
      <td className="px-4 py-3">{props?.user?.role}</td>
      <td className="px-4 py-3 text-green-600 font-semibold">{props?.user?.active ? "Yes" : "No"}</td>
      <td class="px-4 py-3">
        <button class="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded" onClick={()=>props?.updateUserData(props?.user?.id,{active:!props?.user?.active})}>
          Change Status
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
