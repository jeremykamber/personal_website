import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export interface EchoLogoProps {
  size?: number; // 1 = default, can be 0.75, 1.5, 2, etc.
}

export default function EchoLogo({ size = 1 }: EchoLogoProps) {
  // Base sizes (in rem)
  const baseTextSize = 2.25; // was 2xl (1.5rem), now a bit bigger
  const baseDotSize = 0.75; // was h-2 w-2 (0.5rem), now a bit bigger
  const baseMarginLeft = 0.4; // base ml in rem

  const textSize = baseTextSize * size;
  const dotSize = baseDotSize * size;
  const marginLeft = baseMarginLeft * size;

  return (
    <div className="flex items-center">
      <span
        className={`${playfair.className} font-semibold tracking-tight text-[#1E3A5F]`}
        style={{ fontSize: `${textSize}rem` }}
      >
        echo
      </span>
      <span
        className="mt-0.5 rounded-full bg-[#4E95F6]"
        style={{
          height: `${dotSize}rem`,
          width: `${dotSize}rem`,
          marginLeft: `${marginLeft}rem`,
        }}
      ></span>
    </div>
  );
}
