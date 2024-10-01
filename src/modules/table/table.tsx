import Image from "next/image";

export default function Table() {
    return (
        <div className="grid gap-[32px] mt-[57px]">
            <div className="flex justify-center gap-[8px] w-[176px] h-[36px] bg-custom-pink">
                <Image
                    src="/assets/image/ConfigureButton.svg"
                    alt="button"
                    width={18}
                    height={18}
                />
                <button className="font-bebas tracking-wider">CONFIGURE COLUMNS</button>
            </div>
            <div className="grid grid-cols-[184px_1fr] h-fit">
                <div className="flex flex-col pt-[82px]">
                    <PlayerHeader />
                    <PlayerCard name="ERLING HAALAND" />
                </div>
                <div className="flex flex-col overflow-auto">
                    <DetailsHeader />
                    <DetailsCard />
                </div>
            </div>
        </div>
    );
}

export function HeaderCard({ title }: {
    title: string;
}) {
    return (
        <div className="flex justify-between">
            <div className="font-bayon text-custom-green text-xl">
                {title}
            </div>
            <div className="pr-[16px] pt-[6px]">
                <Image
                    src="/assets/image/Filter.svg"
                    alt="button"
                    width={12}
                    height={10}
                />
            </div>
        </div>
    );
}

export function PlayerHeader() {
    return (
        <HeaderCard title="PLAYER" />
    );
}

export function PlayerCard({ name }: {
    name: string;
}) {
    return (
        <div className="font-bayon text-xl">
            {name}
        </div>
    );
}

export function DetailsHeader() {
    return (
        <div className="flex">
            <div className="pr-[20px]">
                <div className="font-bayon text-[32px] text-custom-green flex justify-center pb-[36px]">
                    PERSONAL DETAILS
                </div>
                <div className="grid grid-cols-[168px_214px_156px]">
                    <HeaderCard title="NATIONALITY" />
                    <HeaderCard title="DATE OF BIRTH" />
                    <HeaderCard title="HEIGHT (CM)" />
                </div>
            </div>

            <div className="pr-[20px]">
                <div className="font-bayon text-[32px] text-custom-green flex justify-center pb-[36px]">
                    PLAYER DETAILS
                </div>
                <div className="grid grid-cols-[225px_163px_104px_156px_325px_336px]">
                    <HeaderCard title="CLUB" />
                    <HeaderCard title="POSITION" />
                    <HeaderCard title="NUMBER" />
                    <HeaderCard title="SALARY" />
                    <HeaderCard title="CLUB HISTORY" />
                    <HeaderCard title="AWARDS" />
                </div>
            </div>

            <div className="pr-[20px]">
                <div className="font-bayon text-[32px] text-custom-green flex justify-center pb-[36px]">
                    STATS
                </div>
                <div className="grid grid-cols-[159px_87px_76px_98px]">
                    <HeaderCard title="APPEARANCE" />
                    <HeaderCard title="GOALS" />
                    <HeaderCard title="WINS" />
                    <HeaderCard title="LOSES" />
                </div>
            </div>
        </div>
    );
}

export function DetailsCard() {
    return (
        <div className="font-bayon">
            detail card
        </div>
    );
}