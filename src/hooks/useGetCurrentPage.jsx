import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useGetCurrentPage() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const loc = location.pathname;
    setCurrentPage(() => {
      return loc.split("/").pop();
    });
  }, [location.pathname]);
  return [currentPage];
}

export default useGetCurrentPage;
