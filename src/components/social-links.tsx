import Link from "next/link";

const socialLinks = [
  { href: "https://instagram.com", label: "instagram" },
  { href: "https://facebook.com", label: "facebook" },
  { href: "https://linkedin.com", label: "linkedin" },
];

export function SocialLinks() {
  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-4 z-50">
      {socialLinks.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light text-white/80 hover:text-white transition-colors tracking-wide"
        >
          {social.label}
        </Link>
      ))}
    </div>
  );
}
