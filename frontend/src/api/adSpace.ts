const API_BASE = 'http://localhost:8080/apiv1/ad-spaces'


export const fetchAdSpaces = async ()=>{
  const res = await fetch(`${API_BASE}`,{
    method:"GET"
  });
  if (!res.ok) throw new Error('failed fetch adSpaces');
  return res.json();


}

