const API_BASE = "http://localhost:8080/api/v1/ad-spaces";

export const fetchAdSpaces = async () => {
   try {
      const res = await fetch(`${API_BASE}`, {
         method: "GET",
      });
      if (!res.ok) throw new Error("failed fetch adSpaces");
      return res.json();
   } catch (err) {
      console.log(err);
      throw err;
   }
};
