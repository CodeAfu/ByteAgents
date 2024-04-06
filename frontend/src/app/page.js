import Banner from "@/components/Banner/Banner";
import Courses from "@/components/Courses/Courses";
import Footer from "@/components/Footer/Footer";
import Pricing from "@/components/Pricing/Pricing";
import Timeline from "@/components/TImeline/Timeline";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <Courses></Courses>
     <Timeline></Timeline>
     <Pricing></Pricing>
     <Footer></Footer>
    </div>
  );
}
