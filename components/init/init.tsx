"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function INIT({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useQuery({
    queryKey: ["header"],
    retry: false,

    queryFn: async () => {
      const res = await axios.post("https://cinesync-api.layoutindex.dev/api_v2/web/index/init", {
        cinema_id: 3,
        sales_channel_id: 1,
      });
      return res.data;
    },
  });

  return (
    <>
      <Header header_nav={data?.data?.menu.header_nav} isLoading={isLoading} main_nav={data?.data?.menu.main_nav} />
      {children}
      <Footer data={data?.data?.menu} />
    </>
  );
}
