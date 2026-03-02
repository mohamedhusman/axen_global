import { useRef, useState } from "react";
import gsap from "gsap";

export default function TeamCard({
  member,
  index,
}: {
  member: any;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(cardRef.current, {
      duration: 0.4,
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      duration: 0.7,
      rotateX: 0,
      rotateY: 0,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      ref={cardRef}
      className="relative group perspective-1000 h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

      <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-300 group-hover:bg-slate-800/80 group-hover:border-blue-500/50 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-6 rounded-full p-1 bg-gradient-to-br from-blue-400 to-indigo-600 transition-transform duration-500 group-hover:scale-105">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800 border-2 border-slate-900">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://ui-avatars.com/api/?name=" +
                  encodeURIComponent(member.name) +
                  "&background=0D8ABC&color=fff";
              }}
            />
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
        <p className="text-sm text-blue-300 font-medium leading-relaxed">
          {member.role}
        </p>

        {/* Decorative element */}
        <div className="w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-6 opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />
      </div>
    </div>
  );
}
