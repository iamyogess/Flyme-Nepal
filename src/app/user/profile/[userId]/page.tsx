import UserNavbar from "@/components/shared/UserNavbar";
import WidthWrapper from "@/components/WidthWrapper";

export default function UserProfile() {
  return (
    <>
      <UserNavbar />
      <WidthWrapper>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 mt-20">
          <div className="md:w-1/2 border p-4">
          left
           </div>
          <div className="md:w-1/2 border p-4">right</div>
        </div>
      </WidthWrapper>
    </>
  );
}
