import Table from "../../components/table";

const ClubPage = () => {
  const data = [
    {
      name: "Erling Haaland",
      nationality: "Norway",
      date_of_birth: "21/07/2000",
      height: 194,
      club: "Manchester City",
      position: "Forward",
      number: 9,
      salary: "£375,000",
      club_history: [
        "2016-2017 Bryne FK",
        "2017-2018 Molde FK",
        "2019-2020 Red Bull Salzburg",
        "2020-2022 Borussia Dortmund",
        "2022-2024 Manchester City",
      ],
      awards: [
        "Golden Boot (2)",
        "Player of the Season (1)",
        "Young Player of the Season (1)",
        "Premier League Champion (2)",
        "Player of the Month (3)",
      ],
      appearances: 71,
      goals: 73,
      wins: 52,
      losses: 7,
    },
    {
      name: "Lionel Messi",
      nationality: "Argentina",
      date_of_birth: "24/06/1987",
      height: 170,
      club: "Paris Saint-Germain",
      position: "Forward",
      number: 30,
      salary: "€1,200,000",
      club_history: [
        "2004-2021 FC Barcelona",
        "2021-2023 Paris Saint-Germain",
        "2023-2024 Inter Miami",
      ],
      awards: [
        "Ballon d'Or (7)",
        "FIFA World Cup Champion (1)",
        "La Liga Champion (10)",
        "UEFA Champions League Winner (4)",
      ],
      appearances: 778,
      goals: 672,
      wins: 540,
      losses: 92,
    },
    {
      name: "Cristiano Ronaldo",
      nationality: "Portugal",
      date_of_birth: "05/02/1985",
      height: 187,
      club: "Al Nassr",
      position: "Forward",
      number: 7,
      salary: "€200,000",
      club_history: [
        "2002-2003 Sporting CP",
        "2003-2009 Manchester United",
        "2009-2018 Real Madrid",
        "2018-2021 Juventus",
        "2021-2022 Manchester United",
        "2022-2024 Al Nassr",
      ],
      awards: [
        "Ballon d'Or (5)",
        "FIFA World Cup Best Player",
        "UEFA Champions League Winner (5)",
        "La Liga Champion (2)",
        "Premier League Champion (3)",
      ],
      appearances: 894,
      goals: 700,
      wins: 620,
      losses: 95,
    },
    {
      name: "Kylian Mbappe",
      nationality: "France",
      date_of_birth: "20/12/1998",
      height: 178,
      club: "Paris Saint-Germain",
      position: "Forward",
      number: 7,
      salary: "€500,000",
      club_history: ["2015-2017 AS Monaco", "2017-2024 Paris Saint-Germain"],
      awards: [
        "FIFA World Cup Champion (1)",
        "Ligue 1 Champion (4)",
        "French Player of the Year (3)",
      ],
      appearances: 290,
      goals: 180,
      wins: 210,
      losses: 40,
    },
    {
      name: "Kevin De Bruyne",
      nationality: "Belgium",
      date_of_birth: "28/06/1991",
      height: 181,
      club: "Manchester City",
      position: "Midfielder",
      number: 17,
      salary: "£350,000",
      club_history: [
        "2009-2012 Genk",
        "2012-2014 Chelsea",
        "2014-2015 Wolfsburg",
        "2015-2024 Manchester City",
      ],
      awards: [
        "Premier League Champion (4)",
        "Player of the Season (2)",
        "Assist King (3)",
      ],
      appearances: 320,
      goals: 65,
      wins: 250,
      losses: 30,
    },
  ];

  return (
    <div className="p-20">
      <Table data={data} showSearch />
    </div>
  );
};

export default ClubPage;
