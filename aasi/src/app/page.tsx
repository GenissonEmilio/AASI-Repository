import NightSkyComponent from "@/components/NightSkyComponent";
//import Script from "next/script";

export default function Home() {
  return (
    <div className="w-full">
       <NightSkyComponent />
      <div className="absolute top-0">
        <h1>Em breve</h1>
      </div>
    </div>
  );
}
