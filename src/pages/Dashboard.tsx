import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
// react-icons icons

import { Button } from "../components/ui/button";


const Dashboard = () => {
  return (
    <>
        <main className="bg-body">
            <div className="flex justify-between px-10 py-7">
                <p className="text-xl font-bold">Dashboard</p>
                <Button className="items-center gap-2 rounded bg-teal-500 hover:bg-teal-600">
                    Add new
                    <IoIosArrowDown />
                </Button>
            </div>
            <div className="flex flex-row gap-7 px-10 py-7">
                <div className="w-1/2 rounded border border-gray-border-2 bg-white">
                    <div className="flex justify-between border-b border-b-gray-border-2 px-5 py-3">
                        <span>Recent Activity</span>
                        <a
                            href="/"
                            className="font-medium text-teal-500 hover:text-teal-600"
                        >
                            View Activity Log
                        </a>
                    </div>
                    <div className="flex justify-start border-b border-t border-b-gray-border-2 border-t-gray-border-2 px-5 py-3">
                        <span>10 minutes ago</span>
                        <span> - </span>
                        <span>
                            Invoice created for Blueberry energy
                        </span>
                    </div>
                    <div className="flex justify-start border border-gray-border-2 px-5 py-3">
                        <span>10 minutes ago</span>
                        <span> - </span>
                        <span>
                            Invoice created for Blueberry energy
                        </span>
                    </div>
                </div>
                <div className="w-1/2 rounded border border-gray-border-2">
                    <div className="flex justify-between px-5 py-3">
                        <span>Recent Activity</span>
                        <a
                            href="/"
                            className="font-medium text-teal-500"
                        >
                            View Activity Log
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Dashboard