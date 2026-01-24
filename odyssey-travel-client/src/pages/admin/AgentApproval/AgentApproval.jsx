import React from 'react'
import useAgentApproval from './useAgentApproval';
function AgentApproval() {

  const {agents,loading,error,handleApprove,handleReject}=useAgentApproval();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-800">
        <div className="rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-800">
        <div className="text-red-500 text-xl font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white dark:bg-gray-500 p-8'>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-neutral-200 mb-8">Agent Approvals</h1>
        {agents.length===0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
             <p className="text-gray-500 text-lg">No pending agent approvals found.</p>
          </div>
        ):(
          <div className="max-w-5xl mx-auto bg-inherit rounded-lg shadow-lg dark:shadow-black-lg overflow-hidden">
            <div className="overflow-x-auto dark:bg-black">
              <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>

                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase ">
                      Agent Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase ">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase ">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-white uppercase ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 us text-white">
                  {agents.map((agent) => (
                  <tr key={agent.id}>
                  <td className="px-6 py-4 whitespace-nowrap ">
                        <div className="text-sm text-gray-900 dark:text-white">{agent.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 dark:text-white">{agent.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {agent.status || "PENDING" }
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleApprove(agent.id)}
                          className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md mr-3 transition-colors duration-200 shadow-sm"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(agent.id)}
                          className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )} 
      </div>
    </div>
  );
}

export default AgentApproval
