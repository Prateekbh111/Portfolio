import Link from "next/link";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-black">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl md:text-4xl font-semibold text-black dark:text-white">
              Take a look at my <br />
              <span className="text-4xl md:text-8xl font-bold mt-1 leading-none">
                Curriculum Vitae
              </span>
            </h1>
          </>
        }
      >
        <Link
          href={
            "https://drive.google.com/file/d/1YVW_X3__PBqaPetD6YjW8qj4Gn24SBF0/view?usp=drive_link"
          }
          target="_blank"
        >
          <Image
            src="/Prateek_CV.jpg"
            alt=""
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
          />
        </Link>
      </ContainerScroll>
    </div>
  );
}
