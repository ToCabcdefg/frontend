"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define types for seasons and awards
export type Season = {
  year: string;
  clubLogo: string;
  clubName: string;
};

export type Award = {
  title: string;
  total: number;
};

export type ProfileProps = {
  playerImage: string;
  clubLogo: string;
  flagImage: string;
  jerseyNumber: number;
  playerName: string;
  clubName: string;
  position: string;
  salary: string;
  dateOfBirth: string;
  age: number;
  height: number;
  appearances: number;
  goals: number;
  Minutes: number;
  seasons: Season[];
  awards: Award[];
};

const ProfilePage = ({
  playerImage,
  clubLogo,
  flagImage,
  jerseyNumber,
  playerName,
  clubName,
  position,
  salary,
  dateOfBirth,
  age,
  height,
  appearances,
  goals,
  Minutes,
  seasons,
  awards,
}: ProfileProps) => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex justify-center relative w-full h-auto">
        {/* Header Image */}
        <div className="relative w-full h-[50vh]">
          <Image
            src="/assets/image/profile-header.svg"
            alt="profile-header"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        {/* Shadow Image */}
        <div className="absolute left-0 right-0 bottom-[-30%] w-full">
          <Image
            src="/assets/image/black-shadow.svg"
            alt="profile-shadow"
            layout="responsive"
            width={2000}
            height={1000}
          />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center tracking-wider">
        <div className="flex flex-row justify-between gap-10 items-start p-16 isolate absolute  bg-gradient-to-r from-transparent to-gray-300/25 backdrop-blur-md rounded-3xl">
          <div className="absolute w-[47px] h-[47px] left-[24px] top-[35px] flex-none order-1 flex-grow-0 z-1">
            <Image
              src="/assets/image/green-back.svg"
              alt="back"
              width="50"
              height="50"
              className="cursor-pointer"
              onClick={() => router.back()}
            />
          </div>

          {/* Column 1 */}
          <div className="flex flex-col justify-start items-start">
            {/* Player Details */}
            <div className="flex flex-row items-center">
              <div>
                <Image
                  src={playerImage}
                  alt="player"
                  width="315"
                  height="315"
                />
              </div>
              <div className="flex flex-col justify-start items-center gap-3">
                <Image src={clubLogo} alt="club" width="150" height="150" />
                <Image src={flagImage} alt="flag" width="62" height="41" />
                <h1 className="font-bayon text-8xl">#{jerseyNumber}</h1>
              </div>
            </div>
            {/* Player Info */}
            <div className="flex flex-col">
              <h1 className="font-bayon text-7xl mt-5">{playerName}</h1>
              <div className="flex flex-row gap-2 mb-3 items-center">
                <button className="bg-custom-pink h-10 font-bayon text-xl text-white px-2 py-1 justify-center items-center rounded-sm">
                  {clubName}
                </button>
                <h1 className="bg-custom-green h-10 font-bayon text-xl text-black px-2 py-1 justify-center items-center rounded-sm">
                  {position}
                </h1>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-bayon text-white text-lg">weekly salary:</p>
                <p className="font-bayon text-custom-green text-lg">
                  £ {salary}
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2">
                  <p className="font-bayon text-white text-lg">
                    Date of Birth:
                  </p>
                  <p className="font-bayon text-custom-green text-lg">
                    {dateOfBirth} ({age})
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="font-bayon text-white text-lg">height:</p>
                  <p className="font-bayon text-custom-green text-lg">
                    {height} cm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            {/* Player Stats */}
            <div className="flex flex-row gap-10 ">
              {/* Column 1: Appearances */}
              <div className="flex flex-col gap-5 justify-center items-center">
                <h3 className="font-bayon text-white text-2xl">Appearances</h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  {appearances}
                </h3>
              </div>

              {/* Column 2: Goals */}
              <div className="flex flex-col gap-5 justify-center items-center">
                <h3 className="font-bayon text-white text-2xl whitespace-nowrap">
                  Goals / Clean Sheets
                </h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  {goals}
                </h3>
              </div>

              {/* Column 3: Minutes Played */}
              <div className="flex flex-col gap-5 justify-center items-center">
                <h3 className="font-bayon text-white text-2xl">
                  Minutes Played
                </h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  {Minutes}
                </h3>
              </div>
            </div>

            {/* Seasons */}
            <div className="flex flex-col gap-2">
              {seasons.map((season, index) => (
                <div key={index} className="flex flex-row gap-10 items-center">
                  <p className="text-2xl font-bayon text-custom-green">
                    {season.year}
                  </p>
                  <div className="flex flex-row items-center gap-5">
                    <Image
                      src={season.clubLogo}
                      alt="club"
                      width="40"
                      height="40"
                    />
                    <p className="text-2xl font-bayon text-white">
                      {season.clubName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Awards */}
            <div className="flex flex-col gap-3">
              {awards.map((award, index) => (
                <div key={index} className="flex flex-row items-center gap-5">
                  <Image
                    src="/assets/image/prize.svg"
                    alt="award"
                    width="40"
                    height="40"
                  />
                  <p className="text-2xl font-bayon text-white">
                    {award.title} ({award.total})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
