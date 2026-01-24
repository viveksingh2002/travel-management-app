import {useState,useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

const useAgentApproval=()=>{
    const [agents,setAgents]=useState([]);
    const[loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetchPendingAgents();
    },[]);

    const fetchPendingAgents= async()=>{
        try{
          const agent= await axios.get("http://localhost:8080/admin/pendingAgents");
          setAgent(agent.data);
          setError(null);
        }catch(error)
        {
            console.log("error fetching agents:",error);
            setError("failed to load pending agents");
        }
        finally
        {
            setLoading(false);
        }
    };

    const handleApprove=async(id)=>{
        try{
           await axios.put(`http://localhost:8080/admin/agents/${id}/approve`);
           setAgent((prevAgents)=>prevAgents.filter((agent)=>{agent.id!==id}));
           toast.success("agent approved successfully");
        }catch(error)
        {
            console.log("error approving agent",error);
            toast.error("error approving agent");
        }
    };

    const handleReject=async()=>{
        try{
          await axios.put(`http://localhost:8080/admin/agents/${id}/reject`);
          setAgent((prevAgents)=>prevAgents.filter((agent)=>agent.id!==id));
          toast.success("agent rejected successfully");
        }catch(error){
            console.log("error in rejecting agent",error);
            toast.error("failed to reject agent");

        }
    };

    return{
        agents,
        loading,
        error,
        handleApprove,
        handleReject
    };
};

export default useAgentApproval;