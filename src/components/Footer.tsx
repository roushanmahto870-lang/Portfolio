import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 mt-20">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-secondary">
                    &copy; {new Date().getFullYear()} Seth Lukin. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm font-medium">
                    <Link href="#" className="hover:text-secondary transition-colors">
                        Twitter
                    </Link>
                    <Link href="#" className="hover:text-secondary transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="#" className="hover:text-secondary transition-colors">
                        Instagram
                    </Link>
                </div>
            </div>
        </footer>
    );
}
