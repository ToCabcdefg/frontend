import ProfilePage from '@/modules/profile/page';

const playerData = {
  headerImage: "/assets/image/header-profile.svg",
  shadowImage: "/assets/image/black-shadow.svg",
  playerImage: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png",
  clubLogo: "https://capology-e6a3.kxcdn.com/static/images/logos/uk/manchester-city.svg",
  flagImage: "https://resources.premierleague.com/premierleague/flags/NO.png",
  jerseyNumber: 9,
  playerName: "Erling Haaland",
  clubName: "Manchester City",
  position: "Forward",
  salary: "375,000",
  dateOfBirth: "21/07/2000",
  age: 24,
  height: 194,
  appearances: 71,
  goals: 73,
  Minutes : 59965,
  seasons: [
    { year: "2022 - 2023", clubLogo: "https://capology-e6a3.kxcdn.com/static/images/logos/uk/manchester-city.svg", clubName: "Manchester City" },
    { year: "2023 - 2024", clubLogo: "https://capology-e6a3.kxcdn.com/static/images/logos/uk/manchester-city.svg", clubName: "Manchester City" }
  ],
  awards: [
    { title: "Golden Boot",total: 2 },
    { title: "Player of the Season",total: 1 },
    { title: "Premier League Champion",total: 2 },
  ]
};

export default function Home() {
  return <ProfilePage {...playerData} />;
}
