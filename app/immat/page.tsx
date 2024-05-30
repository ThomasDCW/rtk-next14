"use client";
import { Tabs } from "flowbite-react";
import { FaCar } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import ImmatInput from "../components/server/ImmatInput";
import immat from "./immat.png";

export default function Sandbox() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="my-auto rounded-lg bg-white w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3">
        <Tabs className="rounded-lg" style="default">
          <Tabs.Item
            active
            title={<span className="mr-2">Vehicule</span>}
            icon={FaCar}
            className="h-full"
          >
            <div className="flex flex-col h-64 p-4">
              <p className="mb-2">Immatriculation</p>
              <ImmatInput />
            </div>
          </Tabs.Item>
          <Tabs.Item
            title={<span className="mr-2">Carte grise</span>}
            icon={IoDocumentTextSharp}
          >
            <div className="flex flex-col items-center h-64">
              <h1>Carte grise</h1>
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
    </main>
  );
}
