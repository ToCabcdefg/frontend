import ClubPage from "@/modules/club/page";

export default function Club({ params }: { params: { club_name: string } }) {
  return <ClubPage club_name={params.club_name}/>;
}
    