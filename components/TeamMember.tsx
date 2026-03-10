import Image from "next/image";
import { Card } from "./Card";

type TeamMemberProps = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
  profileUrl?: string;
};

export function TeamMember({
  name,
  role,
  imageSrc,
  imageAlt,
  paragraphs,
  profileUrl,
}: TeamMemberProps) {
  const content = (
    <>
      <div className="flex-shrink-0">
        <div className="relative h-24 w-24 rounded-md bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[2px]">
          <div className="h-full w-full rounded-md bg-slate-950 overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-base font-semibold tracking-tight text-slate-50">
        {name}
      </h3>
      <p className="mt-1 text-xs text-slate-400">{role}</p>
    </>
  );

  return (
    <Card variant="dark" className="items-center text-center py-6">
      {profileUrl ? (
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          {content}
        </a>
      ) : (
        content
      )}
      <div className="mt-3 space-y-2 text-xs text-slate-400 leading-relaxed">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </Card>
  );
}

