import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex justify-center relative w-full h-auto">

        <div className="relative w-full h-[50vh]">
          <Image
            src="/assets/image/header-profile.svg"
            alt="profile-header"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="absolute left-0 right-0 bottom-[-40%] w-full">
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

        <div className="flex flex-row justify-center items-start p-10 gap-10 isolate absolute min-w-[1050px] min-h-[685px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent to-gray-300/25 backdrop-blur-md rounded-3xl">
          {/* col 1 */}
          <div className="flex flex-col">
            {/* first line */}
            <div className="flex flex-row">
                <Image
                  src="https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png"
                  alt="player"
                  width="350"
                  height="350"
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <Image
                    src="https://capology-e6a3.kxcdn.com/static/images/logos/uk/manchester-city.svg"
                    alt="club"
                    width="100"
                    height="100"
                  />
                  <Image
                    src="https://resources.premierleague.com/premierleague/flags/NO.png"
                    alt="flag"
                    width="62"
                    height="41"
                  />
                  <h1 className="font-bayon text-8xl">
                    #9
                  </h1>
                </div>
            </div>
          {/* second line */}
            <div className="flex flex-col">
              <h1 className="font-bayon text-7xl mt-5">
                Erling Haaland
              </h1>
              <div className="flex flex-row gap-2 mb-3">
                <button className="bg-custom-pink font-bayon text-xl text-white px-2 py-1 justify-center items-center rounded-sm">
                  Manchester City 
                </button>
                <button className="bg-custom-green font-bayon text-xl text-black px-2 py-1 justify-center items-center rounded-sm">
                  forward
                </button>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-bayon text-white text-lg">
                  weekly salary: 
                </p>
                <p className="font-bayon text-custom-green text-lg">
                  £ 375,000
                </p>
                
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2">
                  <p className="font-bayon text-white text-lg">
                    Date of Birth: 
                  </p>
                  <p className="font-bayon text-custom-green text-lg">
                    21/07/2000 (24)
                  </p>  
                </div>
                <div className="flex flex-row gap-2">
                  <p className="font-bayon text-white text-lg">
                    height: 
                  </p>
                  <p className="font-bayon text-custom-green text-lg">
                    194 cm
                  </p>  
                </div>
              </div>
            </div>
          </div>
          {/* col 2 */}
          <div className="flex flex-col gap-5">
            {/* first line */}
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-10">
                <h3 className="font-bayon text-white text-2xl">
                  Appearances
                </h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  71
                </h3>
              </div>
              <div className="flex flex-col gap-10">
                <h3 className="font-bayon text-white text-2xl">
                  Goals
                </h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  73
                </h3>
              </div>
              <div className="flex flex-col gap-10">
                <h3 className="font-bayon text-white text-2xl">
                  Wins
                </h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  52
                </h3>
              </div>
              <div className="flex flex-col gap-10">
                <h3 className="font-bayon text-white text-2xl">
                  Losses
                </h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  7
                </h3>
              </div>
            </div>
            {/* second row */}
            <div className="flex flex-row gap-10 items-center">
              <p className="text-2xl font-bayon text-custom-green">
              2022 - 2023
              </p>
              <div className="flex flex-row items-center gap-5">
                <Image
                      src="https://capology-e6a3.kxcdn.com/static/images/logos/uk/manchester-city.svg"
                      alt="club"
                      width="40"
                      height="40"
                  />
                <p className="text-2xl font-bayon text-white">
                  Manchester City 
                </p>
              </div>
            </div>
            {/* third row */}
            <div className="flex flex-row items-center gap-5">
              <Image
                        src="/assets/image/prize.svg"
                        alt="club"
                        width="40"
                        height="40"
                    />
              <p className="text-2xl font-bayon text-white">
                  Golden Boot (2)
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
