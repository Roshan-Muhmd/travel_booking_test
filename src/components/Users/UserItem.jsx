import React, { useState } from "react";
import { useRef } from "react";

const UserItem = (props) => {

  const roleRef = useRef()

  const handleRoleChange = () => {
    setEnableRoleSelect(false)
    if(roleRef?.current.value){
      props?.updateUserData(props?.user?.id,{role:roleRef?.current.value})
    }
  }


  const [enableRoleSelect, setEnableRoleSelect] = useState(false)
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3 font-medium">{props?.user?.name}</td>
      <td className="px-4 py-3">{props?.user?.email}</td>
      <td className="px-4 py-3">{enableRoleSelect ?  
      <select ref={roleRef}>
          <option value="user">user</option>
          <option value="admin">admin</option>
          <option value="editor">editor</option>
          <option value="moderator">moderator</option>
        </select>
      : 
      <>{props?.user?.role}</>}
        {!enableRoleSelect ? <button className="bg-slate-500 rounded-sm mx-2 px-2" onClick={()=>setEnableRoleSelect(true)}>Change role</button> :
        <button className="bg-slate-500 rounded-sm mx-2 px-2" onClick={handleRoleChange}>Select Role</button>}
        </td>
      <td className={`px-4 py-3 ${props?.user?.active ?  "text-green-600" : "text-red-600"} font-semibold`}>{props?.user?.active ? "Yes" : "No"}</td>
      <td class="px-4 py-3">
        <button class="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded" onClick={()=>props?.updateUserData(props?.user?.id,{active:!props?.user?.active})}>
          Change Status
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
