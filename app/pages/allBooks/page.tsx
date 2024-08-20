import AllBooks from "@/app/components/AllBooks";
import NavBar from "@/app/components/Navbar";

export default function Allbooks() {
  return (
    <>
      <NavBar />
      <AllBooks allBooks={undefined} />;
    </>
  );
}
