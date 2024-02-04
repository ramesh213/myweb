import React from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa6";
import { TbSeo } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { FaCode, FaServer } from "react-icons/fa";
// import { SiProgress, SiAntdesign } from "react-icons/si"; 
import Title from "../layouts/Title";
import Card from "./Card";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full px-20 py-20 item-center border-b-[1px] border-b-[black]"
    >
      <Title title="Features" desc="What i do" />
       <div className="grid grid-cols-3 gap-10">
       <Card 
        title="Web Development"
        desc= "Development occures using latest technologies tha covers all your requirements and satisfacton. Handles business requirements, solves required functions"
        icon = {<FaCode/>}
       />
        <Card
         title="Web Design"
         desc= "Development occures using latest technologies tha covers all your requirements and satisfacton. Handles business requirements, solves required functions"
         icon = {<MdDesignServices />
        }
        />
        <Card
         title="SEO Optimization"
         desc= "Development occures using latest technologies tha covers all your requirements and satisfacton. Handles business requirements, solves required functions"
         icon = {<TbSeo/>}
        />
        <Card
         title="Web Hosting"
         desc= "Development occures using latest technologies tha covers all your requirements and satisfacton. Handles business requirements, solves required functions"
         icon = {<FaServer/>}
        />
        <Card
         title="Requirement Analysis"
         desc= "Development occures using latest technologies tha covers all your requirements and satisfacton. Handles business requirements, solves required functions"
         icon = {<GiArchiveResearch />
        }
        />
        <Card
         title="Business Strategy"
         desc= "Development occures using latest technologies tha covers all your requirements and satisfacton. Handles business requirements, solves required functions"
         icon = {<FaBusinessTime />}
        />
       </div>


      {/* <div className="w-1/2 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-b from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover-to-[#1e2024] transition-colors duration-100">
      
      </div> */}
    </section>
  );
};

export default Feature;
