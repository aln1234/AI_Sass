import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AddTransformationsTypePage = async({params:{type}}:SearchParamProps) => {
  const transformation = transformationTypes[type];

  const { userId } = auth();
  if(!userId) redirect("/sign-in")

  const user = await getUserById(userId);
  
  
  return (
    <>
    
    <Header title={transformation.title} subtitle={transformation.subTitle}/>
    <section className="mt-10">
      hello 
    </section>
    </>
  )
};

export default AddTransformationsTypePage;
