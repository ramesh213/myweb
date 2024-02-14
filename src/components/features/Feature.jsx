import React from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa6";
import { TbSeo } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { FaCode, FaServer } from "react-icons/fa";
import Title from "../layouts/Title";
import Card from "./Card";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full px-20 pt-10 pb-20 item-center border-b-[1px] border-b-[black]"
    > 
        <div className="flex justify-center text-center">
        <Title title="Features" desc="Things I Do" />

        </div>
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
    </section>
  );
};

export default Feature;
