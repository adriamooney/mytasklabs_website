import Image from "next/image";

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
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={160}
          height={160}
          className="h-40 w-40 rounded-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-neutral-850">{name}</h3>
      <p className="mt-1 text-sm text-stone-500">{role}</p>
    </>
  );

  return (
    <article className="flex flex-col items-center text-center">
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
      <div className="mt-3 space-y-2 text-sm text-stone-600 leading-relaxed">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </article>
  );
}

