import NightSkyComponent from "@/components/NightSkyComponent";
//import Script from "next/script";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Script 
        src="https://unpkg.com/@h0rn0chse/night-sky/dist/bundle.min.js" 
        strategy="afterInteractive"
      />
      <div id="night-sky-container" style={{ width: '100%', height: '100vh' }}>
        <night-sky
        id="nightSky"
      layers="4"
      density="30"
      velocity-x="60"
      velocity-y="60"
      star-color="#FFF"
      background-color="transparent"
      >
  
      </night-sky>
      </div>
       */}
       <NightSkyComponent />
      <h1>Hello world</h1>
    </div>
  );
}
