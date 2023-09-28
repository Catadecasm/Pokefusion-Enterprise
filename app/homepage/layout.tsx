'use client'
import Head from "next/head";
import SideBarMenu from "@/components/SideBarMenu"

export default function HomepageLayout({children}) {
    return (
        <div className="bg-blue-800">
          <Head>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/pro.ico" />
          </Head>
          <SideBarMenu />
        </div>
      );
    }