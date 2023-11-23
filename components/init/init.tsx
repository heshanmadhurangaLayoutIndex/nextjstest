"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { initService } from "@/api/service/initService";

export default function INIT({ children }: { children: React.ReactNode }) {
  // Handle use query
  const { data, isLoading } = useQuery({
    queryKey: ["header"],
    queryFn: initService,
  });

  return (
    <>
      <Header header_nav={data?.data?.menu.header_nav} isLoading={isLoading} main_nav={data?.data?.menu.main_nav} />
      {children}
      <Footer data={data?.data?.menu} />
    </>
  );
}
