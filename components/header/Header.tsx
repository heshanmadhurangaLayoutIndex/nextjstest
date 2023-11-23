"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Header() {
  const { data, isLoading } = useQuery({
    queryKey: ["header"],
    retry: false,
    queryFn: async () => {
      const res = await axios.post("https://cinesync-api.layoutindex.dev/api_v2/web/index/init", {
        headers: {
          Accept: "application/json",
        },
        data: {
          cinema_id: 3,
          sales_channel_id: 1,
        },
      });
      console.log(res);

      //   const res = await axios.get("https://v2.jokeapi.dev/joke/Any");
      // console.log(res);
      return true;
    },
  });
  if (isLoading) {
    // You might want to render a loading indicator here
    return <div>Loading...</div>;
  }

  if (!data) {
    // Handle the case where data is not available
    return <div>Data not available</div>;
  }

  return <div className="flex-row w-full">Header</div>;
}
