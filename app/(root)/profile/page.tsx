import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";


import Header from "@/components/shared/Header";
import Collection from "@/components/shared/Collection";
import { getUserById } from "@/lib/actions/user.action";
import { getUserImages } from "@/lib/actions/image.action";
import AnimationPage from "@/components/shared/Animation";
import ballData from "@/public/animation/ball.json";
import imageData from "@/public/animation/image.json"

const Profile = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id });

  return (
    <>
      <Header title="Profile" />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-2">
            <AnimationPage data={ballData} height={100} width={100} />
            <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
          <div className="mt-4 flex items-center gap-4">
          <AnimationPage data={imageData} height={100} width={100} />
            <h2 className="h2-bold text-dark-600">{images?.data.length}</h2>
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-14">
        <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default Profile;